import React from "react";
import CompuTechLogoTrans from "../assets/img/CompuTechLogoTrans.png";
import { payAndShipIc } from "../assets/img/default_img/";

export const FooterInfo = () => {
  const {
    madaPayment,
    visaPayment,
    masterCardPayment,
    applePay,
    aramexShipping,
  } = payAndShipIc;
  return (
    <>
      {/* Company Information */}
      <div className="bg-gray-100">
        <div className="flex flex-col tablet:flex-row desktop:container desktop:items-stretch">
          <div className="flex items-center tablet:flex-1 ">
            <img
              className="mx-auto h-40 rounded-lg"
              src={CompuTechLogoTrans}
              alt=""
            />
          </div>
          <div className="px-6  pb-6 tablet:flex-1">
            <ul className="prose prose-ul:list-none prose-li:flex prose-li:flex-row prose-li:place-content-center prose-li:text-sm tablet:prose-li:place-content-start">
              <li>
                <h3>Contact info</h3>
              </li>
              <li>Phone: 012 651 5259 EXT. 103</li>
              <li>
                Hour: 6 Days a weeek 9:30 PM TO 1:30 PM <br /> 5:00PM TO 10:00PM
              </li>
              <li>Email: sales@compu-tech.com.sa</li>
              <li>Adddress: Khalid Bin Al Walid St., Jeddah, Saudi Arabia</li>
            </ul>
          </div>
          <div className="flex tablet:flex-1">
            <div className="grow px-6  pb-6 tablet:flex-1">
              <ul className="prose prose-ul:list-none prose-li:flex prose-li:flex-row prose-li:place-content-center prose-li:text-sm tablet:prose-li:place-content-start">
                <li>
                  <h3>COMPANY</h3>
                </li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Affiliates</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="grow px-6  pb-6 tablet:flex-1">
              <ul className="prose prose-ul:list-none prose-li:flex prose-li:flex-row prose-li:place-content-center prose-li:text-sm tablet:prose-li:place-content-start">
                <li>
                  <h3>HELP</h3>
                </li>
                <li>My Account</li>
                <li>Customer Service</li>
                <li>Find a Store</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Payment and Shipping Company Logo */}
        <div className="my-2 desktop:container">
          <div className="flex flex-row flex-wrap">
            <div className="mx-auto flex w-fit min-w-fit shrink-0 flex-row flex-wrap gap-2 border border-black">
              <img className="w-fit" src={madaPayment} alt="" />
              <img className="w-fit" src={visaPayment} alt="" />
              <img className="w-fit" src={madaPayment} alt="" />
              <img className="w-fit" src={madaPayment} alt="" />
              <img className="w-fit" src={madaPayment} alt="" />
            </div>
          </div>
        </div>
        {/* No Copyright infregmens section */}
        <div className="bg-blue-900 p-3 text-center text-sm text-white">
          <p>
            COPYRIGHT © 2022. COMPUTECH COMPANY. C. R. NO. 4030079509 VAT ID
            311079231900003. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </>
  );
};
