import React from "react";
import "./card.css";

const Card = ({ style = {}, name, price, speed, description }) => {
  return (
    <div className="card" style={style}>
      <div className="rc-name">{name}</div>
      <div className="rc-price">{price}</div>
      <div className="rc-speed">{speed}</div>
      <div className="rc-description">{description}</div>
    </div>
  );
};

export default Card;
