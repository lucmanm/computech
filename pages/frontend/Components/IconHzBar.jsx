import React from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../assets/data/data";
export const IconHzBar = () => {
  const { heartIcon, homeIcon } = icons;
  return (
    <>
      <div className="fixed bottom-0 flex w-full flex-row items-center justify-evenly border-t-2 bg-blue-900 text-white shadow-md shadow-gray-700 desktop:hidden">
        <NavLink className="btn-icon btn-primary grow" to="#">
          {homeIcon}
        </NavLink>
        <NavLink
          className="btn-icon btn-primary grow grow border-2 border-white"
          to="#"
        >
          {heartIcon}
        </NavLink>
        <NavLink className="btn-icon btn-primary grow" to="#">
          {heartIcon}
        </NavLink>
        <NavLink className="btn-icon btn-primary grow" to="#">
          {heartIcon}
        </NavLink>
        <NavLink className="btn-icon btn-primary grow" to="#">
          {heartIcon}
        </NavLink>
      </div>
    </>
  );
};
