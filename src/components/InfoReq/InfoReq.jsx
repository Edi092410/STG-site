import React from 'react'
import image from '../../assets/happy.png'
export const InfoReq = () => {
  return (
    <div className='flex w-full bg-slate-200 mt-[15vh] shadow-lg border-slate-700'>
        <div className=' flex justify-center items-center w-1/2 p-[50px] text-xl'>Эрхэм харилцагч танд энэ өдрийн мэнд хүргье. Танд одоогоор үүсгэсэн үйлчилгээний хүсэлт байхгүй байна. Шинэ товч дарж захиалгаа үүсгээрэй</div>
        <div className='w-1/2 p-[50px]'>
            <div className=''>
                <div className=' bg-white rounded-lg flex justify-center items-center'>
                    <img src={image} alt="list-of-requests" className='flex justify-center items-center w-32 h-32 m-8'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}
