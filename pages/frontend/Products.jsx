import React from "react";

import { ProductComp } from "./ProductComp";
export const Products = () => {
  return (
    <div className="grid h-fit grid-cols-2  justify-evenly gap-3 tablet:grid-cols-3 desktop:container desktop:grid-cols-4">
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
