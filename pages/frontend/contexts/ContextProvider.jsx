import React, { createContext, useContext, useState, useEffect } from "react";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [loggedIn, setLoggedOut] = useState(false);
  const login = sessionStorage.getItem("auth");
  useEffect(() => {
    if (login === null) {
      sessionStorage.clear();
    } else {
      setLoggedOut(true);
    }
  }, [loggedIn, setLoggedOut]);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        loggedIn,
        setLoggedOut,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
