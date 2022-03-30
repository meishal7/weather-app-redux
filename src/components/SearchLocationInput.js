import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";

let autoComplete;
let crd = [];

// Loading google places script and inserting it into header tag
function loadScript(url, callback) {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => {
      crd = callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
  return crd;
}

function handleScriptLoad(updateQuery, autoCompleteRef, setState) {
  const options = {
    fields: ["geometry", "icon", "name", "place_id"],
    strictBounds: false,
    types: ["(cities)"],
  };
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    options
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, setState)
  );
}
async function handlePlaceSelect(updateQuery, setState) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  let lat = addressObject.geometry.location.lat();
  let lng = addressObject.geometry.location.lng();
  setState([lat, lng]);
}

function SearchLocationInput() {
  const dispatch = useDispatch();
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [coord, setCoord] = useState([]);
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef, setCoord)
    );
  }, []);

  async function getWeather(dispatch, getState) {
    const WEATHER_KEY = process.env.REACT_APP_API_KEY;
    let lattitude = coord[0];
    let longtitude = coord[1];

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longtitude}&units=imperial&appid=${WEATHER_KEY}`
      );

      const data = await response.json();
      console.log(data);

      dispatch({ type: "getMapsQueryWeather", payload: data });
    } catch (err) {
      console.log("Failed load weather.Try later.");
      console.log(err.message);
    }
  }

  const submitLocationQueryHandler = (e) => {
    e.preventDefault();
    dispatch(getWeather);
  };

  return (
    <div className="search-location-input">
      <form onSubmit={submitLocationQueryHandler}>
        <input
          ref={autoCompleteRef}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter a City"
          value={query}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchLocationInput;
