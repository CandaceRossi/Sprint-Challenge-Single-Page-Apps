import React from "react";

function LocationCard({ name, type, dimension, residents }) {
  // image={image}
  return (
    <div>
      <h1>name={name}</h1>
      <h2>type={type}</h2>
      <h2>dimension={dimension}</h2>
      <h2>residents={residents}</h2>
    </div>
  );
}
export default LocationCard;
