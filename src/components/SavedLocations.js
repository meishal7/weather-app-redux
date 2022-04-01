import styled from "styled-components";
import SavedLocationWeatherItem from "./SavedLocationWeatherItem";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchLocationInput from "./SearchLocationInput";
import { useSelector } from "react-redux";

const SavedLocationsStyle = styled.div`
  max-width: inherit;
  overflow-x: auto;
  /* .input-area {
    margin-top: 10px;
    background: #fbf7ff;
    width: 300px;
    border-radius: 5px;
    height: 40px;
    border: 2px solid #eceaea;
    background-color: #e6e3e8;
  }
  .input-area:focus {
    border: 2px solid #b5afaf;
  } */
`;

const SavedLocations = () => {
  const { savedLocations } = useSelector((state) => state);

  if (!savedLocations) return null;

  return (
    <SavedLocationsStyle>
      <div className="locations">
        {savedLocations.map((el, i) => (
          <SavedLocationWeatherItem
            key={i}
            city={el.city}
            temp={el.temp}
            time={el.time}
          />
        ))}
      </div>
      <div className="search">
        <SearchLocationInput />

        {/* <form onSubmit={getWeatherHandler}>
          <input
            className="input-area"
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={city}
            onChange={cityHandler}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form> */}
      </div>
    </SavedLocationsStyle>
  );
};

export default SavedLocations;
