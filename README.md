# USC University Park Campus Explorer

> An interactive campus information system with real-time data layers for USC students

## Overview

This project was created for the Claude Hackathon with the theme "Best for College Students". It provides USC students with a comprehensive, interactive map of the University Park Campus featuring multiple information layers including real-time weather, street view exploration, and detailed location information.

## Problem Statement

USC students, especially new freshmen and transfer students, face challenges:
- **Campus Navigation**: Difficulty finding buildings and facilities on the large campus
- **Location Discovery**: Not knowing about all the resources and facilities available
- **Real-Time Information**: Need for current weather and campus conditions
- **Spatial Awareness**: Understanding the layout and distances between locations
- **Exploration**: Limited ability to virtually explore campus before arriving

## Solution

This interactive campus explorer provides students with:
- Interactive Google Maps integration centered on USC's University Park Campus
- Real-time weather information specific to campus location
- Street View capability to virtually explore campus buildings
- Detailed information about 15+ key campus locations
- Multiple map layer options (roadmap, satellite, terrain, hybrid)

## Key Features

### Interactive Map System
- **Google Maps Integration**: Fully interactive map centered on USC UPC Campus
- **Multiple Map Layers**: Switch between Roadmap, Satellite, Terrain, and Hybrid views
- **Custom Markers**: 15+ campus locations marked with USC cardinal and gold colors
- **Campus Highlighting**: Visual circle overlay showing main campus area
- **Zoom & Pan**: Smooth navigation with full map controls

### Real-Time Information
- **Live Weather Data**: Current temperature, humidity, wind speed, UV index, and more
- **Weather Conditions**: Visual weather icons and detailed descriptions
- **Campus-Specific**: Data localized to USC's exact coordinates
- **Beautiful Display**: Gradient background with organized weather metrics

### Street View Exploration
- **Virtual Campus Tours**: Explore campus buildings and locations in Street View
- **Easy Toggle**: Switch between map and street view with one click
- **Location Links**: Jump to street view directly from any campus marker
- **360° Panoramas**: Full panoramic views of campus locations

### Location Database
- **15+ Key Locations**: Including Tommy Trojan, libraries, dining halls, sports facilities
- **Detailed Information**: Descriptions, categories, and coordinates for each location
- **Quick Navigation**: Click any location in the sidebar to instantly navigate there
- **Smart Info Panel**: Detailed information updates when selecting locations
- **Category System**: Organized by academic, housing, dining, sports, recreation, landmarks

## Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Maps API**: Google Maps JavaScript API
- **Weather API**: wttr.in (free weather service)
- **Styling**: Custom CSS with USC branding (Cardinal #990000 & Gold #FFCC00)
- **Fonts**: Google Fonts (Roboto)
- **Deployment**: Static hosting (can be deployed to GitHub Pages, Netlify, Vercel, etc.)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Google Maps API key (already included in the project)
- Internet connection for API access
- Local web server (optional, for development)

### Installation

#### Option 1: Direct File Opening (Simplest)
1. Download or clone the repository
2. Open `index.html` directly in your web browser
3. The application will load automatically

#### Option 2: Local Web Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/yourusername/claude_hackathon.git
cd claude_hackathon

# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have npx)
npx http-server

# Then open http://localhost:8000 in your browser
```

#### Option 3: Live Server (VS Code)
1. Open the project folder in VS Code
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"

### Configuration

The Google Maps API key is already configured in the project:
- **API Key**: `AIzaSyAHws8TV4MS8Z33tjc8TZxuIIi7PAjtuIc`
- **Libraries**: Places, Geometry
- **Restrictions**: Configured for this project

No additional configuration needed - just open and use!

## Usage Guide

### Exploring Campus Locations
1. **Browse Locations**: Scroll through the location list in the left sidebar
2. **Click to Navigate**: Click any location to jump to it on the map
3. **View Details**: Click markers on the map to see detailed information
4. **Get Directions**: Use the "Get Directions" button to open Google Maps directions

### Using Map Layers
1. **Roadmap**: Standard street map view (default)
2. **Satellite**: Aerial imagery of campus
3. **Terrain**: Topographical view with elevation
4. **Hybrid**: Satellite imagery with street labels

### Street View Navigation
1. Click the "Street View" button to switch to panoramic view
2. Use your mouse to look around 360°
3. Click on arrows to move through campus
4. Click "Map View" to return to the standard map

### Weather Information
- Real-time weather data is displayed at the top
- Shows temperature, feels like, humidity, wind speed, UV index, and more
- Updates automatically when you load the page
- Data specific to USC's campus location

## Project Structure

```
claude_hackathon/
├── index.html          # Main HTML file with UI structure
├── styles.css          # Complete styling with USC branding
├── app.js             # JavaScript application logic
└── README.md          # This documentation file
```

### File Details

**index.html**
- Header with USC branding
- Control panel for layers and views
- Location list sidebar
- Weather widget container
- Map and street view containers
- Info panel for location details

**styles.css**
- USC color scheme (Cardinal #990000 and Gold #FFCC00)
- Responsive grid layouts
- Custom button and panel styling
- Weather widget design
- Mobile-friendly breakpoints
- Smooth animations and transitions

**app.js**
- Campus location database (15+ locations)
- Google Maps initialization and configuration
- Street View panorama setup
- Weather API integration
- Event listeners for interactive controls
- Marker and info window management
- Location filtering and navigation

## Campus Locations Included

The application features 15+ key USC UPC campus locations:

### Academic Buildings
- Tommy Trojan (Iconic Campus Landmark)
- Doheny Memorial Library
- Leavey Library (24-hour study facility)
- Bovard Auditorium
- USC School of Cinematic Arts
- Taper Hall
- Mudd Hall of Philosophy
- Viterbi School of Engineering
- Marshall School of Business

### Student Services & Dining
- USC Village (Housing & Retail)
- Tutor Campus Center
- Parkside Dining Hall

### Recreation & Sports
- Lyon Center (Fitness & Recreation)
- Galen Center (Basketball Arena)
- Los Angeles Memorial Coliseum (Football Stadium)

## Future Enhancements

- [ ] Add more campus locations (libraries, labs, student centers)
- [ ] Implement search functionality for locations
- [ ] Add indoor maps for major buildings
- [ ] Include event calendar overlay
- [ ] Real-time parking availability
- [ ] Walking route calculator with time estimates
- [ ] Public transportation integration
- [ ] Student reviews and tips for locations
- [ ] Mobile app version
- [ ] Accessibility features and routes
- [ ] Night mode/dark theme

## Why This is Best for College Students

### 1. Freshman-Friendly
- New students often get lost on USC's large campus
- Virtual exploration before arriving on campus
- Learn building locations before the semester starts
- Reduces anxiety about navigating campus

### 2. Time-Saving
- No more wandering around looking for buildings
- Quick reference for meeting locations
- Instant access to building information
- Direct navigation to any campus location

### 3. Always Accessible
- Works on any device with a web browser
- No app installation required
- Available 24/7 from anywhere
- Offline-capable (can cache map data)

### 4. Real-Time Information
- Current weather conditions help plan your day
- Know what to wear before leaving your dorm
- UV index helps protect your skin in sunny LA
- Wind and temperature for outdoor activities

### 5. Free and Open
- No subscription fees
- No account required
- Open source code for learning
- Can be customized by students

### 6. Educational
- Learn about campus history and facilities
- Discover resources you didn't know existed
- Great for campus tours and orientations
- Helps students engage with their environment

## Contributing

We welcome contributions from USC students and developers!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewLocation`)
3. Make your changes:
   - Add new campus locations to the `campusLocations` array in [app.js](app.js)
   - Update styles in [styles.css](styles.css)
   - Enhance functionality in [app.js](app.js)
4. Test your changes locally
5. Commit your changes (`git commit -m 'Add Annenberg School of Communication'`)
6. Push to the branch (`git push origin feature/NewLocation`)
7. Open a Pull Request

### Ideas for Contributions
- Add more campus buildings and locations
- Improve weather data visualization
- Add search/filter functionality
- Create category filters for locations
- Add user favorites/bookmarks
- Implement routing between locations
- Add accessibility information
- Create custom map themes
- Add parking information
- Include construction/closure alerts

## Technical Details

### APIs Used

**Google Maps JavaScript API**
- Map rendering and interaction
- Marker placement and clustering
- Street View panoramas
- Multiple map type layers
- Info windows and overlays

**Weather API (wttr.in)**
- Free, no API key required
- JSON format weather data
- Current conditions
- Detailed metrics (temperature, humidity, wind, UV, pressure, visibility)

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Lightweight vanilla JavaScript (no frameworks)
- Minimal dependencies
- Fast initial load
- Efficient marker rendering
- Responsive on all devices

## Troubleshooting

### Map not loading
- Check your internet connection
- Ensure the Google Maps API key is valid
- Clear browser cache and reload

### Weather not displaying
- The weather API may be temporarily unavailable
- Fallback data will display typical USC weather
- Check browser console for errors

### Street View not available
- Some locations may not have street view coverage
- Try nearby locations or use satellite view

## License

This project is licensed under the MIT License - free to use, modify, and distribute.

## Acknowledgments

- **Google Maps Platform** for comprehensive mapping APIs
- **wttr.in** for free weather data
- **USC** for being an amazing campus to map
- **Claude Code** for development assistance
- Inspired by the need to help students navigate campus

## Contact & Support

- **Project**: USC UPC Campus Explorer
- **Built For**: Claude Hackathon - Best for College Students
- **Target Users**: USC Students, Prospective Students, Visitors
- **Feedback**: Open an issue on GitHub for suggestions or bug reports

## Live Demo

Simply open [index.html](index.html) in your browser to see the application in action!

### Quick Start
```bash
# Clone and run
git clone <your-repo-url>
cd claude_hackathon
open index.html  # macOS
# or
start index.html  # Windows
# or
xdg-open index.html  # Linux
```

---

**Fight On! ✌️ Made for USC Trojans**
