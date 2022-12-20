import styled from "styled-components";

const Header = () => {
  return (
    <Trackit>
      <Usuario />
    </Trackit>
  );
};

export default Header;

const Trackit = styled.div`
  position: absolute;
  width: 375px;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Usuario = styled.img`
  height: 51px;
  width: 51px;
  left: 306px;
  top: 9px;
  border-radius: 98.5px;
`;
