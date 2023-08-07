import React, { useEffect, useState } from "react";

export const PaymentList = ({ OrderData }) => {
  const [number, setNumber] = useState("");
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const [filteredData, setFilteredData] = useState([]);
  // Ажил үйлчилгээний нэр
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  //Төлөх дүн
  const [pay, setPay] = useState(0);
  const handlePay = (e) => {
    setPay(e.target.value);
  };
  //Төлсөн дүн
  const [payed, setPayed] = useState(0);
  const handlePayed = (e) => {
    setPayed(e.target.value);
  };
  // Тэмдэглэл
  const [descripton, setDescription] = useState("");
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  // Төлбөрийн үлдэгдэл
  const [balance, setBalance] = useState(0);
  const handleBalance = (e) => {
    setBalance(e.target.value);
  };
  // Төлбөрийн илүү
  const [more, setMore] = useState(0);
  const handleMore = (e) => {
    setMore(e.target.value);
  };

  // Огноо
  const [date, setDate] = useState("");
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  useEffect(() => {
    const filterOrderData = () => {
      const filteredData = OrderData.filter((data) => {
        const searchNumber = number.toUpperCase();
        const dataNumber = data.number.toUpperCase();
        const dtAmount = new String(data.dtAmount);
        const ktAmount = new String(data.ktAmount);
        const bala = new String(
          data.dtAmount - data.ktAmount > 0 ? data.dtAmount - data.ktAmount : 0
        );
        const morePay = new String(
          data.dtAmount - data.ktAmount > 0 ? 0 : data.ktAmount - data.dtAmount
        );
        return (
          dataNumber.startsWith(searchNumber) &&
          data.transactionReference.startsWith(name) &&
          dtAmount.includes(pay) &&
          data.date.startsWith(date) &&
          ktAmount.includes(payed) &&
          data.journal.startsWith(descripton) &&
          bala.includes(balance) &&
          morePay.includes(more)
        );
      });
      setFilteredData(filteredData);
    };

    filterOrderData();
  }, [number, name, pay, payed, date, descripton, balance, more, OrderData]);
  //filter-дсэн мэдээллийн нийт төлөх дүн
  const totalPay = filteredData.reduce((total, props) => {
    if (props.dtAmount) {
      return total + parseFloat(props.dtAmount);
    }
    return total;
  }, 0);
  // filter-дсэн мэдээллийн нийт төлбрийн үлдэгдэл
  const totalBalance = filteredData.reduce((total, props) => {
    const balance =
      props.dtAmount - props.ktAmount > 0 ? props.dtAmount - props.ktAmount : 0;
    return total + parseFloat(balance);
  }, 0);

  return (
    <div>
      <div className="mt-6 ">
        <span className="border-b-[3px] border-black pb-2 font-bold ">
          Төлбөрийн мэдээлэл
        </span>
      </div>
      <div className="py-8 rounded-lg shadow-2xl">
        <div className="m-[2%]  overflow-auto">
          {/* <div className="ml-2 font-bold">Энэ сар</div> */}
          <table className="w-full ">
            <thead className=" text-left">
              <tr>
                <th className="p-2 pt-1 w-[10%]">
                  {/* <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div> */}
                  <input
                    type="text"
                    className="border border-slate-500 rounded-lg w-full h-[30px] mr-2 px-2"
                    onChange={handleDate}
                  ></input>
                </th>
                <th className="p-2 px-0 pt-1 w-[10%]">
                  <input
                    type="text"
                    className="border border-slate-500 rounded-lg h-[30px] mr-2 px-2"
                    onChange={handleNumber}
                  ></input>
                </th>
                <th className="p-2 pt-1 w-[10%]">
                  {/* <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div> */}
                  <input
                    type="text"
                    className="border border-slate-500 rounded-lg h-[30px] mr-2 px-2"
                    onChange={handleName}
                  ></input>
                </th>
                <th className="py-2 pt-1 w-[10%]">
                  {/* <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div> */}
                  <input
                    type="text"
                    className="border border-slate-500 rounded-lg h-[30px] w-full mr-2 px-2"
                    onChange={handlePay}
                  ></input>
                </th>
                <th className="p-2 pt-1 w-[10%]">
                  {/* <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div> */}
                  <input
                    type="text"
                    className="border border-slate-500 rounded-lg h-[30px] w-full mr-2 px-2"
                    onChange={handlePayed}
                  ></input>
                </th>
                <th className="p-2 pt-1 w-[10%]">
                  {/* <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div> */}
                  <input
                    type="text"
                    className="border border-slate-500 rounded-lg h-[30px] w-full mr-2 px-2"
                    onChange={handleBalance}
                  ></input>
                </th>
                <th className="p-2 pt-1 w-[10%]">
                  {/* <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div> */}
                  <input
                    type="text"
                    className="border border-slate-500 rounded-lg h-[30px] w-full mr-2 px-2"
                    onChange={handleMore}
                  ></input>
                </th>
                <th className="p-2 pt-1 w-[10%]">
                  {/* <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div> */}
                  <input
                    type="text"
                    className="border border-slate-500 rounded-lg h-[30px] w-full mr-2 px-2"
                    onChange={handleDescription}
                  ></input>
                </th>
              </tr>
              <tr>
                <th className="p-2 pt-0 pb-0 text-left">Огноо</th>
                <th className="p-2 pt-0 pb-0 text-left">Баримтын дугаар</th>
                <th className="p-2 pt-0 pb-0 text-left">
                  Ажил үйлчилгээний нэр
                </th>
                <th className="p-2 pt-0 pb-0 text-right">Төлөх дүн</th>
                <th className="p-2 pt-0 pb-0 text-right">Төлсөн</th>
                <th className="p-2 pt-0 pb-0 text-right">Төлбөрийн үлдэгдэл</th>
                <th className="p-2 pt-0 pb-0 text-right">Төлбөрийн илүү</th>
                <th className="p-2 pt-0 pb-0 text-center">Тэмдэглэл</th>
              </tr>

              <tr>
                <td colSpan="8">
                  <hr />
                </td>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((props) => {
                  const balance =
                    props.dtAmount - props.ktAmount > 0
                      ? props.dtAmount - props.ktAmount
                      : 0;

                  return (
                    <React.Fragment key={props.number}>
                      <tr>
                        <td className="p-2">
                          <div>{props.date.substring(0, 10)}</div>
                          <div className="text-slate-400">
                            {props.date.substring(12)}
                          </div>
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
                      <tr>
                        <td colSpan="8">
                          <hr />
                        </td>
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
            <tfoot>
              <tr>
                <td className="p-2 text-right" colSpan="3">
                  Нийт
                </td>
                <td className="p-2 text-red-500 font-bold text-right">
                  {totalPay.toLocaleString("en-US")}₮
                </td>
                <td className="p-2 text-right">Нийт</td>
                <td className="p-2 text-red-500 font-bold text-right">
                  {totalBalance.toLocaleString("en-US")}₮
                </td>
                <td className="p-2"></td>
                <td className="p-2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
