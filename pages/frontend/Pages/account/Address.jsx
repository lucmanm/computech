import React from "react";

export const Address = () => {
  return (
    <>
      <myaddress>
        <div className="ital flex flex-col justify-center p-4">
          <div className="mb-2 rounded-sm bg-blue-900 p-1 font-bold text-white">
            Address
          </div>
          <hr className="my-2" />
          <span>Primary Address</span>
          <hr className="my-2" />
          <div className=" text-sm text-gray-500">
            <p>Home</p>
            <p>Jeddah, Al Sharifiya</p>
            <p>
              2721 Al Sahabah, Al Sharafiah, Jeddah, Makkah, Saudi Arabia, 23216
            </p>
          </div>
        </div>
      </myaddress>
    </>
  );
};
