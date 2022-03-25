import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  weatherData: { test: 1 },
  savedLocations: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "getWeather") {
    const weatherData = action.payload;
    return {
      weatherData: weatherData,
      savedLocations: [],
    };
  }
  // return state;
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, composedEnhancer);

export default store;
