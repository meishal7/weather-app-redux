import styled from "styled-components";
import { WiFahrenheit } from "react-icons/wi";

const WeatherConditionStyle = styled.div`
  border: solid 0.5px black;
`;

const WeatherConditionItem = ({header, value}) => {
  return (
    <WeatherConditionStyle>
      <h3 className="header">Oceanside</h3>
      <p className="curr-temp">
        Current Temp 77
        <WiFahrenheit color="red" size="2em" />
      </p>
      <div className="conditions">
        <p>Clear</p>
        <p>
          Min 56
          <WiFahrenheit color="red" size="2em" />
        </p>
        <p>
          Max 89
          <WiFahrenheit color="red" size="2em" />
        </p>
      </div>
    </WeatherConditionStyle>
  );
};

export default WeatherConditionItem;
