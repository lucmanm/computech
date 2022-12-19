import React from "react";
import aioimg from "../assets/img/aioimg.jpg";
export const Cart = () => {
  return (
    <>
      <div className="my-5 flex flex-row  flex-wrap gap-2 text-sm desktop:container">
        <div className="flex w-full grow basis-1/2 flex-col rounded-md border border-blue-900 bg-white p-1 shadow-md">
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
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
        {/* Summary Order */}
        <div className=" flex w-full  basis-1/4 flex-col rounded-md border border-blue-900 bg-white p-1 shadow-md">
          <div className="mb-2 rounded-md bg-blue-900 p-1 font-bold text-white">
            Summary Order
          </div>
          <div>
            <section>
              <div>
                <div>Saved Ammountbr (Discounted/Cashback)</div>
                <div>00,000.00</div>
              </div>
              <div>
                <div>Total Ammount (Items)</div>
                <div>00,000.00</div>
              </div>
            </section>
          </div>
          <div></div>
          <div></div>
          <div>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
