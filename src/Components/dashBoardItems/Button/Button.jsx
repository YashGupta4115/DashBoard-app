import React, { useContext } from "react";
import { useTheme } from "../../../Context/themeContext";

const Button = ({ text, width }) => {
  const { theme } = useTheme();
  return (
    <button
      style={{
        background: theme,
        color: "white",
        borderRadius: "10px",
        border: `solid 1px ${theme}`,
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
