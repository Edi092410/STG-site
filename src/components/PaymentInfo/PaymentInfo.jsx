import React, { useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { SlArrowLeft } from 'react-icons/sl'
import PaymentData from './PaymentData'

import { NewReq } from '../NewReq/NewReq'
export const PaymentInfo = (props) => {
    const [year, setYear] = useState(2023);

    const handleIncrement = () => {
      setYear(year + 1);
      console.log(year);
    };
  
    const handleDecrement = () => {
      setYear(year - 1);
      console.log(year);
    };


    const totalPay = PaymentData.reduce((total, info) => total + parseFloat(info.pay), 0);
    const totalBalance = PaymentData.reduce((total, info) => total + parseFloat(info.balance), 0);



    return (
    <div className='mt-[5%] w-full'>
        <div className='mr-[5%] ml-[5%] text-xs'>
            <div className='flex'>
                <div className='w-[65%]'>
                    <div className='mb-6'>
                        <div className='mb-2'>Компани</div>
                        <select className='w-[325px] h-[30px] border bg-slate-300 pl-[15px] float-left text-center text-blue-500'>
                            <option disabled selected>{props.select}</option>
                        </select>
                    </div>
                    <br/><br/>
                    <div className='flex'>
                        <div className='mr-[2%]'>
                            <div className=' mb-2 font-bold'>Огноогоор шүүх</div>
                            <div className='flex items-center justify-center text-xs'>
                                <SlArrowLeft 
                                    className='mr-2 text-lg cursor-pointer'
                                    onClick={handleDecrement}
                                />
                                <div id='num'>{year}</div>
                                <SlArrowRight 
                                    className='ml-2 text-lg cursor-pointer' 
                                    onClick={handleIncrement}
                                />
                            </div>
                        </div>
                        <div className='mr-[2%]'>
                            <div className=' mb-2 font-bold'>Эхний үлдэгдэл</div>
                            <div className='flex text-red-500 rounded-lg p-2 bg-slate-300 text-base'>{props.first}</div>
                        </div>
                        <div className='mr-[3   %]'>
                            <div className=' mb-2 font-bold'>Эцсийн үлдэгдэл</div>
                            <div className='flex text-red-500 rounded-lg p-2 bg-slate-300 text-base'>{props.last}</div>
                        </div>
                    </div>
                </div>
                <div className='w-[35%] flex items-center justify-center'>
                    <NewReq  button= "Хүсэлт илгээх"/>
                </div>
            </div>
            <div className="mt-6 ">
                <span className="border-b-[3px] border-black pb-2 font-bold ">Төлбөрийн мэдээлэл</span>
            </div>
            
            
            
            <div className='mt-8 border rounded-lg border-slate-500 shadow-lg'>
                <div className='m-[2%]'>
                    <div className='ml-2 font-bold'>Энэ сар</div>
                    <table className="w-full ">
                        <thead className=' text-left'>
                            <tr>
                                <th className="p-2 pt-1">
                                    <div className='border border-slate-500 rounded-lg h-[30px] mr-2'></div>
                                </th>
                                <th className="p-2 pt-1">
                                    <div className='border border-slate-500 rounded-lg h-[30px] mr-2'></div>
                                </th>
                                <th className="p-2 pt-1">
                                    <div className='border border-slate-500 rounded-lg h-[30px] mr-2'></div>
                                </th>
                                <th className="p-2 pt-1">
                                    <div className='border border-slate-500 rounded-lg h-[30px] mr-2'></div>
                                </th>
                                <th className="p-2 pt-1">
                                    <div className='border border-slate-500 rounded-lg h-[30px] mr-2'></div>
                                </th>
                                <th className="p-2 pt-1">
                                    <div className='border border-slate-500 rounded-lg h-[30px] mr-2'></div>
                                </th>
                                <th className="p-2 pt-1">
                                    <div className='border border-slate-500 rounded-lg h-[30px] mr-2'></div>
                                </th>
                                <th className="p-2 pt-1">
                                    <div className='border border-slate-500 rounded-lg h-[30px] mr-2'></div>
                                </th>
                            </tr>
                            <tr>
                                <th className="p-2 pt-0 pb-0">Огноо</th>
                                <th className="p-2 pt-0 pb-0">Баримтын дугаар</th>
                                <th className="p-2 pt-0 pb-0">Ажил үйлчилгээний нэр</th>
                                <th className="p-2 pt-0 pb-0">Төлөх дүн</th>
                                <th className="p-2 pt-0 pb-0">Төлсөн</th>
                                <th className="p-2 pt-0 pb-0">Төлбөрийн үлдэгдэл</th>
                                <th className="p-2 pt-0 pb-0">Төлбөрийн илүү</th>
                                <th className="p-2 pt-0 pb-0">Тэмдэглэл</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PaymentData.map((info) => (
                            <>
                                <tr>
                                <td className="p-2">
                                    <div>{info.date}</div>
                                    <div className='text-slate-400'>{info.hour}</div>
                                    
                                </td>
                                <td className="p-2">{info.number}</td>
                                <td className="p-2">{info.name}</td>
                                <td className="p-2">{info.pay}</td>
                                <td className="p-2">{info.payed}</td>
                                <td className="p-2">{info.balance}</td>
                                <td className="p-2">{info.more}</td>
                                <td className="p-2">{info.desc}</td>
                                </tr>
                                <tr>
                                <td colSpan="5">
                                </td>
                                </tr>
                            </>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="p-2 text-right" colSpan="3">
                                Нийт
                                </td>
                                <td className="p-2 text-red-500 font-bold">{totalPay}</td>
                                <td className="p-2 text-right">Нийт</td>
                                <td className="p-2 text-red-500 font-bold">{totalBalance}</td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                            </tr>
                        </tfoot>
                    </table>
                    </div>

 
                </div>
            </div>
    </div>
  )
}
