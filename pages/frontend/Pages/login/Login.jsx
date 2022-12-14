import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Login = () => {
  const activeLink =
    "mt-2 block rounded-sm bg-white p-5 text-center font-medium drop-shadow-md font-bold text-blue-900 ring-2 ring-blue-900";
  const normalLink =
    "mt-2 block rounded-sm bg-white p-5 text-center font-medium drop-shadow-md ";
  return (
    <>
      <div className="grid desktop:container desktop:grid-cols-2 ">
        <div>
          <div className="mx-auto mt-12 w-1/2">
            <span>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/login"
              >
                <span>Login</span>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </NavLink>
            </span>
            <span>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="register"
              >
                <span>Register</span>
                <p className="mt-1 text-sm text-gray-600">
                  if you don't have an account. Create your account now!
                </p>
              </NavLink>
            </span>
          </div>
        </div>
        {/* className='bg-white ring-2 focus:ring-blue-900 rounded-sm p-5 drop-shadow-md font-medium' */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
