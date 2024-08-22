import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Explicitly typing the position as a tuple of two numbers (latitude and longitude)
  const pos: [number, number] = [49.2125578, 16.62662018]; // Replace with your exact location

  return (
    <div>map</div>
  );
};

export default Map;