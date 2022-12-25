import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <div className="desktop:container">
        <div className="prose min-w-full py-32 text-center prose-h1:text-6xl ">
          <div>
            <h1 className="text-red-600">Page Not Found</h1>
            <Link to="/">
              <button className="btn btn-primary m-0">Go Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
