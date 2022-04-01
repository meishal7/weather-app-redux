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
