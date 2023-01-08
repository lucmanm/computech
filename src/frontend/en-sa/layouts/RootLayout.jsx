import React from "react";
import { Header } from "./header";
import { FooterInfo, Subscribe } from "./footer";
import { Outlet } from "react-router-dom";
export const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Subscribe />
      <FooterInfo />
    </>
  );
};
