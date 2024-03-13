import React from "react";

function List() {
  let arr = [
    {
      player: {
        id: 1,
        name: "Ronaldo",
        club: "Al-nasr",
        Goals: 100,
      }
    }
  ]
  return (
    <div>
      {arr.map((details) => (
        <li key={details.player.id}>
          {details.player.name}:{details.player.club}:{details.player.Goals}
        </li>
      ))}
    </div>
  );
}

export default List;
