import React from "react";
import { Link } from "react-router-dom";
import { mainMenuCategories } from "../../../../../assets/data/data";
export const MobileCategoryMenu = () => {
  return (
    <>
      <div>
        {mainMenuCategories.map(({ title, categoryName }) => (
          <div key={title}>
            <div className="btn-nav-title">{title}</div>
            <div className="btn-nav-container">
              {categoryName.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="btn-nav"
                  onClick={() =>
                    sideMenuR
                      ? setSideMenuR((prevActiveMenu) => !prevActiveMenu)
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
    </>
  );
};
