import React from "react";
import { ProfileHeading } from "../ProfileHeading/ProfileHeading";
import Input from "../PersonalInfo/PersonalInfo";
import Select from "../Privacy/Privacy";
import { SettingsButton } from "../MultipleCompanyInfo/MultipleCompanyInfo";
export const UserDisable = () => {
  return (
    <div className="w-[80vw]">
      <ProfileHeading
        heading="Хэрэглэгч эрх идэвхгүй болгох"
        main="Та STG платформ дахь хэрэглэгчийн эрхээ идэвхгүй болгох гэж байна. Хэрэглэгчийг идэвхгүй болгохоос өмнө өөрт хэрэгтэй мэдээллүүдээ шалган хянаарай."
      />
      <form className="text-sm">
        <Select desc="Байгууллага сонгох" name="Байгууллага сонгох" />
        <Select desc="Ажлын байр сонгох" name="Ажлын байр сонгох" />
        <Input type="password" name="Нууц үг оруулах " />
        <Input type="password" name="Нууц үг дахин оруулах " />
        <TextArea name="Устгах болсон шалтгаануудаа оруулж өгөөрэй" />
        {/* <Checkbox name="Энгийн хэрэглэгч болгох" id="check" desc="" /> */}
        <div className="flex mt-8 px-[10%] md:p-0">
          <label className="flex items-center justify-end w-[30%] mr-4">
            Энгийн хэрэглэгч болгох
          </label>
          <div className="w-[65%]">
            <div className="flex float-left mr-[10%] text-xs">
              <input type="checkbox" id="check" className="w-12 mr-5" />
              <label for="check">
                Энэхүү сонголтыг хийснээр та STG платформын байгууллагын
                эрхгүйгээр энгийн хэрэглэгч хэвээр үлдсэн платформын бусад
                боломжуудыг ашиглах боломжтой болох юм.
              </label>
            </div>
          </div>
        </div>
        <SettingsButton />
      </form>
    </div>
  );
};

export default function TextArea(props) {
  return (
    <div className="flex flex-col md:flex-row mt-8 px-[10%] md:p-0">
      <label className="flex items-center text-start md:text-right w-full md:w-[30%] mr-4 my-2">
        {props.name}
      </label>
      <div className="w-full md:w-[65%]">
        <textarea
          rows={4}
          className="w-full md:w-[400px] border border-slate-500 p-[15px] float-left "
        ></textarea>
      </div>
    </div>
  );
}

//   export default function Checkbox(props) {
//     return (
//       <div className='flex mt-8'>
//           <label className='flex items-center justify-end w-[30%] mr-4'>{props.name}</label>
//           <div className='w-[70%]'>
//               <div className='w-[400px] h-[50px] border border-slate-500 pl-[15px] float-left'>
//                 <input type="checkbox" id={props.id} />
//                 <label for={props.id}>{props.desc}</label>
//               </div>
//               {/* <input type={props.type} className='w-[400px] h-[50px] border border-slate-500 pl-[15px] float-left' /> */}
//           </div>
//       </div>
//     )
//   }
