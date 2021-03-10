import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';
import MapStyles from './components/MapStyles/MapStyles'

const App = ()  => {

  const [viewport, setViewport] = useState({
    latitude: 20,
    longitude: -20,
    width: "100vw",
    height: "100vh",
    zoom: 2
  
  })

  const [styleID, setStyleID] = useState("mapbox://styles/mapbox/light-v10")

   const changeStyleHandler = (newStyleID) =>
   {
     setStyleID(newStyleID);
   }

  return (
    <ReactMapGL {...viewport} 
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
    onViewportChange={viewport => {setViewport(viewport)}}
    mapStyle={styleID}
    >
      <MapStyles changeStyle={changeStyleHandler}/>

    </ReactMapGL>
  );
}

export default App;
