import React from "react";
import { Link } from "react-router-dom";
import { icons, langauge } from "../assets/data/data";

export const TopNavigation = () => {
  const { languageIcon, personIcon, heartIcon, cartIcon } = icons;

  return (
    <div className="border py-2">
      <div className="relative flex flex-row place-content-end items-center space-x-4 px-2 text-blue-900">
        <div>
          <Link to="/login">{personIcon}</Link>
        </div>
        <button className="flex px-1 font-cairo text-sm font-bold">
          {languageIcon}
          {langauge.arabic}
        </button>
        <div>{heartIcon}</div>
        <div>
          <Link to="/cart">{cartIcon}</Link>
        </div>
      </div>
    </div>
  );
};
