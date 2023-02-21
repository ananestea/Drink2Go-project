const initMap = () => {
  const map = L.map('map')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 59.92749,
    lng: 30.31127,
  }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const markerIcon = L.icon({
    iconUrl: './img/map-marker-icon.svg',
    iconSize: [36, 50],
    iconAnchor: [18, 50],
  });

  const marker = L.marker(
    {
      lat: 59.96831,
      lng: 30.31748,
    },
    {
      icon: markerIcon,
    }
  );

  marker.addTo(map);

  let latLngs = [ marker.getLatLng() ];
  let markerBounds = L.latLngBounds(latLngs);
  map.fitBounds(markerBounds);
}

export { initMap }
