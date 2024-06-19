import React, { createContext, useState } from "react";

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};
