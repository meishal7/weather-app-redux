import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  weatherData: { test: 1 },
  savedLocations: [],
  userLocationData: {},
};

const reducer = (state = initialState, action) => {
  if (action.type === "getUserLocation") {
    let userLocData = {
      ...action.payload,
    };
    return {
      weatherData: state.weatherData,
      savedLocations: state.savedLocations,
      userLocationData: userLocData,
    };
  }
  if (action.type === "getUserLocationWeather") {
    const weatherData = action.payload;
    return {
      weatherData: weatherData,
      savedLocations: state.savedLocations,
      userLocationData: state.userLocationData,
    };
  }
  if (action.type === "getMapsQueryWeather") {
    const weatherData = action.payload;
    const cityName = action.payload.timezone.substring(
      action.payload.timezone.indexOf("/") + 1,
      action.payload.timezone.length
    );
    const newLocationData = {
      city: cityName,
      lat: action.payload.lat,
      lon: action.payload.lon,
    };

    const savedLocations = [...state.savedLocations, newLocationData];
    return {
      weatherData: weatherData,
      savedLocations: savedLocations,
      userLocationData: state.userLocationData,
    };
  }
  return state;
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, composedEnhancer);

export default store;
