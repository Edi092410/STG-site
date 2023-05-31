import React from 'react'
import {FaTimes} from 'react-icons/fa'
export const Notif = (props) => {
    return (
    <div className="min-h-[100vh] bg-slate-300">
      <div className="flex justify-center ">
            <div className="relative w-[450px] mt-[20vh] bg-white rounded-[20px] text-center">
                <div className="mt-16">{props.name}</div>
                <button className="bg-slate-800 text-white rounded-[30px] w-[350px] h-10 mt-20 mb-10">
                {props.button}
                </button>
                <FaTimes className="absolute top-4 right-4" />
            </div>
        
      </div>
    </div>
  )
}
