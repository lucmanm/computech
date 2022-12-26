import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
export const SideBar = () => {
  const { activeMenu } = useStateContext();
  return (
    <>
      {activeMenu && (
        <div className="fixed top-0 z-100 h-full w-screen overflow-scroll bg-gray-100 md:hidden">
          <div>
            <div className="bg-blue-900 p-2 text-center font-bold text-white">
              Menu
            </div>
          </div>
          <div>
            <div className="mt-2 flex cursor-pointer items-center rounded py-2 px-4 hover:bg-blue-900 hover:text-white">
              <p>Login or Register</p>
            </div>
            <div className="mt-2 flex cursor-pointer items-center rounded py-2 px-4 hover:bg-blue-900 hover:text-white">
              <p>Wishlist</p>
            </div>
            <div className="mt-2 flex cursor-pointer items-center rounded py-2 px-4 hover:bg-blue-900 hover:text-white">
              <p>Our Locations</p>
            </div>
            <div className="mt-2 flex cursor-pointer items-center rounded py-2 px-4 hover:bg-blue-900 hover:text-white">
              <p>Language</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
