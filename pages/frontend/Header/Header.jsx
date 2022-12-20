import React from "react";
import { Navigationbar } from "./Navigationbar";
import { FrontSideNav } from "./FrontSideNav";
import { Link } from "react-router-dom";
import { AccountLogin } from "./AccountLogin";
import CompuTechLogo from "../assets/img/CompuTechLogo.png";

import { HiMenu } from "react-icons/hi";
import { BiDesktop, BiLaptop, BiPrinter } from "react-icons/bi";
import { MdOutlineScanner } from "react-icons/md";
import { GiServerRack } from "react-icons/gi";
export const Header = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap bg-white shadow-md">
        <div className="bg-gray-800 py-2 text-center text-slate-50">
          Free Shipping all Over Saudi Arabia
        </div>

        {/* Computech Logo and Search fitler */}
        <div className="relative flex items-center justify-evenly py-5 desktop:container">
          <div className="shrink">
            <Link to="/">
              <img src={CompuTechLogo} alt="" width={200} />
            </Link>
          </div>
          <div className="grow px-8">
            <input
              className="min-w-full rounded-full border border-blue-900 text-base ring-1 ring-blue-900"
              type="text"
              name="Search"
              id=""
            />
          </div>
          <div className="flex flex-col px-2 text-base font-medium ">
            <span className="text-blue-900">Need help? Call Us</span>
            <span>+966 56 261 7554</span>
          </div>
        </div>
        <div className="border border-b text-black shadow"></div>
        {/* Navigation Menus for Desktop & Tablet */}
        <div className="z-50 flex items-center py-1 desktop:container">
          <div className="hidden tablet:block">
            <button className="group relative my-2 flex shrink-0 cursor-pointer items-center justify-center rounded bg-blue-900 py-3 px-4 text-sm font-semibold uppercase">
              <p className="text-white">Shop By Categories</p>
              <HiMenu className="w-12" />
              <div className="shadow-dm invisible absolute top-full mt-2 w-max min-w-full rounded bg-gray-100 text-black group-hover:block group-focus:visible">
                <ul className="flex flex-col rounded border border-blue-100 text-left">
                  <li className="flex flex-row items-center border-b border-gray-200 p-3 hover:rounded-t hover:bg-gray-200">
                    <BiDesktop className="w-12" /> <p>Desktop</p>
                  </li>
                  <li className="flex flex-row items-center border-b border-gray-200 p-3 hover:rounded-t hover:bg-gray-200">
                    <BiLaptop className="w-12" /> <p>Laptop</p>
                  </li>
                  <li className="flex flex-row items-center border-b border-gray-200 p-3 hover:rounded-t hover:bg-gray-200">
                    <BiPrinter className="w-12" /> <p>Printer</p>
                  </li>
                  <li className="flex flex-row items-center border-b border-gray-200 p-3 hover:rounded-t hover:bg-gray-200">
                    <MdOutlineScanner className="w-12" /> <p>Scanner</p>
                  </li>
                  <li className="flex flex-row items-center border-b border-gray-200 p-3 hover:rounded-t hover:bg-gray-200">
                    <GiServerRack className="w-12" /> <p>Server</p>
                  </li>
                </ul>
              </div>
            </button>
          </div>
          <Navigationbar />
          <AccountLogin />
        </div>
      </div>
    </>
  );
};
