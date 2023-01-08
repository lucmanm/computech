import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { defaultIcon } from "../../../assets/data/data";
import { useFetchApi } from "../hooks/useFetchApi";
export const Products = () => {
  const { products } = useFetchApi({
    apiUrl: "https://dummyjson.com/products",
  });
  const { heartIcon, cartIcon, compare } = defaultIcon;

  return (
    <div className="relative my-5 mx-2 grid h-fit grid-cols-2 justify-evenly gap-3 md:grid-cols-3 desktop:container desktop:grid-cols-5">
      {products
        .slice(5, 10)
        .map(
          ({ id, title, description, price, category, images: [image1] }) => (
            <Link key={id} to={`/products/${id}`}>
              <div>
                <div className="tw-typo group relative flex cursor-pointer flex-col gap-2 overflow-hidden rounded-md border border-blue-900 bg-white p-3 text-sm hover:border-blue-700 hover:shadow hover:shadow-gray-400 ">
                  <div className="absolute z-10 rounded-md border border-blue-800  bg-white px-1 font-semibold">
                    New
                  </div>
                  <div className="aspect-h-square aspect-w-square relative">
                    <img
                      className="m-0 object-cover"
                      src={image1}
                      alt={title}
                    />
                  </div>
                  {/* Wishlist, Compare, QuickView */}
                  <span className="relative w-fit rounded-md bg-primary-dark px-2 py-1 text-white">
                    {category}
                  </span>

                  <div className="h-20">
                    <h1>{description}</h1>
                    <p className="text-blue-900">SR {price}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between">
                    <button className="btn-icon btn-primary rounded-full p-2 desktop:shadow-sm desktop:shadow-blue-900 desktop:active:shadow-none">
                      {compare}
                    </button>
                    <button className="btn-icon btn-primary rounded-full p-2 desktop:shadow-sm desktop:shadow-blue-900 desktop:active:shadow-none">
                      {heartIcon}
                    </button>
                    <button className="btn-icon btn-primary rounded-full p-2 desktop:shadow-sm desktop:shadow-blue-900 desktop:active:shadow-none">
                      {cartIcon}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
    </div>
  );
};
