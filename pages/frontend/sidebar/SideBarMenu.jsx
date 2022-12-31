import React from "react";
import { AccountMenu } from "./accountMenu";
import { useStateContext } from "../contexts/ContextProvider";
import { menu } from "./../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
export const SideBarMenu = () => {
  const { loggedIn, activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-md text-white text-md m-2 bg-blue-900 font-semibold";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-md text-white text-md text-gray-700  hover:bg-blue-900 hover:text-white m-2";
  return (
    <>
      {activeMenu && (
        <div className="fixed top-0 z-100 h-full w-screen overflow-scroll bg-gray-100 md:hidden">
          <div>
            <div className="bg-blue-900 p-2 text-center font-bold text-white">
              Menu
            </div>
          </div>
          {loggedIn && (
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
            <div>
              <Link
                to="/"
                className="mt-2 flex cursor-pointer items-center space-x-6 rounded py-2 px-4 hover:bg-blue-900 hover:text-white"
                onClick={() => {
                  sessionStorage.clear();
                }}
              >
                <div>
                  <HiOutlineLogout />
                </div>
                <p>Logout</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
