import React from "react";
import CompuTechLogoTrans from "../assets/img/CompuTechLogoTrans.png";
export const FooterInfo = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col tablet:flex-row desktop:container desktop:items-stretch">
        <div className="flex items-center tablet:flex-1 ">
          <img
            className="mx-auto rounded-lg"
            src={CompuTechLogoTrans}
            alt=""
            sizes="200"
          />
        </div>
        <div className="px-6  pb-6 tablet:flex-1">
          <ul className="prose prose-ul:list-none prose-li:flex prose-li:flex-row prose-li:place-content-center prose-li:text-sm tablet:prose-li:place-content-start">
            <li>Contact info</li>
            <li>PHONE: 012 651 5259 EXT. 103</li>
            <li>
              HOURS: 6 DAYS A WEEKS 9:30PM TO 1:30PM &AMP; 5:00PM TO 10:00PM
            </li>
            <li>Email: SALES@COMPU-TECH.COM.SA</li>
            <li>ADDRESS: KHALID BIN AL WALID STREET, JEDDAH, SAUDI ARABIA</li>
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
      <div className="flex flex-row flex-wrap border">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className="bg-blue-900 p-3 text-center text-sm text-white">
        <p>
          COPYRIGHT © 2022. COMPUTECH COMPANY. C. R. NO. 4030079509 VAT ID
          311079231900003. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};
