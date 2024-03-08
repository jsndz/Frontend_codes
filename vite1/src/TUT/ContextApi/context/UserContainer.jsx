import React from "react";

function UserContainer({ user, logout }) {
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
