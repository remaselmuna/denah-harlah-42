import {
    MapContainer,
    TileLayer,
    GeoJSON,
    LayersControl,
    FeatureGroup,
} from "react-leaflet";
import "./App.css";
import tileLayer from "./tileLayer";
import geojson from "./data/geojson.json";
import onEachFeature from "./utils/onEachFeature";
// import MapMaxBounds from "./components/MapMaxBounds";
import StandIcon from "./components/StandIcon";
import MyMarkers from "./components/MyMarkers";
import LocationButton from "./components/LocationButton";

function App() {
    return (
        <>
            <MapContainer
                center={[-8.064633, 111.900119]}
                zoom={16}
                scrollWheelZoom={false}
            >
                <LayersControl position="topright" collapsed={false}>
                    <TileLayer {...tileLayer} />

                    <LayersControl.Overlay
                        name="Tampilkan pembagian lokasi"
                        checked
                    >
                        <GeoJSON data={geojson} onEachFeature={onEachFeature} />
                    </LayersControl.Overlay>
                    {/* <MapMaxBounds /> */}
                    <LayersControl.Overlay
                        name="Tampilkan Lokasi Sound"
                        checked
                    >
                        <FeatureGroup>
                            <MyMarkers />
                        </FeatureGroup>
                    </LayersControl.Overlay>
                    <StandIcon />
                </LayersControl>
                <LocationButton />
            </MapContainer>
        </>
    );
}

export default App;
