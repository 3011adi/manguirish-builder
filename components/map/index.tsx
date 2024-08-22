import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Explicitly typing the position as a tuple of two numbers (latitude and longitude)
  const position: [number, number] = [15.5933, 73.8085]; // Replace with your exact location

  return (
    <div>map</div>
  );
};

export default Map;