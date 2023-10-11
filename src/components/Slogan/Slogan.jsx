import React from "react";
import { GetData } from "../../Axios/Axios";
import { MainBox } from "../MainBox/MainBox";
// import { MainPicture } from "../MainPicture/MainPicture";
// import img from "../../Assets/main.png";
import img from "../../Assets/MainPage/mainPicture.png";
export const Slogan = () => {
  return (
    <div className="w-full h-[50vh]">
      <MainBox location={"top"}>
        <div className="relative h-full flex text-[#1D3049] items-center">
          <div className="mr-auto md:w-[25vw] ml-[20vw] md:block hidden">
            <div className=" font-semibold text-[25px] 3xl:text-[36px] ">
              Стрессгүй амьдралын итгэлт үйлчилгээг
            </div>
            <div
              className=" font-extrabold text-[35px] 3xl:text-[48px] my-[40px] 3xl:my-[60px] opacity-0 animate-drop"
              style={{ animationDelay: "1s" }}
            >
              Яг цагт нь
            </div>
            <div className=" font-bold text-[18px] 3xl:text-[23px]">
              Account Software | STG LLC
            </div>
          </div>
          <div className=" w-[400px] 3xl:w-[500px] bg-white rounded-b-full rounded-r-full rounded-l-full lg:pb-[150px] pb-[100px] mr-[10vw] 3xl:mb-[90px] ">
            <div className="relative flex justify-center w-full">
              <img src={img} className="w-[80%] pt-[50px]" alt="Symbol" />
              <div className="text-[#024184] text-[18px] 3xl:text-[23px] font-bold absolute bottom-10 right-[15%] ">
                {/* ...since 1997 */}
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".05s" }}
                >
                  .
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".1s" }}
                >
                  .
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".15s" }}
                >
                  .
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".2s" }}
                >
                  s
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".25s" }}
                >
                  i
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".3s" }}
                >
                  n
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".35s" }}
                >
                  c
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".4s" }}
                >
                  e
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".45s" }}
                >
                  {" "}
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".5s" }}
                >
                  1
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".55s" }}
                >
                  9
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".6s" }}
                >
                  9
                </span>
                <span
                  className=" opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop"
                  style={{ animationDelay: ".65s" }}
                >
                  7
                </span>
              </div>
            </div>
          </div>
          {/* <div className="absolute w-[600px] top-0 right-0">
            <MainPicture />
          </div> */}
        </div>
      </MainBox>
    </div>
  );
};
