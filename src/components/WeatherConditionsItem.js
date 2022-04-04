import styled from "styled-components";

const WeatherConditionsItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: var(--card-gradient);
  border-radius: 6px;
  padding: 20px;

  box-shadow: var(--box-shadow);
  .icon {
    width: 70px;
    max-height: 50px;
    object-fit: contain;
    
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 21px;
    text-align: right;
    padding-top: 10px;

    color: rgba(0, 0, 0, 0.45);
  }
  .condition-info {
    flex: 1;
  }
  .condition-info p + p {
    font-size: 20px;
  }
`;

const WeatherConditionsItem = ({ header, description, imgName }) => {
  return (
    <WeatherConditionsItemStyle>
      <div className="condition-img">
        <img className="icon" alt="Weather condition icon" src={imgName} />
      </div>
      <div className="condition-info">
        <p>{header}</p>
        <p>{description}</p>
      </div>
    </WeatherConditionsItemStyle>
  );
};

export default WeatherConditionsItem;
