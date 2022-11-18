import React from "react";
import { icons } from "../assets/data/data";
const Subscribe = () => {
  return (
    <div className="bg-black text-white">
      <div className="dekstop:container flex flex-row flex-wrap items-center justify-center border border-white p-7">
        <div>
          <span>{icons.emailIcon}</span>
        </div>
        <div className="p-x prose prose-invert px-7 prose-p:text-gray-200">
          <h2 className="m-0">Fear Of Missing Out?</h2>
          <p>Get the latest deals, updates & more</p>
        </div>
        <div className="flex justify-center space-x-4">
          <span>
            <input
              type="text"
              name="Subscribe"
              id=""
              className="w-full rounded-full text-black"
            />
          </span>
          <span>
            <input
              className="h-full cursor-pointer rounded-full bg-blue-900 px-6 font-semibold  hover:bg-blue-700"
              type="button"
              value="Subscribe"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
