import React from "react";
import { ProfileHeading } from "../ProfileHeading/ProfileHeading";
import { SettingsButton } from "../MultipleCompanyInfo/MultipleCompanyInfo";
export const PersonalInfo = () => {
  return (
    <div className="w-[80vw]">
      <ProfileHeading
        heading="Хувийн тохиргоо"
        main="Та өөрийнхөө мэдээллийг солигдох бүрт шинэчлэхээ мартуузай. Энэ нь ажлыг хөнгөвчлөх, мэдээлэл дутуу байснаас болж алдаатай бүртгэл үүсэхээс сэргийлэх юм."
      />
      <form className="text-sm h-full w-full">
        <div className="">
          <Input type="text" name="Таны овог " />
        </div>
        <Input type="text" name="Таны нэр " />
        <Input type="tel" name="Утасны дугаар " />
        <Input type="email" name="Цахим шуудан " />
        <SettingsButton />
      </form>
    </div>
  );
};

export default function Input(props) {
  return (
    <div className="flex flex-col md:flex-row mt-2 md:mt-8 px-[10%] md:p-0">
      <label className="flex items-center justify-start md:justify-end w-full md:w-[30%] mr-4 my-2">
        {props.name}
      </label>
      <div className=" w-full md:w-[65%]">
        <input
          type={props.type}
          className="w-full md:w-[400px] h-[40px] border border-slate-500 pl-[15px] float-left"
        />
      </div>
    </div>
  );
}
