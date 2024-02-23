import { useState } from "react";

const UseStateObject = () => {
  const person1 = {
    name: "adish",
    age: 19,
    hobby: "chatting",
  };
  const [person, setPerson] = useState(person1);
  const displayPersob = () => {
    setPerson({
      name: "Adish Bhai",
      age: 20,
      hobby: "coding",
    });
  };
  return (
    <>
      <h2>useState object example</h2>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button className="btn" onClick={displayPersob}>
        Show{" "}
      </button>
    </>
  );
};

export default UseStateObject;
