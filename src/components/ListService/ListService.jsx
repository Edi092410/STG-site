import React, { useEffect, useRef, useState } from "react";
import { NewReq } from "../NewReq/NewReq";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import { InfoReq } from "../InfoReq/InfoReq";
import { CreateOrder } from "../CreateOrder/CreateOrder";
import { RightSidebar } from "../../layouts/RightSidebar";
import { OrderList } from "../OrderList/OrderList";
import { TimeFilter } from "../TimeFilter/TimeFilter";
import { OrderProvider } from "../OrderList/OrderProvider";

export const ListService = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const currentMonth = new Date().getMonth() + 1;
  const [month, setMonth] = useState(currentMonth);
  const handleMonthChange = (month) => {
    setMonth(month);
  };
  const currentYear = new Date().getFullYear();
  const lastDay = (year, month) => {
    const nextMonth = new Date(year, month, 1);
    const lastMonth = new Date(nextMonth.getTime() - 1);
    const timezoneOffset = lastMonth.getTimezoneOffset() * 60000;
    const adjustedTime = lastMonth.getTime() - timezoneOffset;
    const formattedDate = new Date(adjustedTime).toISOString().slice(0, 19);
    return formattedDate;
  };
  const firstDay = (year, month) => {
    const nextMonth = new Date(year, month - 1, 1);
    const lastMonth = new Date(nextMonth.getTime());
    const timezoneOffset = lastMonth.getTimezoneOffset() * 60000;
    const adjustedTime = lastMonth.getTime() - timezoneOffset;
    const formattedDate = new Date(adjustedTime).toISOString().slice(0, 19);
    return formattedDate;
  };
  return (
    <OrderProvider>
      <div className="flex-1 mr-[5%] ml-[5%] min-h-[80vh]">
        <div className="flex items-center justify-evenly">
          <div className="flex">
            <NewReq
              className="mr-6"
              button="Шинэ хүсэлт"
              openModal={openModal}
            />
          </div>
          <SearchBar />
        </div>
        <div className="mb-5">
          <TimeFilter
            time={month}
            text="-р сар"
            limit={currentMonth}
            onTimeChange={handleMonthChange}
          />
        </div>

        {/* Хэрвээ хэрэглэгч хүсэлт байхгүй бол энэ component-г үзүүлнэ. */}
        {/* <InfoReq />  */}
        <OrderList
          date={firstDay(currentYear, month)}
          date2={lastDay(currentYear, month)}
          month={month}
          // OrderData={OrderData}
        />
      </div>
      <RightSidebar />
      {modal && (
        <div className="">
          <CreateOrder closeModal={closeModal} />
        </div>
      )}
    </OrderProvider>
  );
};
