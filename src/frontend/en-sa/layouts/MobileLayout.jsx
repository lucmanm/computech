import React from "react";
import { BottomMenu, LeftMenu, RightMenu } from "../components/menu/mobile";
export const MobileLayout = () => {
  return (
    <>
      <LeftMenu />
      <RightMenu />
      <BottomMenu />
    </>
  );
};
