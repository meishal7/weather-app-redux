import { getUserLocationWeather } from "./getUserLocationWeather";

export async function getUserLocation(dispatch, getState) {
  const response = await fetch("https://ipinfo.io/json?token=3631683ef9a03a");

  let cityData = {};

  if (response.status >= 200 && response.status <= 299) {
    const data = await response.json();

    cityData = {
      city: data.city,
      lat: data.loc.substring(0, data.loc.indexOf(",")),
      lon: data.loc.substring(data.loc.indexOf(",") + 1, data.loc.length - 1),
    };
  } else {
    // Set default values in case of failed response
    cityData = {
      city: "Escondido",
      lat: "33.1101",
      lon: "-117.0700",
    };
  }

  dispatch({ type: "getUserLocation", payload: cityData });
  dispatch(getUserLocationWeather);
}
