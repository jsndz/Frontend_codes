import React from "react";
import UserContainer from "./UserContainer";

function NavLinks() {
  return (
    <div className="nav-container">
      <div className="nav-links">
        <ul>
          <a href="#">Home</a>
        </ul>
        <ul>
          <a href="#">About</a>
        </ul>
      </div>
      <UserContainer></UserContainer>
    </div>
  );
}

export default NavLinks;
