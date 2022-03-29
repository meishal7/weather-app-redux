/**
 * GENERAL PROGRAM DESCRIPTION
 * 
 * Once App.js is rendered, app makes a call to API to get user location data.
 * If faled to recieve user locataion data -> call to Weather API with default values,
 * otherwise use recieved user location data.
 * 
 * 
 */

import { Fragment, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import { GlobalStyle } from "./style/globalStyles";
import "./style/normalize.css";
import { useDispatch, useSelector } from "react-redux";
// import { getLatLong } from "./store/store";
import { getUserLocation } from "./modules/getUserLocation";
import { getWeather } from "./modules/getWeather";
import { getUserLocationWeather } from "./modules/getUserLocationWeather";
import initMap from "../src/modules/getWeatherGoogleMaps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLocation);
  
    // dispatch(getUserLocationWeather);
    //dispatch(getLatLong);
  }, []);

  return (
    <Fragment>
      <Wrapper />
    </Fragment>
  );
}

export default App;

/**
 * once app is rendered, get lat and long of user location
 * take lat and long and get weather
 * update store with recieved weather data
 * render recieved weather data on a screen
 */
