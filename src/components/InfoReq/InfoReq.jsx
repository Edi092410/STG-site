import React from "react";
import image from "../../assets/happy.png";
export const InfoReq = ({ props }) => {
  return (
    <div className="flex w-full bg-slate-200 shadow-lg border-slate-700">
      <div className=" flex justify-center items-center w-1/2 p-[50px] text-xl">
        {props}
      </div>
      <div className="w-1/2 p-[50px]">
        <div className="">
          <div className=" bg-white rounded-lg flex justify-center items-center">
            <img
              src={image}
              alt="list-of-requests"
              className="flex justify-center items-center w-32 h-32 m-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
