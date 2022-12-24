import React from "react";
import { Navigationbar } from "./Navigationbar";
import { FrontSideNav } from "./FrontSideNav";
import { Link } from "react-router-dom";
import CompuTechLogo from "../assets/img/CompuTechLogo.png";

import { HiMenu } from "react-icons/hi";
import { BiDesktop, BiLaptop, BiPrinter } from "react-icons/bi";
import { MdOutlineScanner } from "react-icons/md";
import { GiServerRack } from "react-icons/gi";

import { icons, mobIcons } from "../assets/data/data";
import { TopNavigation } from "./TopNavigation";
export const Header = () => {
  const { languageIcon, personIcon, heartIcon, cartIcon } = icons;
  return (
    <>
      <div className="bg-white shadow-md">
        <TopNavigation />
        <div className="py-2 desktop:container">
          <div className="flex flex-row flex-wrap">
            <div className="order-2 basis-2/12 items-center p-1 desktop:order-1">
              <div className="flex h-full items-center justify-center">
                <Link to="/">
                  <img src={CompuTechLogo} alt="" width={200} />
                </Link>
              </div>
            </div>
            <div className="order-3 basis-6/12 p-1 desktop:order-2 desktop:basis-8/12">
              <div className="flex h-full items-center justify-center">
                <input
                  className="input w-full rounded-full"
                  type="text"
                  name="Search"
                  id=""
                />
              </div>
            </div>
            <div className="hidden basis-2/12 p-1 desktop:order-3 desktop:block">
              <div className="flex h-full flex-col items-center justify-center">
                <span className="font-semibold text-blue-900">
                  Need help? Call Us
                </span>
                <span>+966 56 261 7554</span>
              </div>
            </div>
            {/* Dropdown Navigation & Sidebar */}
            <div className="order-first basis-2/12 p-1 desktop:order-4">
              <div className="flex h-full items-center justify-center">
                Menu
              </div>
            </div>
            {/* Navigation Menus */}
            <div className="center z-50 hidden basis-8/12 p-1 desktop:order-5 desktop:block">
              <div className="grow">
                <ul className="text-md text-blac flex cursor-pointer flex-row flex-wrap text-center font-medium">
                  <li className="group py-2 px-2">
                    <div className="group-hover:rounded-t group-hover:bg-blue-900">
                      <span className="border-b-4 border-gray-400 group-hover:border-blue-900 group-hover:text-white">
                        Brands
                      </span>
                      <ul className="absolute hidden rounded border border-gray-200 bg-gray-100 text-left group-hover:block">
                        <li className="h-8 w-40 border-b-2 px-2 pt-1 hover:bg-gray-200">
                          Dell
                        </li>
                        <li className="h-8 w-40 border-b-2 px-2 pt-1 hover:bg-gray-200">
                          Hp
                        </li>
                        <li className="h-8 w-40 px-2 pt-1 hover:bg-gray-200">
                          Lenovo
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="shrink-0 py-2 px-2">
                    <span className="border-b-4 border-gray-400 hover:border-blue-900 hover:text-blue-900">
                      New Arrival
                    </span>
                  </li>
                  <li className=" shrink-0 py-2 px-2">
                    <span className="border-b-4 border-gray-400 hover:border-blue-900 hover:text-blue-900">
                      Special Offers
                    </span>
                  </li>
                  <li className="py-2 px-2">
                    <span className="border-b-4 border-gray-400 hover:border-blue-900 hover:text-blue-900">
                      Brands
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Cart Icons */}
            <div className="order-last basis-2/12 p-1 desktop:order-6">
              <div className="flex h-full items-center justify-center">
                <Link to="/cart">
                  <button className="btn-icon btn-primary rounded-full desktop:shadow-sm desktop:shadow-blue-900 desktop:active:shadow-none">
                    {cartIcon}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
