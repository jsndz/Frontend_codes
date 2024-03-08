import React, { useState } from "react";
import NavLinks from "./NavLinks";

const navbar = () => {
  const [user, setUser] = useState({ name: "Adi" });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout}></NavLinks>
    </nav>
  );
};

export default navbar;
