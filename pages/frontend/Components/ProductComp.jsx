import React, { useState, useEffect } from "react";
import aioimg from "./assets/img/aioimg.jpg";
import { icons } from "./assets/data/data";
export const ProductComp = () => {
  const [data, setData] = useState([]);
  const apiUrl = "https://dummyjson.com/products";
  const apiFitch = async () => {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    // displayData = responseData.products.map((prod) => {
    //   return <p key={prod.id}>{prod.title}</p>;
    // });

    setData(responseData.products);
  };

  useEffect(() => {
    apiFitch();
  }, []);

  return (
    <>
      {data.map((prodDetails) => (
        <div className="" key={prodDetails.id}>
          {prodDetails.title}
          {/* <div className="group prose relative min-h-fit overflow-hidden rounded-md  bg-white p-7 hover:shadow-md">
        <span className="absolute top-7 left-7 rounded-md border px-1 ring-1 ring-blue-800">
        New
        </span>
      <img className=" cursor-pointer" src={aioimg} alt="All in one Image" /> */}
          {/* Wishlist, Compare, QuickView */}
          {/* <div className=" absolute top-7 right-7 flex flex-col items-end space-y-1">
          <button className="invisible relative flex h-11  w-11 flex-row-reverse items-center overflow-hidden truncate rounded-md bg-blue-900 py-1 text-white opacity-0  duration-300 hover:w-32 hover:duration-500 group-hover:visible group-hover:opacity-100 group-hover:duration-300">
          <span className="pr-2">{icons.heartIcon}</span>
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
          <span>{icons.cartIcon}</span>
          <span className=" pr-3">Add to cart</span>
          </button>
        </div> */}
        </div>
      ))}
    </>
  );
};
