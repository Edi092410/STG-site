import React from "react";

export const LeftPic = ({ img, head, main }) => {
  return (
    <div className="flex w-[300px]">
      <img src={img} alt="" className="w-[103px] h-[68px]"></img>
      <div className=" ml-8 mb-8">
        <h1 className=" font-bold text-xl">{head}</h1>
        <div className=" text-xs">{main}</div>
      </div>
    </div>
  );
};
