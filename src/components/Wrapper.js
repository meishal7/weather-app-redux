import styled from "styled-components";
import Header from "./Header";
import HourWeather from "./HourWeather";
import SavedLocations from "./SavedLocations";
import WeatherConditionsItem from "./WeatherConditionsItem";
import WeekWeather from "./WeekWeather";
import { useSelector } from "react-redux";
import { format } from "date-fns";

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
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
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
          />
          <WeatherConditionsItem
            header={"Sunset"}
            description={format(
              new Date(weatherData.current.sunset * 1000),
              "hh:mmaa"
            )}
          />
          <WeatherConditionsItem
            header={"Humidity"}
            description={weatherData.current.humidity}
          />
          <WeatherConditionsItem
            header={"Pressure"}
            description={weatherData.current.pressure}
          />
          <WeatherConditionsItem
            header={"Feels Like"}
            description={weatherData.current.feels_like}
          />
          <WeatherConditionsItem
            header={"Wind"}
            description={weatherData.current.wind}
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
