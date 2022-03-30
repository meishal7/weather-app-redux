import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

const HeaderStyle = styled.div`
  border: solid 0.5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    text-align: center;
  }
  .conditions {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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
        {weatherData.current.temp}
        <span>&#8457;</span>
      </p>
      <div className="conditions">
        <p>{weatherData.current.weather[0].main}</p>
        <p>
          Min {weatherData.daily[0].temp.min}
          <span>&#8457;</span>
        </p>
        <p>
          Max {weatherData.daily[0].temp.max}
          <span>&#8457;</span>
        </p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
