import React from "react";
import styled from "styled-components";

const episodeStyle = styled.div`
  width: 33.33%;
  background: black;
  color: white;
  border-radius: 3px;
  margin: 0 auto;
  padding: 5px;
`;

function EpisodeCard({ id, name, air_date, episode, characters }) {
  // image={image}
  return (
    <episodeStyle>
      <h1>name={name}</h1>
      <h2>air_date={air_date}</h2>
      <h2>episode={episode}</h2>
      <h2>characters={characters}</h2>
      <h2>id={id}</h2>
    </episodeStyle>
  );
}

export default EpisodeCard;
