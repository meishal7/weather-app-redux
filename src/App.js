import { Fragment, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import { GlobalStyle } from "./style/globalStyles";
import "./style/normalize.css";
import { useDispatch, useSelector } from "react-redux";
// import { getLatLong } from "./store/store";
import { getLatLong } from "./modules/getLatLong";
import { getWeather } from "./modules/getWeather";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather);
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
