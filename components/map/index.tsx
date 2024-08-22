import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const pos: [number, number] = [49.2125578, 16.62662018];
const Map = () => {
  // Explicitly typing the position as a tuple of two numbers (latitude and longitude)
   // Replace with your exact location

  return (
    <MapContainer center={pos} zoom={13} style={{ height: "60vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={pos}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;