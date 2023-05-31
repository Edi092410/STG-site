import React from "react";
import { FaSearch } from "react-icons/fa";
export const SearchBar = () => {
  return (
    <div className="flex justify-center mt-5 mb-5">
      <div className="relative w-[350px]">
        <input
          type="text"
          className="w-full h-10 rounded-[20px] bg-slate-300 focus:outline-none pr-[30px] pl-[15px]"
        />
        <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-black cursor-pointer" />
      </div>
    </div>
  );
};
