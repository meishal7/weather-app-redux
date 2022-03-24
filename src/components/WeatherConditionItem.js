import styled from "styled-components";
import { WiFahrenheit } from "react-icons/wi";

const WeatherConditionStyle = styled.div`
  border: solid 0.5px black;
`;

const WeatherConditionItem = () => {
  return (
    <WeatherConditionStyle>
      <h3 className="header">Oceanside</h3>
      <p className="curr-temp">
        Current Temp 77
        <WiFahrenheit
          color="red"
          backgroundColor="pink"
          size="2em"
          background="#3B5998"
        />
      </p>
      <div className="conditions">
        <p>Clear</p>
        <p>
          Min 56
          <WiFahrenheit
            color="red"
            backgroundColor="pink"
            size="2em"
            background="#3B5998"
          />
        </p>
        <p>
          Max 89
          <WiFahrenheit
            color="red"
            backgroundColor="pink"
            size="2em"
            background="#3B5998"
          />
        </p>
      </div>
    </WeatherConditionStyle>
  );
};

export default WeatherCondition;
