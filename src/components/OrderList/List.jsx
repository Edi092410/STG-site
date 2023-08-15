import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { OrderContext } from "../../context/OrderProvider";
import { TimeFilter } from "../TimeFilter/TimeFilter";
import { CompanyContext } from "../../context/CompanyProvider";
import { ChooseCompany } from "../CompanyNames/ChooseCompany";

export const List = ({ date, date2, month }) => {
  // const [selectedOption, setSelectedOption] = useState({});

  const { selectedCompany } = useContext(CompanyContext);
  // UseContext ашиглан component refresh хийх
  const [OrderData, setOrderData] = useState([]);
  // const serviceData = OrderData.filter((info) => !info.number.startsWith("Y"));
  // const feedbackData = OrderData.filter((info) => info.number.startsWith("Y"));
  let serviceData = [];
  let feedbackData = [];
  const { refresh, setRefresh } = useContext(OrderContext);
  // Loading хийх
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const FetchData = async () => {
      console.log("start");
      console.log("Company", selectedCompany);
      setLoading(true);
      try {
        console.log("try");
        const data = await axios.get(
          // `https://service2.stg.mn/api/services/getservicelist?customerId=${selectedCompany}&startDate=${date}&endDate=${date2}`,
          `/api/services/getservicelist?customerId=${selectedCompany}&startDate=${date}&endDate=${date2}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-type": "application/json",
            },
          }
        );
        setOrderData(data.data);
        // serviceData = data.data.filter((info) => info.number.startsWith("Y"));
        feedbackData = data.data.filter((info) => !info.number.startsWith("Y"));
        console.log(
          "service",
          data.data.filter((info) => !info.number.startsWith("Ү"))
        );
        console.log(
          "feedback",
          data.data.filter((info) => info.number.startsWith("Ү"))
        );
        console.log("try");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [selectedCompany, month, refresh]);

  let type;

  const State = ({ data }) => {
    let jsxElement = null;

    switch (parseInt(data)) {
      case 0:
        jsxElement = (
          <div className={"bg-[#DD2338] w-[12px] h-[12px] rounded-full"}></div>
        );
        break;
      case 1:
        jsxElement = (
          <div className={"bg-[#FAA61A] w-[12px] h-[12px] rounded-full"}></div>
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

  return (
    // <div>{JSON.stringify(OrderData)}</div>
    <div className="w-full h-full overflow-y-auto p-[25px] text-[#7B7B7B] bg-white rounded-lg shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)]">
      <table className=" text-xs  w-full ">
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
                    <td className="">{info.comment.substring(0, 20)}...</td>
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

      <table className=" text-xs  w-full ">
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
                    <td className="">
                      {info.registrationTime && (
                        <div>
                          {info.registrationTime.substring(0, 10)}-
                          {info.registrationTime.substring(11, 16)}
                        </div>
                      )}
                    </td>
                    <td className="">{info.comment.substring(0, 20)}...</td>
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
    </div>
  );
};

export const Test = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const handleYearChange = (year) => {
    setYear(year);
  };
  const { selectedCompany, handleSelectedCompany } = useContext(CompanyContext);
  return (
    <div className="w-screen h-screen bg-slate-300 ">
      <ChooseCompany
        selectedOption={selectedCompany}
        onSelectedChange={handleSelectedCompany}
      />
      <TimeFilter
        time={year}
        limit={currentYear}
        onTimeChange={handleYearChange}
      />
      <List date={`${year}-01-01`} date2={`${year}-12-31`} month={year} />
    </div>
  );
};
