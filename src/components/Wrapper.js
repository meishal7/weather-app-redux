import styled from "styled-components";
import Header from "./Header";
import HourWeather from "./HourWeather";
import SavedLocations from "./SavedLocations";
import WeatherConditionsItem from "./WeatherConditionsItem";
import WeekWeather from "./WeekWeather";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import drop from "../images/icons/drop.png";
import sunrise from "../images/icons/sunrise.png";
import sunset from "../images/icons/sunset.png";
import wind from "../images/icons/wind.png";
import pressure from "../images/icons/pressure.png";
import thermometer from "../images/icons/thermometer-high.png";

const WrapperStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  .current-location {
    flex: 1 1 70%;
    overflow: hidden;
  }
  .weather-conditions {
    display: grid  ;
    grid-template-columns: 1fr 1fr ;
    gap: 20px;
    margin-top: var(--div-top-bottom-margin);
    margin-bottom: var(--div-top-bottom-margin);
    margin-left: var(--div-left-right-margin);
    margin-right: var(--div-left-right-margin);
  }
  .saved-locations {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex: 1 1 30%;
    margin-top: var(--div-top-bottom-margin);
    margin-bottom: var(--div-top-bottom-margin);
    margin-left: var(--div-left-right-margin);
    margin-right: var(--div-left-right-margin);
  }
`;

const Wrapper = () => {
  const { weatherData } = useSelector((state) => state);
  if (!weatherData.timezone) return null;

  let windDir = "";
  if (weatherData.current.wind_deg >= 0 && weatherData.current.wind_deg <= 90) {
    windDir = "ene";
  }
  if (
    weatherData.current.wind_deg > 90 &&
    weatherData.current.wind_deg <= 180
  ) {
    windDir = "ese";
  }
  if (
    weatherData.current.wind_deg > 180 &&
    weatherData.current.wind_deg <= 240
  ) {
    windDir = "wsw";
  }
  if (
    weatherData.current.wind_deg > 240 &&
    weatherData.current.wind_deg <= 360
  ) {
    windDir = "wnw";
  }

  return (
    <WrapperStyle>
      <div className="current-location">
        <Header />
        <HourWeather />
        <WeekWeather />
        <div className="weather-conditions">
          <WeatherConditionsItem
            header={"Sunrise"}
            description={format(
              new Date(weatherData.current.sunrise * 1000),
              "hh:mmaa"
            )}
            imgName={sunrise}
          />
          <WeatherConditionsItem
            header={"Sunset"}
            description={format(
              new Date(weatherData.current.sunset * 1000),
              "hh:mmaa"
            )}
            imgName={sunset}
          />
          <WeatherConditionsItem
            header={"Humidity"}
            description={weatherData.current.humidity + "%"}
            imgName={drop}
          />
          <WeatherConditionsItem
            header={"Pressure"}
            description={weatherData.current.pressure}
            imgName={pressure}
          />
          <WeatherConditionsItem
            header={"Feels Like"}
            description={Math.floor(weatherData.current.feels_like) + "\u2109"}
            imgName={thermometer}
          />
          <WeatherConditionsItem
            header={"Wind"}
            description={
              windDir +
              " " +
              Math.floor(weatherData.current.wind_speed) +
              " " +
              "mph"
            }
            imgName={wind}
          />
        </div>
      </div>
      <div className="saved-locations">
        <SavedLocations />
      </div>
    </WrapperStyle>
  );
};

export default Wrapper;
