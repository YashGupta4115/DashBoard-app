import React from "react";

const Header = ({ Category, title }) => {
  return (
    <div>
      <div className="header-container">
        <p className="gray-text">{Category}</p>
        <p className="bold-600-text">{title}</p>
      </div>
    </div>
  );
};

export default Header;
