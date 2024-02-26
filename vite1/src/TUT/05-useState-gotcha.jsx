import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      console.log("Vlicked");
      setValue((currentValue) => {
        return currentValue + 1;
      });
    }, 3000);
  };
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h2>Multiples of 2</h2>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        {">.<"}
      </button>
    </>
  );
};

export default UseStateGotcha;
