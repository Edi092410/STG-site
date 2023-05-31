import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
export const ProfileSidebar = (props) => {
  return (
    <div className='flex items-stretch border-r border-slate-500 w-[20%] text-sm'>
        <div className=' mt-16'>
            <div    >
                {/* <FaUserCircle className='w-[100px] h-[100px] text-slate-800 ml-[30%]' /> */}
                {/* <NavLink to="" className='flex justify-center font-bold text-xl mt-6'>
                        {props.name}
                </NavLink> */}
            </div>
            <ul className='ml-[15%]'>
                
                <li className='mt-4'>
                    <FaUserCircle className=' w-[100px] h-[100px] text-slate-800 ml-2' />
                </li>
                <li className='mt-4'>
                    <NavLink to="" className=' font-bold text-xl ml-4'>
                            {props.name}
                    </NavLink>
                </li>
                <li className='mt-4'>
                    <NavLink 
                        to="personal"
                        style={({ isActive }) => ({
                            fontWeight: isActive? 'bold' : 'normal',
                            transition: 'font-weight 0.3s'
                          })}
                    >
                        Хувийн тохиргоо
                    </NavLink>
                </li>
                <li className='mt-4'>
                    <NavLink 
                        to="/settings/multipleCompany"
                        style={({ isActive }) => ({
                          fontWeight: isActive? 'bold' : 'normal',
                          transition: 'font-weight 0.3s'
                        })}    
                    >
                        Байгууллагын тохиргоо
                    </NavLink>
                </li>
                <li className='mt-4'>
                    <NavLink 
                        to="/settings/privacy"
                        style={({ isActive }) => ({
                            fontWeight: isActive? 'bold' : 'normal',
                            transition: 'font-weight 0.3s'
                          })} 
                    >
                        Нууцлал
                    </NavLink>
                </li>
                <li className='mt-4'>
                    <NavLink 
                        to="/settings/disable"
                        style={({ isActive }) => ({
                          fontWeight: isActive? 'bold' : 'normal',
                          transition: 'font-weight 0.3s'
                        })}    
                    >
                        Хэрэглэгчийн эрх идэвхгүй болгох
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}
