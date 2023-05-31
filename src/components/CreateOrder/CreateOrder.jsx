import React, { useState } from 'react';
import { DragAndDrop } from '../DragAndDrop/DragAndDrop'
import { Selection } from '../Selection/Selection';
export const CreateOrder = ({ closeModal }) => {

    const options = [
        {value: "STG", label: "stg"},
        {value: "NUM", label: "num"},
        {value: "MUST", label: "must"},
        {value: "EDU", label: "edu"},
      ];

    return (
    <div className='w-screen h-100vh fixed top-0 bg-slate-300 bg-opacity-50'>
        <div className='mr-[20%] ml-[20%] bg-white'>
            <div className='p-[10%] pt-[5%]'>
                <form className=' text-sm'>
                    {/* props  */}
                    <div className='pb-2'>Компани</div>
                    <select className='w-1/2 h-[30px] bg-slate-200 text-blue-500 pl-[15px]'>
                        {/* props  */}
                        <option>Санхүүгийн тооцоолох групп</option>
                    </select>
                    <div className='m-0 p-0 w-1/2'>
                        <Selection 
                            options={options}
                            selectedTextColor="#fff"
                            unselectedTextColor="rgb(147 197 253)"
                            selectedBgColor="rgb(219 234 254)"
                            bgColor="rgb(226 232 240)"
                            height="15px"
                        />
                    </div>
                    
                    <div className=' pt-5 pb-2'>Захиалга үүсгэх</div>
                    <div className='w-1/2 flex h-[30px] bg-slate-200  pl-[15px] pb-4'>Батдорж / <span className=' text-blue-500'>Хүний нөөцийн мэргэжилтэн</span></div>
                    <div className='pt-4 pb-5'>
                        <select className='w-full h-[40px] border border-slate-500 focus:border-blue-500 pl-[15px]'>
                            <option>
                                <h3>Үйлчилгээ</h3>
                                {/* <div>Программын саппорт, компьютерийн саппорт, Эрх сунгах, Нэхэмжлэх</div> */}
                            </option>
                            <option>Санал хүсэлт</option>
                        </select>
                    </div>
                    <div>Мэйл хаяг</div>
                    <input type='email'
                        className='flex h-[30px] bg-slate-200 pl-[15px]'    
                    ></input>
                    <div className='flex pt-5 pb-5 text-xs'>
                        <div className='w-1/2 pb-3'>
                            <div>Холбогдох дугаар / <span className='text-[10px]'>Хоёроос доошгүй дугаар оруулна уу</span></div>
                            <input className=' w-[90%] h-[30px] border border-slate-500 pl-[15px]'></input>
                        </div>
                        <div className='w-1/2 pb-3'>
                            <div>Холбогдох программын код / <span className='text-[10px]'>Anydesk, Teamviewer</span></div>
                            <input className='w-[90%] h-[30px] border border-slate-500 pl-[15px]'></input>
                        </div>
                    </div>
                    <div className='pb-2'>Дэлгэрэнгүй тайлбар</div>
                    <textarea className='w-full border border-slate-500 p-[15px] mb-2' rows={4}></textarea>
                    <DragAndDrop />
                    <button 
                        type='submit' 
                        onClick={closeModal}
                        className='w-[100px] h-[50px] rounded-[30px] bg-slate-500 text-white float-right mt-5'
                    >Хадгалах
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
