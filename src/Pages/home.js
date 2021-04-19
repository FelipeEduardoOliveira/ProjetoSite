import React from "react";
import "../Styles/Home.css";

import Details from "../Components/Details";
import IconPlaylist from "../assets/Icons/icon-playlists.png";
import IconPlaylist2 from "../assets/Icons/icon-playlists2.png";
import IconCertified from "../assets/Icons/icon-certified.png";
import IconPlataform from "../assets/Icons/Plataform.png";
import playIcon from "../assets/Icons/playIcon.png";

function HomePage() {
  return (
    <div className="homeConatinerMani">
      <div className="logos">
        <img src={IconPlaylist} alt="icone do youtube" />
        <img
          src={IconCertified}
          alt="icone de certificado"
          className="CertifiedIcon"
        />
        <img src={IconPlaylist2} alt="icone do youtube" />
      </div>

      <div className="bodySection">
        <div className="TitleOne">
          <img src={IconPlataform} />
          <p>Plataforma All In One</p>
        </div>

        <h1>Sua escola online poderosa e lucrativa</h1>

        <p className="description">
          Tenha sua própria escola online 100% white label com rede social,
          gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
        </p>

        <div className="containerActionsButton">
          <button>Começar Agora</button>

          <a>
            {" "}
            <img src={playIcon} alt="Botão de play" />
            Ver video
          </a>
        </div>
      </div>

      <Details />
    </div>
  );
}

export default HomePage;
