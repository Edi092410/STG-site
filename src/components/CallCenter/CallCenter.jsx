import React from "react";
import { Box } from "../MainBox/Box";
import img from "../../Assets/main.png";
export const CallCenter = () => {
  return (
    <div className="w-full h-[300px] 3xl:h-[415px] shadow-2xl">
      <Box location={"right"} vectorColor={"#F5F5F5"}>
        <div className="flex items-center pr-[100px] ">
          <div className="text-[16px] 3xl:text-[24px] p-[5%] mr-auto">
            <div className=" font-bold">Call Center</div>
            <div className="mt-2">
              Санхүү, нягтлан бодох бүртгэлийн өдөр тутмын үйл ажиллагааг
              хялбарчлахад тань тусалж, системийн болон техникийн дэмжлэг
              үзүүлэн ажилладаг.
            </div>
            <div className="mt-2">
              Онлайн харилцагчийн үйлчилгээний сувгийг үйл ажиллагаандаа
              нэвтрүүлэн хэрэглэгчиддээ ойртсоор байна
            </div>
          </div>
          <img
            src={img}
            alt="character"
            className="3xl:w-[350px] 3xl:h-[350px] w-[250px] h-[250px] "
          />
        </div>
      </Box>
    </div>
  );
};