import styled from "styled-components";
import HourWeatherItem from "./HourWeatherItem";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const HourWeatherStyle = styled.div`
  border: solid 0.5px black;
  display: flex;
  max-width: 1000px;
  overflow: scroll;
`;

const HourWeather = () => {
  const { weatherData } = useSelector((state) => state);
  if (!weatherData.timezone) return null;

  return (
    <HourWeatherStyle>
      {weatherData.hourly.map((el, i) => (
        // var convertedTime = format(new Date(el.dt), "hh");
        <HourWeatherItem
          key={i}
          time={format(new Date(el.dt * 1000), "h:aa")}
          temp={el.temp}
        />
      ))}
    </HourWeatherStyle>
  );
};
export default HourWeather;
