import { useState } from "react";

const UseStateBasics = () => {
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setcount] = useState(0);
  function handleCLick() {
    setcount(count + 1);
  }
  return (
    <>
      <h2>useState basics</h2>
      <h4>You clicked {count}</h4>
      <button className="btn" onClick={handleCLick}>
        Click ME
      </button>
    </>
  );
};

export default UseStateBasics;
