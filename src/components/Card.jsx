import React, { useState, useEffect } from "react";

function Card({ url }) {
  const [id, setId] = useState();
  const [picture, setPicture] = useState();
  const [name, setName] = useState();

  const fetchURL = async () => {
    const response = await fetch(url);
    const results = response.json();
    return results;
  }

  const setInfo = async () => {
    const response = await fetchURL();
    setId(response.id)
    setPicture(response.sprites.front_default)
    setName(response.name);
  }

  useEffect(() => {
    setInfo();
  }, []);

  return (
    <button type="button" className='pokemon-card'>
      <p>{`#${id}`}</p>
      <img src={picture} alt={name} />
      <p>{name}</p>
    </button>
  )
}

export default Card;
