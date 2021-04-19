import React from "react";
import "../Styles/CardDetails.css";

function CardDetails(props) {
  return (
    <div className="CardDetailsContainer">
      <img src={props.img} atl={props.AlternativeText} />

      <h2>{props.Title}</h2>
      <p>{props.Description}</p>
    </div>
  );
}

export default CardDetails;
