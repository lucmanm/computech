import React from "react";

export const Navigationbar = () => {
  return (
    <>
      <div className="grow">
        <ul className="text-md text-blac flex cursor-pointer flex-row flex-wrap text-center font-medium">
          <li className="group py-2 px-2">
            <div className="group-hover:rounded-t group-hover:bg-blue-900">
              <span className="border-b-4 border-gray-400 group-hover:border-blue-900 group-hover:text-white">
                Brands
              </span>
              <ul className="absolute hidden rounded border border-gray-200 bg-gray-100 text-left group-hover:block">
                <li className="h-8 w-40 border-b-2 px-2 pt-1 hover:bg-gray-200">
                  Dell
                </li>
                <li className="h-8 w-40 border-b-2 px-2 pt-1 hover:bg-gray-200">
                  Hp
                </li>
                <li className="h-8 w-40 px-2 pt-1 hover:bg-gray-200">Lenovo</li>
              </ul>
            </div>
          </li>
          <li className="shrink-0 py-2 px-2">
            <span className="border-b-4 border-gray-400 hover:border-blue-900 hover:text-blue-900">
              New Arrival
            </span>
          </li>
          <li className=" shrink-0 py-2 px-2">
            <span className="border-b-4 border-gray-400 hover:border-blue-900 hover:text-blue-900">
              Special Offers
            </span>
          </li>
          <li className="py-2 px-2">
            <span className="border-b-4 border-gray-400 hover:border-blue-900 hover:text-blue-900">
              Brands
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
