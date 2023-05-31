import React, { useState } from 'react'
import { NewReq } from '../NewReq/NewReq'
import { SearchBar } from '../SearchBar.jsx/SearchBar'
import { OrderList } from '../OrderList/OrderList'
import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
export const ClientOrderList = () => {
    const year = (new Date()).getFullYear();

    const [count, setCount] = useState(year);

    return (
    <div className='flex justify-center items-center'>
        <div className='w-[80%]'>
            <NewReq />
            <SearchBar />
            <div className='flex items-center'> 
                <SlArrowLeft 
                    className=' cursor-pointer mr-3 text-xl font-thin'
                    onClick={() => setCount(count - 1)}    
                />
                <p id='year'>{count}</p>
                <SlArrowRight 
                    className=' cursor-pointer ml-3 text-xl'
                    onClick={() => setCount(count + 1)}    
                />
            </div>
            <OrderList />
        </div>
    </div>
  )
}
