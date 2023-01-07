import React, { createContext, useContext, useState, useEffect } from "react";
const StateContext = createContext();
const initialState = {
  leftMenu: false,
  rightMenu: false,
};
export const ContextProvider = ({ children }) => {
  const [sideMenuR, setSideMenuR] = useState(false);
  const [leftSideBar, setLeftSideBar] = useState(false);
  const [clickMenu, setClickMenu] = useState(initialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const loginAuth = localStorage.getItem("auth");

  useEffect(() => {
    if (loginAuth === null) {
      localStorage.clear();
    } else {
      loginAuth === "auth";
    }
  }, []);

  const clickMenuHandler = (clicked) => {
    if (clicked === "rightMenu") {
      if (clickMenu[clicked] === false) {
        setClickMenu({ leftMenu: false, rightMenu: true });
      } else {
        setClickMenu({ leftMenu: false, rightMenu: false });
      }
    } else {
      if (clickMenu[clicked] === false) {
        setClickMenu({ leftMenu: true, rightMenu: false });
      } else {
        setClickMenu({ leftMenu: false, rightMenu: false });
      }
    }
  };

  return (
    <StateContext.Provider
      value={{
        sideMenuR,
        setSideMenuR,
        leftSideBar,
        setLeftSideBar,
        clickMenu,
        setClickMenu,
        clickMenuHandler,
        loggedIn,
        setLoggedIn,
        loginAuth,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
