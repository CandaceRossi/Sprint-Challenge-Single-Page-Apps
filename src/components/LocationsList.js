

































// import React from "react";
// import { Link } from "react-router-dom";
// import LocationCard from './LocationCard.js';


// export default function LocationList({ ...props }) {
//     const LocationsList = props => {
//     const [locations, setLocations] = useState({});
//     useEffect(() => {
//       const getLocations = () => {
//         axios
//           .get("https://rickandmortyapi.com/api/locations/")
//           .then(response => {
//             console.log("some locations", response);
//             setLocations(response.data);
//           })
//           .catch(error => {
//             console.error("Server Error", error);
//           });
//       };
//       getLocations();
//     }, []);

//     return (
  
//   // image={image}
//   <div>
//   <Link to={`/locations/${location}`}
//     {locations.map((props) => {
//         <LocationCard key={props.id} location={...props} />
//     })}
//     </Link>
//   </div>
//   )
// }