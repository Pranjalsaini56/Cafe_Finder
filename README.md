☕ Cafe Finder

A web-based application that helps users discover cafes around a searched location using OpenStreetMap data.

Search for a city, explore nearby cafes, and view their locations on an interactive map.

✨ Features

- Location Search: Search for cafes by entering a city or location name.
- Interactive Map: Explore locations using Leaflet and OpenStreetMap.
- Geocoding: Convert location names into geographic coordinates using Nominatim.
- Cafe Discovery: Retrieve nearby cafes within a 3 km radius using the Overpass API.
- Dynamic Results: Display cafe names in dynamically generated cards.
- Input Validation: Handle empty location searches.
- Error Handling: Handle unsuccessful API requests and missing search results.

🛠️ Technologies Used

Technology| Purpose
HTML5| Webpage structure
CSS3| Styling and responsive layout
JavaScript| Application logic and API integration
Leaflet.js| Interactive maps
OpenStreetMap| Map tiles and geographic data
Nominatim API| Location search and geocoding
Overpass API| Retrieving cafe information

📂 Project Structure

Cafe_Finder/
│
├── index.html
├── style.css
├── script.js
└── README.md

⚙️ How It Works

1. The user enters a city or location in the search box.
2. JavaScript retrieves the entered location.
3. Nominatim converts the location name into latitude and longitude.
4. The coordinates are used to construct an Overpass QL query.
5. The Overpass API retrieves nearby cafe data from OpenStreetMap.
6. JavaScript processes the returned JSON data.
7. Cafe information is dynamically displayed on the webpage.

🚀 Getting Started

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Open the project

cd Cafe_Finder

3. Run the application

Open "index.html" in your browser using VS Code Live Server or another local development server.

No Google Maps API key is required.

🌍 APIs and Data Sources

- "OpenStreetMap" (https://www.openstreetmap.org/)
- "Leaflet.js" (https://leafletjs.com/)
- "Nominatim API" (https://nominatim.org/)
- "Overpass API" (https://overpass-api.de/)

Attribution: Map data © OpenStreetMap contributors.

Public API services have usage policies and request limits. Please use them responsibly.

🔮 Future Improvements

- Display cafe ratings and addresses.
- Add markers and interactive popups for individual cafes.
- Implement distance-based sorting.
- Add filters for cafe categories and amenities.
- Improve search accuracy and support larger geographic areas.
- Add a loading indicator and improved error messages.

👩‍💻 Author

Pranjal Saini

B.Tech – Computer Science and Engineering

"GitHub" (https://github.com/Pranjalsaini56)

---

⭐ If you find this project interesting, consider giving the repository a star!
