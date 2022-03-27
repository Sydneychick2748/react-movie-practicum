import React from "react";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <a href="/">
        <h3 className="logo">LOGO</h3>
      </a>
      {!props.hideProfileButton && (
        <a href="/Profile">
          <button className="profile-link">Profile</button>
        </a>
      )}
    </div>
  );
};
export default NavBar;
