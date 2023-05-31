import React, {useRef, useEffect} from 'react'
import { FaPlus } from 'react-icons/fa'
export const NewReq = (props, { openModal }) => {
  
  
  return (
    <div className='flex cursor-pointer' onClick={openModal}>
        <div className='flex items-center justify-center bg-blue-500 rounded-lg text-white text-xs h-10 p-2'>
            <FaPlus className='font-thin'/>
            <div className='ml-2'>{props.button}</div>
        </div>
    </div>
  ) 
}
