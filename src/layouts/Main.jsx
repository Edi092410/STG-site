import React from "react";
import img from "../Assets/login.png";
import img2 from "../Assets/register.png";
export const Main = ({ children, head, image }) => {
  return (
    <div className="w-screen h-screen px-[5%] mb-[50vh]">
      <div className="w-full h-full rounded-[0px_0px_100px_100px] 3xl:rounded-[0px_0px_180px_180px] bg-gradient-to-b from-[#1d9cd300] to-[#1d9cd333] ">
        <div className="w-full flex flex-col items-center justify-center mt-[40px] 3xl:mt-[80px]">
          <img
            src={image === "login" ? img : img2}
            alt="character"
            className="3xl:w-[300px] w-[200px]"
          />
          <div className=" text-[18px] 3xl:text-[24px] text-[#032D60] font-semibold md:w-[25%] w-[60%] text-center ">
            {head}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
