import React, { useEffect, useState } from "react";
import Input from "../PersonalInfo/PersonalInfo";
import { ProfileHeading } from "../ProfileHeading/ProfileHeading";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
export const MultipleCompanyInfo = () => {
  const companies = JSON.parse(localStorage.getItem("companies")).data;
  return (
    <div className="w-[80vw]">
      <ProfileHeading
        heading="Байгууллагын тохиргоо"
        main="Та өөрийнхөө мэдээллийг солигдох бүрт шинэчлэхээ мартуузай. Энэ нь ажлыг хөнгөвчлөх, мэдээлэл дутуу байснаас болж алдаатай бүртгэл үүсэхээс сэргийлэх юм."
      />
      <div className="flex justify-center items-end h-[10%]">
        <div className="flex items-center">
          <SlArrowLeft className="mr-8 cursor-pointer" />
          {companies.map((props) => (
            <div
              className="mr-10 text-[#717D96] cursor-pointer"
              // style={({ isActive }) => ({
              //   color: isActive ? "black" : "",
              //   paddingBottom: isActive ? "4px" : "",
              //   borderBottom: isActive ? "3px" : "",
              //   borderColor: isActive ? "black" : "",
              // })}
              key={props.customerId}
            >
              {props.name.slice(0, 10)}...
            </div>
          ))}
          <SlArrowRight className="cursor-pointer" />
        </div>
      </div>
      <form className="text-sm">
        <Input type="text" name="Байгууллагын нэр " />
        <Input type="text" name="Ажлын байр " />
        <Input type="tel" name="Утасны дугаар " />
        {/* <button
          type="submit"
          className="w-[100px] h-[50px] bg-slate-800 rounded-[30px] text-white ml-[40%] mt-10"
        >
          Хадгалах
        </button> */}
        <SettingsButton />
      </form>
    </div>
  );
};

export const SettingsButton = () => {
  return (
    <div className="px-[10%] md:p-0">
      <button
        type="submit"
        className="w-[90px] h-[40px] bg-slate-800 rounded-[30px] text-white ml-0 md:ml-[30%] mt-10 mb-2"
      >
        Хадгалах
      </button>
    </div>
  );
};
