import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "./App.css";
import tileLayer from "./tileLayer";
import geojson from "./data/geojson.json";
import onEachFeature from "./utils/onEachFeature";
import MapMaxBounds from "./components/MapMaxBounds";
import customMarkerIcon, { soundsPoints } from "./utils/customMarkerIcon";
import StandIcon from "./components/StandIcon";

function App() {
    const MyMarkers = ({ data }) => {
        return data.map((item, index) => (
            <Marker
                key={index}
                icon={customMarkerIcon()}
                position={{ lat: item.lat, lng: item.lng }}
            >
                <Popup>{item.title}</Popup>
            </Marker>
        ));
    };

    return (
        <>
            <MapContainer
                center={[-8.064633, 111.900119]}
                zoom={16}
                scrollWheelZoom={false}
            >
                <TileLayer {...tileLayer} />

                <GeoJSON data={geojson} onEachFeature={onEachFeature} />
                <MapMaxBounds />
                <MyMarkers data={soundsPoints} />
                <StandIcon />
            </MapContainer>
        </>
    );
}

export default App;
