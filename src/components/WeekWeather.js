import styled from "styled-components";
import WeekWeatherItem from "./WeekWeatherItem";

const WeekWeatherStyle = styled.div`
  border: solid 0.5px black;
`;

const WeekWeather = ({ weekWeatherArr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4] }) => {
  return (
    <WeekWeatherStyle>
      {weekWeatherArr.map((item) => (
        <WeekWeatherItem key={Math.random()} />
      ))}
    </WeekWeatherStyle>
  );
};

export default WeekWeather;
