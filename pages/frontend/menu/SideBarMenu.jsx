import React from "react";
import { AccountMenu } from "./accountMenu";
import { useStateContext } from "../contexts/ContextProvider";
import { menu } from "./../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { MobileMainMenu } from "./../menu/MobileMainMenu";
export const SideBarMenu = () => {
  const { loginAuth, sideMenuR, setSideMenuR } = useStateContext();

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-900 h-full ${
          sideMenuR ? "w-2/3" : "w-0"
        } overflow-hidden  bg-gray-100 pb-14 duration-100`}
      >
        <div className="bg-blue-900 px-2 py-3 font-bold text-white">MENU</div>
        {loginAuth && (
          // #LoggedInOnly
          <div>
            <AccountMenu />
          </div>
        )}
        <div className="flex flex-col">
          {/* Sub Categories Loops here. */}
          <div className="md-btn-nav-container">
            {menu.map(({ name, path }) => (
              <NavLink
                to={`${path}`}
                key={path}
                className="md-btn-nav"
                onClick={() =>
                  sideMenuR
                    ? setSideMenuR((prevActiveMenu) => !prevActiveMenu)
                    : ""
                }
              >
                <span className="capatilize">{name}</span>
              </NavLink>
            ))}
          </div>
          {/* Product Category Menu */}
          <MobileMainMenu />
          {loginAuth && (
            <div>
              <Link
                to="/"
                className="flex cursor-pointer items-center space-x-6 bg-blue-900 py-3 px-2 font-bold text-white hover:bg-red-700 hover:text-white"
                onClick={() => {
                  localStorage.clear();
                  setSideMenuR((prevActiveMenu) => !prevActiveMenu);
                }}
              >
                <p>Logout</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
