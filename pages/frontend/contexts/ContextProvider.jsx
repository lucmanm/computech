import React, { createContext, useContext, useState, useEffect } from "react";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [loggedIn, setLoggedOut] = useState();
  const login = localStorage.getItem("username");
  useEffect(() => {
    if (login === null) {
      setLoggedOut(false);
    } else {
      setLoggedOut(true);
    }
  }, []);
  console.log(login);

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
