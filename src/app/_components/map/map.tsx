"use client";

import "../../../../node_modules/leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  //   useMap,
} from "react-leaflet";

function Map() {
  return (
    <MapContainer
      className="z-0 mx-auto mt-12 h-80 max-w-4xl "
      center={[22.306615059722038, 78.30791160996145]}
      zoom={5}
      scrollWheelZoom={true}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
