import React, { useContext } from "react";
import { NavbarContext } from "./Navbar";
function UserContainer() {
  // return "hello world";
  const { user, logout } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          {" "}
          <p>Hi ,{user?.name}</p>
          <button className="btn" onClick={logout}>
            {" "}
            Logout
          </button>
        </>
      ) : (
        <p>Login</p>
      )}
    </div>
  );
}

export default UserContainer;
