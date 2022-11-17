import React from "react";
import aioimg from "./assets/img/aioimg.jpg";
export const ProductComp = () => {
  return (
    <div className="">
      <div className="group prose relative min-h-fit overflow-hidden rounded-md  bg-white p-7 hover:shadow-md">
        <span className="absolute top-7 left-7 rounded-md border px-1 ring-1 ring-blue-800">
          New
        </span>
        <img className=" cursor-pointer" src={aioimg} alt="All in one Image" />
        {/* Wishlist, Compare, QuickView */}
        <div className=" absolute top-7 right-7 flex flex-col items-end space-y-1">
          <button className="invisible relative flex h-9  w-9 flex-row-reverse items-center overflow-hidden truncate rounded-md bg-blue-900 py-1 text-white opacity-0  duration-300 hover:w-32 hover:duration-500 group-hover:visible group-hover:opacity-100 group-hover:duration-300">
            <span className=" stroke-2 pr-1">
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </span>
            <span className="mx-1 inline-block px-1 text-base font-semibold">
              Wish List
            </span>
          </button>
        </div>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-blue-700">
          Category
        </span>
        <h4 className="leading-6 line-clamp-2">
          DELL OPTIPLEX 3090, I3-10105, 8GB, 240 GB SSD 2.5” + 1TB HDD, FREEDOS
          (WITHOUT WINDOWS), WITH 22” MONITOR
        </h4>
        <span className="block text-lg font-bold">$ 600.00</span>
        <button className="container flex max-w-full justify-between rounded-md bg-blue-900 p-2 text-white hover:bg-blue-700">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
          <span className=" pr-3">Add to cart</span>
        </button>
      </div>
    </div>
  );
};
