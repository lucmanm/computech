import React from "react";

import { ProductComp } from "./ProductComp";
export const Products = () => {
  return (
    <div className="grid h-screen grid-cols-2  justify-evenly gap-3 md:container md:grid-cols-3 lg:grid-cols-4">
      <ProductComp />
      <ProductComp />
      <ProductComp />
      <ProductComp />
      <ProductComp />
      <ProductComp />
      <ProductComp />
      <ProductComp />
    </div>
  );
};
