import React, { useEffect, useState, useContext, useRef } from "react";
import { OrderContext } from "../../context/OrderProvider";
import { TimeFilter } from "../TimeFilter/TimeFilter";
import { CompanyContext } from "../../context/CompanyProvider";
import { ChooseCompany } from "../CompanyNames/ChooseCompany";
import { TimeFilterContext } from "../../context/TimeFilterProvider";
import character from "../../Assets/ServiceCharacter.png";
import { RoundButton } from "../NewReq/RoundButton";
import { OrderDetail } from "../OrderDetail/OrderDetail";
import { Outlet, useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import { PaymentContext } from "../../context/PaymentProvider";
import { ProgramRelease } from "../ProgramRelease/ProgramRelease";
import { MostSearched } from "../MostSearched/MostSearched";
import { JustWatched } from "../JustWatched/JustWatched";
import { Button } from "../Main/Button";
import { LoadedContext } from "../../context/Loaded";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { GetDataWithAuthorization } from "../../Axios/AxiosService2";
export const List = ({ month }) => {
  const { selectedCompany } = useContext(CompanyContext);
  // UseContext ашиглан component refresh хийх
  const [OrderData, setOrderData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);

  const { refresh } = useContext(OrderContext);
  // Loading хийх
  const { setLoading } = useContext(LoadedContext);

  const notify = ({ text }) => {
    toast.error(text, {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await GetDataWithAuthorization(
          `/services/getservicelist?customerId=${selectedCompany}&startDate=2023-01-01&endDate=2023-12-31`
        );
        setOrderData(data.data);
        console.log("Service:", data);
        if (data.data) {
          setServiceData(
            data.data.filter((info) => info.number.startsWith("Ү"))
          );
          setFeedbackData(
            data.data.filter((info) => !info.number.startsWith("Ү"))
          );
        }
      } catch (err) {
        notify({ text: err.message });
        // console.log("errr", err);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [selectedCompany, refresh]);

  return (
    <div className=" mb-4">
      <div
        className={`flex justify-between items-center px-[2%] ${
          !(OrderData && OrderData.length > 0) && "mb-4"
        }`}
      >
        <div className="flex items-center mb-4">
          <div className=" text-[16px] 3xl:text-[24px] font-semibold mr-4">
            Захиалга үүсгэх
          </div>
          <RoundButton />
        </div>
        {/* {OrderData && OrderData.length > 0 && (
          <img src={character} alt="character image" className=" w-[80px]" />
        )} */}
      </div>
      <ServiceList
        serviceData={serviceData}
        feedbackData={feedbackData}
        OrderData={OrderData}
      />
    </div>
  );
};

export const ServiceList = ({ serviceData, feedbackData, OrderData }) => {
  let type;

  const State = ({ data }) => {
    let jsxElement = null;

    switch (parseInt(data)) {
      case 0:
        jsxElement = (
          <div className={"bg-[#BDBDBD] w-[12px] h-[12px] rounded-full"}></div>
        );
        break;
      case 1:
        jsxElement = (
          <div className={"bg-[#0496D4] w-[12px] h-[12px] rounded-full"}></div>
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
  const navigate = useNavigate();
  return (
    <div className="relative w-full p-[25px] pb-[50px] text-[#7B7B7B] bg-white rounded-lg shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)]">
      {OrderData && OrderData.length > 0 ? (
        <div className="h-[25vh] overflow-y-auto">
          {serviceData && serviceData.length > 0 && (
            <table className=" text-xs 3xl:text-base  w-full ">
              <thead className=" text-left">
                <tr>
                  <th className="w-[30%] pb-4">Огноо</th>
                  <th className="w-[50%] pb-4">Үйлчилгээ</th>
                  <th className="w-[20%] pb-4">Төлөв</th>
                </tr>
              </thead>
              <tbody>
                {serviceData.map((info) => {
                  type = info.serviceType;
                  return (
                    <React.Fragment key={info.number}>
                      <tr>
                        <td className="3xl:py-[10px] py-[5px]">
                          {info.registrationTime && (
                            <div>{info.registrationTime.substring(0, 10)}</div>
                          )}
                        </td>
                        <td
                          className=" cursor-pointer 3xl:py-[10px] py-[5px]"
                          onClick={() => {
                            setId(info.number);
                            setState(info.serviceType);
                            setModal(true);
                          }}
                        >
                          {info.comment.substring(0, 20)}...
                        </td>
                        <td className="pl-3 3xl:py-[10px] py-[5px]">
                          <State data={info.state} />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5"></td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          )}

          {feedbackData && feedbackData.length > 0 && (
            <table className=" text-xs 3xl:text-base  w-full ">
              <thead className=" text-left">
                <tr>
                  <th className="w-[30%]">Огноо</th>
                  <th className="w-[50%]">Санал хүсэлт</th>
                  <th className="w-[20%]">Төлөв</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData.map((info) => {
                  type = info.serviceType;
                  return (
                    <React.Fragment key={info.number}>
                      <tr>
                        <td className="3xl:py-[10px] py-[5px]">
                          {info.registrationTime && (
                            <div>{info.registrationTime.substring(0, 10)}</div>
                          )}
                        </td>
                        <td
                          className="3xl:py-[10px] py-[5px] cursor-pointer"
                          onClick={() => {
                            setId(info.number);
                            setState(info.serviceType);
                            setModal(true);
                          }}
                        >
                          {info.comment.substring(0, 20)}...
                        </td>
                        <td className="pl-3 3xl:py-[10px] py-[5px]">
                          <State data={info.state} />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5"></td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          )}
          {modal && (
            <OrderDetail
              closeModal={closeModal}
              number={id}
              selectedOption={selectedCompany}
              type={state}
            />
          )}
        </div>
      ) : (
        <NoData
          head={
            "Одоогоор хүсэлт үүсгээгүй байна. Шинэ товч дээр дарж хүсэлтээ үүсгэх боломжтой"
          }
          foot={
            "Та 24 цагт онлайнаар үйлчилгээний хүсэлтээ цаг алдалгүй үүсгээрэй."
          }
        />
      )}
      <div
        className={`absolute bottom-5 right-5 text-xs 3xl:text-base  ${
          OrderData && OrderData.length > 0 ? "md:block hidden" : "hidden"
        } cursor-pointer `}
        onClick={() => navigate("/test/list")}
      >
        Бүгдийг харах
      </div>
    </div>
  );
};

export const Payment = ({ year }) => {
  const [OrderData, setOrderData] = useState([]);
  const [beginBalance, setBeginBalance] = useState("");
  const { setLoading } = useContext(LoadedContext);
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

  const company = JSON.parse(localStorage.getItem("companies")).filter(
    (element) => element.customerId === selectedCompany
  );

  const notify = ({ text }) => {
    toast.error(text, {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };
  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await GetDataWithAuthorization(
          `/services/getbillinginfo?customerId=${selectedCompany}&startDate=${year}-01-01&endDate=${year}-12-31`
        );
        setOrderData(data.data.transactions);
        setBeginBalance(data.data.beginbalance);
      } catch (err) {
        // if (
        //   err.response?.status === 400 ||
        //   err.response?.status === 404 ||
        //   err.response?.status === 500 ||
        //   err.response?.status === 204
        // ) {
        // }
        notify({ text: err.message });
      } finally {
        setLoading(false);
      }
    };
    if (company && company.length > 0 && company[0].isAdmin === true)
      FetchData();
  }, []);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await GetDataWithAuthorization(
          `/services/getbillinginfo?customerId=${selectedCompany}&startDate=${year}-01-01&endDate=${year}-12-31`
        );
        setOrderData(data.data.transactions);
        setBeginBalance(data.data.beginbalance);
      } catch (err) {
        // if (
        //   err.response?.status === 400 ||
        //   err.response?.status === 404 ||
        //   err.response?.status === 500 ||
        //   err.response?.status === 204
        // ) {
        // }
        notify({ text: err.message });
      } finally {
        setLoading(false);
      }
    };
    if (company && company.length > 0 && company[0].isAdmin === true)
      FetchData();
  }, [selectedCompany, year]);

  return (
    <div className="py-4">
      <div
        className={`flex justify-between items-center px-[2%] ${
          !(OrderData && OrderData.length > 0) && "mb-4"
        }`}
      >
        <div className="text-[16px] 3xl:text-[24px] font-semibold">
          Төлбөр тооцоо
        </div>
        {/* {OrderData && OrderData.length > 0 && (
          <img src={character} className="w-[80px] " />
        )} */}
      </div>
      <div
        className={`flex justify-between text-xs 3xl:text-base px-[5%] my-5 mb-10 ${
          OrderData && OrderData.length > 0 ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col w-fit ">
          <div className="h-full px-[10px] border-[2px] border-[#DFE3EE] rounded-t-sm bg-white flex items-center">
            Эхний үлдэгдэл
          </div>
          <div className="flex items-center justify-center bg-[#DFE3EE] rounded-b-sm text-[#032D60] text-sm 3xl:text-lg px-[10px]">
            {OrderData ? parseFloat(beginBalance).toLocaleString("en-US") : "0"}
            ₮
          </div>
        </div>
        <div className="flex flex-col w-fit h-[25px]">
          <div className="h-full px-[10px] border-[2px] border-[#DFE3EE] rounded-l-sm bg-white flex items-center">
            Эцсийн үлдэгдэл
          </div>
          <div className="flex items-center justify-center bg-[#DFE3EE] rounded-r-sm text-[#032D60] text-sm 3xl:text-lg px-[10px]">
            {OrderData
              ? (
                  parseFloat(beginBalance) +
                  parseFloat(totalPay) -
                  parseFloat(totalPayed)
                ).toLocaleString("en-US")
              : "0"}
            ₮
          </div>
        </div>
      </div>
      <PaymentList OrderData={OrderData} />
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
  const { setNumber } = useContext(PaymentContext);
  return (
    <div className="w-full p-[25px] pb-2 text-[#7B7B7B] bg-white rounded-lg shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)]">
      {OrderData && OrderData.length > 0 ? (
        <div className=" overflow-y-auto h-[20vh]">
          <table className="w-full text-xs 3xl:text-base">
            <thead className=" text-left pb-40">
              <tr>
                <th className="w-[30%] 3xl:pb-4 pb-3">Огноо</th>
                <th className="w-[50%] 3xl:pb-4 pb-3">Ажил үйлчилгээ</th>
                <th className="w-[20%] 3xl:pb-4 pb-3">Төлбөр</th>
              </tr>
            </thead>
            <tbody className="">
              {OrderData && OrderData.length > 0 ? (
                OrderData.map((props) => {
                  return (
                    <React.Fragment key={props.number}>
                      <tr className="">
                        <td className="w-[30%] 3xl:py-[10px] py-[5px]">
                          <div>
                            {props.date.substring(0, 10)}-
                            {props.date.substring(11, 16)}
                          </div>
                        </td>
                        <td
                          className="w-[50%] 3xl:py-[10px] py-[5px] cursor-pointer pointer-events-none lg:pointer-events-auto"
                          // className="w-[50%] 3xl:py-[10px] py-[5px] cursor-pointer"
                          onClick={() => {
                            setNumber(props.number);
                            navigate("/test/payment");
                          }}
                        >
                          {props.transactionReference.substring(0, 20)}...
                        </td>
                        <td className="w-[20%] 3xl:py-[10px] py-[5px]">
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

      <div className="w-full flex justify-end my-4">
        <div className=" w-[24px] h-[24px] rounded-full bg-[#D9D9D9] flex items-center justify-center rotate-180 cursor-pointer transition duration-150 hover:scale-105 mr-2">
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
        <div className=" w-[24px] h-[24px] rounded-full bg-[#D9D9D9] flex items-center justify-center cursor-pointer transition duration-150 hover:scale-105">
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
  const notify = ({ text }) => {
    toast.warning(text, {
      position: "top-center", // Change the position of the toast
      autoClose: 2000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };
  const { number } = useContext(PaymentContext);
  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    bodyClass: "print",
    documentTitle: "Төлбөрийн мэдээлэл",
    onAfterPrint: () => notify({ text: "Өгөгдөл pdf файл боллоо" }),
  });
  return (
    <div className="w-full  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg p-[2%]">
      <div className="w-full">
        <div
          className="float-right cursor-pointer hover:scale-110 transition duration-200"
          onClick={() => generatePDF()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mb-[10px]"
            fill="none"
          >
            <path
              d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z"
              stroke="#2D3648"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 15V19C16 21 15 22 13 22H11C9 22 8 21 8 19V15H16Z"
              stroke="#2D3648"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 10V15C21 17 20 18 18 18H16V15H8V18H6C4 18 3 17 3 15V10C3 8 4 7 6 7H18C20 7 21 8 21 10Z"
              stroke="#2D3648"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 15H15.79H7"
              stroke="#2D3648"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 11H10"
              stroke="#2D3648"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div ref={componentPDF}>
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
    </div>
  );
};

export const PaymentPage = () => {
  const [OrderData, setOrderData] = useState([]);
  const { setLoading } = useContext(LoadedContext);
  const { selectedCompany } = useContext(CompanyContext);
  const { time } = useContext(TimeFilterContext);
  const notify = ({ text }) => {
    toast.error(text, {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };
  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await GetDataWithAuthorization(
          `/services/getbillinginfo?customerId=${selectedCompany}&startDate=${time}-01-01&endDate=${time}-12-31`
        );
        console.log("Data:", data.data.transactions);
        setOrderData(data.data.transactions);
      } catch (err) {
        // if (
        //   err.response?.status === 400 ||
        //   err.response?.status === 404 ||
        //   err.response?.status === 500 ||
        //   err.response?.status === 204
        // ) {
        // }
        notify({ text: err.message });
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await GetDataWithAuthorization(
          `/services/getbillinginfo?customerId=${selectedCompany}&startDate=${time}-01-01&endDate=${time}-12-31`
        );
        setOrderData(data.data.transactions);
      } catch (err) {
        // if (
        //   err.response?.status === 400 ||
        //   err.response?.status === 404 ||
        //   err.response?.status === 500 ||
        //   err.response?.status === 204
        // ) {
        // }
        notify({ text: err.message });
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [selectedCompany, time]);
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <div className="w-full h-full px-[3%]">
      <div className="flex items-center my-5 ">
        <TimeFilter limit={currentYear} />
        <div className="3xl:w-[350px] 3xl:h-[40px] md:w-[200px] w-full h-[30px]">
          <SearchBar />
        </div>
      </div>
      <PaymentTable OrderData={OrderData} />
      <div className="w-full flex justify-end my-[30px] text-sm">
        <div className="w-fit h-[34px]" onClick={() => navigate("/test")}>
          <Button name={"Буцах"} text={"3xl:text-base text-xs"} />
        </div>
      </div>
    </div>
  );
};

export const Test = () => {
  const currentYear = new Date().getFullYear();
  const { time } = useContext(TimeFilterContext);
  const { selectedCompany, handleSelectedCompany } = useContext(CompanyContext);
  return (
    <div className="w-screen h-screen bg-slate-300 ">
      <ChooseCompany
        selectedOption={selectedCompany}
        onSelectedChange={handleSelectedCompany}
      />
      <TimeFilter limit={currentYear} />
      <List date={`${time}-01-01`} date2={`${time}-12-31`} month={time} />
    </div>
  );
};

export const ServicePage = () => {
  const { time } = useContext(TimeFilterContext);
  const { selectedCompany } = useContext(CompanyContext);
  const [menu, setMenu] = useState({
    questions: false,
    service: true,
    // news: false,
  });

  const selectedOption = JSON.parse(localStorage.getItem("companies")).filter(
    (company) => company.customerId === selectedCompany
  );
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex mt-[2%] px-[4%]">
        <div className="w-[10%] lg:hidden block mr-[4%] min-h-[80vh]">
          <div className="flex flex-col justify-center">
            {/* Үйлчилгээ */}
            <div
              className={`pr-[4%] ${
                menu.service ? "border-r-2 border-[#2D3648]" : ""
              }`}
              onClick={() =>
                setMenu((prevMenu) => ({
                  ...prevMenu,
                  service: true,
                  questions: false,
                  // news: false,
                }))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.6425 20.0007H7.12578C2.13314 20.0007 0 17.8676 0 12.8749V7.3582C0 2.36556 2.13314 0.232422 7.12578 0.232422H8.96469C9.34167 0.232422 9.65428 0.545037 9.65428 0.922014C9.65428 1.29899 9.34167 1.61161 8.96469 1.61161H7.12578C2.88709 1.61161 1.37918 3.11951 1.37918 7.3582V12.8749C1.37918 17.1136 2.88709 18.6215 7.12578 18.6215H12.6425C16.8812 18.6215 18.3891 17.1136 18.3891 12.8749V11.036C18.3891 10.659 18.7017 10.3464 19.0787 10.3464C19.4557 10.3464 19.7683 10.659 19.7683 11.036V12.8749C19.7683 17.8676 17.6352 20.0007 12.6425 20.0007Z"
                  fill="#2D3648"
                />
                <path
                  d="M6.66601 15.3481C6.10515 15.3481 5.59025 15.1458 5.21328 14.778C4.76274 14.3275 4.56966 13.6746 4.6708 12.985L5.06616 10.2175C5.13972 9.6842 5.48911 8.99461 5.86609 8.61763L13.1114 1.37229C14.9411 -0.457429 16.7984 -0.457429 18.6281 1.37229C19.6303 2.37449 20.0808 3.39509 19.9889 4.41569C19.9061 5.2432 19.4648 6.05232 18.6281 6.87983L11.3828 14.1252C11.0058 14.5022 10.3162 14.8515 9.78292 14.9251L7.01541 15.3205C6.89588 15.3481 6.77635 15.3481 6.66601 15.3481ZM14.086 2.34691L6.84071 9.59226C6.66601 9.76695 6.46373 10.1715 6.42696 10.4106L6.03159 13.1781C5.99481 13.4448 6.04998 13.6654 6.1879 13.8034C6.32582 13.9413 6.54649 13.9964 6.81313 13.9597L9.58064 13.5643C9.8197 13.5275 10.2335 13.3252 10.399 13.1506L17.6443 5.9052C18.2419 5.30756 18.5545 4.77427 18.6005 4.27777C18.6557 3.68012 18.3431 3.0457 17.6443 2.33772C16.1731 0.866588 15.1617 1.28034 14.086 2.34691Z"
                  fill="#2D3648"
                />
                <path
                  d="M17.1044 8.12151C17.04 8.12151 16.9756 8.11232 16.9205 8.09393C14.5023 7.41353 12.5806 5.49187 11.9002 3.0737C11.7991 2.70592 12.0106 2.32894 12.3784 2.21861C12.7461 2.11747 13.1231 2.32894 13.2243 2.69672C13.7759 4.65516 15.3298 6.20904 17.2883 6.76072C17.656 6.86186 17.8675 7.24803 17.7664 7.61581C17.6836 7.92843 17.4078 8.12151 17.1044 8.12151Z"
                  fill="#2D3648"
                />
              </svg>
            </div>
            {/* Түгээмэл асуултуут */}
            <div
              className={`mt-4 ${
                menu.questions ? "border-r-2 border-[#2D3648]" : ""
              }`}
              onClick={() =>
                setMenu((prevMenu) => ({
                  ...prevMenu,
                  service: false,
                  questions: true,
                  // news: false,
                }))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.27907 19.1907C6.0186 19.1907 5.74882 19.1255 5.50696 18.9953C4.97673 18.7162 4.65116 18.1581 4.65116 17.5628V16.2419C1.84186 15.9535 0 13.8883 0 10.9302V5.34884C0 2.14884 2.14884 0 5.34884 0H14.6512C17.8512 0 20 2.14884 20 5.34884V10.9302C20 14.1302 17.8512 16.279 14.6512 16.279H11.1442L7.18137 18.921C6.9116 19.0977 6.59535 19.1907 6.27907 19.1907ZM5.34884 1.38604C2.94884 1.38604 1.39535 2.93953 1.39535 5.33953V10.921C1.39535 13.321 2.94884 14.8745 5.34884 14.8745C5.73023 14.8745 6.04651 15.1908 6.04651 15.5722V17.5535C6.04651 17.6745 6.12093 17.7303 6.16744 17.7582C6.21396 17.7861 6.30699 17.814 6.40931 17.7489L10.5488 14.9954C10.6605 14.921 10.8 14.8745 10.9395 14.8745H14.6605C17.0605 14.8745 18.614 13.321 18.614 10.921V5.33953C18.614 2.93953 17.0605 1.38604 14.6605 1.38604H5.34884Z"
                  fill="#2D3648"
                />
                <path
                  d="M9.99964 9.69276C9.61824 9.69276 9.30196 9.37648 9.30196 8.99509V8.79974C9.30196 7.72067 10.0927 7.19043 10.3903 6.98577C10.7345 6.75322 10.8461 6.59509 10.8461 6.35323C10.8461 5.88811 10.4648 5.50668 9.99964 5.50668C9.53452 5.50668 9.15312 5.88811 9.15312 6.35323C9.15312 6.73462 8.83684 7.0509 8.45545 7.0509C8.07409 7.0509 7.75781 6.73462 7.75781 6.35323C7.75781 5.11602 8.76243 4.11133 9.99964 4.11133C11.2368 4.11133 12.2415 5.11602 12.2415 6.35323C12.2415 7.41369 11.4601 7.94392 11.1717 8.13927C10.8089 8.38113 10.6973 8.53927 10.6973 8.79974V8.99509C10.6973 9.38578 10.381 9.69276 9.99964 9.69276Z"
                  fill="#2D3648"
                />
                <path
                  d="M9.99846 12.0106C9.60776 12.0106 9.30078 11.6943 9.30078 11.3129C9.30078 10.9315 9.61706 10.6152 9.99846 10.6152C10.3799 10.6152 10.6961 10.9315 10.6961 11.3129C10.6961 11.6943 10.3892 12.0106 9.99846 12.0106Z"
                  fill="#2D3648"
                />
              </svg>
            </div>

            {/* Мэдээлэл */}
            {/* <div
              className={`mt-4 ${
                menu.news ? "border-r-2 border-[#2D3648]" : ""
              }`}
              onClick={() => {
                setMenu((prevMenu) => ({
                  ...prevMenu,
                  service: false,
                  questions: false,
                  news: true,
                }));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
              >
                <path
                  d="M21 3.00759V15.0777C21 16.0377 20.22 16.9376 19.26 17.0576L18.93 17.0977C16.75 17.3877 13.39 18.4976 11.47 19.5576C11.21 19.7076 10.78 19.7076 10.51 19.5576L10.47 19.5377C8.54997 18.4877 5.20003 17.3877 3.03003 17.0977L2.73999 17.0576C1.77999 16.9376 1 16.0377 1 15.0777V2.99758C1 1.80758 1.96997 0.907591 3.15997 1.00759C5.25997 1.17759 8.43997 2.23762 10.22 3.34762L10.47 3.49758C10.76 3.67759 11.24 3.67759 11.53 3.49758L11.7 3.3876C12.33 2.9976 13.13 2.60759 14 2.25759V6.33761L16 5.00759L18 6.33761V1.11764C18.27 1.06764 18.53 1.0376 18.77 1.0176H18.83C20.02 0.917601 21 1.80759 21 3.00759Z"
                  stroke="#2D3648"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 3.82812V18.8281"
                  stroke="#2D3648"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 1.11719V6.33716L16 5.00714L14 6.33716V2.25714C15.31 1.73714 16.77 1.31719 18 1.11719Z"
                  stroke="#2D3648"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div> */}
          </div>
        </div>
        <div
          className={`lg:w-[25%] w-full lg:block ${
            menu.service ? "block" : "hidden"
          }`}
        >
          <div className="">
            <List date={`${time}-01-01`} date2={`${time}-12-31`} month={time} />
          </div>
          <div
            className={`${
              selectedOption &&
              selectedOption.length > 0 &&
              selectedOption[0].isAdmin
                ? "block"
                : "hidden"
            }`}
          >
            <Payment year={time} />
          </div>
        </div>
        <div
          // className={`lg:w-1/2 w-full h-full px-[2%] lg:block ${
          className={`lg:w-3/4 w-full h-full px-[2%] lg:block ${
            menu.questions ? "block" : "hidden"
          }`}
        >
          <Outlet />
        </div>
        {/* <div
          className={`lg:w-[25%] w-full h-full lg:block ${
            menu.news ? "block" : "hidden"
          }`}
        >
          <ProgramRelease />
          <div className="mt-4">
            <MostSearched />
          </div>
          <div className="my-4">
            <JustWatched />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export const NoData = ({ head, foot }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center 3xl:px-[15%] px-[10%] text-center 3xl:text-[16px] text-xs">
      <div>{head}</div>
      <img src={character} alt="character image" className=" w-[80px] my-2" />
      <div>{foot}</div>
    </div>
  );
};
