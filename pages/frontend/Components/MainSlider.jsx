import React from "react";

export const MainSlider = () => {
  return (
    <>
      <div className="relative mt-7 h-96 bg-blue-900 desktop:container">
        <div className="relative h-full">
          <div className="image-slider hidden h-full w-full bg-blue-900"></div>
          <div className="image-slider hidden h-full w-full bg-blue-900"></div>
          <div className="image-slider hidden h-full w-full bg-blue-900"></div>
        </div>
        <div className="dot-container absolute bottom-1 left-1/2 space-x-1">
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full border-2 border-gray-100 shadow shadow-gray-700 hover:bg-blue-700"></span>
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full border-2 border-gray-100 shadow shadow-gray-700 hover:bg-blue-700"></span>
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full border-2 border-gray-100 shadow shadow-gray-700 hover:bg-blue-700"></span>
        </div>
      </div>
    </>
  );
};
