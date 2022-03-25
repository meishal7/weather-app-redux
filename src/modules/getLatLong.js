export async function getLatLong(dispatch, getState) {
  let coordinates = [];

  const response = await fetch("https://ipinfo.io/json?token=3631683ef9a03a");

  let data = {};

  if (response.status >= 200 && response.status <= 299) {
    data = await response.json();
    console.log(data);
  } else {
    // Set default values in case of failed response
    coordinates = ["33.1101", "-117.0700", "Escondido"];
  }
  coordinates = [...data.loc.split(","), data.city];
  console.log(coordinates);

  dispatch({ type: "getCoordinates", payload: coordinates });
}
