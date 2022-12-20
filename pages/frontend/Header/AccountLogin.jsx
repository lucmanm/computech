import React from "react";
import { Link } from "react-router-dom";
import { icons, langauge } from "../assets/data/data";
export const AccountLogin = () => {
  const { languageIcon, personIcon, heartIcon, cartIcon } = icons;
  return (
    <div className="grow">
      <div className="relative flex flex-row place-content-end items-center space-x-4 px-2 text-blue-900">
        <button className="flex px-1 font-cairo text-sm font-bold">
          {languageIcon}
          {langauge.arabic}
        </button>

        <div>
          <Link to="/login">{personIcon}</Link>
        </div>
        <div>{heartIcon}</div>
        <div>
          <Link to="/cart">{cartIcon}</Link>
        </div>
      </div>
    </div>
  );
};
