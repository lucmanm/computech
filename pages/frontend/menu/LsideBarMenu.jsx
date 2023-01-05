import React from "react";
import CompuTechLogo from "./../assets/img/CompuTechLogo.png";
import { useStateContext } from "../contexts/ContextProvider";
import { defaultIcon } from "../assets/data/data";
import { MobileMainMenu } from "../menu/MobileMainMenu";
export const LsideBarMenu = () => {
  const { leftSideBar, setLeftSideBar } = useStateContext();
  const { menuIc } = defaultIcon;
  return (
    <>
      {/* Left sidebar Menu Option */}
      <div
        className={`fixed top-0 left-0 z-900 flex h-screen duration-100 ${
          leftSideBar ? "w-2/3" : "w-0"
        } flex-col flex-wrap overflow-hidden bg-gray-200 pb-14 desktop:hidden`}
      >
        <button
          className="absolute right-0 z-900 mt-6 mr-5 box-border cursor-pointer overflow-auto text-blue-900 hover:text-blue-700 focus:text-red-700 desktop:hidden"
          onClick={(prevValue) => setLeftSideBar(!prevValue)}
        >
          {menuIc}
        </button>
        <div className="flex-1 border-black">
          <div className="h-fit w-fit p-4">
            <img src={CompuTechLogo} alt="Company Logo" className="w-1/2" />
          </div>
          <MobileMainMenu />
        </div>
      </div>
    </>
  );
};
