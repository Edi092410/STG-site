import React from "react";

export const PaymentList = ({ OrderData, totalPay, totalBalance }) => {
  return (
    <div>
      <div className="mt-6 ">
        <span className="border-b-[3px] border-black pb-2 font-bold ">
          Төлбөрийн мэдээлэл
        </span>
      </div>
      <div className="mt-8 border rounded-lg border-slate-500 shadow-lg">
        <div className="m-[2%]">
          {/* <div className="ml-2 font-bold">Энэ сар</div> */}
          <table className="w-full ">
            <thead className=" text-left">
              <tr>
                <th className="p-2 pt-1">
                  <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div>
                </th>
                <th className="p-2 pt-1">
                  <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div>
                </th>
                <th className="p-2 pt-1">
                  <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div>
                </th>
                <th className="p-2 pt-1">
                  <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div>
                </th>
                <th className="p-2 pt-1">
                  <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div>
                </th>
                <th className="p-2 pt-1">
                  <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div>
                </th>
                <th className="p-2 pt-1">
                  <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div>
                </th>
                <th className="p-2 pt-1">
                  <div className="border border-slate-500 rounded-lg h-[30px] mr-2"></div>
                </th>
              </tr>
              <tr>
                <th className="p-2 pt-0 pb-0">Огноо</th>
                <th className="p-2 pt-0 pb-0">Баримтын дугаар</th>
                <th className="p-2 pt-0 pb-0">Ажил үйлчилгээний нэр</th>
                <th className="p-2 pt-0 pb-0">Төлөх дүн</th>
                <th className="p-2 pt-0 pb-0">Төлсөн</th>
                <th className="p-2 pt-0 pb-0">Төлбөрийн үлдэгдэл</th>
                <th className="p-2 pt-0 pb-0">Төлбөрийн илүү</th>
                <th className="p-2 pt-0 pb-0">Тэмдэглэл</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(OrderData) &&
                OrderData.map((props) => {
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
                        <td className="p-2">{props.dtAmount}</td>
                        <td className="p-2">{props.ktAmount}</td>
                        <td className="p-2">{balance}</td>
                        <td className="p-2">
                          {props.dtAmount - props.ktAmount > 0
                            ? 0
                            : props.ktAmount - props.dtAmount}
                        </td>
                        <td className="p-2">{props.journal}</td>
                      </tr>
                      <tr>
                        <td colSpan="5"></td>
                      </tr>
                    </React.Fragment>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-2 text-right" colSpan="3">
                  Нийт
                </td>
                <td className="p-2 text-red-500 font-bold">{totalPay}</td>
                <td className="p-2 text-right">Нийт</td>
                <td className="p-2 text-red-500 font-bold">{totalBalance}</td>
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
