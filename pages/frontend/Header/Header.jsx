import React from "react";
import { Navigationbar } from "./Navigationbar";
import { FrontSideNav } from "./FrontSideNav";
import { Link } from "react-router-dom";
import { AccountLogin } from "./AccountLogin";
import CompuTechLogo from "../assets/img/CompuTechLogo.png";

export const Header = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap bg-white shadow-md">
        <div className=" bg-gray-800 py-2 text-center text-slate-50">
          Free Shipping all Over Saudi Arabia
        </div>
            {/* Computech Logo and Search fitler */}
          <div className="relative flex items-center justify-evenly py-5 desktop:container">
            <div className="shrink">
              <Link to="/"><img src={CompuTechLogo} alt="" width={200} /></Link>
            </div>
              <div className="grow px-8">
                <input
                  className="min-w-full rounded-full border border-blue-900 text-base ring-1 ring-blue-900"
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

        <div className="z-50 flex  w-screen  flex-row  items-center  py-1 desktop:container">
          <FrontSideNav />
          <Navigationbar />
          <AccountLogin />
        </div>
      </div>
    </>
  );
};
