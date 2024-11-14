import { useEffect } from "react";
import { useMap } from "react-leaflet";

function MapMaxBounds() {
  const map = useMap();

  useEffect(() => {
      if (!map) return;
      const bounds = map.getBounds();
      map.setMaxBounds(bounds);
      map.fitBounds(bounds, { reset: true });
  }, [map]);

  return null;
}

export default MapMaxBounds