import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="your-movies">{props.headerText}</h1>
    </div>
  );
};
export default Header;
