import React from "react";
import UserContainer from "./UserContainer";

function NavLinks({ user, logout }) {
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
      <UserContainer user={user} logout={logout}></UserContainer>
    </div>
  );
}

export default NavLinks;
