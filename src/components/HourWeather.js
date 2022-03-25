import styled from "styled-components";
import HourWeatherItem from "./HourWeatherItem";

const HourWeatherStyle = styled.div`
  border: solid 0.5px black;
  display: flex;
  flex-direction: row;
`;

const HourWeather = ({ hourWeatherArr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4] }) => {
  return (
    <HourWeatherStyle>
      {hourWeatherArr.map((item) => (
        <HourWeatherItem key={Math.random()} />
      ))}
    </HourWeatherStyle>
  );
};
export default HourWeather;
