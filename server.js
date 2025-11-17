const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// In-memory storage for OTPs (in production, use Redis or database)
const otpStorage = new Map();
const OTP_EXPIRY = 5 * 60 * 1000; // 5 minutes

// Email transporter configuration
let transporter;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    console.log('Email transporter configured for production');
} else {
    console.log('Running in development mode - OTPs will be logged to console');
}

// Generate random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP endpoint
app.post('/api/send-otp', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Valid email is required' });
        }

        const otp = generateOTP();
        const expiryTime = Date.now() + OTP_EXPIRY;

        // Store OTP with expiry time
        otpStorage.set(email, { otp, expiryTime });

        // Clean up expired OTPs
        setTimeout(() => {
            otpStorage.delete(email);
        }, OTP_EXPIRY);

        // Send email in production, log in development
        if (transporter) {
            try {
                await transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: 'USC Campus Explorer - Your Login OTP',
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #990000;">USC Campus Explorer</h2>
                            <p>Your login OTP is:</p>
                            <h1 style="color: #990000; font-size: 36px; letter-spacing: 5px;">${otp}</h1>
                            <p>This OTP will expire in 5 minutes.</p>
                            <p style="color: #666; font-size: 12px;">If you didn't request this OTP, please ignore this email.</p>
                        </div>
                    `
                });
                console.log(`OTP sent to ${email}: ${otp}`);
                res.json({ success: true, message: 'OTP sent to your email' });
            } catch (error) {
                console.error('Email send error:', error);
                res.status(500).json({ error: 'Failed to send email. Please try again.' });
            }
        } else {
            // Development mode - log OTP to console
            console.log('\n=================================');
            console.log(`OTP for ${email}: ${otp}`);
            console.log(`Expires in 5 minutes`);
            console.log('=================================\n');
            res.json({
                success: true,
                message: 'OTP logged to console (development mode)',
                dev_otp: otp // Only for development
            });
        }
    } catch (error) {
        console.error('Send OTP error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Verify OTP endpoint
app.post('/api/verify-otp', (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ error: 'Email and OTP are required' });
        }

        const storedData = otpStorage.get(email);

        if (!storedData) {
            return res.status(400).json({ error: 'OTP not found or expired' });
        }

        if (Date.now() > storedData.expiryTime) {
            otpStorage.delete(email);
            return res.status(400).json({ error: 'OTP has expired' });
        }

        if (storedData.otp !== otp) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        // OTP verified successfully
        otpStorage.delete(email);

        // Generate a simple session token (in production, use JWT)
        const sessionToken = Buffer.from(`${email}:${Date.now()}`).toString('base64');

        res.json({
            success: true,
            message: 'Login successful',
            sessionToken,
            email
        });
    } catch (error) {
        console.error('Verify OTP error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get Google Maps API key
app.get('/api/maps-config', (req, res) => {
    res.json({
        apiKey: process.env.GOOGLE_MAPS_API_KEY || ''
    });
});

// Get campus locations
app.get('/api/campus-locations', (req, res) => {
    try {
        const locationsFilePath = path.join(__dirname, 'data', 'campusLocations.json');
        const locationsData = fs.readFileSync(locationsFilePath, 'utf8');
        const campusLocations = JSON.parse(locationsData);

        res.json({ locations: campusLocations });
    } catch (error) {
        console.error('Error reading campus locations:', error);
        res.status(500).json({ error: 'Failed to load campus locations' });
    }
});

// Get private events (only for authenticated users)
app.get('/api/private-events', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // In production, validate the token properly
    try {
        // Read private events from JSON file
        const eventsFilePath = path.join(__dirname, 'data', 'privateEvents.json');
        const eventsData = fs.readFileSync(eventsFilePath, 'utf8');
        const privateEvents = JSON.parse(eventsData);

        res.json({ events: privateEvents });
    } catch (error) {
        console.error('Error reading private events:', error);
        res.status(500).json({ error: 'Failed to load events' });
    }
});

// ==================== LIBRARY HOURS SCRAPER & SCHEDULER ====================

const LIBRARY_HOURS_FILE = path.join(__dirname, 'data', 'libraryHours.json');
const LIBRARY_HOURS_URL = 'https://libraries.usc.edu/hours';

// List of USC libraries to track
const USC_LIBRARIES = [
    'Doheny Memorial Library (DML)',
    'Leavey Library (LVL)',
    'Accounting Library',
    'Architecture and Fine Arts Library',
    'Cinematic Arts Library',
    'East Asian Library',
    'Gaughan & Tiberti Library',
    'Gerontology Library Services',
    'Hoose Library of Philosophy',
    'Law Library',
    'LIPA Library',
    'Music Library',
    'Science & Engineering Library',
    'Special Collections, Doheny Memorial Library',
    'Wilson Dental Library'
];

// Get today's day name in PST
function getTodayInPST() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const pstDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    return days[pstDate.getDay()];
}

// Check if library hours data is from today
function isDataFromToday(libraryHoursData) {
    if (!libraryHoursData || !libraryHoursData.lastUpdated) {
        return false;
    }

    const lastUpdated = new Date(libraryHoursData.lastUpdated);
    const lastUpdatedPST = new Date(lastUpdated.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const nowPST = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));

    return lastUpdatedPST.toDateString() === nowPST.toDateString();
}

// Scrape library hours from USC Libraries website
async function scrapeLibraryHours() {
    try {
        console.log('[Library Hours] Fetching from', LIBRARY_HOURS_URL);

        const response = await axios.get(LIBRARY_HOURS_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);
        const libraryHoursData = {
            lastUpdated: new Date().toISOString(),
            libraries: {}
        };

        const today = getTodayInPST();

        // Parse the hours table
        $('.hours-table tbody tr, .library-hours-table tbody tr, .view-content tbody tr').each((i, row) => {
            const $row = $(row);
            const libraryName = $row.find('td:first-child, th:first-child').text().trim();

            // Check if this is one of our tracked libraries
            if (!libraryName || !USC_LIBRARIES.some(lib => libraryName.includes(lib.split('(')[0].trim()))) {
                return; // Skip this row
            }

            // Try to find the full library name from our list
            const fullLibraryName = USC_LIBRARIES.find(lib =>
                libraryName.includes(lib.split('(')[0].trim()) || lib.includes(libraryName)
            ) || libraryName;

            // Get today's hours (usually in a specific column)
            let todayHours = 'Hours not available';

            // Try different selectors for hours
            const hoursCells = $row.find('td').slice(1);
            if (hoursCells.length > 0) {
                // Assuming the hours are in the second column or find by day
                todayHours = hoursCells.first().text().trim() || 'Check website';
            }

            libraryHoursData.libraries[fullLibraryName] = {
                libraryName: fullLibraryName,
                url: LIBRARY_HOURS_URL,
                today: today,
                todayHours: todayHours,
                weeklyHours: {}, // Would need more complex parsing for full week
                lastUpdated: new Date().toISOString()
            };
        });

        // If no data was scraped, try alternative parsing
        if (Object.keys(libraryHoursData.libraries).length === 0) {
            console.log('[Library Hours] Primary scraping failed, trying alternative method...');

            // Try finding library hours in a different structure
            $('.library-item, .hours-item').each((i, item) => {
                const $item = $(item);
                const libraryName = $item.find('.library-name, h3, h4').text().trim();
                const hours = $item.find('.hours, .today-hours, .current-hours').text().trim();

                if (libraryName && USC_LIBRARIES.some(lib => libraryName.includes(lib.split('(')[0].trim()))) {
                    const fullLibraryName = USC_LIBRARIES.find(lib =>
                        libraryName.includes(lib.split('(')[0].trim())
                    ) || libraryName;

                    libraryHoursData.libraries[fullLibraryName] = {
                        libraryName: fullLibraryName,
                        url: LIBRARY_HOURS_URL,
                        today: today,
                        todayHours: hours || 'Check website',
                        weeklyHours: {},
                        lastUpdated: new Date().toISOString()
                    };
                }
            });
        }

        // If still no data, use fallback with placeholder data
        if (Object.keys(libraryHoursData.libraries).length === 0) {
            console.log('[Library Hours] Web scraping failed, using placeholder data');
            USC_LIBRARIES.forEach(libraryName => {
                libraryHoursData.libraries[libraryName] = {
                    libraryName: libraryName,
                    url: LIBRARY_HOURS_URL,
                    today: today,
                    todayHours: 'Visit libraries.usc.edu/hours for current hours',
                    weeklyHours: {},
                    lastUpdated: new Date().toISOString()
                };
            });
        }

        return libraryHoursData;
    } catch (error) {
        console.error('[Library Hours] Scraping error:', error.message);

        // Return placeholder data on error
        const today = getTodayInPST();
        const libraryHoursData = {
            lastUpdated: new Date().toISOString(),
            libraries: {}
        };

        USC_LIBRARIES.forEach(libraryName => {
            libraryHoursData.libraries[libraryName] = {
                libraryName: libraryName,
                url: LIBRARY_HOURS_URL,
                today: today,
                todayHours: 'Unable to fetch hours - visit libraries.usc.edu/hours',
                weeklyHours: {},
                lastUpdated: new Date().toISOString()
            };
        });

        return libraryHoursData;
    }
}

// Update library hours data
async function updateLibraryHours() {
    try {
        console.log('[Library Hours] Starting update at', new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }), 'PST');

        const libraryHoursData = await scrapeLibraryHours();

        // Save to file
        fs.writeFileSync(LIBRARY_HOURS_FILE, JSON.stringify(libraryHoursData, null, 2));

        console.log('[Library Hours] Successfully updated', Object.keys(libraryHoursData.libraries).length, 'libraries');
        console.log('[Library Hours] Data saved to', LIBRARY_HOURS_FILE);

        return libraryHoursData;
    } catch (error) {
        console.error('[Library Hours] Update error:', error);
        throw error;
    }
}

// Get library hours (from cache or scrape if needed)
async function getLibraryHours() {
    try {
        // Check if file exists and is from today
        if (fs.existsSync(LIBRARY_HOURS_FILE)) {
            const fileData = fs.readFileSync(LIBRARY_HOURS_FILE, 'utf8');
            const libraryHoursData = JSON.parse(fileData);

            if (isDataFromToday(libraryHoursData)) {
                console.log('[Library Hours] Using cached data from today');
                return libraryHoursData;
            } else {
                console.log('[Library Hours] Cached data is outdated, fetching new data...');
            }
        } else {
            console.log('[Library Hours] No cached data found, fetching new data...');
        }

        // Fetch new data
        return await updateLibraryHours();
    } catch (error) {
        console.error('[Library Hours] Error getting library hours:', error);

        // Return empty structure if everything fails
        return {
            lastUpdated: new Date().toISOString(),
            libraries: {},
            error: 'Failed to load library hours'
        };
    }
}

// API endpoint to get library hours
app.get('/api/library-hours', async (req, res) => {
    try {
        const libraryHoursData = await getLibraryHours();
        res.json(libraryHoursData);
    } catch (error) {
        console.error('[Library Hours] API error:', error);
        res.status(500).json({ error: 'Failed to load library hours' });
    }
});

// API endpoint to manually refresh library hours
app.post('/api/library-hours/refresh', async (req, res) => {
    try {
        console.log('[Library Hours] Manual refresh requested');
        const libraryHoursData = await updateLibraryHours();
        res.json({ success: true, data: libraryHoursData });
    } catch (error) {
        console.error('[Library Hours] Manual refresh error:', error);
        res.status(500).json({ error: 'Failed to refresh library hours' });
    }
});

// Schedule daily update at midnight PST (cron format: minute hour day month weekday)
// Cron runs in server's timezone, so we need to calculate PST midnight
// PST is UTC-8, PDT is UTC-7
// For simplicity, scheduling at 8:00 AM UTC (midnight PST in standard time)
cron.schedule('0 8 * * *', async () => {
    console.log('[Library Hours] Running scheduled update at midnight PST');
    try {
        await updateLibraryHours();
    } catch (error) {
        console.error('[Library Hours] Scheduled update failed:', error);
    }
}, {
    timezone: 'America/Los_Angeles'
});

// Initialize library hours on server start
(async () => {
    try {
        console.log('[Library Hours] Initializing...');
        await getLibraryHours();
        console.log('[Library Hours] Initialization complete');
    } catch (error) {
        console.error('[Library Hours] Initialization failed:', error);
    }
})();

// ==================== END LIBRARY HOURS SYSTEM ====================

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${transporter ? 'Production' : 'Development'}`);
    console.log(`Library hours scheduler: Active (updates daily at midnight PST)`);
});
