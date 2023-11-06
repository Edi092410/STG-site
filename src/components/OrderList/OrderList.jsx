import React, { useContext, useEffect, useState } from "react";
import { OrderDetail } from "../OrderDetail/OrderDetail";
import { Notification } from "../Notification/Notification";
import { InfoReq } from "../InfoReq/InfoReq";
import { Loading } from "../Loading/Loading";
import { OrderContext } from "../../context/OrderProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CompanyContext } from "../../context/CompanyProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "../Main/Button";
import {
  GetDataWithAuthorization,
  PostDataWithAuthorization,
} from "../../Axios/AxiosService2";
export const OrderList = ({ month }) => {
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

  // const [hasError, setHasError] = useState(false);
  const notify = ({ text, success }) => {
    {
      success
        ? toast.success(text, {
            position: "top-center", // Change the position of the toast
            autoClose: 1000, // Auto close the toast after 1 seconds
            hideProgressBar: true, // Hide the progress bar
            closeOnClick: true, // Close the toast when clicked
            draggable: true, // Allow dragging the toast
            className: "custom-toast", // Apply a custom CSS class to the toast
            bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
          })
        : toast.error(text, {
            position: "top-center", // Change the position of the toast
            autoClose: 1000, // Auto close the toast after 1 seconds
            hideProgressBar: true, // Hide the progress bar
            closeOnClick: true, // Close the toast when clicked
            draggable: true, // Allow dragging the toast
            className: "custom-toast", // Apply a custom CSS class to the toast
            bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
          });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const FetchData = async () => {
      if (selectedCompany !== "") {
        setLoading(true);
        try {
          const data = await GetDataWithAuthorization(
            `/services/getservicelist?customerId=${selectedCompany}&startDate=2023-01-01&endDate=2023-12-31`
          );
          setOrderData(data.data);
        } catch (err) {
          notify({ text: err.message, success: false });
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
          const data = await GetDataWithAuthorization(
            `/services/getservicelist?customerId=${selectedCompany}&startDate=2023-01-01&endDate=2023-12-31`
          );
          setOrderData(data.data);
        } catch (err) {
          // setHasError(true);
          notify({ text: err.message, success: false });
        } finally {
          setLoading(false);
        }
      }
    };
    FetchData();
  }, [selectedCompany, month, refresh]);

  // Захиалга цуцлах
  const deleteOrder = async () => {
    try {
      await PostDataWithAuthorization(
        `/services/deleteservice?number=${storedNumber}&type=${type}`
      );
      setRefresh((prev) => !prev);
      notify({ text: "Устгагдлаа.", success: true });
    } catch (err) {
      notify({ text: err.message, success: false });
    }
  };

  let type;
  return (
    <div className="mb-[5vh] w-full rounded-lg shadow-xl px-[5%] py-[5%]">
      <div className=" ">
        <div className="lg:overflow-visible overflow-auto w-full mt-4">
          {(OrderData && OrderData.length > 0) ||
          OrderData === null ||
          OrderData === undefined ? (
            <table className=" text-xs  w-full ">
              <thead className=" text-left">
                <tr>
                  <th className="p-2 w-[15%]">Огноо</th>
                  {/* <th className="p-2">Дугаар</th> */}
                  <th className="p-2 w-[40%]">Нэр</th>
                  <th className="p-2 w-[15%] text-right">Төлөв</th>
                  <th className="p-2 w-[20%] text-center">Хариуцсан</th>
                  {/* <th className="p-2">Засах</th> */}
                  <th className="p-2 w-[10%] text-center">Цуцлах</th>
                </tr>
              </thead>
              <tbody>
                {OrderData.map((info) => {
                  type = info.serviceType;
                  return (
                    <React.Fragment key={info.number}>
                      <tr className="">
                        <td className="p-2">
                          {info.registrationTime && (
                            <div>{info.registrationTime.substring(0, 10)}</div>
                          )}
                        </td>
                        {/* <td className="p-2">{info.number}</td> */}
                        <td className="p-2 text-left">{info.comment}</td>
                        <td className="p-2 float-right">
                          <State data={info.state} />
                        </td>
                        <td className="p-2 text-center">{info.servedUser}</td>
                        {info.state === 0 && (
                          <td
                            className="p-2"
                            // style={noDisable}
                          >
                            {/* Цуцлах */}
                            <div className="w-full h-full flex justify-center">
                              <div
                                className="flex items-center justify-center rounded-full w-[20px] h-[20px] bg-[#D9D9D9] text-white transition duration-200 hover:scale-110 cursor-pointer"
                                onClick={() => {
                                  setStoredNumber(info.number);
                                  setNotif(true);
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M3.33594 3.33203L8.66926 8.66536"
                                    stroke="#FEFEFE"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M3.33464 8.66536L8.66797 3.33203"
                                    stroke="#FEFEFE"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
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
          <div className="w-fit h-10" onClick={() => navigate("/test")}>
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
        <div className="">
          <Loading />
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
