import styled from "styled-components";
import { WiDayCloudy } from "react-icons/wi";

const HourWeatherItemStyle = styled.div`
  scroll-snap-align: start;
  flex: 1 0 50px;
  text-align: center;
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

const HourWeatherItem = ({ time, temp }) => {
  return (
    <HourWeatherItemStyle>
      <p>{time}</p>
      <WiDayCloudy color="red" size="2em" />
      <p>
        {temp}
        <span>&#8457;</span>
      </p>
    </HourWeatherItemStyle>
  );
};

export default HourWeatherItem;
