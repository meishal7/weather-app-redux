import styled from "styled-components";
import HourWeatherItem from "./HourWeatherItem";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const HourWeatherStyle = styled.div`
  border: solid 0.5px black;
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
  /* padding-bottom: 15px;
  margin: 0;
  margin-bottom: -15px; */
  scrollbar-width: none;
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
          temp={Math.floor(el.temp)}
        />
      ))}
    </HourWeatherStyle>
  );
};
export default HourWeather;
