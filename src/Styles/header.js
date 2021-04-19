import styled from "styled-components";
import Styled from "styled-components";

export const HeaderMainContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  box-shadow: 1px 4px 20px 0px rgba(95, 65, 217, 1);
  background-image: linear-gradient(
    to right,
    rgba(95, 65, 217, 1),
    rgba(65, 181, 217, 1)
  );

  .LogoTipoSymbol {
    margin-right: 10px;
  }

  @media (max-width: 1092px) {
    .logoTipo {
      display: none;
    }
    padding: 0;
  }
`;

export const NavegationContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    padding: 15px;
    margin: 0 5px;
    color: white;
    font-size: 15px;
    font-weight: 500;
    /* font-family: inter; */
    align-items: center;
  }

  img {
    padding: 0 5px;
  }

  button {
    height: 40px;
    width: 160px;
    left: 1090px;
    top: 24px;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: transparent;
    border-radius: 80px;
    font-size: 15px;
    font-weight: 600;
    color: white;
  }

  .BarrSeparete {
    color: rgba(153, 243, 245, 1);
    padding: 0 50px;
  }

  @media (max-width: 920px) {
    .BarrSeparete {
      padding: 0;
    }
  }
  @media (max-width: 827px) {
    .menu {
      display: none;
    }
  }
`;
