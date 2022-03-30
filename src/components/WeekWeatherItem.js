import styled from "styled-components";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import {
  WiDayCloudy,
  WiThermometerExterior,
  WiThermometer,
  WiFahrenheit,
} from "react-icons/wi";
import { BsDroplet, BsPercent } from "react-icons/bs";

const WeekWeatherItemStyle = styled.div`
  border: solid 0.5px black;
  display: flex;
  flex-direction: row;
`;

const WeekWeatherItem = ({ day, max, min, humidity }) => {
  

  return (
    <WeekWeatherItemStyle>
      <p>{day}</p>
      <WiDayCloudy color="red" size="2em" />
      <WiThermometerExterior color="red" size="2em" />
      <p>
        {min}
        <span>&#8457;</span>
      </p>
      <WiThermometer color="red" size="2em" />
      <p>
        {max}
        <span>&#8457;</span>
      </p>
      <BsDroplet color="red" size="2em" />
      <p>
        {humidity}
        <BsPercent color="red" size="2em"></BsPercent>
      </p>
    </WeekWeatherItemStyle>
  );
};

export default WeekWeatherItem;
