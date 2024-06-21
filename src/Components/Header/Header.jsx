import React from "react";

const Header = ({ Category, title }) => {
  return (
    <div>
      <div className="header-container">
        <p className="gray-text" style={{ marginLeft: "5rem" }}>
          {Category}
        </p>
        <p className="bold-600-text" style={{ marginLeft: "5rem" }}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
