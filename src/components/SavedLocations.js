import styled from "styled-components";
import SavedLocationWeatherItem from "./SavedLocationWeatherItem";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchLocationInput from "./SearchLocationInput";

const SavedLocationsStyle = styled.div`
  border: solid 0.5px black;
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

const Header = () => {
  const [city, setCity] = useState("");

  const cityHandler = (event) => {
    setCity(event.target.value);
  };

  const getWeatherHandler = (event) => {
    event.preventDefault();
  };

  return (
    <SavedLocationsStyle>
      <div className="locations">
        <SavedLocationWeatherItem />
        <SavedLocationWeatherItem />
        <SavedLocationWeatherItem />
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

export default Header;
