import React from 'react'

export const Box = ({children}) => {
  return (
    <div className='w-full h-full bg-white shadow-[0px_30px_54px_0px_rgba(0,0,0,0.15)] rounded-[8px]'>
        {children}
    </div>
  )
}
