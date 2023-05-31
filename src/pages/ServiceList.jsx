import React, { useState } from 'react'
import { SearchBar } from '../components/SearchBar.jsx/SearchBar'
import { SidebarService } from '../layouts/SidebarService'
// import { NewReq } from '../components/NewReq/NewReq'
// import { InfoReq } from '../components/InfoReq/InfoReq'
// import { RightSidebar } from '../layouts/RightSidebar'
// import { CreateOrder } from '../components/CreateOrder/CreateOrder'
import { Outlet } from 'react-router-dom'

export const ServiceList = () => {
   
  // const [modal, setModal] = useState(false);

  return (
    <div>
        <div className='flex'>  
            <SidebarService />
            {/*<div className='flex-1 mr-[10%] ml-[10%]'>
                <div className=' inline-flex justify-around'>   
                    <NewReq 
                    className=""
                    onClick={() => setModal(true)}
                    />                                                                                                                                                                                            
                    <SearchBar className="ml-[10%]"/>
                </div>
                <InfoReq />
            </div> */}
            <Outlet />
            {/* <RightSidebar /> */}
        </div>
        {/* {modal && (<CreateOrder closeModal={() => setModal(false)}/>)} */}
    </div>
  )
}
