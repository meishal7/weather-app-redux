/* This function fetches weather data with lattitude and longtitude recived 
    from Google Maps API once user searches for a city in a search field.
*/

// export default function initMap(input) {
//   if (!input) return;
//   const options = {
//     fields: ["geometry", "icon", "name", "place_id"],
//     strictBounds: false,
//     types: ["(cities)"],
//   };
//   const dropdown = google.maps.places.Autocomplete(input, options);

//   dropdown.addListener("place_changed", () => {
//     const place = dropdown.getPlace();
//     const weather = async () => {
//       let weatherData = await getWeather(
//         place.geometry.location.lat(),
//         place.geometry.location.lng()
//       );
//       let city = place.name;
//       const { hourly, daily } = weatherData;
//     };
//   });

//   input.addEventListener("keydown", (e) => {
//     if (e.keyCode === 13) {
//       e.preventDefault();
//     }
//   });
// }
