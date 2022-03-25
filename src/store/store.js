import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  weatherData: {},
  savedLocations: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "getWeather") {
    const weatherData = action.payload.data;
    return {
      weatherData: weatherData,
      savedLocations: [],
    };
  }
};

// export async function getLatLong(dispatch, getState) {
//   console.log("hello");
//   let coordinates = [];

//   const response = await fetch("https://ipinfo.io/json?token=3631683ef9a03a");

//   let data = {};

//   if (response.status >= 200 && response.status <= 299) {
//     data = await response.json();
//     console.log(data);
//   } else {
//     // Set default values in case of failed response
//     coordinates = ["33.1101", "-117.0700", "Escondido"];
//   }
//   coordinates = [...data.loc.split(","), data.city];
//   console.log(coordinates);

//   dispatch({ type: "getCoordinates", payload: coordinates });
// }

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, composedEnhancer);

export default store;
