import React from 'react'

export const Props = (props) => {
    const { data } = props;
    return (
        <div>
            <div className='mt-8'>Ажлын байр сонгоно уу</div>
            <div className=''>
                {data.map((info) => (
                    <select className='w-full h-[50px] border-[0.2px] border-gray-600 pl-[15px] focus:outline-none text-sm text-center font-bold pr-5'>
                        <option>{info.option}</option>    
                    </select>    
                    ))}
                
            </div>        
        </div>
    
  )
}
