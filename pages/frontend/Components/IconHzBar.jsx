import React from "react";
import { NavLink } from "react-router-dom";
import { mobIcons } from "../assets/data/data";
import { SearchProducts } from "./SearchProducts";
export const IconHzBar = () => {
  const { homeIc, personIc, shopIc, searchIc, menuIc } = mobIcons;
  return (
    <>
      <div className="fixed bottom-0 z-100 flex w-full flex-row items-center justify-evenly bg-blue-900 text-white  desktop:hidden">
        <NavLink className="btn-icon btn-primary grow py-3" to="/">
          <div className="mx-auto w-fit">{homeIc}</div>
        </NavLink>
        <NavLink
          className="btn-icon btn-primary grow py-3"
          to="/searchproducts">
          <div className="mx-auto w-fit">{searchIc}</div>
        </NavLink>
        <NavLink className="btn-icon btn-primary grow py-3" to="/cart">
          <div className="mx-auto w-fit">{shopIc}</div>
        </NavLink>
        <NavLink className="btn-icon btn-primary grow py-3" to="/login">
          <div className="mx-auto w-fit">{personIc}</div>
        </NavLink>
        <NavLink className="btn-icon btn-primary grow py-3" to="#">
          <div className="mx-auto w-fit border">{menuIc}</div>
        </NavLink>
      </div>
    </>
  );
};