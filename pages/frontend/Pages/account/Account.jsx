import React from "react";
import { feAccount } from "../../assets/data/data";
import { NavLink, Outlet } from "react-router-dom";
export const Account = () => {

const activeLink =
  "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg text-white text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg text-white text-md text-gray-700  hover:bg-blue-900 hover:text-white m-2";

  return (
    <>
      <div className=" h-fit desktop:container grid grid-cols-9">
        <div className="col-span-2 my-5 border rounded-md bg-white shadow-md">
        {feAccount.map((accountTittle) => (
              <div key={accountTittle.title}>
                <p className="mx-3 my-5 uppercase font-semibold shadow-md">
                  {accountTittle.title}
                </p>
                {/* Sub Categories Loops here. */}
                {accountTittle.links.map((link) => (
                  <NavLink
                    to={`${link.linkdir}`}
                    key={link.name}
                    onClick={``}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capatilize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
        </div>
        <div className="col-span-7 my-5 border rounded-md ml-2 bg-white shadow-md">
          <Outlet/>
        </div>
      </div>
    </>
  );
};