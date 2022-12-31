import React from "react";
import { NavLink } from "react-router-dom";
import { mobIcons } from "../assets/data/data";
import { useStateContext } from "../contexts/ContextProvider";

export const IconHzBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const { homeIc, personIc, shopIc, searchIc, menuIc } = mobIcons;
  return (
    <>
      <div className="fixed bottom-0 z-100 flex w-full flex-row items-center justify-evenly bg-blue-900 text-white  desktop:hidden">
        <NavLink
          className="btn-icon btn-primary grow py-3"
          onClick={() =>
            activeMenu ? setActiveMenu((prevActiveMenu) => !prevActiveMenu) : ""
          }
          to="/"
        >
          <div className="mx-auto w-fit">{homeIc}</div>
        </NavLink>
        <NavLink
          className="btn-icon btn-primary grow py-3"
          to="/searchproducts"
        >
          <div className="mx-auto w-fit">{searchIc}</div>
        </NavLink>
        <NavLink
          className="btn-icon btn-primary grow py-3"
          onClick={() =>
            activeMenu ? setActiveMenu((prevActiveMenu) => !prevActiveMenu) : ""
          }
          to="/cart"
        >
          <div className="mx-auto w-fit">{shopIc}</div>
        </NavLink>
        <NavLink
          className="btn-icon btn-primary grow py-3"
          onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          to="#"
        >
          <div className="mx-auto w-fit">{menuIc}</div>
        </NavLink>
      </div>
    </>
  );
};
