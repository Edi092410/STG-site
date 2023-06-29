import React, { useEffect, useState } from "react";
import axios from "axios";
import { CompanyNames } from "../CompanyNames/CompanyNames";

export const Test = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectOption = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("select: ", selectedOption);
  };
  const link = JSON.parse(localStorage.getItem("companies"));
  useEffect(() => {
    const fetchData = async () => {
      if (selectedOption !== "") {
        try {
          const OrderData = await axios.get(
            `/api/services/getservicelist?customerId=${selectedOption}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log("data: ", OrderData.data);
          setData(OrderData.data);
        } catch (err) {
          console.log("Error: ", err.response);
        }
      }
    };
    fetchData();
    console.log("after fetch: ", data);
  }, [selectedOption]);
  return (
    <div>
      <div className="border border-slate-500 rounded-lg">
        <div className="m-[5%]">
          <div className="w-[325px] h-[30px]">
            <CompanyNames
              selectedOption={selectedOption}
              onSelectedChange={handleSelectOption}
            />
          </div>
          <div>
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
                {data.map((info) => (
                  <React.Fragment key={info.number}>
                    <tr>
                      <td className="p-2">
                        <div>{info.registrationTime.substring(0, 10)}</div>
                        <div className="text-slate-400">
                          {info.registrationTime.substring(12)}
                        </div>
                      </td>
                      <td className="p-2">{info.number}</td>
                      <td className="p-2">{info.comment}</td>
                      <td className="p-2">
                        <div className={"text-white rounded-[4px] w-fit p-1"}>
                          {State(info.state)}
                        </div>
                      </td>
                      <td className="p-2">{info.servedUser}</td>
                      {info.status === "0" ? (
                        <td className="p-2">Засах</td>
                      ) : (
                        <td className="p-2">Засах</td>
                      )}
                      {info.status === "0" ? (
                        <td className="p-2">Цуцлах</td>
                      ) : (
                        <td className="p-2">Цуцлах</td>
                      )}
                    </tr>
                    <tr>
                      <td colSpan="5"></td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const State = (data) => {
  let status = "";
  switch (parseInt(data)) {
    case 0:
      status = "Хүлээгдэж байна";
      break;
    case 1:
      status = "Хийгдэж байна";
      break;
    case 2:
      status = "Хийгдсэн";
      break;
  }
  return status;
};
