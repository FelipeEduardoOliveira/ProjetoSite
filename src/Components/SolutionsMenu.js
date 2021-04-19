import React from "react";
import "../Styles/SolutionsMenu.css";
import Ead from "../assets/Icons/ead.png";
import Gamification from "../assets/Icons/icon-gamification.png";
import Social from "../assets/Icons/icon-social.png";
import Mobile from "../assets/Icons/icon-app.png";

function SolutionsMenu() {
  return (
    <div className="containerSolutionMenu">
      <h1>Soluçoes Principais</h1>

      <div className="containerDetailMEnu">
        <div className="ContainerNumberOne">
          <div className="divRow">
            <img src={Ead} alt="Icone de Ead" />
            <div>
              <h3>Crie uma Escola Online</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="divRow">
            <img src={Social} alt="Icon  de Social" />
            <div>
              <h3>Comunidade e rede social</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        <div className="ContainerNumberTwo">
          <div className="divRow">
            <img src={Gamification} alt="Icon de Gamificação" />
            <div>
              <h3>Gamificação</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="divRow appDiv">
            <img src={Mobile} alt="Icon de Aplicativo" />
            <div>
              <h3>Aplicativo mobile</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionsMenu;
