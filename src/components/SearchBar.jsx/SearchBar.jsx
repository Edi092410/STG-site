import React from "react";
import { FaSearch } from "react-icons/fa";
export const SearchBar = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="relative w-full h-full">
        <input
          type="text"
          className="w-full h-full rounded-[20px] bg-[#DFE3EE] focus:outline-none pr-[30px] pl-[15px]"
        />
        {/* <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-black cursor-pointer" /> */}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-6     text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" fill="" />
            <path
              d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
              stroke="#7B7B7B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L16 16"
              stroke="#7B7B7B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
