import React from "react";

const Card = ({ title, value, className }) => (
  <div className={`card ${className}`}>
    <p>{title}</p>
    <h1>{value}</h1>
  </div>
);

export default Card;
