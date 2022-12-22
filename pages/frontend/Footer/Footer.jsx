import React from "react";
import { Subscribe, FooterInfo } from "./";
import { ApplePayPayment } from "../assets/img/default_img/";

export const Footer = () => {
  return (
    <div className="">
      <Subscribe />
      <FooterInfo />
      <div className="flex flex-row flex-wrap ">
        <div>
          <img src={ApplePayPayment} alt="ApplyPayment" sizes="100" />
        </div>
      </div>
    </div>
  );
};
