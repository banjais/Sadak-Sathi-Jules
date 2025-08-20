import React, { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

function UserLocation() {
  const map = useMap();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? null : (
    <L.Marker position={position}>
      <L.Popup>You are here</L.Popup>
    </L.Marker>
  );
}

export default UserLocation;
