import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { accountMenuTitles } from "../../../../assets/data/data";
import { useStateContext } from "../../contexts/ContextProvider";
export const AccountMenu = () => {
  const { sideMenuR, setSideMenuR } = useStateContext();
  const activeLink = "desktop:nav-active";
  const normalLink = "btn-nav";
  return (
    <>
      {/* #LoggedInOnly */}
      <div>
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
      </div>
      {/* Loop of menus */}
      {accountMenuTitles.map(({ title, links }) => (
        <div key={title}>
          <p className="btn-nav-title">{title}</p>
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
