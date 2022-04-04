import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { format } from "date-fns";

const initialState = {
  weatherData: {},
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

    if (state.savedLocations.some((el) => el.city === cityName)) {
      return {
        weatherData: weatherData,
        savedLocations: state.savedLocations,
        userLocationData: state.userLocationData,
      };
    }
    let time = format(new Date(weatherData.current.dt * 1000), "hh:mmaa");
    const newLocationData = {
      city: cityName,
      temp: Math.floor(action.payload.current.temp),
      time: time,
      lat: action.payload.lat,
      lon: action.payload.lon,
      condition: action.payload.current.weather[0].main,
      timeZone: action.payload.timezone
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
