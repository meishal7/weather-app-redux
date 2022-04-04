import styled from "styled-components";


const SavedLocationWeatherStyle = styled.div`
  padding: 15px;
  border-radius: 10px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fffafa;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: var(--div-top-bottom-margin);
  background-image: url("${({ dt, conditions }) =>
      `/images/backgrounds/${dt}-${conditions}.png`}");
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  align-items: center;

  max-width: inherit;
  .loc-name-btn:hover {
    cursor: pointer;
  }
  .loc-name-btn {
    width: 100%;
    min-height: 20px;
    margin-top: 15px;
    font-size: 25px;
    color: #fffafa;
  }
  .temp {
    font-size: 30px;
  }
`;

const SavedLocationWeatherItem = ({ city, temp, time, dayTime, condition }) => {
  return (
    <SavedLocationWeatherStyle dt={dayTime} conditions={condition}>
      <div className="description">
        <p>{time}</p>
        <button type="button" className="loc-name-btn" >
          {city}
        </button>
      </div>
      <div className="temp">
        <p>
          {temp}
          <span>&#8457;</span>
        </p>
      </div>
    </SavedLocationWeatherStyle>
  );
};

export default SavedLocationWeatherItem;
