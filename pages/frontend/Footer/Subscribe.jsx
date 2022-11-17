import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-black text-white">
      <div className="tablet:container flex flex-row flex-wrap items-center justify-center p-7">
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              />
            </svg>
          </span>
        </div>
        <div className="p-x prose prose-invert px-7 prose-p:text-gray-200">
          <h2 className="m-0">Fear Of Missing Out?</h2>
          <p>Get the latest deals, updates & more</p>
        </div>
        <div className="flex justify-center space-x-4">
          <span>
            <input
              type="text"
              name="Subscribe"
              id=""
              className="w-full rounded-full"
            />
          </span>
          <span>
            <input
              className="h-full cursor-pointer rounded-full bg-blue-900 px-6 font-semibold hover:bg-blue-700"
              type="button"
              value="Subscribe"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;