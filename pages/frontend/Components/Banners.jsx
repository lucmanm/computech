import React from "react";
import Banner400x400 from "../assets/img/default_img/Banner400x400.jpg";
import Banner596x249 from "../assets/img/default_img/Banner596x249.jpg";
import Banner1190x242 from "../assets/img/default_img/Banner1190x242.jpg";
export const Banners = () => {
  return (
    <>
      <div className="my-2 mx-2 flex h-fit flex-col gap-y-3 desktop:container">
        <div className="flex h-fit flex-wrap gap-3">
          <div className="desktop:h- w-1/3 grow bg-blue-900 desktop:w-1/6">
            <img src={Banner596x249} alt="" />
          </div>
          <div className="desktop:h- w-1/3 grow bg-blue-900 desktop:w-1/6">
            <img src={Banner596x249} alt="" />
          </div>
          <div className="desktop:h- w-1/3 grow bg-blue-900 desktop:w-1/6">
            <img src={Banner596x249} alt="" />
          </div>
          <div className="desktop:h- w-1/3 grow bg-blue-900 desktop:w-1/6">
            <img src={Banner596x249} alt="" />
          </div>
        </div>

        <div className="flex h-fit flex-wrap gap-3">
          <div className="desktop:h9-9.5 w-5/6 grow bg-blue-900 desktop:w-2/6">
            <img src={Banner1190x242} alt="" />
          </div>
          <div className="desktop:h9-9.5 w-5/6 grow bg-blue-900 desktop:w-2/6">
            <img src={Banner1190x242} alt="" />
          </div>
        </div>

        <div className="justify-left flex h-fit snap-x snap-mandatory items-center gap-x-3 overflow-auto">
          <div className="aspect-h-square aspect-1 h-40 w-5/12 cursor-pointer snap-start snap-always bg-blue-900 desktop:h-52">
            <img src={Banner400x400} alt="" />
          </div>
          <div className="aspect-h-square aspect-1 h-40 w-5/12 cursor-pointer snap-start snap-always bg-blue-900 desktop:h-52">
            <img src={Banner400x400} alt="" />
          </div>
          <div className="aspect-h-square aspect-1 h-40 w-5/12 cursor-pointer snap-start snap-always bg-blue-900 desktop:h-52">
            <img src={Banner400x400} alt="" />
          </div>
          <div className="aspect-h-square aspect-1 h-40 w-5/12 cursor-pointer snap-start snap-always bg-blue-900 desktop:h-52">
            <img src={Banner400x400} alt="" />
          </div>
          <div className="aspect-h-square aspect-1 h-40 w-5/12 cursor-pointer snap-start snap-always bg-blue-900 desktop:h-52">
            <img src={Banner400x400} alt="" />
          </div>
          <div className="aspect-h-square aspect-1 h-40 w-5/12 cursor-pointer snap-start snap-always bg-blue-900 desktop:h-52">
            <img src={Banner400x400} alt="" />
          </div>
          <div className="aspect-h-square aspect-1 h-40 w-5/12 cursor-pointer snap-start snap-always bg-blue-900 desktop:h-52">
            <img src={Banner400x400} alt="" />
          </div>
          <div className="aspect-h-square aspect-1 h-40 w-5/12 cursor-pointer snap-start snap-always bg-blue-900 desktop:h-52">
            <img src={Banner400x400} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
