import styled from "styled-components";

const HeaderStyle = styled.div`
  border: solid 0.5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    text-align: center;
  }
  .conditions {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h3 className="header">Oceanside</h3>
      <p className="curr-temp">
        Current Temp 77<span>&#8457;</span>
      </p>
      <div className="conditions">
        <p>Clear</p>
        <p>
          Min 56<span>&#8457;</span>
        </p>
        <p>
          Max 89<span>&#8457;</span>
        </p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
