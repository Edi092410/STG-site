import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { OrderContext } from "../../context/OrderProvider";
import { TimeFilter } from "../TimeFilter/TimeFilter";
import { CompanyContext } from "../../context/CompanyProvider";
import { ChooseCompany } from "../CompanyNames/ChooseCompany";
import { TimeFilterContext } from "../../context/TimeFilterProvider";
import character from "../../Assets/ServiceCharacter.png";
import { HeaderUser } from "../../layouts/HeaderUser";
import { RoundButton } from "../NewReq/RoundButton";
import { OrderDetail } from "../OrderDetail/OrderDetail";
import { Outlet, useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import { PaymentContext } from "../../context/PaymentProvider";
import { ProgramRelease } from "../ProgramRelease/ProgramRelease";
import { MostSearched } from "../MostSearched/MostSearched";
import { JustWatched } from "../JustWatched/JustWatched";

export const List = ({ date, date2, month }) => {
  // const [selectedOption, setSelectedOption] = useState({});

  const { selectedCompany } = useContext(CompanyContext);
  // UseContext ашиглан component refresh хийх
  // const [OrderData, setOrderData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);

  const { refresh, setRefresh } = useContext(OrderContext);
  // Loading хийх
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      console.log(date);
      try {
        const data = await axios.get(
          // `https://service2.stg.mn/api/services/getservicelist?customerId=${selectedCompany}&startDate=${date}&endDate=${date2}`,
          `/api/services/getservicelist?customerId=${selectedCompany}&startDate=2023-01-01&endDate=2023-12-31`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-type": "application/json",
            },
          }
        );
        // setOrderData(data.data);
        setServiceData(data.data.filter((info) => info.number.startsWith("Ү")));
        setFeedbackData(
          data.data.filter((info) => !info.number.startsWith("Ү"))
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [selectedCompany, month, refresh]);

  return (
    <div className=" mb-4">
      <div className=" flex justify-between items-center px-[2%]">
        <div className="flex items-center">
          <div className=" text-[16px] 3xl:text-[24px] font-semibold mr-4">
            Санал хүсэлт
          </div>
          <RoundButton />
        </div>
        <img src={character} alt="character image" className=" w-[80px]" />
      </div>
      <ServiceList serviceData={serviceData} feedbackData={feedbackData} />
    </div>
  );
};

export const ServiceList = ({ serviceData, feedbackData }) => {
  let type;

  const State = ({ data }) => {
    let jsxElement = null;

    switch (parseInt(data)) {
      case 0:
        jsxElement = (
          <div className={"bg-[#FAA61A] w-[12px] h-[12px] rounded-full"}></div>
        );
        break;
      case 1:
        jsxElement = (
          <div className={"bg-[#DD2338] w-[12px] h-[12px] rounded-full"}></div>
        );
        break;
      case 2:
        jsxElement = (
          <div className={"bg-[#FAA61A] w-[12px] h-[12px] rounded-full"}></div>
        );
        break;
      default:
        break;
    }

    return jsxElement;
  };

  const [id, setId] = useState("");
  const [state, setState] = useState();
  const [modal, setModal] = useState();
  const closeModal = () => {
    setModal(false);
  };

  const { selectedCompany } = useContext(CompanyContext);
  return (
    <div className="w-full h-[25vh] overflow-y-auto p-[25px] text-[#7B7B7B] bg-white rounded-lg shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)]">
      <table className=" text-xs 3xl:text-base  w-full ">
        <thead className=" text-left">
          <tr>
            <th className="w-[30%]">Огноо</th>
            <th className="w-[50%]">Үйлчилгээ</th>
            <th className="w-[20%]">Төлөв</th>
          </tr>
        </thead>
        <tbody>
          {serviceData && serviceData.length > 0 ? (
            serviceData.map((info) => {
              type = info.serviceType;
              return (
                <React.Fragment key={info.number}>
                  <tr>
                    <td className="">
                      {info.registrationTime && (
                        <div>
                          {info.registrationTime.substring(0, 10)}-
                          {info.registrationTime.substring(11, 16)}
                        </div>
                      )}
                    </td>
                    <td
                      className=" cursor-pointer"
                      onClick={() => {
                        setId(info.number);
                        setState(info.serviceType);
                        setModal(true);
                      }}
                    >
                      {info.comment.substring(0, 20)}...
                    </td>
                    <td className="pl-3">
                      <State data={info.state} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5"></td>
                  </tr>
                </React.Fragment>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td>No data.</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>

      <table className=" text-xs 3xl:text-base  w-full ">
        <thead className=" text-left">
          <tr>
            <th className="w-[30%]">Огноо</th>
            <th className="w-[50%]">Санал хүсэлт</th>
            <th className="w-[20%]">Төлөв</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData && feedbackData.length > 0 ? (
            feedbackData.map((info) => {
              type = info.serviceType;
              return (
                <React.Fragment key={info.number}>
                  <tr>
                    <td className="py-[5px]">
                      {info.registrationTime && (
                        <div>
                          {info.registrationTime.substring(0, 10)}-
                          {info.registrationTime.substring(11, 16)}
                        </div>
                      )}
                    </td>
                    <td
                      className="py-[5px] cursor-pointer"
                      onClick={() => {
                        setId(info.number);
                        setState(info.serviceType);
                        setModal(true);
                      }}
                    >
                      {info.comment.substring(0, 20)}...
                    </td>
                    <td className="pl-3 py-[5px]">
                      <State data={info.state} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5"></td>
                  </tr>
                </React.Fragment>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td>No data.</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      {modal && (
        <OrderDetail
          closeModal={closeModal}
          number={id}
          selectedOption={selectedCompany}
          type={state}
        />
      )}
    </div>
  );
};

export const Payment = ({ year }) => {
  const [OrderData, setOrderData] = useState([]);
  const [beginBalance, setBeginBalance] = useState("");
  const [loading, setLoading] = useState(false);
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

  const { selectedCompany } = useContext(CompanyContext);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          // `https://service2.stg.mn/api/services/getbillinginfo?customerId=${selectedCompany}&startDate=${year}-01-01&endDate=${year}-12-31
          // `,
          `/api/services/getbillinginfo?customerId=${selectedCompany}&startDate=${year}-01-01&endDate=${year}-12-31
              `,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrderData(data.data.transactions);
        setBeginBalance(data.data.beginbalance);
      } catch (err) {
        if (
          err.response?.status === 400 ||
          err.response?.status === 404 ||
          err.response?.status === 500 ||
          err.response?.status === 204
        ) {
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
          // `https://service2.stg.mn/api/services/getbillinginfo?customerId=${selectedCompany}&startDate=${year}-01-01&endDate=${year}-12-31
          // `,
          `/api/services/getbillinginfo?customerId=${selectedCompany}&startDate=${year}-01-01&endDate=${year}-12-31
          `,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrderData(data.data.transactions);
        console.log("Payment info:", data.data.transactions);
        setBeginBalance(data.data.beginbalance);
      } catch (err) {
        if (
          err.response?.status === 400 ||
          err.response?.status === 404 ||
          err.response?.status === 500 ||
          err.response?.status === 204
        ) {
        }
      } finally {
        setLoading(false);
      }
    };
    // };
    FetchData();
  }, [selectedCompany, year]);

  return (
    <div className="py-4">
      <div className="flex justify-between items-center px-[2%] ">
        <div className="text-[16px] 3xl:text-[24px] font-semibold">
          Төлбөр тооцоо
        </div>
        <img src={character} className="w-[80px] " />
      </div>
      <div className="flex justify-between text-xs 3xl:text-base px-[5%] my-5 mb-10">
        <div className="flex flex-col w-fit ">
          <div className="h-full px-[10px] border-[2px] border-[#DFE3EE] rounded-t-sm bg-white flex items-center">
            Эхний үлдэгдэл
          </div>
          <div className="flex items-center justify-center bg-[#DFE3EE] rounded-b-sm text-[#032D60] text-sm 3xl:text-lg px-[10px]">
            {OrderData ? parseFloat(beginBalance) : "0"}₮
          </div>
        </div>
        <div className="flex flex-col w-fit h-[25px]">
          <div className="h-full px-[10px] border-[2px] border-[#DFE3EE] rounded-l-sm bg-white flex items-center">
            Эцсийн үлдэгдэл
          </div>
          <div className="flex items-center justify-center bg-[#DFE3EE] rounded-r-sm text-[#032D60] text-sm 3xl:text-lg px-[10px]">
            {OrderData
              ? parseFloat(beginBalance) +
                parseFloat(totalPay) -
                parseFloat(totalPayed)
              : "0"}
            ₮
          </div>
        </div>
      </div>
      <PaymentList OrderData={OrderData} />

      {loading && (
        <div className="fixed top-0 left-0 h-screen w-screen">
          <Loading />
        </div>
      )}
    </div>
  );
};

export const PaymentList = ({ OrderData }) => {
  //current year
  const limit = new Date().getFullYear();

  const handleIncrement = () => {
    if (limit > time) {
      handleTime(time + 1);
    } else handleTime(1);
  };

  const handleDecrement = () => {
    if (time > 1) {
      handleTime(time - 1);
    } else handleTime(limit);
  };
  const navigate = useNavigate();
  const { handleTime, time } = useContext(TimeFilterContext);
  const { number, setNumber } = useContext(PaymentContext);
  return (
    <div className="w-full p-[25px] pb-2 text-[#7B7B7B] bg-white rounded-lg shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)]">
      {OrderData && OrderData.lenght > 0 ? (
        <div className=" overflow-y-auto h-[20vh]">
          <table className="w-full text-xs 3xl:text-base">
            <thead className=" text-left">
              <tr>
                <th className="w-[30%]">Огноо</th>
                <th className="w-[50%]">Ажил үйлчилгээ</th>
                <th className="w-[20%]">Төлбөр</th>
              </tr>
            </thead>
            <tbody>
              {OrderData && OrderData.length > 0 ? (
                OrderData.map((props) => {
                  return (
                    <React.Fragment key={props.number}>
                      <tr>
                        <td className="w-[30%] py-[5px]">
                          <div>
                            {props.date.substring(0, 10)}-
                            {props.date.substring(11, 16)}
                          </div>
                        </td>
                        <td
                          className="w-[50%] py-[5px] cursor-pointer"
                          onClick={() => {
                            setNumber(props.number);
                            navigate("/test/payment");
                          }}
                        >
                          {props.transactionReference.substring(0, 20)}...
                        </td>
                        <td className="w-[20%] py-[5px]">
                          {props.dtAmount.toLocaleString("en-US")}₮
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={3} className="text-center text-lg">
                    Мэдээлэл байхгүй байна.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <NoData
          head={"Итгэлт харилцагч танд энэ өдрийн мэнд хүргэе!"}
          foot={
            "Одоогоор харилцагч танд төлбөрийн үлдэгдэл илүү төлөлт байхгүй байна."
          }
        />
      )}

      <div className="w-full flex justify-end mt-4">
        <div className=" w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center rotate-180 cursor-pointer transition duration-150 hover:scale-105 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 25 24"
            fill="none"
            onClick={() => handleIncrement()}
          >
            <path
              d="M6.42969 14.43L12.4997 20.5L18.5697 14.43"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 3.50008L12.5 20.3301"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className=" w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center cursor-pointer transition duration-150 hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 25 24"
            fill="none"
            onClick={() => handleDecrement()}
          >
            <path
              d="M6.42969 14.43L12.4997 20.5L18.5697 14.43"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 3.50008L12.5 20.3301"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const PaymentTable = ({ OrderData }) => {
  const { number } = useContext(PaymentContext);
  return (
    <div className="w-full  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg p-[2%]">
      <table className="w-full 3xl:text-sm text-[9px] ">
        <thead className=" text-left">
          <tr>
            <th className="p-2 pt-0 pb-0 text-left">Огноо</th>
            <th className="p-2 pt-0 pb-0 text-left">Баримтын дугаар</th>
            <th className="p-2 pt-0 pb-0 text-left">Ажил үйлчилгээ</th>
            <th className="p-2 pt-0 pb-0 text-right">Төлөх дүн</th>
            <th className="p-2 pt-0 pb-0 text-right">Төлсөн</th>
            <th className="p-2 pt-0 pb-0 text-right">Үлдэгдэл</th>
            <th className="p-2 pt-0 pb-0 text-right">Илүү төлөлт</th>
            <th className="p-2 pt-0 pb-0 text-center">Тэмдэглэл</th>
          </tr>
        </thead>
        <tbody className=" text-[#7B7B7B]">
          {OrderData && OrderData.length > 0 ? (
            OrderData.map((props) => {
              const balance =
                props.dtAmount - props.ktAmount > 0
                  ? props.dtAmount - props.ktAmount
                  : 0;

              return (
                <React.Fragment key={props.number}>
                  <tr
                    className={`${
                      number === props.number && "border border-t-"
                    }`}
                  >
                    <td className="p-2">
                      <div>{props.date.substring(0, 10)}</div>
                    </td>
                    <td className="p-2">{props.number}</td>
                    <td className="p-2">{props.transactionReference}</td>
                    <td className="p-2 text-right">
                      {props.dtAmount.toLocaleString("en-US")}₮
                    </td>
                    <td className="p-2 text-right">
                      {props.ktAmount.toLocaleString("en-US")}₮
                    </td>
                    <td className="p-2 text-right">
                      {balance.toLocaleString("en-US")}₮
                    </td>
                    <td className="p-2 text-right">
                      {props.dtAmount - props.ktAmount > 0
                        ? 0
                        : (props.ktAmount - props.dtAmount).toLocaleString(
                            "en-US"
                          )}
                      ₮
                    </td>
                    <td className="p-2 text-center">{props.journal}</td>
                  </tr>
                </React.Fragment>
              );
            })
          ) : (
            <tr>
              <td colSpan={8} className="text-center text-lg h-[10vh]">
                Таны хайсан мэдээлэл байхгүй байна.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export const PaymentPage = () => {
  const [OrderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { selectedCompany } = useContext(CompanyContext);
  const { time, setTime, handleTime } = useContext(TimeFilterContext);
  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          // `https://service2.stg.mn/api/services/getbillinginfo?customerId=${selectedCompany}&startDate=${time}-01-01&endDate=${time}-12-31
          // `,
          `/api/services/getbillinginfo?customerId=${selectedCompany}&startDate=${time}-01-01&endDate=${time}-12-31
              `,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrderData(data.data.transactions);
      } catch (err) {
        if (
          err.response?.status === 400 ||
          err.response?.status === 404 ||
          err.response?.status === 500 ||
          err.response?.status === 204
        ) {
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
          // `https://service2.stg.mn/api/services/getbillinginfo?customerId=${selectedCompany}&startDate=${time}-01-01&endDate=${time}-12-31
          // `,
          `/api/services/getbillinginfo?customerId=${selectedCompany}&startDate=${time}-01-01&endDate=${time}-12-31
          `,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrderData(data.data.transactions);
      } catch (err) {
        if (
          err.response?.status === 400 ||
          err.response?.status === 404 ||
          err.response?.status === 500 ||
          err.response?.status === 204
        ) {
        }
      } finally {
        setLoading(false);
      }
    };
    // };
    FetchData();
  }, [selectedCompany, time]);
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <div className="w-full h-full px-[3%]">
      <div className="flex items-center my-5 ">
        <TimeFilter limit={currentYear} />
        <div className="3xl:w-[350px] 3xl:h-[40px] w-[200px] h-[30px]">
          <SearchBar />
        </div>
      </div>
      <PaymentTable OrderData={OrderData} />
      <div className="w-full flex justify-end my-4 text-sm">
        <button
          className=" w-fit rounded-full text-white bg-[#2D3648] flex p-[10px] transition duration-300 hover:scale-105"
          onClick={() => navigate("/test")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 25 24"
            fill="none"
            className="mr-1"
          >
            <path
              d="M10.07 5.92969L4 11.9997L10.07 18.0697"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0019 12H4.17188"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Буцах
        </button>
      </div>
    </div>
  );
};

export const Test = () => {
  const currentYear = new Date().getFullYear();
  // const [year, setYear] = useState(currentYear);
  // const handleYearChange = (year) => {
  //   setYear(year);
  // };
  const { time, setTime, handleTime } = useContext(TimeFilterContext);
  const { selectedCompany, handleSelectedCompany } = useContext(CompanyContext);
  return (
    <div className="w-screen h-screen bg-slate-300 ">
      <ChooseCompany
        selectedOption={selectedCompany}
        onSelectedChange={handleSelectedCompany}
      />
      <TimeFilter
        // time={year}
        limit={currentYear}
        // onTimeChange={handleYearChange}
      />
      <List date={`${time}-01-01`} date2={`${time}-12-31`} month={time} />
      {/* <Payment year={time} /> */}
    </div>
  );
};

export const ServicePage = () => {
  const { time, setTime, handleTime } = useContext(TimeFilterContext);
  return (
    <div className="w-full h-full">
      {/* <HeaderUser /> */}
      <div className="w-full h-full flex mt-[2%] px-[4%]">
        <div className="w-[25%]">
          <div className="">
            <List date={`${time}-01-01`} date2={`${time}-12-31`} month={time} />
          </div>
          <div>
            <Payment year={time} />
          </div>
        </div>
        <div className="w-1/2 h-full px-[2%]">
          <Outlet />
          {/* <PaymentPage /> */}
        </div>
        <div className="w-[25%] h-full">
          <ProgramRelease />
          <div className="mt-4">
            <MostSearched />
          </div>
          <div className="my-4">
            <JustWatched />
          </div>
        </div>
      </div>
    </div>
  );
};

export const NoData = ({ head, foot }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-[10%] text-center 3xl:text-[20px] text-sm">
      <div>{head}</div>
      <img src={character} alt="character image" className=" w-[80px] my-2" />
      <div>{foot}</div>
    </div>
  );
};
