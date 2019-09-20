import React from "react";

function CharacterCard({ id, name, status, species, type, gender }) {
  return (
    <div key={id} className="char-card">
      <h1>{name}</h1>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{type}</h2>
      <h2>{gender}</h2>
    </div>
  );
}

export default CharacterCard;
