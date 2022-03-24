import styled from "styled-components";
import {
  WiDayCloudy,
  WiThermometerExterior,
  WiThermometer,
  WiFahrenheit,
} from "react-icons/wi";

const SavedLocationWeatherStyle = styled.div`
  border: solid 0.5px black;
  display: flex;
  .loc-name-btn {
    border: solid 0.5px black;
    min-height: 50px;
    width: 100%;
  }
`;

const SavedLocationWeatherItem = () => {
  return (
    <SavedLocationWeatherStyle>
      <div className="description">
        <p>France</p>
        <button type="button" className="loc-name-btn">
          Paris
        </button>
        <p>
          20<span>&#8457;</span>
        </p>
      </div>
      <div className="icon">
        <WiDayCloudy
          color="red"
          backgroundColor="pink"
          size="2em"
          background="#3B5998"
        />
      </div>
    </SavedLocationWeatherStyle>
  );
};

export default SavedLocationWeatherItem;
