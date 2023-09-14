import React, { useEffect, useContext, useState } from "react";
import { RoundButton } from "../NewReq/RoundButton";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import { InfoReq } from "../InfoReq/InfoReq";
import { CreateOrder } from "../CreateOrder/CreateOrder";
import { OrderList } from "../OrderList/OrderList";
import { TimeFilter } from "../TimeFilter/TimeFilter";
import { OrderContext } from "../../context/OrderProvider";
import { Loading } from "../Loading/Loading";
import axios from "axios";

export const ListService = () => {
  const [modal, setModal] = useState(false);
  const [serviceCount, setServiceCount] = useState();
  const [loading, setLoading] = useState(false);
  const { refresh } = useContext(OrderContext);
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  // Хамгийн эхэнд
  useEffect(() => {
    const service = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          // `https://service2.stg.mn/api/services/getservicecount?email=${localStorage.getItem("email")}`,
          `/api/services/getservicecount?email=${localStorage.getItem(
            "email"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setServiceCount(data.data.serviceCount);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    service();
  }, []);
  // Refresh өөрчлөгдөх үед
  useEffect(() => {
    const service = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          // `https://service2.stg.mn/api/services/getservicecount?email=${localStorage.getItem("email")}`,
          `/api/services/getservicecount?email=${localStorage.getItem(
            "email"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setServiceCount(data.data.serviceCount);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    service();
  }, [refresh]);

  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const handleYearChange = (year) => {
    setYear(year);
  };
  return (
    // <OrderProvider>
    <>
      <div className=" min-h-[90vh] w-[80vw] md:w-full">
        <div className="mx-[5%]">
          <div className="flex md:flex-row flex-col items-center w-full mt-10 mb-5 ">
            <div className="flex md:mt-0 mr-[80px]">
              <RoundButton openModal={openModal} />
            </div>
            <div className="flex justify-center">
              <SearchBar />
            </div>
          </div>
          {serviceCount !== 0 && (
            <div className="mb-5">
              <TimeFilter
                time={year}
                limit={currentYear}
                onTimeChange={handleYearChange}
              />
            </div>
          )}
          <div className="md:mr-[25%] mr-0">
            {serviceCount === 0 ? (
              <div className="mt-10">
                <InfoReq
                  main="Эрхэм харилцагч танд энэ өдрийн мэнд хүргье. Танд одоогоор үүсгэсэн
              үйлчилгээний хүсэлт байхгүй байна."
                  foot="Шинэ товч дарж захиалгаа үүсгээрэй"
                />
              </div>
            ) : (
              <OrderList
                date={`${year}-01-01`}
                date2={`${year}-12-31`}
                month={year}
              />
            )}
          </div>
        </div>
      </div>
      {modal && (
        <div className="">
          <CreateOrder closeModal={closeModal} />
        </div>
      )}
    </>
  );
};
