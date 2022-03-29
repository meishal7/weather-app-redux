export async function getUserLocationWeather(dispatch, getState) {
  const WEATHER_KEY = process.env.REACT_APP_API_KEY;

  let state = getState();
  let lattitude = state.userLocationData.lat;
  let longtitude = state.userLocationData.lon;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longtitude}&units=imperial&appid=${WEATHER_KEY}`
    );

    const data = await response.json();
    console.log(data);

    dispatch({ type: "getUserLocationWeather", payload: data });
  } catch (err) {
    console.log("Failed load weather.Try later.");
    console.log(err.message);
  }
}
