import styled from "styled-components";
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

const WeekWeatherItem = () => {
  return (
    <WeekWeatherItemStyle>
      <p>Monday</p>
      <WiDayCloudy color="red" size="2em" />
      <WiThermometerExterior color="red" size="2em" />
      <p>
        66<span>&#8457;</span>
      </p>
      <WiThermometer color="red" size="2em" />
      <p>
        78<span>&#8457;</span>
      </p>
      <BsDroplet color="red" size="2em" />
      <p>
        45
        <BsPercent color="red" size="2em"></BsPercent>
      </p>
    </WeekWeatherItemStyle>
  );
};

export default WeekWeatherItem;
