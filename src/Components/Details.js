import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../Styles/Details.css";
import Line from "../assets/Icons/Line.png";
import Rocket from "../assets/Icons/Rocket.png";
import Arrow from "../assets/Icons/Arrow.png";
import CardDetails from "./CardDetail";

import api from "../service/api";

function Details() {
  const [details, setDetails] = useState([]);

  const clickButton = async () => {
    console.clear();
    await api
      .get()
      .then((response) => {
        // console.log(response);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ops!! Isso não é comum",
          "Mas calma, possa ser que vc tenha esquecido de rodar o json-server ou mudar a porta :)",
          "question"
        );
      });
  };
  useEffect(() => {
    clickButton();
  }, []);

  return (
    <section>
      <div className="headerDetails">
        <p className="firstMenu">
          {" "}
          <img src={Line} alt="Linha" />
          Pensando em cada detalhe
        </p>
        <p className="secondMenu">Conheça Alguns dos nossos recursos ⚡️</p>
      </div>

      <h1>Queremos que o aluno se sinta confortável enquanto aprende</h1>

      <div className="CardDetailsDiv">
        {details.map((item, key) => {
          return (
            <CardDetails
              img={item.icon}
              AlternativeText={item.title}
              Title={item.title}
              Description={item.description}
            />
          );
        })}
      </div>

      <hr />

      <div className="footerDetails">
        <p className="firstFooter">
          {" "}
          <img src={Rocket} alt="Linha" />
          Veja todos os outros recursos disponíveis para te ajudar
        </p>
        <p className="secondFooter">
          Ver mais
          <img src={Arrow} alt="Linha" />
        </p>
      </div>
    </section>
  );
}

export default Details;
