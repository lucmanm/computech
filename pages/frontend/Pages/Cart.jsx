import React from "react";
import aioimg from "../assets/img/aioimg.jpg";
import { icons } from "../assets/data/data";
export const Cart = () => {
  const { deleteIcon } = icons;
  return (
    <>
      {/* Mobile, Tablet & Desktop */}
      <div className="my-5 mx-2 flex flex-col flex-wrap gap-2 text-sm tablet:mx-2 tablet:flex-row desktop:container">
        <div className="card basis-full tablet:basis-2/3">
          <div className="card-title">Cart</div>
          {/* Cart Products */}
          <div className=" border-b border-blue-900 pb-1">
            {/* images of the Item */}
            <div className="flex flex-row flex-wrap items-center text-sm">
              <div className="shrink-0 grow-0 basis-2/12">
                <img
                  src={aioimg}
                  alt="All in one Image"
                  className="object-cover"
                />
              </div>
              {/* model and Description of the item */}
              <div className="h-fit grow basis-10/12 py-1 px-4">
                <p className="font-semibold">Model: Model Name</p>
                <p className="line-clamp-3">
                  Description: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Nihil quo doloribus ipsam natus voluptate
                  nemo eos quibusdam recusandae?
                </p>
                <p>Brand: Brand Name</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              {/* Delete Item Icon */}
              <button className="btn btn-danger btn-sm rounded-full">
                {deleteIcon}
              </button>
              <div className="flex flex-wrap items-center justify-center gap-x-1">
                <p className="text-2xl font-bold text-blue-900">Sr 100.00</p>
                <button className="btn btn-primary font-bold">-</button>
                <input
                  type="text"
                  className="h-fit w-11 flex-initial justify-center rounded-md  py-2 px-3 text-center text-sm font-medium"
                  value="1"
                  onChange={() => {}}
                />
                <button className="btn btn-primary">+</button>
              </div>
            </div>
          </div>
        </div>
        {/* Summary Order */}
        <div className="card basis-full tablet:h-fit tablet:basis-1/4">
          <div className="card-title">Order Summary</div>
          <div>
            <section className="flex flex-col flex-wrap">
              <div className="flex flex-row flex-wrap">
                <div className="grow py-1">Sub Total</div>
                <div className="p-1 text-right">00,000.00</div>
              </div>
              <div className="flex flex-row flex-wrap">
                <div className="grow py-1">Shipping Fee</div>
                <div className="p-1">00,000.00</div>
              </div>

              <div className="flex flex-row flex-wrap">
                <div className="grow py-1">Total</div>
                <div className="p-1">00,000.00</div>
              </div>
            </section>
            <div>
              <button className="btn btn-primary w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
