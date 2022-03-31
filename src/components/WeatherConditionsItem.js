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

const WeatherConditionsItem = ({ header, description }) => {
  return (
    <WeatherConditionsItemStyle>
      <div className="condition-img">
        <BsDroplet color="red" size="2em" />
      </div>
      <div className="condition-info">
        <p>{header}</p>
        <p>{description}</p>
        <BsPercent />
      </div>
    </WeatherConditionsItemStyle>
  );
};

export default WeatherConditionsItem;
