import React from "react";
import { AccountMenu } from "./accountMenu";
import { useStateContext } from "../contexts/ContextProvider";
import { menu } from "./../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { mainMenuCategories } from "../assets/data/data";
export const SideBarMenu = () => {
  const { loginAuth, activeMenu, setActiveMenu } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-md text-white text-md m-2 bg-blue-900 font-semibold";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-md text-white text-md text-gray-700  hover:bg-blue-900 hover:text-white m-2";
  return (
    <>
      {activeMenu && (
        <div className="fixed top-0 z-100 h-full w-screen overflow-auto bg-gray-100 md:hidden">
          <div>
            <div className="bg-blue-900 p-2 text-center font-bold text-white">
              Menu
            </div>
          </div>
          {loginAuth && (
            // #LoggedInOnly
            <div>
              <AccountMenu />
            </div>
          )}
          <div className="flex flex-col">
            <div>
              <div>
                {/* Sub Categories Loops here. */}
                {menu.map(({ name, path, icon }) => (
                  <NavLink
                    to={`${path}`}
                    key={path}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    onClick={() =>
                      activeMenu
                        ? setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                        : ""
                    }
                  >
                    {icon}
                    <span className="capatilize">{name}</span>
                  </NavLink>
                ))}
              </div>
            </div>
            {/* Product Category Menu */}
            <div className="">
              {mainMenuCategories.map(({ title, categoryName }) => (
                <div key={title}>
                  <div className="bg-blue-900 px-2 py-3 font-bold text-white">
                    {title}
                  </div>
                  <div className="flex w-full flex-col overflow-hidden">
                    {categoryName.map(({ name, path }) => (
                      <Link
                        key={name}
                        to={path}
                        className="w-full border border-b-gray-300 bg-gray-200 px-2 py-3 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                        onClick={() =>
                          activeMenu
                            ? setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                            : ""
                        }
                      >
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
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu);
                  }}
                >
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
