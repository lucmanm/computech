import React from "react";
import { CgProfile } from "react-icons/cg";
import { accountMenuTitles } from "../assets/data/data";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
export const AccountMenu = () => {
  const { sideMenuR, setSideMenuR } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-md text-white text-md m-2 bg-blue-900 font-semibold";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-md text-white text-md text-gray-700  hover:bg-blue-900 hover:text-white m-2";
  return (
    <>
      {/* #LoggedInOnly */}
      <div className="flex flex-col items-center justify-center p-2 text-center">
        <span className="text-blue-900">
          <CgProfile className="h-16 w-16 " />
        </span>
        <p className="text-lg font-bold">Your Name</p>
        <p className="">
          <a href="mailto:youremail@domain.com">youremail@domain.com</a>
        </p>
        <p className="">+966 56 261 7544</p>
      </div>
      {/* Loop of menus */}
      {accountMenuTitles.map(({ title, links }) => (
        <div key={title}>
          <p className="mx-3 my-5 font-semibold uppercase shadow-md">{title}</p>
          {/* Sub Categories Loops here. */}
          {links.map(({ name, pathdir, icon }) => (
            <NavLink
              to={`${pathdir}`}
              key={pathdir}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() =>
                sideMenuR && setSideMenuR((prevActiveMenu) => !prevActiveMenu)
              }
            >
              {icon}
              <span className="capatilize">{name}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </>
  );
};
