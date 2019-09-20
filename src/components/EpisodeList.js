import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import styled from "styled-components";

const episodeStyle = styled.section`
  width: auto;
  background: black;
  color: white;
  border-radius: 3px;
  border: 2px solid black;
  margin: 0 auto;
  padding: 5px;
`;

function EpisodeList(props) {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getEpisodes = () => {
      axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
          console.log("some episodes", response);
          setEpisodes(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getEpisodes();
  }, [setEpisodes]);

  return (
    <episodeStyle>
      <h2>Episodes</h2>
      {Array.from(episodes).map(item => {
        return (
          <Link to={`/${EpisodeCard}`}>
            <EpisodeCard
              name={item.name}
              air_date={item.air_date}
              episode={item.episode}
              characters={item.characters}
              id={item.id}
            />
          </Link>
        );
      })}
    </episodeStyle>
  );
}
export default EpisodeList;
