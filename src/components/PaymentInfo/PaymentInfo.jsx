import React, { useState, useEffect } from "react";
import { PaymentList } from "./PaymentList";
import { InfoReq } from "../InfoReq/InfoReq";
import { TimeFilter } from "../TimeFilter/TimeFilter";
import { NewReq } from "../NewReq/NewReq";
import { CompanyNames } from "../CompanyNames/CompanyNames";
import { OrderProvider } from "../OrderList/OrderProvider";
import axios from "axios";
export const PaymentInfo = (props) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [OrderData, setOrderData] = useState([]);
  const [beginBalance, setBeginBalance] = useState("");
  const handleSelectedChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  //Get request явуулахад өгөгдөл ирсэн үгүйгээс хамаарч PaymentList болон InfoReq component-үүдийн алийг гаргахыг шийднэ.
  const [modal, setModal] = useState(false);

  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const handleYearChange = (year) => {
    setYear(year);
  };
  // Niit tuluh dun
  const totalPay = OrderData.reduce((total, props) => {
    if (props.dtAmount) {
      return total + parseFloat(props.dtAmount);
    }
    return total;
  }, 0);

  // Niit tulburiin uldegdel
  const totalBalance = OrderData.reduce((total, props) => {
    const balance =
      props.dtAmount - props.ktAmount > 0 ? props.dtAmount - props.ktAmount : 0;
    return total + parseFloat(balance);
  }, 0);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const data = await axios.get(
          `/api/services/getbillinginfo?customerId=${selectedOption}&startDate=${year}-01-01&endDate=${year}-12-31
        `,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrderData(data.data.transactions);
        setBeginBalance(data.data.beginbalance);
        setModal(false);
        console.log("year", year);
        console.log(beginBalance);
      } catch (err) {
        console.log("Error:", err.response);
        console.log("status", err.response.status);
        if (
          err.response.status === 400 ||
          err.response.status === 404 ||
          err.response.status === 500
        ) {
          setModal(true);
        }
      }
    };
    // };
    FetchData();

    console.log("Data: ", OrderData);
  }, [selectedOption, year]);

  return (
    <OrderProvider>
      <div className="mt-[3%] w-full min-h-[80vh]">
        <div className="mr-[5%] ml-[5%] text-xs">
          <div className="flex">
            <div className="w-[65%]">
              <div className="mb-2 w-[325px] h-[30px]">
                <CompanyNames
                  selectedOption={selectedOption}
                  onSelectedChange={handleSelectedChange}
                />
              </div>
              <br />
              <br />
              <div className="flex">
                <div className="mr-[2%]">
                  <div className=" mb-2 font-bold">Огноогоор шүүх</div>
                  <TimeFilter
                    time={year}
                    limit={currentYear}
                    onTimeChange={handleYearChange}
                  />
                </div>
                <div className="mr-[2%]">
                  <div className=" mb-2 font-bold">Эхний үлдэгдэл</div>
                  {modal === false ? (
                    <div className="flex text-red-500 rounded-lg p-2 bg-slate-300 text-base justify-center">
                      {parseFloat(beginBalance)}
                    </div>
                  ) : (
                    <div className="flex text-teal-400 rounded-lg p-2 bg-slate-300 text-base justify-center">
                      0
                    </div>
                  )}
                </div>
                <div className="mr-[3   %]">
                  <div className=" mb-2 font-bold">Эцсийн үлдэгдэл</div>
                  {modal === false ? (
                    <div className="flex text-red-500 rounded-lg p-2 bg-slate-300 text-base justify-center">
                      {parseFloat(beginBalance) + parseFloat(totalBalance)}
                    </div>
                  ) : (
                    <div className="flex text-teal-400 rounded-lg p-2 bg-slate-300 text-base justify-center">
                      0
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[35%] flex items-center justify-center">
              <NewReq button="Хүсэлт илгээх" />
            </div>
          </div>
          {modal === true ? (
            <div className="w-2/3 mt-[5%] mb-[11vh]">
              <InfoReq props="Эрхэм харилцагч танд төлбөрийн үлдэгдэл байхгүй байна." />
            </div>
          ) : (
            <div className="mb-[5vh]">
              <PaymentList
                OrderData={OrderData}
                totalBalance={totalBalance}
                totalPay={totalPay}
              />
            </div>
          )}
        </div>
      </div>
    </OrderProvider>
  );
};
