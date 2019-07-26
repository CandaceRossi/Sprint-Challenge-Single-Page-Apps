// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import CharacterCard from "./CharacterCard.js";
// import { Link } from "react-router-dom";

// export default function CharacterList({...props}) {
//   // TODO: Add useState to track data from useEffect
//   const CharacterList = props => {
//     const [character, setCharacter] = useState({});
//     useEffect(() => {
//       const getCharacters = () => {
//         axios
//           .get("https://rickandmortyapi.com/api/character/")
//           .then(response => {
//             console.log("some characters", response);
//             setCharacter(response.data.results);
//           })
//           .catch(error => {
//             console.error("Server Error", error);
//           });
//       };
//       getCharacters();
//     }, []);

//     return (
//       <section className="character-list grid-view">
//         <Link to={`/characters/${character}`}>
//           <h2>
//             {characters.map(props => (
//               <CharacterCard key={props.id} character={ ...props} />
//             ))}
//           </h2>
//         </Link>
//       </section>
//     );
//   };
// }
