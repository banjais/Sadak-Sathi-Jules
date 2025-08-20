import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

function App() {
  // Add routing after map is ready
  const handleMapReady = (map) => {
    if (!map._routingControl) {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(27.7172, 85.3240), // Kathmandu
          L.latLng(28.2096, 83.9856)  // Pokhara
        ],
        routeWhileDragging: true,
      }).addTo(map);

      map._routingControl = routingControl; // prevent duplicate routing
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[28.3949, 84.1240]}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        whenCreated={handleMapReady}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
}

export default App;
