import React from "react";
import { Link } from "react-router-dom";
import CompuTechLogo from "../assets/img/CompuTechLogo.png";
export const LogoAndSearch = () => {
  return (
    <>
      <div className="relative flex items-center justify-evenly py-5 desktop:container">
        <div className="shrink">
          <Link to="/"><img src={CompuTechLogo} alt="" width={200} /></Link>
        </div>
        <div className="grow px-8">
          <input
            className=" min-w-full rounded border border-blue-900 text-base caret-blue-700 ring-2"
            type="text"
            name="Search"
            id=""
          />
        </div>
        <div className="Help flex flex-col px-2 text-base font-medium">
          <span className="text-blue-900">Need help? Call Us</span>
          <span>+966 56 261 7554</span>
        </div>
      </div>
      <div className="border border-b text-black shadow"></div>
    </>
  );
};
