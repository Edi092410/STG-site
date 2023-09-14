import React from 'react'
import { SidebarService } from '../layouts/SidebarService'
import { Outlet } from 'react-router-dom'

export const ServiceList = () => {
   
  // const [modal, setModal] = useState(false);

  return (
    <div>
        <div className='flex'>  
            <SidebarService />
            <Outlet />
        </div>
    </div>
  )
}
