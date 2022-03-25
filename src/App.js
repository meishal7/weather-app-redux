import { Fragment, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import { GlobalStyle } from "./style/globalStyles";
import "./style/normalize.css";
import { useDispatch } from "react-redux";
// import { getLatLong } from "./store/store";
import { getLatLong } from "./modules/getLatLong";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatLong);
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
