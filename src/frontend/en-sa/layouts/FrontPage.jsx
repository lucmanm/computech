import React from "react";
import { Banners, MainSlider } from "../components";
import { Products } from "../pages";

export const FrontPage = () => {
  return (
    <>
      <MainSlider />
      <Products />
      <Banners />
    </>
  );
};
