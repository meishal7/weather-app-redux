import styled from "styled-components";
import SavedLocationWeatherItem from "./SavedLocationWeatherItem";
import SearchLocationInput from "./SearchLocationInput";
import { useSelector } from "react-redux";

const SavedLocationsStyle = styled.div`
  max-width: inherit;
  overflow-x: auto;
`;

const SavedLocations = () => {
  const { savedLocations, weatherData } = useSelector((state) => state);
  if (!savedLocations) return null;
  if (!weatherData.timezone) return null;

  // Function for converting time to displayed location timezone time
  const convertTZ = (date, tzString) => {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: tzString }
      )
    );
  };

 

  return (
    <SavedLocationsStyle>
      <div className="locations">
        {savedLocations.map((el, i) => {
           let convertedDate = convertTZ(new Date(), el.timeZone);
           
           let currentWeatherDayTime = "";

           convertedDate.getHours() >= 6 && convertedDate.getHours() < 18
            ? (currentWeatherDayTime = "day")
            : (currentWeatherDayTime = "night");

          return (<SavedLocationWeatherItem
            condition={el.condition}
            dayTime={currentWeatherDayTime}
            key={i}
            city={el.city}
            temp={el.temp}
            time={el.time}
          />)
        })}
      </div>
      <div className="search">
        <SearchLocationInput />
      </div>
    </SavedLocationsStyle>
  );
};

export default SavedLocations;
