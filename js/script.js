// Crear un mapa y establecer la vista en una ubicación específica y un nivel de zoom
var map = L.map('map').setView([51.505, -0.09], 13);

// Añadir una capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir un marcador en la ubicación del mapa
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Un marcador personalizado aquí.')
    .openPopup();
