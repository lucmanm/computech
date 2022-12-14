import React, { useEffect, useState } from "react";
import { icons } from "./assets/data/data";
export const Products = () => {
  const [prod, setProd] = useState([]);

  const apiUrl = "https://dummyjson.com/products";
  const apiFitch = async () => {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    setProd(responseData.products);
  };

  useEffect(() => {
    apiFitch();
  }, []);

  const { heartIcon, cartIcon, compare } = icons;

  return (
    <div className="relative m-10 grid  h-fit cursor-pointer grid-cols-2 justify-evenly gap-3 tablet:grid-cols-3 desktop:container desktop:grid-cols-5">
      {prod.slice(0, 5).map(({ id, description, price, images: [image1] }) => (
        <div key={id}>
          <div className="hover:hadow-lg group prose relative flex flex-col gap-2 overflow-hidden  rounded-md border border-blue-900 bg-white p-4 text-sm hover:border-blue-700 hover:shadow-lg">
            <div className="absolute z-10 rounded-md border border-blue-800  bg-white px-1 font-semibold">
              New
            </div>

            <div className="aspect-h-square aspect-w-square relative">
              <img
                className="m-0 object-cover"
                src={image1}
                alt="All in one Image"
              />
            </div>
            {/* Wishlist, Compare, QuickView */}
            <span className="relative w-fit rounded-md bg-primary-dark px-2 py-1 text-white">
              Category
            </span>

            <div className="">
              <h4 className="m-0 line-clamp-2">{description}</h4>
              <span className="block text-lg font-bold">Sr {price}</span>
            </div>

            <div className="flex flex-grow flex-wrap items-center justify-between">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-900/50 focus:shadow-inner">
                {compare}
              </button>
              <button className="flex h-9 w-9 items-center justify-center  rounded-full bg-blue-900 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-900/50 focus:shadow-none">
                {heartIcon}
              </button>
              <button className="flex h-9 w-9 items-center justify-center  rounded-full bg-blue-900 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-900/50 focus:shadow-none">
                {cartIcon}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
