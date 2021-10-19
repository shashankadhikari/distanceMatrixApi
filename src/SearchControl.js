import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
import "../node_modules/react-leaflet-geosearch/lib/react-leaflet-geosearch.css"
import L from "leaflet";
const SearchControl = (props) => {
  const map = useMap();
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      marker: {
        // optional: L.Marker    - default L.Icon.Default
        icon: new L.Icon.Default(),
        draggable: true
      },
      keepResult: true,

      resultFormat: ({ result }) => result.label,
      ...props
    });
    map.on("geosearch/showlocation", function (e) {
       
    });
    map.on("geosearch/marker/dragend", function (e) {
         setLat(e.location.lat);
        setLng(e.location.lng);
  console.log(e.location);
        //  console.log(lng);
    });
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, props]);

  return null;
};
export default SearchControl;
