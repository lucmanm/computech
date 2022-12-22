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
      <div className="mt-2 bg-gray-100">
        <div className="flex flex-row flex-wrap desktop:container">
          <div className="flex basis-2/6 items-center justify-center tablet:basis-1/6">
            <img className="h-40 w-40" src={CompuTechLogoTrans} alt="" />
          </div>
          <div className="basis-4/6 tablet:basis-3/6">
            <ul className="prose text-sm leading-snug">
              <li>
                <h3 className="m-0">Contact Us!</h3>
              </li>
              <li className="text-left">Phone: 012 651 5259 EXT. 103</li>
              <li className="text-left">
                Hour: 6 Days a week 9:30 PM TO 1:30 PM <br /> 5:00PM TO 10:00PM
              </li>
              <li className="text-left">Email: sales@compu-tech.com.sa</li>
              <li className="text-left">
                Adddress: Khalid Bin Al Walid St., Jeddah, Saudi Arabia
              </li>
            </ul>
          </div>
          <div className="mt-4 flex basis-full flex-row flex-wrap text-center tablet:mt-0 tablet:basis-2/6 tablet:text-left">
            <div className="basis-1/2">
              <ul className="prose text-sm">
                <li>
                  <h3 className="m-0">COMPANY</h3>
                </li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Affiliates</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="basis-1/2">
              <ul className="prose text-sm">
                <li>
                  <h3 className="m-0">HELP</h3>
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
          <div className="my-4 mx-auto flex w-fit shrink-0 flex-row flex-wrap gap-4 desktop:ml-10">
            <div className="w-12 min-w-5 max-w-14 tablet:w-14">
              <img src={madaPayment} alt="" />
            </div>
            <div className="w-12 min-w-5 max-w-14 tablet:w-14">
              <img src={visaPayment} alt="" />
            </div>
            <div className="w-12 min-w-5 max-w-14 tablet:w-14">
              <img src={masterCardPayment} alt="" />
            </div>
            <div className="w-12 min-w-5 max-w-14 tablet:w-14">
              <img src={applePay} alt="" />
            </div>
            <div className="w-12 min-w-5 max-w-14 tablet:w-14">
              <img src={aramexShipping} alt="" />
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
