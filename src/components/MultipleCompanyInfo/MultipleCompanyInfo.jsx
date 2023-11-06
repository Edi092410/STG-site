import React from "react";
import Input from "../PersonalInfo/PersonalInfo";
import { ProfileHeading } from "../ProfileHeading/ProfileHeading";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
export const MultipleCompanyInfo = () => {
  const companies = JSON.parse(localStorage.getItem("companies"));
  console.log("compnay", companies);
  return (
    <div className="w-[80vw]">
      <ProfileHeading
        heading="Байгууллагын тохиргоо"
        main="Та өөрийнхөө мэдээллийг солигдох бүрт шинэчлэхээ мартуузай. Энэ нь ажлыг хөнгөвчлөх, мэдээлэл дутуу байснаас болж алдаатай бүртгэл үүсэхээс сэргийлэх юм."
      />
      <div className="flex justify-center items-end h-[10%]">
        <div className="flex items-center">
          <SlArrowLeft className="mr-8 cursor-pointer" />
          {companies &&
            companies.length > 0 &&
            companies.map((props) => (
              <div
                className="mr-10 text-[#717D96] cursor-pointer"
                key={props.customerId}
              >
                {props.name.slice(0, 10)}...
              </div>
            ))}
          <SlArrowRight className="cursor-pointer" />
          {/* Company */}
        </div>
      </div>
      <form className="text-sm">
        <Input type="text" name="Байгууллагын нэр " />
        <Input type="text" name="Ажлын байр " />
        <Input type="tel" name="Утасны дугаар " />
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
