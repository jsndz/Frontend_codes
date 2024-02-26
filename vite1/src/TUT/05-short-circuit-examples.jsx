import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>short circuit - examples</h2>
      <p>Truth OR:{name || "hello"}</p>
      <p>Truth and:{name && "hello"}</p>
      <p>false OR:{text || "hello"}</p>
      <p>false and:{text && "hello"}</p>
    </div>
  );
};

export default ShortCircuitExamples;
