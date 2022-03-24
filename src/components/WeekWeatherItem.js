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
      <WiDayCloudy
        color="red"
        backgroundColor="pink"
        size="2em"
        background="#3B5998"
      />
      <WiThermometerExterior
        color="red"
        backgroundColor="pink"
        size="2em"
        background="#3B5998"
      />
      <p>
        66<span>&#8457;</span>
      </p>
      <WiThermometer
        color="red"
        backgroundColor="pink"
        size="2em"
        background="#3B5998"
      />
      <p>
        78<span>&#8457;</span>
      </p>
      <BsDroplet
        color="red"
        backgroundColor="pink"
        size="2em"
        background="#3B5998"
      />
      <p>
        45
        <BsPercent
          color="red"
          backgroundColor="pink"
          size="2em"
          background="#3B5998"
        ></BsPercent>
      </p>
    </WeekWeatherItemStyle>
  );
};

export default WeekWeatherItem;
