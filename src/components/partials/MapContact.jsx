import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './mapContact.css';

const positionPeriscolaire = [47.14946849558762, -0.759314189291527];
const positionResto = [47.150568128429605, -0.7591239646075566]; // Remplace par les coordonnées exactes du resto

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