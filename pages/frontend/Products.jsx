import React, { useEffect, useState } from "react";
import aioimg from "./assets/img/aioimg.jpg";
import { icons } from "./assets/data/data";
export const Products = () => {
  const [prod, setProd] = useState([]);

  const apiUrl = "https://dummyjson.com/products";
  // const apiUrl = "https://jsonplaceholder.typicode.com/todos";
  // let displayData;
  // function apiFitch() {
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       displayData = responseData.map((prod) => {
  //         return <p key={prod.id}>{prod.title}</p>;
  //       });
  //       console.log(displayData);
  //       setProd(displayData);
  //     });
  //   // return;
  // }
  // const apiFitch = async () => {
  //   const response = await fetch(apiUrl);
  //   const responseData = await response.json();
  //   displayData = responseData.products.map((prod) => {
  //     return <p key={prod.id}>{prod.title}</p>;
  //   });
  //   // console.log(displayData);
  //   setProd(displayData);
  // };
  const apiFitch = async () => {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    // displayData = responseData.products.map((prod) => {
    //   return <p key={prod.id}>{prod.title}</p>;
    // });
    setProd(responseData.products);

  };
  useEffect(() => {
    apiFitch();
  }, []);

  return (
    <div className="grid h-fit grid-cols-2  justify-evenly gap-3 tablet:grid-cols-3 desktop:container desktop:grid-cols-5 relative m-10">
      {prod.slice(0, 5).map(({id, description, price, images: [image1]}) => (
        <div className="" key={id}>
          <div className="group prose relative min-h-fit overflow-hidden rounded-md  bg-white p-4 hover:shadow-md">
            <span className="absolute top-7 left-7 rounded-md border px-1 ring-1 ring-blue-800 z-10">
              New
            </span>
            <img
              className="relative cursor-pointer w-52 h-52 border"
              src={image1}
              alt="All in one Image"
            />
            {/* Wishlist, Compare, QuickView */}
            <div className=" absolute top-7 right-7 flex flex-col items-end space-y-1">
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
              {description}
            </h4>
            <span className="block text-lg font-bold">
              Sr {price}
            </span>
            <button className="container flex max-w-full justify-between rounded-md bg-blue-900 p-1 pl-4 text-white hover:bg-blue-700">
              <span>{icons.cartIcon}</span>
              <span className=" pr-4">Add to cart</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
