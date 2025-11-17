// USC University Park Campus Explorer
// Main Application JavaScript

// USC Campus Center Coordinates
const USC_CENTER = { lat: 34.0224, lng: -118.2851 };

// UPC (University Park Campus) Boundary Coordinates
const UPC_BOUNDARY = [
  { lat: 34.02538795792243, lng: -118.28889915978908 },
  { lat: 34.025380733213545, lng: -118.28862160193921 },
  { lat: 34.025387124302156, lng: -118.28851769173147 },
  { lat: 34.02537639144105, lng: -118.28839171490074 },
  { lat: 34.02538121949211, lng: -118.2883006067872 },
  { lat: 34.0253808721503, lng: -118.28824847769738 },
  { lat: 34.02537906597296, lng: -118.28819249927999 },
  { lat: 34.025303692770706, lng: -118.28788136938213 },
  { lat: 34.02517274469791, lng: -118.28755951064825 },
  { lat: 34.02488861794596, lng: -118.28695066189765 },
  { lat: 34.02433592269312, lng: -118.2857544220686 },
  { lat: 34.02325052878057, lng: -118.28333243811132 },
  { lat: 34.02306512618106, lng: -118.28292199202907 },
  { lat: 34.02223170077203, lng: -118.28105778866076 },
  { lat: 34.02204762919941, lng: -118.2806553211026 },
  { lat: 34.02189512376674, lng: -118.28031038483233 },
  { lat: 34.021873779839105, lng: -118.28028463143484 },
  { lat: 34.02185021282619, lng: -118.28026424245537 },
  { lat: 34.0217915140197, lng: -118.28026181170345 },
  { lat: 34.02173858571128, lng: -118.28029181891681 },
  { lat: 34.021632728995435, lng: -118.28035987997056 },
  { lat: 34.02120759814971, lng: -118.28060597264768 },
  { lat: 34.020046092839095, lng: -118.2813663789034 },
  { lat: 34.0198738263621, lng: -118.28149165613019 },
  { lat: 34.01978435829165, lng: -118.28155161253457 },
  { lat: 34.01969489012671, lng: -118.28160620452091 },
  { lat: 34.01939259514921, lng: -118.28179909148068 },
  { lat: 34.01897808194063, lng: -118.28206416599454 },
  { lat: 34.01857478674797, lng: -118.28232877632976 },
  { lat: 34.01847960741354, lng: -118.28238726931812 },
  { lat: 34.01846265575445, lng: -118.2824130601883 },
  { lat: 34.018390958535946, lng: -118.28306009232999 },
  { lat: 34.01839332065457, lng: -118.28393095937372 },
  { lat: 34.018406798624284, lng: -118.28519879335167 },
  { lat: 34.01841152286057, lng: -118.28623510646821 },
  { lat: 34.01840763231298, lng: -118.28727776443958 },
  { lat: 34.01841211920752, lng: -118.2895512314197 },
  { lat: 34.01841549451688, lng: -118.290057122659 },
  { lat: 34.01841112928606, lng: -118.29064109279972 },
  { lat: 34.01841573784392, lng: -118.29070396296703 },
  { lat: 34.0184271781285, lng: -118.29079751679348 },
  { lat: 34.01843227333952, lng: -118.29129039627406 },
  { lat: 34.01844070330411, lng: -118.29133266464015 },
  { lat: 34.01845691435891, lng: -118.29135615754313 },
  { lat: 34.01849155962711, lng: -118.2913944261698 },
  { lat: 34.01854621338143, lng: -118.2914031904973 },
  { lat: 34.018987143826934, lng: -118.29138460362702 },
  { lat: 34.01951551915572, lng: -118.29138766302168 },
  { lat: 34.02053224389611, lng: -118.29140182843804 },
  { lat: 34.02125404062084, lng: -118.29139797276258 },
  { lat: 34.02194177267038, lng: -118.29141708350181 },
  { lat: 34.02207277753008, lng: -118.29140451064706 },
  { lat: 34.02215431885141, lng: -118.2914019960761 },
  { lat: 34.022231948238684, lng: -118.29140187034756 },
  { lat: 34.02225455660753, lng: -118.29140174461901 },
  { lat: 34.02227976571149, lng: -118.29139679929614 },
  { lat: 34.02232351469473, lng: -118.29139227306842 },
  { lat: 34.02426214635806, lng: -118.29138539990782 },
  { lat: 34.024709596763316, lng: -118.29138196332752 },
  { lat: 34.02515704480944, lng: -118.29139462000131 },
  { lat: 34.02522887524942, lng: -118.291393781811 },
  { lat: 34.02530480426541, lng: -118.2913967154771 },
  { lat: 34.02535405736033, lng: -118.29139428472519 },
  { lat: 34.025357947589484, lng: -118.2913869086504 },
  { lat: 34.025367395288036, lng: -118.29135807490348 },
  { lat: 34.025363643996144, lng: -118.29112354925275 },
  { lat: 34.02537323063079, lng: -118.29096412545442 },
  { lat: 34.02537670404889, lng: -118.29031117519736 }
];

// USC Village Boundary Coordinates
const USC_VILLAGE_BOUNDARY = [
  { lat: 34.02724485474212, lng: -118.28544700098037 },
  { lat: 34.02728542336175, lng: -118.285306532979 },
  { lat: 34.02728375615857, lng: -118.2847422759533 },
  { lat: 34.02727153000101, lng: -118.28415020370483 },
  { lat: 34.02656942754135, lng: -118.28414215707778 },
  { lat: 34.02566058237583, lng: -118.28413142824172 },
  { lat: 34.025367634774895, lng: -118.28410521304608 },
  { lat: 34.025068017176125, lng: -118.28404949355125 },
  { lat: 34.02472887072996, lng: -118.28399706315994 },
  { lat: 34.02449420449318, lng: -118.28395804381371 },
  { lat: 34.02437687113148, lng: -118.28394792187214 },
  { lat: 34.02425953760752, lng: -118.2839592576027 },
  { lat: 34.02414586843059, lng: -118.28399955864252 },
  { lat: 34.024027753055776, lng: -118.28406668177249 },
  { lat: 34.02398714814404, lng: -118.28413119059802 },
  { lat: 34.02396877345992, lng: -118.28419838163258 },
  { lat: 34.023981521114536, lng: -118.28427093708517 },
  { lat: 34.02405474193844, lng: -118.28440290856364 },
  { lat: 34.02425453581962, lng: -118.28487069940567 },
  { lat: 34.02453074522291, lng: -118.28547234606742 },
  { lat: 34.02476693967362, lng: -118.28597475099565 },
  { lat: 34.0249364435213, lng: -118.28634706878663 },
  { lat: 34.025108170024936, lng: -118.2867193865776 },
  { lat: 34.025145127301506, lng: -118.28680093932152 },
  { lat: 34.025182084562, lng: -118.28686103439331 },
  { lat: 34.02523682573776, lng: -118.28684066319467 },
  { lat: 34.02527822893857, lng: -118.28681492757796 },
  { lat: 34.02547367742948, lng: -118.28667545270919 },
  { lat: 34.025660233550276, lng: -118.28652524900436 },
  { lat: 34.02579801460156, lng: -118.28638376247882 },
  { lat: 34.02596024812731, lng: -118.28625032258033 },
  { lat: 34.0261046975971, lng: -118.28613029372691 },
  { lat: 34.02619579565208, lng: -118.28601562929153 },
  { lat: 34.026525818266286, lng: -118.28579702925681 },
  { lat: 34.02670690189788, lng: -118.28570717525481 },
  { lat: 34.02695642796976, lng: -118.2856233562231 },
  { lat: 34.02714815685833, lng: -118.28556367707252 }
];

// Global variables
let map;
let streetView;
let markers = [];
let infoWindow;
let currentView = 'map';
let upcPolygon;
let uscVillagePolygon;

// Category visibility state
let activeCategoryFilters = {
    'library': true,
    'museum': true,
    'department': true,
    'eateries': true,
    'landmark': true,
    'housing': true,
    'recreation': true,
    'sports': true
};

// Authentication state
let isAuthenticated = false;
let userEmail = '';
let sessionToken = '';

// Campus Locations - loaded from API
let campusLocations = [];

// Library hours data
let libraryHoursData = null;

// Load campus locations from API
async function loadCampusLocations() {
    try {
        const response = await fetch('/api/campus-locations');
        const data = await response.json();

        if (response.ok) {
            campusLocations = data.locations;
            console.log('Campus locations loaded:', campusLocations.length);
        } else {
            console.error('Failed to load campus locations');
        }
    } catch (error) {
        console.error('Error loading campus locations:', error);
    }
}

// Load library hours from API
async function loadLibraryHours() {
    try {
        const response = await fetch('/api/library-hours');
        const data = await response.json();

        if (response.ok) {
            libraryHoursData = data;
            console.log('Library hours loaded:', Object.keys(data.libraries || {}).length, 'libraries');
        } else {
            console.error('Failed to load library hours');
        }
    } catch (error) {
        console.error('Error loading library hours:', error);
    }
}

// Initialize the application
async function initMap() {
    // Load campus locations and library hours
    await loadCampusLocations();
    await loadLibraryHours();

    // Create the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: USC_CENTER,
        zoom: 16,
        mapTypeId: 'roadmap',
        styles: [
            {
                featureType: 'poi.school',
                elementType: 'geometry.fill',
                stylers: [{ color: '#990000' }]
            }
        ],
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true
    });

    // Create info window
    infoWindow = new google.maps.InfoWindow();

    // Initialize Street View
    initStreetView();

    // Add markers for all campus locations
    addCampusMarkers();

    // Populate location list
    populateLocationList();

    // Set up event listeners
    setupEventListeners();

    // Load weather data
    loadWeather();

    // Draw UPC boundary polygon
    drawUPCBoundary();

    // Draw USC Village boundary polygon
    drawUSCVillageBoundary();

    // Setup legend toggle functionality
    setupLegendToggles();
}

// Draw the UPC (University Park Campus) boundary on the map
function drawUPCBoundary() {
    upcPolygon = new google.maps.Polygon({
        paths: UPC_BOUNDARY,
        strokeColor: '#990000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FFCC00',
        fillOpacity: 0.15,
        map: map,
        clickable: true
    });

    // Add click listener to show UPC info
    upcPolygon.addListener('click', (e) => {
        const infoContent = `
            <div style="padding: 10px; max-width: 300px;">
                <h3 style="color: #990000; margin-bottom: 10px;">🏫 University Park Campus (UPC)</h3>
                <p style="margin-bottom: 10px;">
                    USC's main campus in the heart of Los Angeles, home to world-class academic facilities,
                    student housing, recreation centers, and iconic landmarks.
                </p>
                <p><strong>Area:</strong> Approximately 226 acres</p>
                <p><strong>Established:</strong> 1880</p>
            </div>
        `;
        infoWindow.setContent(infoContent);
        infoWindow.setPosition(e.latLng || USC_CENTER);
        infoWindow.open(map);
    });
}

// Draw the USC Village boundary on the map
function drawUSCVillageBoundary() {
    uscVillagePolygon = new google.maps.Polygon({
        paths: USC_VILLAGE_BOUNDARY,
        strokeColor: '#0066CC',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#0099FF',
        fillOpacity: 0.2,
        map: map,
        clickable: true
    });

    // Add click listener to show USC Village info
    uscVillagePolygon.addListener('click', (e) => {
        const infoContent = `
            <div style="padding: 10px; max-width: 300px;">
                <h3 style="color: #0066CC; margin-bottom: 10px;">🏘️ USC Village</h3>
                <p style="margin-bottom: 10px;">
                    USC's premier residential and retail complex featuring student housing,
                    dining options, Target, Trader Joe's, and various shops.
                </p>
                <p><strong>Opened:</strong> 2017</p>
                <p><strong>Size:</strong> 1.25 million square feet</p>
            </div>
        `;
        infoWindow.setContent(infoContent);
        infoWindow.setPosition(e.latLng);
        infoWindow.open(map);
    });
}

// Initialize Street View
function initStreetView() {
    const streetViewDiv = document.getElementById('street-view');
    streetView = new google.maps.StreetViewPanorama(streetViewDiv, {
        position: USC_CENTER,
        pov: {
            heading: 34,
            pitch: 10
        },
        zoom: 1
    });
}

// Category color mapping
function getCategoryColor(category) {
    const colors = {
        'library': '#4285F4',      // Blue
        'museum': '#9C27B0',       // Purple
        'department': '#990000',   // USC Cardinal Red
        'eateries': '#FF9800',     // Orange
        'landmark': '#FFCC00',     // USC Gold
        'housing': '#00BCD4',      // Cyan
        'recreation': '#4CAF50',   // Green
        'sports': '#F44336'        // Bright Red
    };
    return colors[category] || '#990000'; // Default to USC Cardinal
}

// Add markers for campus locations
function addCampusMarkers() {
    campusLocations.forEach((location) => {
        const markerColor = getCategoryColor(location.category);

        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.name,
            animation: google.maps.Animation.DROP,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: markerColor,
                fillOpacity: 1,
                strokeColor: '#FFFFFF',
                strokeWeight: 2,
                scale: 10
            }
        });

        // Add click listener to marker
        marker.addListener('click', () => {
            showLocationInfo(location);
            map.panTo(location.position);

            // Bounce animation
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(() => marker.setAnimation(null), 2100);

            // Show info window
            const content = `
                <div style="padding: 10px; max-width: 250px;">
                    <h3 style="color: #990000; margin-bottom: 10px;">${location.icon} ${location.name}</h3>
                    <p style="margin-bottom: 10px;">${location.description}</p>
                    <button onclick="viewInStreetView(${location.position.lat}, ${location.position.lng})"
                            style="background: #990000; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                        View in Street View
                    </button>
                </div>
            `;
            infoWindow.setContent(content);
            infoWindow.open(map, marker);
        });

        markers.push({ marker, location });
    });
}

// Setup legend toggle functionality
function setupLegendToggles() {
    const legendItems = document.querySelectorAll('.legend-item');

    legendItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');

            // Toggle the category state
            activeCategoryFilters[category] = !activeCategoryFilters[category];

            // Update the legend item visual state
            if (activeCategoryFilters[category]) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }

            // Update marker visibility
            updateMarkerVisibility();
        });
    });
}

// Update marker visibility based on active category filters
function updateMarkerVisibility() {
    markers.forEach(({ marker, location }) => {
        const isVisible = activeCategoryFilters[location.category];
        marker.setVisible(isVisible);
    });
}

// Populate location list in sidebar
function populateLocationList() {
    const locationList = document.getElementById('locationList');

    // Group locations by category
    const categories = {
        'library': { title: '📚 Libraries', locations: [] },
        'museum': { title: '🏛️ Museums', locations: [] },
        'department': { title: '🎓 Departments', locations: [] },
        'eateries': { title: '🍽️ Eateries', locations: [] },
        'landmark': { title: '⭐ Landmarks', locations: [] },
        'housing': { title: '🏘️ Housing', locations: [] },
        'recreation': { title: '💪 Recreation', locations: [] },
        'sports': { title: '🏀 Sports', locations: [] }
    };

    // Group locations
    campusLocations.forEach(location => {
        if (categories[location.category]) {
            categories[location.category].locations.push(location);
        }
    });

    // Display locations grouped by category
    Object.keys(categories).forEach(categoryKey => {
        const category = categories[categoryKey];
        if (category.locations.length > 0) {
            // Create category header
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.innerHTML = `
                <h3>${category.title}</h3>
                <span class="category-toggle">▼</span>
            `;

            // Create container for category locations
            const categoryLocations = document.createElement('div');
            categoryLocations.className = 'category-locations collapsed'; // Start collapsed

            // Start header as collapsed
            categoryHeader.classList.add('collapsed');

            // Add toggle functionality
            categoryHeader.addEventListener('click', () => {
                categoryHeader.classList.toggle('collapsed');
                categoryLocations.classList.toggle('collapsed');
            });

            locationList.appendChild(categoryHeader);

            // Add locations in this category
            category.locations.forEach(location => {
                const item = document.createElement('div');
                item.className = 'location-item';
                item.innerHTML = `
                    <h4>${location.icon} ${location.name}</h4>
                    <p>${location.description.substring(0, 60)}...</p>
                `;

                item.addEventListener('click', () => {
                    map.panTo(location.position);
                    map.setZoom(18);
                    showLocationInfo(location);

                    // Find and click the corresponding marker
                    const markerObj = markers.find(m => m.location.name === location.name);
                    if (markerObj) {
                        google.maps.event.trigger(markerObj.marker, 'click');
                    }
                });

                categoryLocations.appendChild(item);
            });

            locationList.appendChild(categoryLocations);
        }
    });
}

// Get library hours HTML for display
function getLibraryHoursHTML(libraryName) {
    if (!libraryHoursData || !libraryHoursData.libraries || !libraryHoursData.libraries[libraryName]) {
        return '<p style="color: #666; font-style: italic; margin-top: 15px;">Hours information not available</p>';
    }

    const library = libraryHoursData.libraries[libraryName];
    const today = library.today || 'Today';
    const todayHours = library.todayHours || 'Check website';

    let hoursHTML = `
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #990000;">
            <h3 style="color: #990000; margin-bottom: 10px; font-size: 1.1em;">📅 Library Hours</h3>
            <div style="margin-bottom: 12px;">
                <strong style="color: #990000;">${today}:</strong>
                <span style="color: #333; font-size: 1.05em; margin-left: 8px;">${todayHours}</span>
            </div>
    `;

    // Add weekly hours if available
    if (library.weeklyHours && Object.keys(library.weeklyHours).length > 0) {
        hoursHTML += '<details style="margin-top: 10px;"><summary style="cursor: pointer; color: #990000; font-weight: 600;">View Full Week Schedule</summary><div style="margin-top: 10px; padding: 10px; background: white; border-radius: 5px;">';

        Object.entries(library.weeklyHours).forEach(([day, hours]) => {
            const isToday = day === today;
            hoursHTML += `
                <div style="padding: 5px 0; ${isToday ? 'font-weight: 600; color: #990000;' : ''}">
                    <strong>${day}:</strong> <span style="margin-left: 8px;">${hours}</span>
                </div>
            `;
        });

        hoursHTML += '</div></details>';
    }

    // Add link to library hours page
    if (library.url) {
        hoursHTML += `
            <div style="margin-top: 12px;">
                <a href="${library.url}" target="_blank" style="color: #990000; text-decoration: none; font-size: 0.9em;">
                    View on USC Libraries website →
                </a>
            </div>
        `;
    }

    // Add last updated info
    if (library.lastUpdated) {
        const lastUpdated = new Date(library.lastUpdated);
        const formattedDate = lastUpdated.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZone: 'America/Los_Angeles'
        });
        hoursHTML += `<div style="margin-top: 10px; font-size: 0.85em; color: #666;">Last updated: ${formattedDate} PST</div>`;
    }

    hoursHTML += '</div>';
    return hoursHTML;
}

// Show location information in info panel
function showLocationInfo(location) {
    const infoPanel = document.getElementById('infoPanel');

    let libraryHoursSection = '';
    // Only show library hours for library category
    if (location.category === 'library') {
        libraryHoursSection = getLibraryHoursHTML(location.name);
    }

    infoPanel.innerHTML = `
        <div class="info-content">
            <h2>${location.icon} ${location.name}</h2>
            <p><strong>Category:</strong> ${location.category}</p>
            <p>${location.description}</p>
            <p><strong>Coordinates:</strong> ${location.position.lat.toFixed(4)}, ${location.position.lng.toFixed(4)}</p>
            ${libraryHoursSection}
            <div style="margin-top: 20px;">
                <button class="info-link" onclick="viewInStreetView(${location.position.lat}, ${location.position.lng})">
                    View in Street View 👁️
                </button>
                <button class="info-link" onclick="getDirections(${location.position.lat}, ${location.position.lng})" style="background: #FFCC00; color: #990000; margin-left: 10px;">
                    Get Directions 🧭
                </button>
            </div>
        </div>
    `;
}

// View location in Street View
function viewInStreetView(lat, lng) {
    const position = { lat, lng };
    streetView.setPosition(position);

    // Switch to street view
    document.getElementById('street-view-btn').click();
}

// Get directions to location
function getDirections(lat, lng) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
}

// Setup event listeners
function setupEventListeners() {
    // Layer control buttons
    document.querySelectorAll('.layer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const layer = btn.dataset.layer;
            map.setMapTypeId(layer);

            // Update active state
            document.querySelectorAll('.layer-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // View control buttons
    document.getElementById('map-view-btn').addEventListener('click', () => {
        document.getElementById('map').classList.remove('hidden');
        document.getElementById('street-view').classList.remove('active');
        currentView = 'map';

        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('map-view-btn').classList.add('active');
    });

    document.getElementById('street-view-btn').addEventListener('click', () => {
        document.getElementById('map').classList.add('hidden');
        document.getElementById('street-view').classList.add('active');
        currentView = 'street';

        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('street-view-btn').classList.add('active');
    });
}

// Load weather data for USC campus
async function loadWeather() {
    const weatherWidget = document.getElementById('weatherWidget');

    try {
        // Using OpenWeatherMap API (free tier)
        const apiKey = ''; // We'll use a workaround without API key

        // For demo purposes, we'll use fetch with USC coordinates
        // In production, you'd use: `https://api.openweathermap.org/data/2.5/weather?lat=${USC_CENTER.lat}&lon=${USC_CENTER.lng}&appid=${apiKey}&units=imperial`

        // Using wttr.in as a free alternative that doesn't require API key
        const response = await fetch(`https://wttr.in/LosAngeles?format=j1`);
        const data = await response.json();

        const current = data.current_condition[0];
        const location = data.nearest_area[0];

        weatherWidget.innerHTML = `
            <div class="weather-content">
                <div class="weather-main">
                    <div class="weather-icon">${getWeatherEmoji(current.weatherCode)}</div>
                    <div>
                        <div class="weather-temp">${current.temp_F}°F</div>
                        <div class="weather-description">${current.weatherDesc[0].value}</div>
                    </div>
                </div>
                <div class="weather-details">
                    <div class="weather-detail">
                        <div class="weather-detail-label">Feels Like</div>
                        <div class="weather-detail-value">${current.FeelsLikeF}°F</div>
                    </div>
                    <div class="weather-detail">
                        <div class="weather-detail-label">Humidity</div>
                        <div class="weather-detail-value">${current.humidity}%</div>
                    </div>
                    <div class="weather-detail">
                        <div class="weather-detail-label">Wind Speed</div>
                        <div class="weather-detail-value">${current.windspeedMiles} mph</div>
                    </div>
                    <div class="weather-detail">
                        <div class="weather-detail-label">UV Index</div>
                        <div class="weather-detail-value">${current.uvIndex}</div>
                    </div>
                    <div class="weather-detail">
                        <div class="weather-detail-label">Visibility</div>
                        <div class="weather-detail-value">${current.visibility} mi</div>
                    </div>
                    <div class="weather-detail">
                        <div class="weather-detail-label">Pressure</div>
                        <div class="weather-detail-value">${current.pressure} mb</div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Weather load error:', error);
        weatherWidget.innerHTML = `
            <div class="weather-content">
                <div class="weather-main">
                    <div class="weather-icon">☀️</div>
                    <div>
                        <div class="weather-temp">72°F</div>
                        <div class="weather-description">Sunny - Typical USC Weather</div>
                    </div>
                </div>
                <div class="weather-details">
                    <div class="weather-detail">
                        <div class="weather-detail-label">Feels Like</div>
                        <div class="weather-detail-value">70°F</div>
                    </div>
                    <div class="weather-detail">
                        <div class="weather-detail-label">Humidity</div>
                        <div class="weather-detail-value">45%</div>
                    </div>
                    <div class="weather-detail">
                        <div class="weather-detail-label">Wind Speed</div>
                        <div class="weather-detail-value">5 mph</div>
                    </div>
                    <div class="weather-detail">
                        <div class="weather-detail-label">UV Index</div>
                        <div class="weather-detail-value">6</div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Get weather emoji based on weather code
function getWeatherEmoji(code) {
    const weatherEmojis = {
        '113': '☀️',  // Sunny
        '116': '⛅',  // Partly cloudy
        '119': '☁️',  // Cloudy
        '122': '☁️',  // Overcast
        '143': '🌫️',  // Mist
        '176': '🌦️',  // Patchy rain possible
        '179': '🌨️',  // Patchy snow possible
        '182': '🌧️',  // Patchy sleet possible
        '185': '🌧️',  // Patchy freezing drizzle possible
        '200': '⛈️',  // Thundery outbreaks possible
        '227': '🌨️',  // Blowing snow
        '230': '❄️',  // Blizzard
        '248': '🌫️',  // Fog
        '260': '🌫️',  // Freezing fog
        '263': '🌦️',  // Patchy light drizzle
        '266': '🌧️',  // Light drizzle
        '281': '🌧️',  // Freezing drizzle
        '284': '🌧️',  // Heavy freezing drizzle
        '293': '🌦️',  // Patchy light rain
        '296': '🌧️',  // Light rain
        '299': '🌧️',  // Moderate rain at times
        '302': '🌧️',  // Moderate rain
        '305': '🌧️',  // Heavy rain at times
        '308': '⛈️',  // Heavy rain
        '311': '🌧️',  // Light freezing rain
        '314': '🌧️',  // Moderate or heavy freezing rain
        '317': '🌨️',  // Light sleet
        '320': '🌨️',  // Moderate or heavy sleet
        '323': '🌨️',  // Patchy light snow
        '326': '❄️',  // Light snow
        '329': '❄️',  // Patchy moderate snow
        '332': '❄️',  // Moderate snow
        '335': '❄️',  // Patchy heavy snow
        '338': '❄️',  // Heavy snow
        '350': '🌧️',  // Ice pellets
        '353': '🌦️',  // Light rain shower
        '356': '🌧️',  // Moderate or heavy rain shower
        '359': '⛈️',  // Torrential rain shower
        '362': '🌨️',  // Light sleet showers
        '365': '🌨️',  // Moderate or heavy sleet showers
        '368': '🌨️',  // Light snow showers
        '371': '❄️',  // Moderate or heavy snow showers
        '374': '🌧️',  // Light showers of ice pellets
        '377': '🌧️',  // Moderate or heavy showers of ice pellets
        '386': '⛈️',  // Patchy light rain with thunder
        '389': '⛈️',  // Moderate or heavy rain with thunder
        '392': '⛈️',  // Patchy light snow with thunder
        '395': '⛈️'   // Moderate or heavy snow with thunder
    };

    return weatherEmojis[code] || '🌤️';
}

// Make functions globally accessible
window.initMap = initMap;
window.viewInStreetView = viewInStreetView;
window.getDirections = getDirections;

// Load Google Maps API dynamically
async function loadGoogleMapsAPI() {
    try {
        const response = await fetch('/api/maps-config');
        const config = await response.json();

        if (!config.apiKey) {
            console.error('Google Maps API key not configured');
            return;
        }

        // Create and load the Google Maps script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&libraries=places,geometry&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    } catch (error) {
        console.error('Failed to load Google Maps API configuration:', error);
    }
}

// ==================== AUTHENTICATION LOGIC ====================

// Check for existing session on page load
function checkSession() {
    const savedToken = localStorage.getItem('sessionToken');
    const savedEmail = localStorage.getItem('userEmail');

    if (savedToken && savedEmail) {
        sessionToken = savedToken;
        userEmail = savedEmail;
        isAuthenticated = true;
        updateAuthUI();
    }
}

// Update UI based on authentication state
function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userInfo = document.getElementById('userInfo');
    const userEmailSpan = document.getElementById('userEmail');
    const privateEventsBtn = document.getElementById('private-events-btn');

    if (isAuthenticated) {
        loginBtn.style.display = 'none';
        userInfo.style.display = 'flex';
        userEmailSpan.textContent = userEmail;
        privateEventsBtn.style.display = 'flex';
    } else {
        loginBtn.style.display = 'block';
        userInfo.style.display = 'none';
        privateEventsBtn.style.display = 'none';
    }
}

// Show/hide modal
function showModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.add('active');
}

function hideModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('active');
    resetModalState();
}

function resetModalState() {
    document.getElementById('emailStep').style.display = 'flex';
    document.getElementById('otpStep').style.display = 'none';
    document.getElementById('emailInput').value = '';
    document.getElementById('otpInput').value = '';
    hideError('emailError');
    hideError('otpError');
}

// Show/hide error messages
function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    errorEl.textContent = message;
    errorEl.classList.add('show');
}

function hideError(elementId) {
    const errorEl = document.getElementById(elementId);
    errorEl.classList.remove('show');
}

// Send OTP
async function sendOTP() {
    const email = document.getElementById('emailInput').value.trim();
    const sendOtpBtn = document.getElementById('sendOtpBtn');

    if (!email || !email.includes('@')) {
        showError('emailError', 'Please enter a valid email address');
        return;
    }

    hideError('emailError');
    sendOtpBtn.disabled = true;
    sendOtpBtn.textContent = 'Sending...';

    try {
        const response = await fetch('/api/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
            // Show OTP step
            document.getElementById('emailStep').style.display = 'none';
            document.getElementById('otpStep').style.display = 'flex';
            document.getElementById('displayEmail').textContent = email;

            // Show dev OTP if in development mode
            if (data.dev_otp) {
                document.getElementById('devModeInfo').style.display = 'block';
                console.log('Development OTP:', data.dev_otp);
                // Auto-fill OTP in development mode
                document.getElementById('otpInput').value = data.dev_otp;
            }
        } else {
            showError('emailError', data.error || 'Failed to send OTP');
        }
    } catch (error) {
        console.error('Send OTP error:', error);
        showError('emailError', 'Network error. Please check if the server is running.');
    } finally {
        sendOtpBtn.disabled = false;
        sendOtpBtn.textContent = 'Send OTP';
    }
}

// Verify OTP
async function verifyOTP() {
    const email = document.getElementById('emailInput').value.trim();
    const otp = document.getElementById('otpInput').value.trim();
    const verifyOtpBtn = document.getElementById('verifyOtpBtn');

    if (!otp || otp.length !== 6) {
        showError('otpError', 'Please enter a valid 6-digit OTP');
        return;
    }

    hideError('otpError');
    verifyOtpBtn.disabled = true;
    verifyOtpBtn.textContent = 'Verifying...';

    try {
        const response = await fetch('/api/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, otp })
        });

        const data = await response.json();

        if (response.ok) {
            // Save session
            sessionToken = data.sessionToken;
            userEmail = data.email;
            isAuthenticated = true;

            localStorage.setItem('sessionToken', sessionToken);
            localStorage.setItem('userEmail', userEmail);

            // Update UI
            updateAuthUI();
            hideModal();

            // Show success message
            //alert('Login successful! You can now view private events.');
        } else {
            showError('otpError', data.error || 'Invalid OTP');
        }
    } catch (error) {
        console.error('Verify OTP error:', error);
        showError('otpError', 'Network error. Please try again.');
    } finally {
        verifyOtpBtn.disabled = false;
        verifyOtpBtn.textContent = 'Verify OTP';
    }
}

// Logout
function logout() {
    isAuthenticated = false;
    userEmail = '';
    sessionToken = '';

    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userEmail');

    updateAuthUI();

    // Switch back to map view if on private events
    if (currentView === 'private-events') {
        document.getElementById('map-view-btn').click();
    }
}

// Load private events
async function loadPrivateEvents() {
    const privateEventsView = document.getElementById('private-events-view');

    if (!isAuthenticated) {
        privateEventsView.innerHTML = '<div class="events-loading">Please login to view private events</div>';
        return;
    }

    privateEventsView.innerHTML = '<div class="events-loading">Loading private events...</div>';

    try {
        const response = await fetch('/api/private-events', {
            headers: {
                'Authorization': `Bearer ${sessionToken}`
            }
        });

        const data = await response.json();

        if (response.ok) {
            displayPrivateEvents(data.events);
        } else {
            privateEventsView.innerHTML = '<div class="events-loading">Failed to load events. Please try again.</div>';
        }
    } catch (error) {
        console.error('Load events error:', error);
        privateEventsView.innerHTML = '<div class="events-loading">Network error. Please check if the server is running.</div>';
    }
}

// Display private events
function displayPrivateEvents(events) {
    const privateEventsView = document.getElementById('private-events-view');

    const eventsHTML = `
        <div class="events-header">
            <h2>🎫 Private USC Events</h2>
            <p style="color: #666;">Exclusive events for authenticated users</p>
        </div>
        <div class="events-grid">
            ${events.map(event => `
                <div class="event-card">
                    <span class="event-category">${event.category}</span>
                    <h3>${event.name}</h3>
                    <div class="event-detail">
                        <span class="event-detail-icon">📅</span>
                        <span>${event.date}</span>
                    </div>
                    <div class="event-detail">
                        <span class="event-detail-icon">⏰</span>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-detail">
                        <span class="event-detail-icon">📍</span>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-detail">
                        <span class="event-detail-icon">👥</span>
                        <span>${event.attendees} attendees</span>
                    </div>
                    <p class="event-description">${event.description}</p>
                </div>
            `).join('')}
        </div>
    `;

    privateEventsView.innerHTML = eventsHTML;
}

// Setup authentication event listeners
function setupAuthListeners() {
    // Login button
    document.getElementById('loginBtn').addEventListener('click', showModal);

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // Modal close button
    document.querySelector('.close-modal').addEventListener('click', hideModal);

    // Close modal on outside click
    document.getElementById('loginModal').addEventListener('click', (e) => {
        if (e.target.id === 'loginModal') {
            hideModal();
        }
    });

    // Send OTP button
    document.getElementById('sendOtpBtn').addEventListener('click', sendOTP);

    // Verify OTP button
    document.getElementById('verifyOtpBtn').addEventListener('click', verifyOTP);

    // Resend OTP button
    document.getElementById('resendOtpBtn').addEventListener('click', () => {
        document.getElementById('emailStep').style.display = 'flex';
        document.getElementById('otpStep').style.display = 'none';
    });

    // Back to email button
    document.getElementById('backToEmailBtn').addEventListener('click', () => {
        document.getElementById('emailStep').style.display = 'flex';
        document.getElementById('otpStep').style.display = 'none';
    });

    // Enter key handling
    document.getElementById('emailInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendOTP();
    });

    document.getElementById('otpInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyOTP();
    });

    // Private events button
    document.getElementById('private-events-btn').addEventListener('click', () => {
        document.getElementById('map').classList.add('hidden');
        document.getElementById('street-view').classList.remove('active');
        document.getElementById('private-events-view').classList.add('active');
        currentView = 'private-events';

        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('private-events-btn').classList.add('active');

        loadPrivateEvents();
    });
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check for existing session
    checkSession();

    // Setup authentication listeners
    setupAuthListeners();

    // Load Google Maps API dynamically
    loadGoogleMapsAPI();

    console.log('USC Campus Explorer loaded');
});
