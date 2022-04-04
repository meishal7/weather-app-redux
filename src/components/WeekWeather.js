import styled from "styled-components";
import WeekWeatherItem from "./WeekWeatherItem";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const WeekWeatherStyle = styled.div`
  margin-bottom: var(--div-top-bottom-margin);
  margin-left: var(--div-left-right-margin);
  margin-right: var(--div-left-right-margin);
  background: var(--card-gradient);
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
  
`;

const WeekWeather = () => {
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
    <WeekWeatherStyle>
      {weatherData.daily.map((el, i) => (
        <WeekWeatherItem
          key={i}
          dayTime={currentWeatherDayTime}
          condition={el.weather[0].main}
          day={format(new Date(el.dt * 1000), "EEEE")}
          max={Math.floor(el.temp.max)}
          min={Math.floor(el.temp.min)}
          humidity={Math.floor(el.humidity)}
        />
      ))}
    </WeekWeatherStyle>
  );
};

export default WeekWeather;
