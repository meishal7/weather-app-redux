export async function getWeatherMapsQuery(dispatch, getState) {
  const apiKey = process.env.REACT_APP_API_KEY;

  let coordinates = [];
  let data = {};

  const response = await fetch("https://ipinfo.io/json?token=3631683ef9a03a");

  if (response.status >= 200 && response.status <= 299) {
    data = await response.json();
  } else {
    // Set default values in case of failed response
    coordinates = ["33.1101", "-117.0700", "Escondido"];
  }
  coordinates = [...data.loc.split(","), data.city];

  let lattitude = coordinates[0];
  let longtitude = coordinates[1];

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longtitude}&units=imperial&appid=${apiKey}`
    );

    const data = await response.json();
    console.log(data);
    dispatch({ type: "getWeather", payload: data });
  } catch (err) {
    console.log(err.message);
  }
}
