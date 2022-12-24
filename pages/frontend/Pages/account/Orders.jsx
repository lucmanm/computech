import React from "react";
import aioimg from "../../assets/img/aioimg.jpg";
export const Orders = () => {
  return (
    <>
      <orders>
        <div className="flex flex-col justify-center p-4">
          <div className="card-title">Orders</div>
          {/* Orders Listing */}
          <div className="border-y-2 py-1">
            <span>Order #: 1265456465</span>
          </div>
          <div className=" flex items-center">
            <div>
              <img src={aioimg} alt="All  in one Image" className="h-24 w-24" />
            </div>
            <div className="py-1 px-4">
              <p>Date: 17/12/2022</p>
              <p>Model: Model Name</p>
              <p>Brand: Brand Name</p>
              <p>
                Description: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Nihil quo doloribus ipsam natus voluptate nemo eos
                quibusdam recusandae?
              </p>
              <p className="text-lg font-bold text-blue-900">Sr 100.00</p>
            </div>
          </div>
        </div>
      </orders>
    </>
  );
};
