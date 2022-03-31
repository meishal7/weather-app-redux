import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { GlobalStyle } from "../style/globalStyles";

const HeaderStyle = styled.div`
  border: solid 0.5px black;

  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  margin: var(--div-top-bottom-margin) var(--div-top-bottom-margin);
  min-height: 200px;

  .header {
    text-align: center;
    padding-top: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  .curr-temp {
    text-align: center;
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
    font-size: 30px;
    font-weight: bold;
  }
  .conditions {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  }
  .min-max-temp {
    display: flex;
    flex-direction: row;
    margin-top: var(--div-top-bottom-margin);
    gap: 10px;
  }
`;

const Header = () => {
  const { weatherData } = useSelector((state) => state);

  console.log(weatherData);
  if (!weatherData.timezone) return null;
  //Extract city name separately here because it's long code
  let city = weatherData?.timezone.substring(
    weatherData.timezone.indexOf("/") + 1,
    weatherData.timezone.length
  );
  if (city.includes("_")) {
    city = city.replace("_", " ");
  }

  return (
    <HeaderStyle>
      <h3 className="header">{city}</h3>
      <p className="curr-temp">
        {Math.floor(weatherData.current.temp)}
        <span>&#8457;</span>
      </p>
      <div className="conditions">
        <p>{weatherData.current.weather[0].main}</p>
        <div className="min-max-temp">
          <p>
            Min {Math.floor(weatherData.daily[0].temp.min)}
            <span>&#8457;</span>
          </p>
          <p>
            Max {Math.floor(weatherData.daily[0].temp.max)}
            <span>&#8457;</span>
          </p>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
