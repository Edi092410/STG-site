import React, { useContext, useEffect, useState } from "react";
import { CompanyNames } from "../CompanyNames/CompanyNames";
import { OrderDetail } from "../OrderDetail/OrderDetail";
import { Notification } from "../Notification/Notification";
import { InfoReq } from "../InfoReq/InfoReq";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { OrderContext } from "./OrderProvider";

export const OrderList = ({ date, date2, month }) => {

  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  // UseContext ашиглан component refresh хийх
  const [OrderData, setOrderData] = useState([]);
  const { refresh } = useContext(OrderContext);

  const [modal, setModal] = useState(false);
  const [notif, setNotif] = useState(false);
  const [storedNumber, setStoredNumber] = useState("");
  // Modal-г хаах
  const closeModal = () => {
    setModal(false);
  };

  // Засах болон цуцлах товчны style
  const disable = {
    color: "rgb(203, 213, 225)",
    cursor: "not-allowed",
  };
  const noDisable = {
    color: "rgb(59, 130, 246)",
    cursor: "pointer",
  };

  // Өгөгдлүүдийг авах. Энэ дээр хийгдэж байгаа үйлдэл нь эхлээд компани аа сонгоод id-г нь
  // api рүү явуулна
  useEffect(() => {
    const FetchData = async () => {
      if (selectedOption !== "") {
        try {
          setLoading(true);
          const data = await axios.get(
            `/api/services/getservicelist?customerId=${selectedOption}&startDate=${date}&endDate=${date2}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json",
              },
            }
          );
          setOrderData(data.data);
          setLoading(false);
          console.log("start date :", date);
          console.log("end date: ", date2);
          console.log("Selected option: ", selectedOption);
          console.log("Axios Data: ", data.data);
          console.log("Month: ", month);
        } catch (err) {
          console.log(err.response);
        }
      }
    };
    FetchData();

    console.log("Order data: ", OrderData);
  }, [selectedOption, month, refresh]);

  const handleSelectedChange = (selectedOption) => {
    if (selectedOption !== "") {
      setSelectedOption(selectedOption);
      console.log(selectedOption);
    }
  };
  // Захиалга цуцлах
  const deleteOrder = async () => {
    try {
      axios.post(
        `/api/services/deleteservice?number=${storedNumber}&type=${type}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
          },
        }
      );
      setOrderData(OrderData.filter((order) => order.number !== storedNumber));
      alert("Устгагдлаа");
    } catch (err) {
      console.log(err.response);
    }
  };

  let type;
  return (
    <div className="mb-[5vh]">
      <div className="border border-slate-500 rounded-lg">
        <div className="m-[5%]">
          <div className="w-[325px] h-[30px]">
            <CompanyNames
              selectedOption={selectedOption}
              onSelectedChange={handleSelectedChange}
            />
          </div>
          <div>
            {OrderData.length > 0 ? (
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
                    if (info.serviceType !== 0) {
                      type = 1;
                    } else type = 0;

                    return (
                      <React.Fragment key={info.number}>
                        <tr>
                          <td className="p-2">
                            {info.registrationTime && (
                              <div>
                                {info.registrationTime.substring(0, 10)}
                              </div>
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
              <div className="mt-12">
                <InfoReq
                  props="Эрхэм харилцагч танд энэ өдрийн мэнд хүргье. Танд одоогоор үүсгэсэн
                      үйлчилгээний хүсэлт байхгүй байна. Шинэ товч дарж захиалгаа үүсгээрэй"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {modal && (
        <OrderDetail
          closeModal={closeModal}
          number={storedNumber}
          selectedOption={selectedOption}
          type={type}
        />
      )}
      {notif && (
        <div>
          <Notification
            name="Та захиалгаа цуцлахыг зөвшөөрч байна уу?"
            button="Тийм"
            closeModal={() => setNotif(false)}
            StateFunction={deleteOrder}
          />
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
        <div className={"bg-slate-400 text-white rounded-[4px] w-fit p-1"}>
          Хүлээгдэж байна
        </div>
      );
      break;
    case 1:
      jsxElement = (
        <div className={"bg-blue-400 text-white rounded-[4px] w-fit p-1"}>
          Хийгдэж байна
        </div>
      );
      break;
    case 2:
      jsxElement = (
        <div className={"bg-green-400 text-white rounded-[4px] w-fit p-1"}>
          Хийгдсэн
        </div>
      );
      break;
    default:
      break;
  }

  return jsxElement;
};
