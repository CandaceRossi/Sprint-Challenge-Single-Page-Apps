import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const locationStyle = styled.section`
  width: auto;
  background: white;
  color: black;
  border-radius: 3px;
  border: 2px solid black;
  margin: 0 auto;
  padding: 5px;
`;

function LocationsList(props) {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getLocations = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
          console.log("some locations", response);
          setLocations(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getLocations();
  }, [setLocations]);

  return (
    <locationStyle>
      <h2>Locations</h2>
      {Array.from(locations).map(item => {
        return (
          <Link to={`/${LocationCard}`}>
            <LocationCard
              key={item.id}
              name={item.name}
              type={item.type}
              dimension={item.type}
              residents={item.residents}
            />
          </Link>
        );
      })}
    </locationStyle>
  );
}

export default LocationsList;
