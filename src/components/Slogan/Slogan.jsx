import React from "react";
import { GetData } from "../../Axios/Axios";
import { MainBox } from "../MainBox/MainBox";
import { MainPicture } from "../MainPicture/MainPicture";
import img from "../../Assets/main.png";
export const Slogan = () => {
  return (
    <div className="w-full h-[50vh]">
      <MainBox location={"top"}>
        <div className="relative mx-[13vw] h-full flex text-[#1D3049] items-center">
          <div className="mr-auto md:w-[25vw] ml-[7vw]">
            <div className=" font-semibold text-[25px] 3xl:text-[36px] ">
              Стрессгүй амьдрал итгэлт үйлчилгээ
            </div>
            <div
              className=" font-extrabold text-[35px] 3xl:text-[48px] my-[40px] 3xl:my-[60px] "
              // style={{ fontFamily: "Comforter Brush, cursive" }}
            >
              Яг цагт нь
            </div>
            <div className=" font-bold text-[18px] 3xl:text-[23px]">
              Account Software | STG LLC
            </div>
          </div>
          {/* <img
            src={img}
            className="h-[300px] w-[350px] mt-[50px]"
            alt="Symbol"
          /> */}
          <div className="absolute w-[600px] top-0 right-0">
            <MainPicture />
          </div>
          
        </div>
      </MainBox>
    </div>
  );
};
