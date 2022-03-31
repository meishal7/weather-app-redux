import styled from "styled-components";
import WeekWeatherItem from "./WeekWeatherItem";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const WeekWeatherStyle = styled.div`
  border: solid 0.5px black;
  margin-bottom: var(--div-top-bottom-margin);
  margin-left: var(--div-left-right-margin);
  margin-right: var(--div-left-right-margin);
`;

const WeekWeather = () => {
  const { weatherData } = useSelector((state) => state);
  if (!weatherData.timezone) return null;

  return (
    <WeekWeatherStyle>
      {weatherData.daily.map((el, i) => (
        <WeekWeatherItem
          key={i}
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
