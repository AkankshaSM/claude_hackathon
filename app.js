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

    // Draw UPC boundary polygon
    drawUPCBoundary();

    // Draw USC Village boundary polygon
    drawUSCVillageBoundary();
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
