import React from 'react'
import { ProfileHeading } from '../ProfileHeading/ProfileHeading'
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar'
export const PersonalInfo = () => {
  

  
  return (
            <div>
                <ProfileHeading 
                heading="Хувийн тохиргоо"
                main="Та өөрийнхөө мэдээллийг солигдох бүрт шинэчлэхээ мартуузай. Энэ нь ажлыг хөнгөвчлөх, мэдээлэл дутуу байснаас болж алдаатай бүртгэл үүсэхээс сэргийлэх юм."
                />
                <form className='text-sm h-full w-full'>
                    <div className='mt-16'>
                        <Input type="text" name="Таны овог "/>
                    </div>
                    <Input type="text" name="Таны нэр "/>
                    <Input type="tel" name="Утасны дугаар "/>
                    <Input type="email" name="Цахим шуудан "/>
                    <button type='submit' className='w-[100px] h-[50px] bg-slate-800 rounded-[30px] text-white ml-[40%] mt-10'>Хадгалах</button>
                 
                    
                </form>
            </div>
    
  )
}


export default function Input(props) {
  return (
    <div className='flex mt-8'>
        <label className='flex items-center justify-end w-[40%] mr-4'>{props.name}</label>
        <div className='w-[60%]'>
            <input type={props.type} className='w-[400px] h-[50px] border border-slate-500 pl-[15px] float-left' />
        </div>
    </div>
  )
}




