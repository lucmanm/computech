import React from "react";

export const CatIconNavigation = () => {
  return (
    <div className="group relative px-5 pt-8">
      <div className="relative flex flex-col items-center text-base group-hover:text-blue-700">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" my-2 h-12 w-12 cursor-pointer stroke-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
        </span>
        <span className="cursor-pointer">Desktop</span>
        <div className="mt-6 flex min-w-full justify-center">
          <div className="invisible h-1 w-0 duration-300 group-hover:visible group-hover:grow group-hover:bg-blue-700 group-hover:duration-300"></div>
        </div>
      </div>
    </div>
  );
};
