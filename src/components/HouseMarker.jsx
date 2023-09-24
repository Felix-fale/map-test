import { Marker } from "react-leaflet";
import PropTypes from "prop-types"; // Importez PropTypes
import L from "leaflet";

function HouseMarker({ position }) {
  const houseIcon = new L.Icon({
    iconUrl:
      "https://img.freepik.com/vecteurs-libre/modele-logo-carte-afrique_23-2148724914.jpg?w=2000",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <Marker position={position} icon={houseIcon}>
      {/* Contenu du popup de la maison (facultatif) */}
      {/* <Popup> */}
      <div>
        <h2>Nom de la maison</h2>
        <p>Description de la maison</p>
      </div>
      {/* </Popup> */}
    </Marker>
  );
}

// Ajoutez une validation PropTypes pour la propriété 'position'
HouseMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default HouseMarker;
