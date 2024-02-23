import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Adish");
  const [age, setAge] = useState(20);
  const [hobby, setHobby] = useState("Chatting");
  const displayPersob = () => {
    setName("Adish Bhai");
    setAge(21);
    setHobby(coding);
  };
  return (
    <>
      <h2>useState object example</h2>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{hobby}</h2>
      <button className="btn" onClick={displayPersob}>
        Show{" "}
      </button>
    </>
  );
};

export default UseStateObject;
