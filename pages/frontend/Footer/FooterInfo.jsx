import React from "react";

export const FooterInfo = () => {
  return (
    <div className="bg-gray-100">
      <div className="tablet:flex-row desktop:container desktop:items-stretch flex flex-col">
        <div className="tablet:flex-1 flex items-center border">
          <img
            className="mx-auto rounded-lg"
            src="https://compu-tech.com.sa/ecdata/stores/FIZZEV7610/image/data/Computech%20Logo/App-Icon-256x256.png.jpg"
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="tablet:flex-1 border px-6 pb-6">
          <ul className="tablet:prose-li:place-content-start prose prose-ul:list-none prose-li:flex prose-li:flex-row prose-li:place-content-center prose-li:text-sm">
            <li>
              <h3>CONTACT INFO</h3>
            </li>
            <li>
              <div>PHONE: 012 651 5259 EXT. 103</div>
            </li>
            <li>
              <div>
                HOURS: 6 DAYS A WEEKS 9:30PM TO 1:30PM &AMP; 5:00PM TO 10:00PM
              </div>
            </li>
            <li>
              <div>E-MAIL: SALES@COMPU-TECH.COM.SA</div>
            </li>
            <li>
              <div>
                ADDRESS: KHALID BIN AL WALID STREET, JEDDAH, SAUDI ARABIA
              </div>
            </li>
          </ul>
        </div>
        <div className="tablet:flex-1 flex">
          <div className="tablet:flex-1 grow border px-6 pb-6">
            <ul className="tablet:prose-li:place-content-start prose prose-ul:list-none prose-li:flex prose-li:flex-row prose-li:place-content-center prose-li:text-sm">
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
          <div className="tablet:flex-1 grow border px-6 pb-6">
            <ul className="tablet:prose-li:place-content-start prose prose-ul:list-none prose-li:flex prose-li:flex-row prose-li:place-content-center prose-li:text-sm">
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
      <div className="bg-blue-900 p-3 text-center text-sm text-white">
        <p>
          COPYRIGHT © 2022. COMPUTECH COMPANY. C. R. NO. 4030079509 VAT ID
          311079231900003. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};
