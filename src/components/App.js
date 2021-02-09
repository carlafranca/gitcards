import React, { useState, useEffect } from "react";
import CardList from "./CardList";

function App(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  // , {
  //   headers: { Authorization: "Basic carlafranca : N!kol#16" },
  // }

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((result) => {
        if (result.message) throw result;
        setIsLoaded(true);
        setUsers(result);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
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
