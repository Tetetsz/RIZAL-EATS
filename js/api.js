// api.js - Updated for Leaflet.js
// Map functions
let map;

export function initMap(latitude = 14.6507, longitude = 121.1029) {
  map = L.map('map').setView([latitude, longitude], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  return map;
}

export function addRestaurantMarkers(restaurants) {
  if (!map) return;

  const restaurantIcon = L.icon({
    iconUrl: 'images/map-marker.png',
    iconSize: [32, 32],
    popupAnchor: [0, -15]
  });

  Object.values(restaurants).forEach(restaurant => {
    if (restaurant.location?.lat && restaurant.location?.lng) {
      const marker = L.marker(
        [restaurant.location.lat, restaurant.location.lng],
        { icon: restaurantIcon }
      ).addTo(map);
      
      marker.bindPopup(`
        <div class="map-popup">
          <h4>${restaurant.name}</h4>
          <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
          <p><strong>Rating:</strong> ${restaurant.rating}/5</p>
          <button class="btn view-details" data-id="${restaurant.id}">View Details</button>
        </div>
      `);
    }
  });
}
// Load Leaflet CSS and JS dynamically
function loadMapLibrary() {
  return new Promise((resolve) => {
    if (window.L) {
      resolve();
      return;
    }

    // Load Leaflet CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    css.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    css.crossOrigin = '';
    document.head.appendChild(css);

    // Load Leaflet JS
    const js = document.createElement('script');
    js.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    js.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    js.crossOrigin = '';
    js.onload = resolve;
    document.head.appendChild(js);
  });
}

export { initMap, addRestaurantMarkers, loadMapLibrary };