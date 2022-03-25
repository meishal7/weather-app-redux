import styled from "styled-components";
import { WiDayCloudy } from "react-icons/wi";

const HourWeatherItemStyle = styled.div`
  border: solid 0.5px black;
`;

const HourWeatherItem = () => {
  return (
    <HourWeatherItemStyle>
      <p>8AM</p>
      <WiDayCloudy color="red" size="2em" />
      <p>
        66<span>&#8457;</span>
      </p>
    </HourWeatherItemStyle>
  );
};

export default HourWeatherItem;
