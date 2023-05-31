import React from 'react'
import Input from '../PersonalInfo/PersonalInfo'
import { ProfileHeading } from '../ProfileHeading/ProfileHeading'
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar'
export const MultipleCompanyInfo = () => {
  return (
    <div>
        <ProfileHeading 
        heading="Байгууллагын тохиргоо"
        main="Та өөрийнхөө мэдээллийг солигдох бүрт шинэчлэхээ мартуузай. Энэ нь ажлыг хөнгөвчлөх, мэдээлэл дутуу байснаас болж алдаатай бүртгэл үүсэхээс сэргийлэх юм."
        />
        <div className='flex justify-center items-end h-[10%]'>
            <div className='flex'>
                <div className=' mr-10'>Компани 1</div>
                <div className=' mr-10'>Компани 2</div>
                <div className=' mr-10'>Компани 3</div>
            </div>
        </div>
        <form className='text-sm'>
            <Input type="text" name="Байгууллагын нэр "/> 
            <Input type="text" name="Ажлын байр "/>
            <Input type="tel" name="Утасны дугаар "/>
            <button type='submit' className='w-[100px] h-[50px] bg-slate-800 rounded-[30px] text-white ml-[40%] mt-10'>Хадгалах</button>
            
        </form>

    </div>
  )
}

