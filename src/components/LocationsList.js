import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

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
    <section className="character-list grid-view">
      <h2>Locations</h2>
      {Array.from(locations).map(item => {
        return (
          <LocationCard
            key={item.id}
            name={item.name}
            type={item.type}
            dimension={item.type}
            residents={item.residents}
          />
        );
      })}
    </section>
  );
}

export default LocationsList;
