import React from 'react'
import { ProfileHeading } from '../ProfileHeading/ProfileHeading'
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar'
import Input from '../PersonalInfo/PersonalInfo'
export const CompanyInfo = () => {
  return (

            <div>
                <ProfileHeading 
                heading="Байгууллагын тохиргоо"
                main="Та өөрийнхөө мэдээллийг солигдох бүрт шинэчлэхээ мартуузай. Энэ нь ажлыг хөнгөвчлөх, мэдээлэл дутуу байснаас болж алдаатай бүртгэл үүсэхээс сэргийлэх юм."
                />
                <form className='text-sm'>
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
