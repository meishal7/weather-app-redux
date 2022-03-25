import styled from "styled-components";
import Header from "./Header";
import HourWeather from "./HourWeather";
import SavedLocations from "./SavedLocations";
import SearchLocationInput from "./SearchLocationInput";
import WeatherConditionsItem from "./WeatherConditionsItem";
import WeekWeather from "./WeekWeather";

const WrapperStyle = styled.div`
  border: solid 1px black;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  .weather-conditions {
    display: flex;
    flex-wrap: wrap;
  }
  .saved-locations {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const Wrapper = () => {
  return (
    <WrapperStyle>
      <div className="current-location">
        <Header />
        <HourWeather />
        <WeekWeather />
        <div className="weather-conditions">
          <WeatherConditionsItem />
          <WeatherConditionsItem />
          <WeatherConditionsItem />
          <WeatherConditionsItem />
          <WeatherConditionsItem />
          <WeatherConditionsItem />
        </div>
      </div>
      <div className="saved-locations">
        <SavedLocations />
      </div>
    </WrapperStyle>
  );
};

export default Wrapper;
