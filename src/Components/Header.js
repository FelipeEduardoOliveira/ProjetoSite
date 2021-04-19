import React, { useState } from "react";
import Logo from "../assets/logo/symbol.png";
import Ensinio from "../assets/logo/Vector.png";
import Polygon from "../assets/Icons/Polygon.png";
import { HeaderMainContainer, NavegationContainer } from "../Styles/header";

import userIcon from "../assets/Icons/userIcon.png";
import "../Styles/Header.css";

import SolutionsMenu from "./SolutionsMenu";

function HomePage() {
  const [displayMenu, setDisplay] = useState(false);
  return (
    <HeaderMainContainer>
      <div className="logoTipo">
        <img src={Logo} alt="Logo da Ensinio" className="LogoTipoSymbol" />
        <img src={Ensinio} alt="Nome Ensinio" />
      </div>

      <NavegationContainer>
        <a className="menu" onClick={() => setDisplay(!displayMenu)}>
          Soluçoes <img src={Polygon} alt="Poligono Icon" />
        </a>
        <a className="menu">Preços</a>
        <a className="menu">Academy</a>
        <a className="menu">Blog</a>
        <a className="menu">Contatos</a>

        <p className="BarrSeparete menu">|</p>

        <a>
          {" "}
          <img src={userIcon} alt="Icone de usuário" />
          Entrar
        </a>
        <button>Começar Agora</button>
        <a>
          PT <img src={Polygon} alt="Poligono Icon" />
        </a>
      </NavegationContainer>
      <div className={displayMenu ? "" : "displayNone"}>
        <SolutionsMenu />
      </div>
    </HeaderMainContainer>
  );
}

export default HomePage;
