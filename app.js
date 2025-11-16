// USC University Park Campus Explorer
// Main Application JavaScript

// USC Campus Center Coordinates
const USC_CENTER = { lat: 34.0224, lng: -118.2851 };

// Global variables
let map;
let streetView;
let markers = [];
let infoWindow;
let currentView = 'map';

// Campus Locations with detailed information
const campusLocations = [
    {
        name: "Tommy Trojan",
        position: { lat: 34.0205, lng: -118.2858 },
        description: "Iconic USC landmark and symbol of the university. The bronze statue of a Trojan warrior stands guard in the heart of campus.",
        category: "landmark",
        icon: "🏛️"
    },
    {
        name: "Doheny Memorial Library",
        position: { lat: 34.0204, lng: -118.2839 },
        description: "Historic library featuring beautiful architecture and extensive research collections.",
        category: "library",
        icon: "📚"
    },
    {
        name: "Leavey Library",
        position: { lat: 34.0217, lng: -118.2827 },
        description: "Modern 24-hour study facility with collaborative workspaces, computer labs, and café.",
        category: "library",
        icon: "💻"
    },
    {
        name: "USC Village",
        position: { lat: 34.0251, lng: -118.2855 },
        description: "State-of-the-art residential and retail complex featuring dining, housing, and shopping.",
        category: "housing",
        icon: "🏘️"
    },
    {
        name: "Lyon Center",
        position: { lat: 34.0197, lng: -118.2876 },
        description: "Premier fitness and recreation center with gym, pool, and various sports facilities.",
        category: "recreation",
        icon: "💪"
    },
    {
        name: "Bovard Auditorium",
        position: { lat: 34.0200, lng: -118.2854 },
        description: "Historic auditorium hosting lectures, performances, and special events.",
        category: "academic",
        icon: "🎭"
    },
    {
        name: "USC School of Cinematic Arts",
        position: { lat: 34.0237, lng: -118.2874 },
        description: "World-renowned film school with cutting-edge facilities and production studios.",
        category: "academic",
        icon: "🎬"
    },
    {
        name: "Galen Center",
        position: { lat: 34.0223, lng: -118.2886 },
        description: "Multi-purpose arena and home to USC basketball and volleyball teams.",
        category: "sports",
        icon: "🏀"
    },
    {
        name: "Los Angeles Memorial Coliseum",
        position: { lat: 34.0141, lng: -118.2879 },
        description: "Historic stadium, home of USC football and host of two Olympic Games.",
        category: "sports",
        icon: "🏈"
    },
    {
        name: "Taper Hall",
        position: { lat: 34.0201, lng: -118.2865 },
        description: "Humanities and social sciences building with modern classrooms.",
        category: "academic",
        icon: "🎓"
    },
    {
        name: "Mudd Hall of Philosophy",
        position: { lat: 34.0213, lng: -118.2849 },
        description: "Home to the USC School of Philosophy.",
        category: "academic",
        icon: "🤔"
    },
    {
        name: "Tutor Campus Center",
        position: { lat: 34.0205, lng: -118.2875 },
        description: "Student center with dining options, bookstore, and meeting spaces.",
        category: "dining",
        icon: "🍽️"
    },
    {
        name: "Parkside Dining Hall",
        position: { lat: 34.0183, lng: -118.2897 },
        description: "All-you-can-eat dining facility with diverse food stations.",
        category: "dining",
        icon: "🍕"
    },
    {
        name: "Viterbi School of Engineering",
        position: { lat: 34.0197, lng: -118.2891 },
        description: "State-of-the-art engineering facilities and research labs.",
        category: "academic",
        icon: "⚙️"
    },
    {
        name: "Marshall School of Business",
        position: { lat: 34.0187, lng: -118.2850 },
        description: "Top-ranked business school with modern facilities and experiential learning centers.",
        category: "academic",
        icon: "💼"
    }
];

// Initialize the application
function initMap() {
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

    // Add a circle to highlight campus area
    const campusCircle = new google.maps.Circle({
        strokeColor: '#990000',
        strokeOpacity: 0.4,
        strokeWeight: 2,
        fillColor: '#FFCC00',
        fillOpacity: 0.1,
        map: map,
        center: USC_CENTER,
        radius: 800
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

// Add markers for campus locations
function addCampusMarkers() {
    campusLocations.forEach((location, index) => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.name,
            animation: google.maps.Animation.DROP,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: '#990000',
                fillOpacity: 1,
                strokeColor: '#FFCC00',
                strokeWeight: 3,
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

// Populate location list in sidebar
function populateLocationList() {
    const locationList = document.getElementById('locationList');

    campusLocations.forEach(location => {
        const item = document.createElement('div');
        item.className = 'location-item';
        item.innerHTML = `
            <h4>${location.icon} ${location.name}</h4>
            <p>${location.category}</p>
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

        locationList.appendChild(item);
    });
}

// Show location information in info panel
function showLocationInfo(location) {
    const infoPanel = document.getElementById('infoPanel');
    infoPanel.innerHTML = `
        <div class="info-content">
            <h2>${location.icon} ${location.name}</h2>
            <p><strong>Category:</strong> ${location.category}</p>
            <p>${location.description}</p>
            <p><strong>Coordinates:</strong> ${location.position.lat.toFixed(4)}, ${location.position.lng.toFixed(4)}</p>
            <button class="info-link" onclick="viewInStreetView(${location.position.lat}, ${location.position.lng})">
                View in Street View 👁️
            </button>
            <button class="info-link" onclick="getDirections(${location.position.lat}, ${location.position.lng})" style="background: #FFCC00; color: #990000; margin-left: 10px;">
                Get Directions 🧭
            </button>
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

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Map will be initialized by Google Maps API callback
    console.log('USC Campus Explorer loaded');
});
