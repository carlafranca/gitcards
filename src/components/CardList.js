import React from "react";
import Card from "./Card";

export default function CardList({ profiles }) {
  return (
    <ul className="cards-holder">
      {profiles.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </ul>
  );
}
