import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export const Login = () => {
  const { loginAuth } = useStateContext();
  const activeLink =
    "mt-2 block rounded-sm bg-white p-5 text-center font-medium shadow font-bold text-blue-900 ring-2 ring-blue-900";
  const normalLink =
    "mt-2 block rounded-sm bg-white p-5 text-center font-medium shadow ";
  return (
    <>
      {!loginAuth && (
        <div className="grid desktop:container desktop:grid-cols-2 ">
          <div>
            <div className="mx-2 mt-12 grid grid-cols-2 gap-3 desktop:my-20 desktop:mx-auto desktop:w-1/2 desktop:grid-cols-1">
              <div>
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/login">
                  <span>Login</span>
                  <p className="mt-1 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="register">
                  <span>Register</span>
                  <p className="mt-1 text-gray-600">
                    if you don't have an account. Create now!
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          {/* className='bg-white ring-2 focus:ring-blue-900 rounded-sm p-5 drop-shadow-md font-medium' */}
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
