import React from "react";

export const RightPic = ({ img, head, main }) => {
  return (
    <div className="flex w-[300px]">
      <div className=" mr-8">
        <h1 className=" font-bold text-xl text-center">{head}</h1>
        <div className="flex justify-center text-xs text-right">{main}</div>
      </div>
      <img src={img} alt="" className="w-[103px] h-[68px]"></img>
    </div>
  );
};
