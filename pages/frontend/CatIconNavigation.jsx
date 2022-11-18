import React from "react";
import { categoryIcon } from "./assets/data/data";
export const CatIconNavigation = () => {
  return (
    <div className="group relative pt-8">
      <div className="relative flex flex-col items-center text-base group-hover:text-blue-700">
        <span>{categoryIcon.catIcon}</span>
        <span className="cursor-pointer">Desktop</span>
        <div className="flex  min-w-full justify-center">
          <div className="invisible h-1 w-0 duration-300 group-hover:visible group-hover:grow group-hover:bg-blue-700 group-hover:duration-300"></div>
        </div>
      </div>
    </div>
  );
};
