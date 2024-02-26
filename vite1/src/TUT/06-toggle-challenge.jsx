import { useState } from "react";

const ToggleChallenge = () => {
  let [bol, setBol] = useState(true);
  const toggle = () => {
    if (bol == true) {
      setBol(false);
    } else {
      setBol(true);
    }
  };
  return (
    <>
      <h2>Toggle challenge</h2>
      <button onClick={toggle} className="btn">
        {String(bol)}
      </button>
      {bol ? <p>Hello</p> : <p>how</p>}
    </>
  );
};

export default ToggleChallenge;
