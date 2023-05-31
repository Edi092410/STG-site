import React from 'react'

export const ProfileHeading = (props) => {
  return (
    <div className='w-full h-auto flex justify-center items-center border-b border-slate-500'>
        <div className='w-[80%] text-center mt-10'>
            <div className=' text-xl font-bold'>{props.heading}</div>
            <div className='mb-5 text-sm'>{props.main}</div>
        </div>
    </div>
  )
}
