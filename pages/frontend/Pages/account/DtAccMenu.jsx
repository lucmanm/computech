import React from "react";
import { Outlet } from "react-router-dom";
import { AccountMenu } from "../../sidebar/accountMenu";
import { useStateContext } from "../../contexts/ContextProvider";
export const DtAccMenu = () => {
  const { loginAuth } = useStateContext();
  return (
    <>
      {loginAuth && (
        // #LoggedInOnly
        <div className="my-5 mx-2 grid h-fit grid-cols-9 gap-2 desktop:container">
          {/*SideBar menus for account information desktop*/}
          <div className="col-span-9 hidden overflow-hidden rounded-md border bg-white shadow-md desktop:col-span-2 desktop:block">
            <AccountMenu />
          </div>
          <div className="col-span-9 rounded-md bg-white shadow-md desktop:col-span-7">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
