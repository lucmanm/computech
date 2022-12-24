import React from "react";
import { ProdCatImag } from "../assets/data/data";
export const SearchProducts = () => {
  return (
    <>
      <div className="fixed top-0 z-100 hidden h-full w-screen overflow-hidden bg-gray-100">
        <div className="grid cursor-pointer grid-cols-3 gap-2 p-2 text-center font-semibold">
          {ProdCatImag.map(({ id, title, image }) => (
            <div
              key={id}
              className="overflow-auto rounded-md border bg-white shadow hover:border-blue-700">
              <div className="aspect-h-square aspect-w-square relative">
                <img
                  className="m-0 object-cover"
                  src={image}
                  alt="All in one Image"
                />
              </div>
              <div>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
