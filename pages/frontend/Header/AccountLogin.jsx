import React from "react";
import { Icons } from "../assets/data/data";
export const AccountLogin = () => {
  return (
    <div className="grow">
      <div className="relative flex flex-row space-x-4 px-2 text-blue-900">
        <div className="flex flex-row">
          {Icons.languageIcon}
          <span className=" font-medium">Language</span>
        </div>
        <div>{Icons.personIcon}</div>
        <div>{Icons.heartIcon}</div>
        <div>{Icons.cartIcon}</div>
      </div>
    </div>
  );
};
