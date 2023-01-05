import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { mainMenuCategories } from "../assets/data/data";
export const MainMenu = () => {
  return (
    <>
      {/* Desktop Category Menu */}
      <div className="group relative z-100 hidden w-full desktop:block">
        {mainMenuCategories.map(({ title, categoryName }) => (
          <div key={title}>
            <div className="grow cursor-default rounded bg-blue-900 py-3 text-center font-bold uppercase text-white">
              {title}
            </div>
            <div className="hidden group-hover:block group-focus:visible">
              <div className="absolute top-full flex w-full flex-col overflow-hidden rounded pt-3 shadow-md">
                {categoryName.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="w-full border border-b-gray-300 bg-gray-200 px-2 py-3 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
