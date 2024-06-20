import React, { createContext, useState } from "react";

export const SideBarContext = createContext();

const defaultState = {
  chat: false,
  cart: false,
  notification: false,
  userProfile: false,
};

export const SideBarProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const [isClicked, setIsClicked] = useState(defaultState);

  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({
      ...defaultState,
      [clicked]: !isClicked[clicked],
    });
  };

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <SideBarContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        toggleSideBar,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
