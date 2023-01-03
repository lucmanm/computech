import React from "react";
import { HiMenu } from "react-icons/hi";
import { BiDesktop, BiLaptop, BiPrinter } from "react-icons/bi";
import { MdOutlineScanner } from "react-icons/md";
import { GiServerRack } from "react-icons/gi";

export const FrontSideNav = () => {
  return (
    <>
      <button className="group relative my-2 flex shrink-0 cursor-pointer items-center justify-center rounded bg-blue-900 py-3 px-4  font-semibold uppercase">
        <p className="text-white">Shop By Categories</p>
        <HiMenu className="w-12" />
        <div className="shadow-dm    absolute top-full mt-2 w-max min-w-full rounded bg-gray-100 text-black group-hover:block group-focus:visible">
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
    </>
  );
};
