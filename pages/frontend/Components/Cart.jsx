import React from "react";
import aioimg from "../assets/img/aioimg.jpg";
export const Cart = () => {
  return (
    <>
      <div className="my-5 mx-2 flex flex-col flex-wrap gap-2 text-sm tablet:mx-2 tablet:flex-row desktop:container">
        <div className="card basis-full tablet:basis-2/3">
          <div className="card-title">Cart</div>
          <div className="flex items-center text-sm">
            <div>
              <img src={aioimg} alt="All  in one Image" className="h-24 w-24" />
            </div>
            <div className="py-1 px-4">
              <p>Model: Model Name</p>
              <p>
                Description: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Nihil quo doloribus ipsam natus voluptate nemo eos
                quibusdam recusandae?
              </p>
              <p>Brand: Brand Name</p>
              <p className="text-lg font-bold text-blue-900">Sr 100.00</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="btn btn-primary font-bold">-</button>
            <input
              type="text"
              className="h-fit w-11 flex-initial justify-center rounded-md  py-2 px-3 text-sm font-medium"
              max={1}
              min={0}
            />
            <button className="btn btn-primary">+</button>
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
        {/* Summary Order */}
        <div className="card basis-full tablet:basis-1/4">
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
