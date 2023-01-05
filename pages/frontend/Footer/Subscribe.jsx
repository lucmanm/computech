import React from "react";
import { defaultIcon } from "../assets/data/data";

const Subscribe = () => {
  return (
    <>
      <div className="bg-black">
        <div className="dekstop:container flex flex-row flex-wrap items-center justify-center p-9">
          <div className="text-white">{defaultIcon.emailIcon}</div>
          <div className="p-x prose prose-invert px-7 prose-p:text-gray-200">
            <h2 className="m-0">Fear Of Missing Out?</h2>
            <p>Get the latest deals, updates & more</p>
          </div>
          <div className="flex justify-center space-x-4">
            <span>
              <input type="text" id="" className="w-full rounded-full" />
            </span>
            <span>
              <input
                className="btn btn-primary btn-sm rounded-full"
                type="button"
                value="Subscribe"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
