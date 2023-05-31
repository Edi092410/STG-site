import React from 'react'
import { ProfileHeading } from '../ProfileHeading/ProfileHeading'
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar'
import Input from '../PersonalInfo/PersonalInfo'
export const Privacy = () => {
  return (
    <div>
        <ProfileHeading 
        heading="Нууцлал"
        main="Та STG платформын нууц үгээ өөрчлөх болон өөрийн хэрэглэгчийн эрхээ бусад шилжүүлэх тохиргооны хэсэг дээр ажиллаж байна. Эрх шилжүүлэхдээ анхаарал болгоомжтой хандана уу."
        />
        <div className='h-full w-full'>
            <form className='text-sm h-auto border-b border-slate-500'>
                <Input type="password" name="Хуучин нууц үг "/> 
                <Input type="password" name="Шинэ нууц үг "/>
                <button type='submit' className='w-[100px] h-[50px] bg-slate-800 rounded-[30px] text-white ml-[40%] mt-6 mb-6'>Хадгалах</button>
            
            </form>
            <form className='text-sm h-auto'>
                <Select name="Хэрэглэгчийн эрх шилжүүлэх" desc="Шилжүүлэх байгууллага сонгох"/> 
                <Select desc="Шилжүүлэх ажлын байр сонгох"/>
                <button type='submit' className='w-[100px] h-[50px] bg-slate-800 rounded-[30px] text-white ml-[40%] mt-10'>Хадгалах</button>
            
            </form>
        </div>
    </div>
  )
}

export default function Select(props) {
    return (
      <div className='flex mt-8'>
          <label className='flex items-center justify-end w-[40%] mr-4'>{props.name}</label>
          <div className='w-[60%]'>
              <select className='w-[400px] h-[50px] border border-slate-500 pl-[15px] float-left text-center'>
                <option disabled selected>{props.desc}</option>
              </select>
              {/* <input type={props.type} className='w-[400px] h-[50px] border border-slate-500 pl-[15px] float-left' /> */}
          </div>
      </div>
    )
  }