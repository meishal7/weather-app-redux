/**
 * GENERAL PROGRAM DESCRIPTION
 *
 * Once App.js is rendered, app makes a call to API to get user location data.
 * If faled to recieve user locataion data -> call to Weather API with default values,
 * otherwise use recieved user location data.
 *
 *
 */
import { Fragment, useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getUserLocation } from "./modules/getUserLocation";
import { GlobalStyle } from "./style/globalStyles";
import "./style/normalize.css";

// import initMap from "../src/modules/getWeatherGoogleMaps";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLocation);
  }, []);

  const { weatherData } = useSelector((state) => state);
  if (!weatherData) setLoading(true);
  // {!loading && <Wrapper />}
  return <Wrapper />;
}

export default App;

/**
 * once app is rendered, get lat and long of user location
 * take lat and long and get weather
 * update store with recieved weather data
 * render recieved weather data on a screen
 */
