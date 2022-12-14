import React from "react";
import aioimg from "../../assets/img/aioimg.jpg";
export const WishList = () => {
  return (
    <>
      <wishlist>
        <div className="flex flex-col justify-center p-4">
          <div className="mb-2 rounded-sm bg-blue-900 p-1 font-bold text-white">
            Wishlist
          </div>
          {/* Orders Listing */}
          <div className="flex flex-col rounded-md border border-blue-900 p-1">
            <div className="flex items-center text-sm">
              <div>
                <img
                  src={aioimg}
                  alt="All  in one Image"
                  className="h-24 w-24"
                />
              </div>
              <div className="py-1 px-4">
                <p>Model: Model Name</p>
                <p>
                  Description: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Nihil quo doloribus ipsam natus voluptate
                  nemo eos quibusdam recusandae?
                </p>
                <p>Brand: Brand Name</p>
                <p className="text-lg font-bold text-blue-900">Sr 100.00</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </wishlist>
    </>
  );
};
