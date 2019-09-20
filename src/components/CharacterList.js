import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log("some characters", response);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getCharacters();
  }, [setCharacters]);

  return (
    <section className="character-list grid-view">
      <h2>Characters</h2>
      {Array.from(characters).map(item => {
        return (
          <CharacterCard
            name={item.name}
            status={item.status}
            species={item.species}
            type={item.type}
            gender={item.gender}
          />
        );
      })}
    </section>
  );
}
export default CharacterList;

// {
//   characters.map(item => {
//     return (
//       <div key={item.id}>
//         {/* <Link to={`/character/${CharacterCard}`}> */}
//         <CharacterCard
//           name={item.name}
//           status={item.status}
//           species={item.species}
//           type={item.type}
//           gender={item.gender}
//         />
//         {/* </Link> */}
//       </div>
//     );
//   });
// }
