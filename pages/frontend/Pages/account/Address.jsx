import React from "react";

export const Address = () => {
  return (
    <>
      <myaddress>
        <div className="ital flex flex-col justify-center p-4">
          <div className="card-title">Address</div>
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
