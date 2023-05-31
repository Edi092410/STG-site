  import React, { useEffect, useState } from 'react'
  import OrderData from './OrderData'
  export const OrderList = () => {
    

    const [backgroundColor, setBackgroundColor] = useState({});

    const [selectedOption, setSelectedOption] = useState({});   
    

    useEffect(() => {
      const colorMap = {
        'Хийгдэж байна': 'rgb(59, 130, 246)',
        'Хийгдсэн': 'rgb(34, 197, 94)',
        'Хүлээгдэж байна': 'rgb(203, 213, 225)',
      };
  
      const statusColors = {};
      OrderData.forEach((order) => {
        statusColors[order.status] = colorMap[order.status];
      });
  
      setBackgroundColor(statusColors);
    }, []);

    const handleSelectedChange = (e) => {
      setSelectedOption(e.target.value);
    }

    const filteredOrderData = OrderData.filter((info, index) => {
      if (selectedOption === 'lorem') {
        return index % 2 === 0;
      } else if (selectedOption === 'first') {
        return index % 2 !== 0;
      }

      // return selectedOption === 'lorem' ? index % 2 === 0 : true;
    });

    return (
      <div className='border border-slate-500 rounded-lg'>
        <div className='m-[5%]'>
          <div className=''>
            <div className='mb-2'>
              Компани
            </div>
            <select 
              className=' text-blue-500 w-[325px] h-[30px] bg-slate-300 mb-5 pl-[15px]'
              value={selectedOption}
              onChange={handleSelectedChange}
            >
              <option value="first">Санхүүгийн тооцоолох групп</option>
              <option value="lorem">lorem</option>
            </select>
          </div>
          <div>
          <table className=" text-xs  w-full ">
            <thead className=' text-left'>
              <tr>
                <th className="p-2">Огноо</th>
                <th className="p-2">Дугаар</th>
                <th className="p-2">Захиалгын нэр</th>
                <th className="p-2">Захиалгын төлөв</th>
                <th className="p-2">Хариуцсан</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrderData.map((info) => (
                <React.Fragment key={info.number}>
                  <tr>
                  <td className="p-2">
                      <div>{info.date}</div>
                      <div className='text-slate-400'>{info.hour}</div>
                  </td>
                    <td className="p-2">{info.number}</td>
                    <td className="p-2">{info.name}</td>
                    <td className='p-2'>
                      <div style={{ backgroundColor: backgroundColor[info.status], }} className={'text-white rounded-[4px] w-fit p-1'}>
                        {info.status}
                      </div>
                    </td>
                    <td className="p-2">{info.who}</td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }
