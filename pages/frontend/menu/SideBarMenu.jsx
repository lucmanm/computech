import React from "react";
import { AccountMenu } from "./accountMenu";
import { useStateContext } from "../contexts/ContextProvider";
import { menu } from "./../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { mainMenuCategories } from "../assets/data/data";
export const SideBarMenu = () => {
  const { loginAuth, sideMenuR, setSideMenuR } = useStateContext();

  return (
    <>
      {sideMenuR && (
        <div className="fixed top-0 z-900 h-full w-full  bg-slate-900 opacity-50">
          wew
        </div>
      )}

      {sideMenuR && (
        <div className="fixed top-0 right-0 z-900 h-full w-3/4  bg-gray-100 pb-14">
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
                  }>
                  <span className="capatilize">{name}</span>
                </NavLink>
              ))}
            </div>
            {/* Product Category Menu */}
            <div className="">
              {mainMenuCategories.map(({ title, categoryName }) => (
                <div key={title}>
                  <div className="bg-blue-900 px-2 py-3 font-bold text-white">
                    {title}
                  </div>
                  <div className="md-btn-nav-container">
                    {categoryName.map(({ name, path }) => (
                      <Link
                        key={name}
                        to={path}
                        className="md-btn-nav"
                        onClick={() =>
                          sideMenuR
                            ? setSideMenuR((prevActiveMenu) => !prevActiveMenu)
                            : ""
                        }>
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {loginAuth && (
              <div>
                <Link
                  to="/"
                  className="flex cursor-pointer items-center space-x-6 bg-blue-900 py-3 px-2 font-bold text-white hover:bg-red-700 hover:text-white"
                  onClick={() => {
                    localStorage.clear();
                    setSideMenuR((prevActiveMenu) => !prevActiveMenu);
                  }}>
                  <p>Logout</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
