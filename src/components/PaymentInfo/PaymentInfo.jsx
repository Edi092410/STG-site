import React, { useState, useEffect } from "react";
import { PaymentList } from "./PaymentList";
import { InfoReq } from "../InfoReq/InfoReq";
import { TimeFilter } from "../TimeFilter/TimeFilter";
import { NewReq } from "../NewReq/NewReq";
import { CompanyNames } from "../CompanyNames/CompanyNames";
import { OrderProvider } from "../../context/OrderProvider";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { RoundButton } from "../NewReq/RoundButton";

export const PaymentInfo = (props) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [OrderData, setOrderData] = useState([]);
  const [beginBalance, setBeginBalance] = useState("");
  const handleSelectedChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  //Get request явуулахад өгөгдөл ирсэн үгүйгээс хамаарч PaymentList болон InfoReq component-үүдийн алийг гаргахыг шийднэ.
  const [modal, setModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const handleYearChange = (year) => {
    setYear(year);
  };
  // Niit tuluh dun
  const totalPay =
    OrderData && OrderData.length > 0
      ? OrderData.reduce((total, props) => {
          if (props.dtAmount) {
            return total + parseFloat(props.dtAmount);
          }
          return total;
        }, 0)
      : 0;

  // Niit tulsun dun
  const totalPayed =
    OrderData && OrderData.length > 0
      ? OrderData.reduce((total, props) => {
          if (props.ktAmount) {
            return total + parseFloat(props.ktAmount);
          }
          return total;
        }, 0)
      : 0;

  // Niit tulburiin uldegdel
  const totalBalance =
    OrderData && OrderData.length > 0
      ? OrderData.reduce((total, props) => {
          const balance =
            props.dtAmount - props.ktAmount > 0
              ? props.dtAmount - props.ktAmount
              : 0;
          return total + parseFloat(balance);
        }, 0)
      : 0;

  useEffect(() => {
    console.log("select", selectedOption);
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          // `https://service2.stg.mn/api/services/getbillinginfo?customerId=${selectedOption}&startDate=${year}-01-01&endDate=${year}-12-31
          // `,
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
      } catch (err) {
        if (
          err.response?.status === 400 ||
          err.response?.status === 404 ||
          err.response?.status === 500 ||
          err.response?.status === 204
        ) {
          setModal(true);
        }
      } finally {
        setLoading(false);
      }
    };
    // };
    FetchData();
  }, []);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          // `https://service2.stg.mn/api/services/getbillinginfo?customerId=${selectedOption}&startDate=${year}-01-01&endDate=${year}-12-31
          // `,
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
      } catch (err) {
        if (
          err.response?.status === 400 ||
          err.response?.status === 404 ||
          err.response?.status === 500 ||
          err.response?.status === 204
        ) {
          setModal(true);
        }
      } finally {
        setLoading(false);
      }
    };
    // };
    FetchData();
  }, [selectedOption, year]);

  return (
    <OrderProvider>
      <div className="mt-10 lg:w-full min-h-[90vh] w-[80vw] md:w-[78vw]">
        <div className="mx-[5%] text-xs">
          <div className="flex md:flex-row flex-col">
            <div className="w-full">
              <div className="flex">
                <div className="lg:w-[50%] w-full">
                  <div className="flex">
                    <div className="mr-20">
                      <RoundButton button="Хүсэлт илгээх" />
                    </div>
                    <div className="-mt-4 w-full md:w-[325px] h-[30px]">
                      <CompanyNames
                        selectedOption={selectedOption}
                        onSelectedChange={handleSelectedChange}
                      />
                    </div>
                  </div>
                  <div className="flex w-full mt-2">
                    <div className="md:mr-[5%] mr-auto">
                      {/* <div className=" mb-2 font-bold">Огноогоор шүүх</div> */}
                      <div className="h-full flex items-end">
                        <TimeFilter
                          time={year}
                          limit={currentYear}
                          onTimeChange={handleYearChange}
                        />
                      </div>
                    </div>
                    <div className="md:mr-[5%] mr-auto">
                      <div className=" mb-2 font-bold">Эхний үлдэгдэл</div>
                      {OrderData !== undefined && modal === false ? (
                        <div
                          className={`flex ${
                            parseFloat(beginBalance) === 0 ||
                            beginBalance === null
                              ? "text-[#3FD4CF]"
                              : "text-[#F00]"
                          } rounded-lg p-2 bg-[#D9D9D9] text-[11px] justify-center font-bold`}
                        >
                          {beginBalance === null
                            ? "0"
                            : parseFloat(beginBalance)}
                          ₮
                        </div>
                      ) : (
                        <div className="flex text-[#3FD4CF] rounded-lg p-2 bg-[#D9D9D9] text-[11px] justify-center font-bold">
                          0₮
                        </div>
                      )}
                    </div>
                    <div className="md:mr-[3%]">
                      <div className=" mb-2 font-bold">Эцсийн үлдэгдэл</div>
                      {OrderData !== undefined && modal === false ? (
                        <div
                          className={`flex ${
                            parseFloat(beginBalance) +
                              parseFloat(totalPay) -
                              parseFloat(totalPayed) ===
                              0 || beginBalance === null
                              ? "text-[#3FD4CF]"
                              : "text-[#F00]"
                          } rounded-lg p-2 bg-[#D9D9D9] text-[11px] justify-center font-bold`}
                        >
                          {beginBalance === null
                            ? "0"
                            : parseFloat(beginBalance) +
                              parseFloat(totalPay) -
                              parseFloat(totalPayed)}
                          ₮
                        </div>
                      ) : (
                        <div className="flex text-[#3FD4CF] rounded-lg p-2 bg-[#D9D9D9] text-[11px] justify-center font-bold">
                          0₮
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="md:w-[35%] md:mt-0 mt-5 w-full flex items-center md:justify-center">
              <NewReq button="Хүсэлт илгээх" />
            </div> */}
          </div>
          {OrderData === undefined || modal === true ? (
            <div className="w-full md:w-[70%] mt-[5%] ">
              <InfoReq
                main="Эрхэм харилцагч танд төлбөрийн үлдэгдэл байхгүй байна."
                foot="Цаг тухайд нь төлбөрөө төлдөг танд баярлалаа."
              />
            </div>
          ) : (
            <div className="mb-[5vh] ">
              <PaymentList
                OrderData={OrderData}
                totalBalance={totalBalance}
                totalPay={totalPay}
              />
            </div>
          )}
          {loading && (
            <div className="fixed top-0 left-0 w-screen h-screen">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </OrderProvider>
  );
};
