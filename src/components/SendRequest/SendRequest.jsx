import React from 'react'
import {TbPencilMinus} from "react-icons/tb"
//import { Props } from './Props'
export const SendRequest = () => {
  
    // const data = [
    //     {
    //         option:"Ажлын байр сонгох"
    //     },
    //     {
    //         option:"Нагтлан бодогч"
    //     },
    //     {
    //         option:"Бизнес аналист"
    //     }
    // ]
    return (
    <div className='flex justify-center text-xs min-h-[100vh] bg-slate-300'>
        <div className=' w-[600px] h-[600px] mt-[10vh] rounded-[20px] bg-white'>
            <div className='mr-[100px] ml-[100px]'>
                <div className='mt-12'>Компани</div>
                <div className='flex'>
                    <div className='mr-auto bg-slate-300 text-blue-500 pl-[10px] pr-[10px] pt-[5px] pb-[5px]'>Санхүүгийн тооцоолох групп</div>
                    <div className=' text-red-500'>Хүсэлт цуцлах</div>
                </div>
                <div className='mt-8'>Таны овог</div>
                <div className='relative'>
                    <TbPencilMinus className='absolute top-[20%] left-[90%] rounded-lg text-[1.5rem] text-blue-500'/>
                    <input type="text" className='w-full h-[50px] border border-gray-600 pl-[15px] focus:outline-none rounded-lg'/>
                </div>
                <div className='mt-8'>Таны нэр</div>
                <div className='relative'>
                    <TbPencilMinus className='absolute top-[20%] left-[90%] rounded-lg text-[1.5rem] text-blue-500'/>
                    <input type="text" className='w-full h-[50px] border border-gray-600 pl-[15px] focus:outline-none rounded-lg'/>
                </div>
                <div className='mt-8'>Холбоо барих утас/<span className='text-[10px]'>таныг баталгаажуулах тул та үнэн зөв мэдээлэл оруулна</span></div>
                <div className='relative'>
                    <TbPencilMinus className='absolute top-[20%] left-[90%] rounded-lg text-[1.5rem] text-blue-500'/>
                    <input type="text" className='w-full h-[50px] border border-gray-600 pl-[15px] focus:outline-none rounded-lg'/>
                </div>

                {/* <Props data = {data}/> */}
                <div className='mt-8'>Ажлын байр сонгоно уу</div>
                <div className=''>
                    {/* {data.map((info) => ( */}
                        <select className='w-full h-[50px] border-[0.2px] border-gray-600 pl-[15px] focus:outline-none text-sm text-center font-bold pr-5'>
                            <option>Ажлын байр сонгох</option>    
                        </select>    
                        {/* ))} */}
                    
                </div>      

                <button className='w-[100px] h-[50px] bg-slate-500 text-white rounded-[30px] float-right mt-8'>Хадгалах</button>
            </div>
        </div>
    </div>
        
  )
}
