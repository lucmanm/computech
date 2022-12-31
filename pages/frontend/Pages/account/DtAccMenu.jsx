import React from "react";
import { Outlet } from "react-router-dom";
import { AccountMenu } from "../../sidebar/accountMenu";
export const DtAccMenu = () => {
  return (
    <>
      <div className="my-5 mx-2 grid h-fit grid-cols-9 gap-2 desktop:container">
        {/*SideBar menus for account information desktop*/}
        <AccountMenu />
        <div className="col-span-9 rounded-md bg-white shadow-md desktop:col-span-7">
          <Outlet />
        </div>
      </div>
    </>
  );
};
