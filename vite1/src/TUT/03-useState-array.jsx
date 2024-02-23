import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const clearAllItems = () => {
    setPeople([]);
  };
  const clearItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => {
                clearItem(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={clearAllItems}>
        Remove All
      </button>
    </div>
  );
};

export default UseStateArray;
