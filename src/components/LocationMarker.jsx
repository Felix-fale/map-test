import useGeolocation from "react-hook-geolocation";
import { Marker, useMap } from "react-leaflet";

function LocationMarker() {
  const geolocation = useGeolocation();
  const map = useMap();

  if (
    geolocation &&
    geolocation.coords &&
    geolocation.coords.latitude &&
    geolocation.coords.longitude
  ) {
    const { latitude, longitude } = geolocation.coords;
    map.setView([latitude, longitude], map.getZoom());
  }

  return geolocation && geolocation.coords ? (
    <Marker
      position={[geolocation.coords.latitude, geolocation.coords.longitude]}
    >
      {/* Marqueur personnalisé pour la position actuelle */}
    </Marker>
  ) : null;
}

export default LocationMarker;
