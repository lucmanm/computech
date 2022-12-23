import React from "react";
import aioimg from "../assets/img/aioimg.jpg";

export const ProductPreview = () => {
  return (
    <>
      <div className="desktop:container">
        <div className="prose flex flex-col prose-h1:p-0 prose-img:m-0">
          <div>
            <h1>
              UAWEI MateBook D15, Core i5, 8GB, 256GB SSD, 15.6 inch, Mystic
              Sliver
            </h1>
          </div>
          <div className="w-full">
            <img src={aioimg} alt="All in one Image" />
          </div>
          <div className="flex flex-col">
            <span>Brand: Lenovo</span>
            <span>Price: SR 100.00</span>
          </div>
          <div>
            <button className="btn btn-primary ">Add to Cart</button>
          </div>
          <div className="flex flex-col">
            <span>SKU: Lorem ipsum dolor sit amet </span>
            <span>Brand: Lorem ipsum dolor sit amet </span>
            <span>Model: Lorem ipsum dolor sit amet </span>
            <span>Processor: Lorem ipsum dolor sit amet </span>
            <span>Ram: Lorem ipsum dolor sit amet </span>
            <span>Storage: Lorem ipsum dolor sit amet </span>
            <span>Graphics Card: Lorem ipsum dolor sit amet </span>
          </div>
        </div>
      </div>
    </>
  );
};
