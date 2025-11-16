const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
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

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${transporter ? 'Production' : 'Development'}`);
});
