import React from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";
import "./styles.css";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import SearchControl from "./SearchControl";

const App = () => {
  const prov = OpenStreetMapProvider();
  const starting={
    lat:27.6866,
    lng: 83.4323
  }
  const destination={
    lat:27.6504,
    lng:  83.579
  }

  return (
    <div>
      <MapContainer center={[51.505, -0.091]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
       <SearchControl
          provider={prov}
          showMarker={true}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={1}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={true}
          searchLabel={"Enter address, please"}
          keepResult={true}
        />
        <SearchControl
          provider={prov}
          showMarker={true}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={1}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={true}
          searchLabel={"Enter address, please"}
          keepResult={true}
        />
         <RoutineMachine starting={starting} destination={destination} />
      </MapContainer>
    </div>
  );
};

export default App;
