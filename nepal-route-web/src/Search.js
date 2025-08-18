import React, { useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

function Search() {
  const map = useMap();
  const [query, setQuery] = useState("");
  const [marker, setMarker] = useState(null);

  const search = async () => {
    if (marker) {
      map.removeLayer(marker);
    }
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1&countrycodes=np`
    );
    const data = await response.json();
    if (data && data.length > 0) {
      const { lat, lon, display_name } = data[0];
      const newMarker = L.marker([lat, lon]).addTo(map)
        .bindPopup(display_name)
        .openPopup();
      setMarker(newMarker);
      map.flyTo([lat, lon], 13);
    } else {
      alert("Place not found");
    }
  };

  return (
    <div className="leaflet-bar" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000, backgroundColor: 'white', padding: '5px' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && search()}
        placeholder="Search in Nepal"
        style={{ marginRight: '5px' }}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}

export default Search;
