import styled from "styled-components";
import { BsDroplet, BsPercent } from "react-icons/bs";

const WeatherConditionsItemStyle = styled.div`
  border: solid 0.5px black;
  display: flex;
  flex-direction: row;
  width: 50%;
  /* min-width: 300px; */
  /* margin: 0 auto; */
`;

const WeatherConditionsItem = () => {
  return (
    <WeatherConditionsItemStyle>
      <div className="condition-img">
        <BsDroplet
          color="red"
          backgroundColor="pink"
          size="2em"
          background="#3B5998"
        />
      </div>
      <div className="condition-info">
        Humidity 51
        <BsPercent />
      </div>
    </WeatherConditionsItemStyle>
  );
};

export default WeatherConditionsItem;
