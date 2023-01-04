import React from "react";
import CompuTechLogo from "./../assets/img/CompuTechLogo.png";
import { useStateContext } from "../contexts/ContextProvider";
export const LsideBarMenu = () => {
  const { leftSideBar, setLeftSideBar } = useStateContext();

  return (
    <>
      {/* Left sidebar Menu Option */}
      {leftSideBar && (
        <div className="fixed top-0 left-0 z-900 flex h-screen w-3/4 flex-col flex-wrap bg-gray-200 pb-14 desktop:hidden">
          <button
            className="absolute right-0 mt-2 mr-2 h-10 w-10 cursor-pointer rounded-full bg-red-900 hover:bg-red-700"
            onClick={(prevValue) => setLeftSideBar(!prevValue)}
          />
          <div className="flex-1">
            <div className="h-fit w-fit p-4">
              <img src={CompuTechLogo} alt="Company Logo" className="w-1/2" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
