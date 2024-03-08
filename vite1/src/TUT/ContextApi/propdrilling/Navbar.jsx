import React, { createContext, useState } from "react";
import NavLinks from "./NavLinks";
export const NavbarContext = createContext();
const navbar = () => {
  const [user, setUser] = useState({ name: "Adi" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks></NavLinks>
      </nav>
    </NavbarContext.Provider>
  );
};

export default navbar;
