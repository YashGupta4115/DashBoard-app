import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [displayMode, setdisplayTheme] = useState("light");

  const [theme, setTheme] = useState("#FB9678");

  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const toggleDisplayMode = () => {
    setdisplayTheme((prevdisplayTheme) =>
      prevdisplayTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        displayMode,
        toggleDisplayMode,
        theme,
        setTheme,
        isSettingOpen,
        setIsSettingOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
