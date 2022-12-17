import React from "react";
import { feAccount } from "../../assets/data/data";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export const Account = () => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-md text-white text-md m-2 bg-blue-900 font-semibold";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-md text-white text-md text-gray-700  hover:bg-blue-900 hover:text-white m-2";

  return (
    <>
      <div className=" grid h-fit grid-cols-9 text-sm desktop:container">
        {/*SideBar menus for account information */}
        <div className="col-span-2 my-5 rounded-md border  bg-white shadow-md">
          <div className="flex flex-col content-center items-center justify-center  p-2 text-center">
            <span className="text-blue-900">
              <CgProfile className="h-16 w-16 " />
            </span>
            <p className="text-lg font-bold">Your Name</p>
            <p className="text-sm">
              <a href="mailto:youremail@domain.com">youremail@domain.com</a>
            </p>
            <p className="text-sm">+966 56 261 7544</p>
          </div>
          {/* Loop of menus */}
          {feAccount.map(({ title, links }) => (
            <div key={title}>
              <p className="mx-3 my-5 font-semibold uppercase shadow-md">
                {title}
              </p>
              {/* Sub Categories Loops here. */}
              {links.map(({ name, pathdir, icon }) => (
                <NavLink
                  to={`${pathdir}`}
                  key={pathdir}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {icon}
                  <span className="capatilize">{name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        <div className="col-span-7 my-5 ml-2 rounded-md border  bg-white text-sm shadow-md">
          <Outlet />
        </div>
      </div>
    </>
  );
};
