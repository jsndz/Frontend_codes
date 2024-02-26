import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  const tgl = () => {
    setToggle(true);
  };
  return (
    <div>
      <h2>cleanup function</h2>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {String(toggle)}
      </button>
      {toggle && <Component />}
    </div>
  );
};

const Component = () => {
  useEffect(() => {
    console.log("hello");
  }, []);
  return <p>Hello</p>;
};

export default CleanupFunction;
