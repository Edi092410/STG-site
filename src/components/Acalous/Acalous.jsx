import React from "react";
import img from "../../Assets/acolous.png";
import { Box } from "../MainBox/Box";
export const Acalous = () => {
  return (
    <div className="w-full h-[300px] 3xl:h-[415px] shadow-2xl">
      <Box location={"left"} vectorColor={"#F5F5F5"} bgColor={"#FEFEFE"}>
        <div className=" h-full flex items-center pl-[100px]">
          <img
            src={img}
            alt="acolous logo"
            className="3xl:w-[250px] 3xl:h-[250px] w-[150px] h-[150px]"
          />
          <div className=" text-base 3xl:text-[24px] font-normal mx-[100px]">
            “Fiscus платформын эхний хувилбар болох Acolous програм нь төсвийн
            байгууллагын санхүүгийн бүртгэл тайланг гаргахад чиглэсэн
            найдвартай, итгэлтэй үйлчилгээг харилцагчдаа хүргэн 20 жилийн хамтын
            үйл ажиллагаагаа бататгасаар байна”.
          </div>
        </div>
      </Box>
    </div>
  );
};
