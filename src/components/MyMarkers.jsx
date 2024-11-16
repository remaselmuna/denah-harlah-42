import { Marker, Popup, useMap } from "react-leaflet";
import customMarkerIcon, { soundsPoints } from "../utils/customMarkerIcon";

const MyMarkers = () => {
  const map = useMap();

  return soundsPoints.map((item, index) => (
      <Marker
          key={index}
          icon={customMarkerIcon()}
          position={{ lat: item.lat, lng: item.lng }}
          eventHandlers={{
              click(e) {
                  const location = e.target.getLatLng();
                  map.flyToBounds([location]);
              },
          }}
      >
          <Popup>{item.title}</Popup>
      </Marker>
  ));
};

export default MyMarkers