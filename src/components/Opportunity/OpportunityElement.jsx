import React from "react";
export const OpportunityElement = ({ img, head, main }) => {
  return (
    <div className="w-[200px] 3xl:w-[250px]">
      <div className="relative w-[80px] 3xl:w-[100px] h-[80px] 3xl:h-[100px] rounded-full bg-[#0074E0]">
        <img
          src={img}
          alt={head}
          className="absolute inset-[30px] 3xl:inset-[35%] w-[20px] 3xl:w-[30px] h-[20px] 3xl:h-[30px]"
        />
      </div>
      <div className=" text-[#222222] font-bold text-[14px] 3xl:text-[20px] my-[10px]">
        {head}
      </div>
      <div className=" text-[#1D3049] text-[12px] 3xl:text-base">{main}</div>
    </div>
  );
};
