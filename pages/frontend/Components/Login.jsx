import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ComputechLogo from "../assets/img/ComputechLogo.png";
export const Login = () => {
  const [uName, setName] = useState("");
  const [uPass, setUpass] = useState("");
  const navigate = useNavigate();
  const apiUrl = "https://dummyjson.com/users";

  const loginHandler = async (e) => {
    e.preventDefault();
    // atuny0;
    // 9uQFF1Lh
    try {
      const apiResponse = await axios(apiUrl);
      const apiData = await apiResponse.data;
      apiData.users.map(({ id, username, password }) => {
        if (username === uName && password === uPass) {
          localStorage.setItem("id", id);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          navigate("/account/");
        }
      });
    } catch (error) {
      console.log("Something went wrong");
    }
  };

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
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={uName}
                  onChange={(e) => setName(e.target.value)}
                  className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-900"
                  placeholder="Username"
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
                  type="password"
                  autoComplete="current-uPass"
                  value={uPass}
                  onChange={(e) => setUpass(e.target.value)}
                  className=" relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-900"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="p-2 text-center">
              Username: kdulyt | Password: 5t6q4KC7O
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
