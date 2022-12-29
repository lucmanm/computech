import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

import ComputechLogo from "../assets/img/ComputechLogo.png";
export const Login = () => {
  const [uName, setName] = useState("hbingley1");
  const [uPass, setUpass] = useState("CQutx25i8r");

  const apiUrl = "https://dummyjson.com/users";
  let displayData;
  const loginHandler = async () => {
    // e.preventDefault();
    try {
      const apiResponse = await axios(apiUrl);
      const apiData = await apiResponse.data;
      apiData.users.map(({ username, password }) => {
        if (username === uName && password === uPass) {
          console.log("true");
        }
      });
      // console.log(apiData);
    } catch (error) {
      console.log("Error");
    }
  };

  loginHandler();

  return (
    <>
      <div className="sm:px-6 lg:px-8 flex min-h-full items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={ComputechLogo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={loginHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name-address" className="sr-only">
                  Name
                </label>
                <input
                  id="uName"
                  name="uName"
                  type="text"
                  autoComplete="uName"
                  value={uName}
                  onChange={(e) => setName(e.target.value)}
                  className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-900"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="uPass" className="sr-only">
                  uPass
                </label>
                <input
                  id="uPass"
                  name="uPass"
                  type="uPass"
                  autoComplete="current-uPass"
                  value={uPass}
                  onChange={(e) => setUpass(e.target.value)}
                  className=" relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-900"
                  placeholder="uPass"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div>
                <a
                  href="#"
                  className="font-medium text-blue-900 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 font-medium text-white  hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              >
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
