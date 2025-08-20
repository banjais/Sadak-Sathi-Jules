import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(27.7172, 85.3240), // Kathmandu
        L.latLng(28.2096, 83.9856)  // Pokhara
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}

export default Routing;
