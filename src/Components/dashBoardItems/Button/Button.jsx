import React from "react";

const Button = ({ color, text, width }) => {
  return (
    <button
      style={{
        background: color,
        color: "white",
        borderRadius: "10px",
        border: `solid 1px ${color}`,
        padding: "10px",
        width: width,
        marginTop: "1rem",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
