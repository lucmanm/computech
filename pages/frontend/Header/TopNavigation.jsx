import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { icons, langauge } from "../assets/data/data";
import { useStateContext } from "../contexts/ContextProvider";
export const TopNavigation = () => {
  const { stateTest, setStateTest } = useState();
  const { loggedIn, setLoggedOut } = useStateContext();
  const { languageIcon, personIcon, heartIcon } = icons;
  console.log(loggedIn);
  return (
    <>
      <div className="bg-gray-100">
        <div className="relative flex flex-row items-center justify-between px-2 py-2  font-semibold text-blue-900 desktop:container">
          <div className="flex flex-row flex-wrap">
            {stateTest ? (
              <Link
                className="flex flex-row flex-wrap items-center gap-2 border-r-2 px-2  hover:text-blue-700"
                to="/account/"
                onClick={() => {
                  setStateTest(false);
                }}
              >
                <span>{personIcon}</span>
                <p>My Account</p>
              </Link>
            ) : (
              <Link
                className="flex flex-row flex-wrap items-center gap-2 border-r-2 px-2  hover:text-blue-700"
                to="/login"
                onClick={() => {
                  setStateTest(true);
                }}
              >
                <span>{personIcon}</span>
                <p>Login/Register</p>
              </Link>
            )}
            <Link
              className="flex flex-row flex-wrap items-center gap-2 px-2  hover:text-blue-700"
              to="/account/Wishlist"
            >
              {heartIcon}
              <p>WishList</p>
            </Link>
          </div>
          <div>
            <button className="items-centergap-2 flex flex-row flex-wrap border-l-2  px-2 font-cairo font-bold hover:text-blue-700">
              <span>{languageIcon}</span>
              <span>{langauge.arabic}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
