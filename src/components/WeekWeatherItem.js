import styled from "styled-components";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import {
  WiDayCloudy,
  WiThermometerExterior,
  WiThermometer,
  WiFahrenheit,
} from "react-icons/wi";
import { BsDroplet, BsPercent } from "react-icons/bs";

const WeekWeatherItemStyle = styled.div`
  padding: 6px 6px;
  border-bottom: 0.5px solid red;
  display: grid;
  grid-template-columns: 150px 100px 1fr 1fr 1fr;
  grid-template-areas: "day condition min max humidity";
  margin: 10px 0;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  align-items: center;
  div {
    display: flex;
  }
  .day {
    grid-area: day;
  }
  .condition {
    grid-area: condition;
    //padding-right: 10px;
  }
  .min {
    grid-area: min;
  }
  .max {
    grid-area: max;
  }
  .humidity {
    grid-area: humidity;
  }
`;

const WeekWeatherItem = ({ day, max, min, humidity }) => {
  return (
    <WeekWeatherItemStyle>
      <p className="day">{day}</p>
      <WiDayCloudy color="red" size="2em" className="condition" />
      <div className="min">
        <WiThermometerExterior color="red" size="2em" />
        <p>
          {min}
          <span>&#8457;</span>
        </p>
      </div>
      <div className="max">
        <WiThermometer color="red" size="2em" />
        <p className="max">
          {max}
          <span>&#8457;</span>
        </p>
      </div>
      <div className="humidity">
        <BsDroplet color="red" size="2em" />
        <p className="humidity">
          {humidity}%{/* <BsPercent color="red" size="2em"></BsPercent> */}
        </p>
      </div>
    </WeekWeatherItemStyle>
  );
};

export default WeekWeatherItem;
