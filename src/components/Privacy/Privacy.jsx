import React from "react";
import { ProfileHeading } from "../ProfileHeading/ProfileHeading";
import Input from "../PersonalInfo/PersonalInfo";
import { SettingsButton } from "../MultipleCompanyInfo/MultipleCompanyInfo";
export const Privacy = () => {
  return (
    <div className="w-[80vw]">
      <ProfileHeading
        heading="Нууцлал"
        main="Та STG платформын нууц үгээ өөрчлөх болон өөрийн хэрэглэгчийн эрхээ бусад шилжүүлэх тохиргооны хэсэг дээр ажиллаж байна. Эрх шилжүүлэхдээ анхаарал болгоомжтой хандана уу."
      />
      <div className="h-full w-full">
        <form className="text-sm h-auto">
          <Input type="password" name="Хуучин нууц үг " />
          <Input type="password" name="Шинэ нууц үг " />
          <SettingsButton />
        </form>
        <form className="text-sm h-auto">
          <Select
            name="Хэрэглэгчийн эрх шилжүүлэх"
            desc="Шилжүүлэх байгууллага сонгох"
          />
          <Select desc="Шилжүүлэх ажлын байр сонгох" />
          <SettingsButton />
        </form>
      </div>
    </div>
  );
};

export default function Select(props) {
  return (
    <div
      className={`flex flex-col md:flex-row mt-2 md:mt-8
      px-[10%] md:p-0`}
    >
      <label className="flex items-center justify-start md:justify-end w-full md:w-[30%] mr-4 my-2">
        {props.name}
      </label>
      <div className="w-full md:w-[65%]">
        <select className="w-full md:w-[400px] h-[40px] border border-slate-500 pl-[15px] float-left text-center">
          <option disabled selected>
            {props.desc}
          </option>
        </select>
      </div>
    </div>
  );
}
