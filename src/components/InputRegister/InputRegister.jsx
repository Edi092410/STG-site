import React from "react";
import { FaTimes } from "react-icons/fa";
export const InputRegister = () => {
  return (
    <div className=" min-h-[100vh] bg-slate-300">
      <div className="flex justify-center">
        <div className="relative w-[600px] rounded-[20px] bg-white mt-[20vh]">
          <div className="w-[400px] mr-[100px] ml-[100px]">
            <div className="mt-16">Байгууллагын регистр оруулах</div>
            <input
              type="text"
              className="w-full h-12  border border-gray-600 pl-[15px] mt-4 focus:outline-none"
            ></input>
            <button className="w-[100px] h-[50px] text-white bg-slate-800 rounded-[30px] mt-5 mb-8 float-right">
              Хайх
            </button>
            <FaTimes className="absolute top-4 right-4 text-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
};
