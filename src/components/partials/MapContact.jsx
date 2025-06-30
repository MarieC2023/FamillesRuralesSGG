import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './mapContact.css';

// Correction : import manuel des icônes
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix affichage icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Coordonnées des deux lieux
const positionPeriscolaire = [47.14946849558762, -0.759314189291527];
const positionResto = [47.150568128429605, -0.7591239646075566];

const MapContact = () => {
  return (
    <MapContainer center={positionPeriscolaire} zoom={15} scrollWheelZoom={false} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionPeriscolaire}>
        <Popup>
          <div>
            <strong>Accueil de Loisirs - Saint-Georges-des-Gardes</strong><br />
            7 rue de l'église<br />
            49120 Chemillé-en-Anjou
          </div>
        </Popup>
      </Marker>
      <Marker position={positionResto}>
        <Popup>
          <div>
            <strong>Restauration Scolaire</strong><br />
            2 rue du bordage<br />
            49120 Chemillé-en-Anjou
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapContact;
