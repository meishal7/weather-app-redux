import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { GlobalStyle } from "../style/globalStyles";
import dayClear from "../static/images/backgrounds/day-Clear.png";

const HeaderStyle = styled.div`
  background-image: url(${dayClear});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 25%;
  min-height: 300px;
  border-bottom-left-radius: 81% 15%;
  border-bottom-right-radius: 81% 15%;
  box-shadow: inset 0px -6px 4px rgba(0, 0, 0, 0.25);

  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  margin: var(--div-top-bottom-margin) var(--div-top-bottom-margin);
  /* min-height: 200px; */

  .header {
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    margin: 0 0;
    padding-top: 30px;
    color: #fffafa;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
  .curr-temp {
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);

    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    margin: 0 0;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
  .conditions {
    width: 80%;
    margin-left: var(--div-left-right-margin);
    display: flex;
    flex-direction: column;
    //padding: var(--div-top-bottom-padding) var(--div-left-right-padding);

    padding-left: 1.5rem;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    margin: 0 0;
    color: #ffffff;
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

  // Function for converting time to displayed location timezone time
  const convertTZ = (date, tzString) => {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: tzString }
      )
    );
  };

  // Determine if it's day or night for correct background img
  const convertedDate = convertTZ(new Date(), weatherData.timezone);
  console.log(convertedDate.getHours());
  let currentWeatherDayTime = "";
  convertedDate.getHours() >= 6 && convertedDate.getHours() < 18
    ? (currentWeatherDayTime = "day")
    : (currentWeatherDayTime = "night");

  // currWeatherDiv.style.backgroundImage = `url('/images/backgrounds/${currentWeatherDayTime}-${weatherData.current.weather[0].main}.png')`;

  return (
    <HeaderStyle
      style={
        {
          // backgroundImage: `url('../static/images/backgrounds/${currentWeatherDayTime}-${weatherData.current.weather[0].main}.png')`,
        }
      }
    >
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
