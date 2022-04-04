import styled from "styled-components";

const HourWeatherItemStyle = styled.div`
  scroll-snap-align: start;
  flex: 1 0 50px;
  align-items: center;
  
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.45);
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
`;

const HourWeatherItem = ({ time, temp, condition, dayTime }) => {
  console.log(condition, dayTime);
  return (
    <HourWeatherItemStyle dt={dayTime} conditions={condition}>
      <p>{time}</p>
      <div className="icon"></div>
      <p>
        {temp}
        <span>&#8457;</span>
      </p>
    </HourWeatherItemStyle>
  );
};

export default HourWeatherItem;
