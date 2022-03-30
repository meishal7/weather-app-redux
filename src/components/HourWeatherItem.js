import styled from "styled-components";
import { WiDayCloudy } from "react-icons/wi";

const HourWeatherItemStyle = styled.div`
  border: solid 0.5px black;
`;

const HourWeatherItem = ({time, temp}) => {
  return (
    <HourWeatherItemStyle>
      <p>{time}</p>
      <WiDayCloudy color="red" size="2em" />
      <p>
        {temp}<span>&#8457;</span>
      </p>
    </HourWeatherItemStyle>
  );
};

export default HourWeatherItem;
