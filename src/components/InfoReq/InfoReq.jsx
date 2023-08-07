import React from "react";
import logo from "../../Assets/logo.jpg";
export const InfoReq = ({ main, foot }) => {
  return (
    <div className="w-full h-full bg-[#D9D9D9] shadow-lg border-slate-700 rounded-lg ">
      <div className="px-[10%] py-[5%] flex md:flex-row flex-col">
        <div className="md:w-[75%] w-full text-[20px] mr-auto leading-[1.5]">
          <div className="mb-4">{main}</div>
          <div className="font-semibold">{foot}</div>
        </div>
        <div className="">
          <img src={logo} width="60px" height="60px" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};
