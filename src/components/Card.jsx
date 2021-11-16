import React from "react";

function Card({ sprite, name, id }) {

  return (
    <div>
      <p>{`#${id}`}</p>
      <img src={sprite} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Card;
