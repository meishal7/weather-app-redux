import styled from "styled-components";
import WeekWeatherItem from "./WeekWeatherItem";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const WeekWeatherStyle = styled.div`
  border: solid 0.5px black;
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
          max={el.temp.max}
          min={el.temp.min}
          humidity={el.humidity}
        />
      ))}
    </WeekWeatherStyle>
  );
};

export default WeekWeather;
