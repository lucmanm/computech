import React from "react";
import { Link } from "react-router-dom";
import { icons, langauge } from "../assets/data/data";
export const AccountLogin = () => {
  return (
    <div className="grow">
      <div className="relative flex flex-row place-content-end items-center space-x-4 px-2 text-blue-900">
        <div className="flex flex-row ">
        {icons.languageIcon}
          <button className=" px-1 text-xl font-medium">
         
            {langauge.arabic}
          </button>
        </div>
        <div><Link to="/login">{icons.personIcon}</Link></div>
        <div>{icons.heartIcon}</div>
        <div>{icons.cartIcon}</div>
      </div>
    </div>
  );
};
