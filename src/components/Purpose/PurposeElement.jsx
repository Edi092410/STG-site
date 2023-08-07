import React from "react";

export const PurposeElement = ({ img, head, main }) => {
  return (
    <div className="bg-[#015488] rounded-xl w-[230px] 3xl:w-[330px] h-[350px] 3xl:h-[400px] text-center text-white flex flex-col p-[10%] py-[15%] shadow-xl">
      <div className="flex justify-center">
        <img src={img} alt={head} width={"24px"} height={"24px"} />
      </div>
      <div className="text-[20px] 3xl:text-[24px] mb-5 mt-3 font-bold">
        {head}
      </div>
      <div className="text-[14px] 3xl:text-base">{main}</div>
    </div>
  );
};
