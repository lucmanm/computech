import React from "react";
import { payAndShipIc } from "../assets/img/default_img/";
export const Brands = () => {
  const { madaPayment } = payAndShipIc;
  return (
    <>
      <div className="desktop:container">
        <div className=" p-1 text-sm font-semibold">Shop by Brand</div>
        <div className="flex flex-row items-center justify-center gap-2 ">
          <div className=" w-16 min-w-16 max-w-28 rounded-md border bg-white md:h-14 md:w-28">
            <img
              className=" w-16 md:h-10 md:w-28"
              src={madaPayment}
              alt="Sample Mada Logo"
            />
          </div>
          <div className=" w-14 min-w-16 max-w-28 rounded-md border bg-white md:h-14 md:w-28">
            <img
              className=" w-16 md:h-10 md:w-28"
              src={madaPayment}
              alt="Sample Mada Logo"
            />
          </div>
          <div className=" w-14 min-w-16 max-w-28 rounded-md border bg-white md:h-14 md:w-28">
            <img
              className=" w-16 md:h-10 md:w-28"
              src={madaPayment}
              alt="Sample Mada Logo"
            />
          </div>
          <div className=" w-16 min-w-16 max-w-28 rounded-md border bg-white md:h-14 md:w-28">
            <img
              className=" w-16 md:h-10 md:w-28"
              src={madaPayment}
              alt="Sample Mada Logo"
            />
          </div>
          <div className=" w-16 min-w-16 max-w-28 rounded-md border bg-white md:h-14 md:w-28">
            <img
              className=" w-16 md:h-10 md:w-28"
              src={madaPayment}
              alt="Sample Mada Logo"
            />
          </div>
          <div className=" w-16 min-w-16 max-w-28 rounded-md border bg-white md:h-14 md:w-28">
            <img
              className=" w-16 md:h-10 md:w-28"
              src={madaPayment}
              alt="Sample Mada Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};
