import React from "react";
import Banner400x400 from "../assets/img/default_img/Banner400x400.jpg";
import Banner596x249 from "../assets/img/default_img/Banner596x249.jpg";
import Banner1190x242 from "../assets/img/default_img/Banner1190x242.jpg";
export const Banners = () => {
  return (
    <>
      <div className="my-2 grid grid-cols-6 gap-4 desktop:container">
        <div className="col-span-3 h-24 bg-blue-900 text-center text-white md:h-32 ">
          <img src={Banner1190x242} alt="" />
        </div>
        <div className="col-span-3 h-24 bg-blue-900 text-center text-white md:h-32">
          640x128
        </div>
        <div className="col-span-6 h-24 bg-blue-900 text-center text-white md:h-32">
          1280x128
        </div>
        <div className="col-span-2 h-24 bg-blue-900 text-center text-white md:h-32">
          426x128
        </div>
        <div className="col-span-2 h-24 bg-blue-900 text-center text-white md:h-32">
          426x128
        </div>
        <div className="col-span-2 h-24 bg-blue-900 text-center text-white md:h-32">
          426x128
        </div>

        <div className="aspect-h-square col-span-1 aspect-1 bg-blue-900 text-center text-white">
          213x128
        </div>
        <div className="aspect-h-square col-span-1 aspect-1 bg-blue-900 text-center text-white">
          213x128
        </div>
        <div className="aspect-h-square col-span-1 aspect-1 bg-blue-900 text-center text-white">
          213x128
        </div>
        <div className="aspect-h-square col-span-1 aspect-1 bg-blue-900 text-center text-white">
          213x128
        </div>
        <div className="aspect-h-square col-span-1 aspect-1 bg-blue-900 text-center text-white">
          213x128
        </div>
        <div className="aspect-h-square col-span-1 aspect-1 bg-blue-900 text-center text-white">
          213x128
        </div>
      </div>
    </>
  );
};
