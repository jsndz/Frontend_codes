import { people } from "../data";
// import avatar from "../assets/default-avatar.svg";
import React, { useState } from "react";

function List() {
  const [people1, setPeople1] = useState(people);
  console.log(people[1].name);
  const noimg =
    "https://images.unsplash.com/photo-1519400197429-404ae1a1e184?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const clear = () => {
    setPeople1([]);
  };
  return (
    <div>
      {people1.map((person) => {
        const { id, name, nickName, images } = person;
        const img =
          (images && images[0] && images[0].small && images[0].small.url) ||
          noimg;

        return (
          <div key={id}>
            <p>{name}</p>
            <img
              src={img}
              alt={name}
              style={{ width: 50, borderRadius: 100 }}
            ></img>
            <p>Nickname:{nickName || "God Of Keys"}</p>
          </div>
        );
      })}
      <button className="btn" onClick={clear}>
        Clear all
      </button>
    </div>
  );
}

export default List;
