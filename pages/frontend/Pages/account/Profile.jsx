import React from "react";

export const Profile = () => {
  return (
    <>
      <profile>
        <div className="flex  flex-col justify-center p-4">
          <div className="mb-2 rounded-sm bg-blue-900 p-1 font-bold text-white">
            Profile
          </div>
          <hr className="my-2" />
          <span>Personal Details</span>
          <hr className="my-2" />
          <div className=" text-gray-500">
            <p>Name: Mahid Lucman</p>
            <p>City: Jeddah, Saudi Arabia</p>
          </div>
          <hr className="my-2" />
          <span>Account Details</span>
          <hr className="my-2" />
          <div className=" text-gray-700">
            <p>
              <a href="mailto:youremail@domain.com">
                Email: youremail@domain.com
              </a>
            </p>
            <p>Password: *******</p>
          </div>
        </div>
      </profile>
    </>
  );
};
