import React from "react";

export const MainSlider = () => {
  return (
    <>
      <div className="relative h-56 bg-blue-900  md:h-72 desktop:container desktop:h-96">
        <div className="relative h-fit bg-blue-900">
          <div className="image-slider  h-full w-full bg-blue-900"></div>
          <div className="image-slider  h-full w-full bg-blue-600"></div>
          <div className="image-slider  h-full w-full bg-blue-300"></div>
        </div>
        <div className="dot-container absolute bottom-0 flex w-full flex-row flex-wrap justify-center space-x-2 py-3">
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full border-2 border-gray-100 shadow shadow-gray-700 hover:bg-blue-700"></span>
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full border-2 border-gray-100 shadow shadow-gray-700 hover:bg-blue-700"></span>
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full border-2 border-gray-100 shadow shadow-gray-700 hover:bg-blue-700"></span>
        </div>
      </div>
    </>
  );
};
