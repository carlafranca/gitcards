import React, { useState, useEffect } from "react";
import CardList from "./CardList";

function App(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading ...</div>;
  } else {
    return (
      <div>
        <div className="header">{props.title}</div>
        <CardList profiles={users} />
      </div>
    );
  }
}

export default App;
