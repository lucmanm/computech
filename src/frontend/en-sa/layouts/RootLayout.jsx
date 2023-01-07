import React from "react";
import { Header } from "./header";
import { FooterInfo, Subscribe } from "./footer";
export const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Subscribe />
      <FooterInfo />
    </>
  );
};
