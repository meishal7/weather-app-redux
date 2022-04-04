import styled from "styled-components";


const WeekWeatherItemStyle = styled.div`
  .general-p {
    align-self: center;
    padding-left: 10px;
  }
  align-items: center;
  font-size: 1.2rem;
  justify-items: center;
  padding: 6px 6px;
  border-bottom: 1px solid var(--border-color);
  display: grid;
  grid-template-columns: 150px 100px 1fr 1fr 1fr;
  grid-template-areas: "day condition min max humidity";
  margin: 10px 0;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  
  div {
    display: flex;
  }
  .day {
    grid-area: day;
    justify-self: start;
    padding-left: 10px;
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
  .icon {
    align-items: center;
    margin: 0.5rem 0;
    height: 36px;
    width: 36px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("${({ dt, conditions }) =>
      `/images/icons/${dt}-${conditions}.png`}");
  }
 
  .thermometer-high,  .thermometer-low, .drop{
    height: 50px;
    width: 36px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
   
  }
`;

const WeekWeatherItem = ({ day, max, min, humidity, dayTime, condition }) => {
  return (
    <WeekWeatherItemStyle dt={dayTime} conditions={condition}>
      <p className="day">{day}</p>
      <div className="icon" alt="Weather condition icon"></div>
      <div className="min">
        <img src="/images/icons/thermometer-low.png" alt="Thermometer icon" className="thermometer-low"></img>
        <p className="general-p">
          {min}
          <span>&#8457;</span>
        </p>
      </div>
      <div className="max">
      <img src="/images/icons/thermometer-high.png" alt="Thermometer icon" className="thermometer-high"></img>
        <p className="general-p">
          {max}
          <span>&#8457;</span>
        </p>
      </div>
      <div className="humidity">
      <img src="/images/icons/drop.png" alt="Drop icon" className="drop"></img>
        <p className="general-p">
          {humidity}%
        </p>
      </div>
    </WeekWeatherItemStyle>
  );
};

export default WeekWeatherItem;
