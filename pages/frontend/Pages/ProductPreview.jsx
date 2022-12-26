import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import aioimg from "../assets/img/aioimg.jpg";

export const ProductPreview = () => {
  const { prodId } = useParams();
  const [prod, setProd] = useState({});
  const apiUrl = `https://dummyjson.com/products/${prodId}`;

  const apiFitch = async () => {
    const response = await axios.get(apiUrl);
    const responseData = await response.data;
    setProd(responseData);
  };

  // const apiFitch = async () => {
  //   const response = await fetch(apiUrl);
  //   const responseData = await response.json();
  //   setProd(responseData);
  // };

  useEffect(() => {
    apiFitch();
  }, []);

  const { id, description, brand, price } = prod;

  return (
    <>
      <div className="tw-typo-product mt-4 desktop:container">
        <div className="grid grid-cols-1 gap-2 desktop:grid-cols-6">
          <div className="order-2 desktop:order-1 desktop:col-span-2 desktop:row-span-2">
            <img src={aioimg} alt="All in one Image" />
          </div>
          {/* Description */}
          <div className="order-1 line-clamp-3 desktop:order-2 desktop:col-span-4 desktop:h-24">
            <h1>{description}</h1>
          </div>
          {/* Brand price and Add to Cart */}
          <div className="order-3 prose-h1:text-base desktop:col-span-4">
            <div className="grid h-full grid-cols-1 content-end">
              <div className="font-semibold">Brand: {brand}</div>
              <div className="text-3xl font-bold text-blue-900">sr {price}</div>
              <button className="btn btn-primary w-full">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Table Container */}
        <div className="mt-2 desktop:container">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="w-1/4">Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-1/4">SKU</td>
                <td>{id}</td>
              </tr>
              <tr>
                <td className="w-1/4">Brand</td>
                <td>{brand}</td>
              </tr>
              <tr>
                <td className="w-1/4">Model</td>
                <td>Lorem ipsum dolor, sit amet consectetur</td>
              </tr>
              <tr>
                <td className="w-1/4">Processor</td>
                <td>Lorem ipsum dolor, sit amet consectetur</td>
              </tr>
              <tr>
                <td className="w-1/4">Storage</td>
                <td>Lorem ipsum dolor, sit amet consectetur</td>
              </tr>
              <tr>
                <td className="w-1/4">Graphics Card</td>
                <td>Lorem ipsum dolor, sit amet consectetur.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
