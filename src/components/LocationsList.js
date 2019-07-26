// import React from "react";

export default function LocationsList({ ...props }) {
    const LocationList = props => {
    const [location, setLocation] = useState({});
    useEffect(() => {
      const getLocations = () => {
        axios
          .get("https://rickandmortyapi.com/api/locations/")
          .then(response => {
            console.log("some locations", response);
            setLocation(response.data);
          })
          .catch(error => {
            console.error("Server Error", error);
          });
      };
      getLocations();
    }, []);

    return (
  
  // image={image}
  <div>
    {locations.map((props) => {
        <LocationCard key={props.id} locations={props} />
    })}
  </div>
  )
}