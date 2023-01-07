import React from "react";
import { Link } from "react-router-dom";
import { mainMenuCategories } from "../../../../../assets/data/data";
export const MobileCategoryMenu = () => {
  return (
    <>
      <div>
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
    </>
  );
};
