import React from "react";
import fiscus from "../../Assets/fiscus.png";
export const PurposeHead = () => {
  return (
    // <div className="mx-[20vw]">
    <div className="w-full bg-[#EAE8E1] rounded-xl">
      <div className="px-[100px] py-[40px] flex">
        <img src={fiscus} alt="fiscus logo" width={"100px"} height={"100px"} />
        <div className="w-full flex justify-center items-center mx-[10%] font-medium text-[25px]  3xl:text-[36px] text-center text-[#1D3049]">
          Төсөвт болон жижиг дунд ахуй нэгжид зориулав
        </div>
      </div>
    </div>
    // </div>
  );
};
