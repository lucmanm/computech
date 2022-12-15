import React from "react";
import { feAccount } from "../assets/data/data";
import { NavLink } from "react-router-dom";
export const Account = () => {

const activeLink =
  "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg text-white text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg text-white text-md text-gray-700  hover:bg-blue-900 hover:text-white m-2";

  return (
    <>
      <div className=" h-fit desktop:container grid grid-cols-9">
        <div className="col-span-2 my-5">
        {feAccount.map((accountTittle) => (
              <div key={accountTittle.title}>
                <p className="m-3 mt-2 uppercase font-semibold">
                  {accountTittle.title}
                </p>
                {/* Sub Categories Loops here. */}
                {accountTittle.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
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

      </div>
    </>
  );
};
