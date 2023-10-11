import React, { useContext, useEffect, useState } from "react";
import { OrderDetail } from "../OrderDetail/OrderDetail";
import { Notification } from "../Notification/Notification";
import { InfoReq } from "../InfoReq/InfoReq";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { OrderContext } from "../../context/OrderProvider";
import { ServerErrorPage } from "../../pages/ErrorPages/ServerErrorPage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CompanyContext } from "../../context/CompanyProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "../Main/Button";
export const OrderList = ({ date, date2, month }) => {
  const [selectedOption, setSelectedOption] = useState({});
  // UseContext ашиглан component refresh хийх
  const [OrderData, setOrderData] = useState([]);
  const { refresh, setRefresh } = useContext(OrderContext);
  // Loading хийх
  const [loading, setLoading] = useState(false);

  const { selectedCompany } = useContext(CompanyContext);

  const [modal, setModal] = useState(false);
  const [notif, setNotif] = useState(false);
  const [storedNumber, setStoredNumber] = useState("");
  // Modal-г хаах
  const closeModal = () => {
    setModal(false);
  };

  // Засах болон цуцлах товчны style
  const disable = {
    color: "#BDBDBD",
    cursor: "not-allowed",
  };
  const noDisable = {
    color: "#0074E0",
    cursor: "pointer",
  };

  // Өгөгдлүүдийг авах. Энэ дээр хийгдэж байгаа үйлдэл нь эхлээд компани аа сонгоод id-г нь
  // api рүү явуулна

  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const FetchData = async () => {
      if (selectedCompany !== "") {
        setLoading(true);
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
          setOrderData(data.data);
          console.log("list:", data.data);
        } catch (err) {
          setHasError(true);
        } finally {
          setLoading(false);
        }
      }
    };
    FetchData();
  }, []);

  useEffect(() => {
    const FetchData = async () => {
      if (selectedCompany !== "") {
        setLoading(true);
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
          setOrderData(data.data);
        } catch (err) {
          setHasError(true);
        } finally {
          setLoading(false);
        }
      }
    };
    FetchData();
  }, [selectedCompany, month, refresh]);

  const notify = ({ text }) => {
    toast.success(text, {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };
  const handleSelectedChange = (selectedCompany) => {
    if (selectedCompany !== "") {
      setSelectedOption(selectedCompany);
    }
  };
  // Захиалга цуцлах
  const deleteOrder = async () => {
    try {
      axios.post(
        // `https://service2.stg.mn/api/services/deleteservice?number=${storedNumber}&type=${type}`,
        `/api/services/deleteservice?number=${storedNumber}&type=${type}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
          },
        }
      );
      // setOrderData(OrderData.filter((order) => order.number !== storedNumber));
      setRefresh((prev) => !prev);
      // alert("Устгагдлаа");
      notify({ text: "Устгагдлаа." });
    } catch (err) {}
  };

  let type;
  return (
    <div className="mb-[5vh] w-full rounded-lg shadow-xl px-[5%] py-[5%]">
      <div className=" ">
        {/* <div className="m-[5%]"> */}
        {/* <div className="">
          <CompanyNames
            selectedOption={selectedOption}
            onSelectedChange={handleSelectedChange}
          />
        </div> */}
        <div className="lg:overflow-visible overflow-auto w-full mt-4">
          {(OrderData && OrderData.length > 0) ||
          OrderData === null ||
          OrderData === undefined ? (
            <table className=" text-xs  w-full ">
              <thead className=" text-left">
                <tr>
                  <th className="p-2">Огноо</th>
                  <th className="p-2">Дугаар</th>
                  <th className="p-2">Захиалгын нэр</th>
                  <th className="p-2">Захиалгын төлөв</th>
                  <th className="p-2">Хариуцсан</th>
                  <th className="p-2">Засах</th>
                  <th className="p-2">Цуцлах</th>
                </tr>
              </thead>
              <tbody>
                {OrderData.map((info) => {
                  type = info.serviceType;
                  return (
                    <React.Fragment key={info.number}>
                      <tr>
                        <td className="p-2">
                          {info.registrationTime && (
                            <div>{info.registrationTime.substring(0, 10)}</div>
                          )}
                          {info.registrationTime && (
                            <div className="text-slate-400">
                              {info.registrationTime.substring(11)}
                            </div>
                          )}
                        </td>
                        <td className="p-2">{info.number}</td>
                        <td className="p-2">{info.comment}</td>
                        <td className="p-2">
                          <State data={info.state} />
                        </td>
                        <td className="p-2">{info.servedUser}</td>
                        {info.state === 0 ? (
                          <td
                            className="p-2"
                            style={noDisable}
                            onClick={() => {
                              setStoredNumber(info.number);
                              setModal(true);
                            }}
                          >
                            Засах
                          </td>
                        ) : (
                          <td className="p-2" style={disable}>
                            Засах
                          </td>
                        )}
                        {info.state === 0 ? (
                          <td
                            className="p-2"
                            style={noDisable}
                            onClick={() => {
                              setStoredNumber(info.number);
                              setNotif(true);
                            }}
                          >
                            Цуцлах
                          </td>
                        ) : (
                          <td className="p-2" style={disable}>
                            Цуцлах
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td colSpan="5"></td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className=" ">
              <InfoReq
                main="Эрхэм харилцагч танд энэ өдрийн мэнд хүргье. Танд одоогоор үүсгэсэн
                      үйлчилгээний хүсэлт байхгүй байна."
                foot="Шинэ товч дарж захиалгаа үүсгээрэй"
              />
            </div>
          )}
        </div>
        {/* </div> */}
        <div className="w-full flex justify-end my-4">
          {/* <button
            className=" w-fit rounded-full text-white bg-[#2D3648] flex p-[10px] transition duration-300 hover:scale-105 3xl:text-base text-xs"
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
          </button> */}
          <div className="w-fit" onClick={() => navigate("/test")}>
            <Button name={"Буцах"} text={"3xl:text-base text-xs"} />
          </div>
        </div>
      </div>
      {modal && (
        <OrderDetail
          closeModal={closeModal}
          number={storedNumber}
          selectedOption={selectedCompany}
          type={type}
        />
      )}
      {notif && (
        <div>
          <Notification
            name="Та захиалгаа цуцлахыг зөвшөөрч байна уу?"
            button="Тийм"
            closeModal={() => setNotif(false)}
            stateFunction={deleteOrder}
          />
        </div>
      )}
      {loading && (
        <div className="fixed top-0 left-0 h-screen w-screen">
          <Loading />
        </div>
      )}
      {hasError && (
        <div className="fixed top-0 left-0">
          <ServerErrorPage />
        </div>
      )}
    </div>
  );
};

// Back-end-ээс ирж байгаа захиалгын төлвийн id-г үг болгох function
export const State = ({ data }) => {
  let jsxElement = null;

  switch (parseInt(data)) {
    case 0:
      jsxElement = (
        <div className={"bg-[#BDBDBD] text-white rounded-[4px] w-fit p-1"}>
          Хүлээгдэж байна
        </div>
      );
      break;
    case 1:
      jsxElement = (
        <div className={"bg-[#0496D4] text-white rounded-[4px] w-fit p-1"}>
          Хийгдэж байна
        </div>
      );
      break;
    case 2:
      jsxElement = (
        <div
          className={
            "bg-[rgba(75, 141, 90, 0.75)] text-white rounded-[4px] w-fit p-1"
          }
        >
          Хийгдсэн
        </div>
      );
      break;
    default:
      break;
  }

  return jsxElement;
};
