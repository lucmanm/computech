import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import aioimg from "../../../assets/img/aioimg.jpg";

export const ProductPreview = () => {
  const { prodId } = useParams();
  const [prod, setProd] = useState({});
  const apiUrl = `https://dummyjson.com/products/${prodId}`;

  const apiFitch = async () => {
    const response = await axios.get(apiUrl);
    const responseData = await response.data;
    setProd(responseData);
  };

  useEffect(() => {
    apiFitch();
  }, []);

  const { id, description, brand, price } = prod;

  return (
    <>
      <div className="tw-typo-product mx-auto w-full max-w-full p-4 desktop:container">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
          <div className="order-2 md:order-1 md:col-span-2 md:row-span-2">
            <img src={aioimg} alt="All in one Image" />
          </div>
          {/* Description */}
          <div className="order-1 line-clamp-3 md:order-2 md:col-span-4 md:h-24">
            <h1>{description}</h1>
          </div>
          {/* Brand price and Add to Cart */}
          <div className="order-3 prose-h1:text-base md:col-span-4">
            <div className="grid h-full grid-cols-1 content-end">
              <div className="font-semibold">Brand: {brand}</div>
              <div className="text-3xl font-bold text-blue-900">sr {price}</div>
              <button className="btn btn-primary w-full">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Table Container */}
        <div className="mt-2 md:min-w-full">
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
