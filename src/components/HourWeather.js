import styled from "styled-components";
import HourWeatherItem from "./HourWeatherItem";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const HourWeatherStyle = styled.div`
  display: flex;
  max-width: 1000px;
  overflow: scroll;
  margin-bottom: var(--div-top-bottom-margin);
  margin-left: var(--div-left-right-margin);
  margin-right: var(--div-left-right-margin);
  scroll-behavior: smooth;
  gap: 15px;
  list-style-type: none;
  padding-left: 0;
  justify-content: space-between;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding-bottom: 15px;
  padding-top: 15px;
  background: var(--card-gradient);
  border-radius: 6px;
  padding: 1.5rem;
  margin: 1.5rem;
  box-shadow: var(--box-shadow);
`;

const HourWeather = () => {
  const { weatherData } = useSelector((state) => state);
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

  // Determine if it's day or night for correct background img
  const convertedDate = convertTZ(new Date(), weatherData.timezone);

  console.log(convertedDate.getHours());

  let currentWeatherDayTime = "";

  convertedDate.getHours() >= 6 && convertedDate.getHours() < 18
    ? (currentWeatherDayTime = "day")
    : (currentWeatherDayTime = "night");


  
  return (
    
    <HourWeatherStyle>
      {weatherData.hourly.map((el, i) => (
        <HourWeatherItem
          key={i}
          condition={el.weather[0].main}
          dayTime={currentWeatherDayTime}
          time={format(new Date(el.dt * 1000), "h:aa")}
          temp={Math.floor(el.temp)}
        />
      ))}
    </HourWeatherStyle>
  );
};
export default HourWeather;
