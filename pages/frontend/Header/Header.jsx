import React from "react";
import { Link, NavLink } from "react-router-dom";
import CompuTechLogo from "../assets/img/CompuTechLogo.png";
import { defaultIcon } from "../assets/data/data";
import { TopNavigation } from ".";
import { MainMenu } from "./../menu/MainMenu";
import { useStateContext } from "../contexts/ContextProvider";

export const Header = () => {
  const { clickMenuHandler } = useStateContext();
  const { cartIcon, menuIc } = defaultIcon;

  return (
    <>
      <div className="sticky top-0 z-800 mb-6 bg-white shadow-md">
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
              <form action="" method="post">
                <div className="flex h-full items-center justify-center">
                  <input
                    className="w-full rounded-full text-base"
                    type="text"
                  />
                </div>
              </form>
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
                <MainMenu />
                <button
                  className="right-0 z-900 cursor-pointer text-blue-900 focus:text-blue-700 desktop:hidden"
                  onClick={() => clickMenuHandler("leftMenu")}
                >
                  {menuIc}
                </button>
              </div>
            </div>
            {/* Navigation Menus */}
            <div className="center z-50 hidden basis-8/12 p-1 desktop:order-5 desktop:block">
              <div className="grow">
                <ul className="text-md text-blac flex cursor-pointer flex-row flex-wrap text-center font-medium">
                  <li className="group py-2 px-2">
                    <div className="group-hover:rounded-t group-hover:bg-blue-900">
                      <span className="border-b-4 border-gray-400 px-4 group-hover:border-b-blue-900 group-hover:text-white">
                        Brands
                      </span>
                      <ul className="absolute mt-1 hidden rounded border-2 bg-blue-900 text-left text-white group-hover:block group-hover:border-blue-900">
                        <li className="h-8 w-40 border-b-2 border-blue-900 px-2 pt-1 hover:bg-blue-700">
                          Dell
                        </li>
                        <li className="h-8 w-40 border-b-2 border-blue-900 px-2 pt-1 hover:bg-blue-700">
                          Hp
                        </li>
                        <li className="h-8 w-40 px-2 pt-1 hover:bg-blue-700">
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
                </ul>
              </div>
            </div>
            {/* Cart Icons */}
            <div className="order-last basis-2/12 p-1 desktop:order-6">
              <div className="flex h-full items-center justify-center">
                <Link to="/cart">
                  <button className="btn-icon btn-primary rounded-full p-2  desktop:shadow-sm desktop:shadow-blue-900 desktop:active:shadow-none">
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
