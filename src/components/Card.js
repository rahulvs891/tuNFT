import React from "react";
import "../styles/card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + `${props.item.musicImg}`}
        alt="card-img"
        style={{ width: "13rem", height: "13rem", borderRadius: "0.5rem" }}
      />
      <div className="info">
        <div>{props.item.songName}</div>
        <div>Artist Name: {props.item.artistName}</div>
        <div>{props.item.price}</div>
      </div>
      <button type="button" className="button-36">BUY</button>
    </div>
  );
};

export default Card;
