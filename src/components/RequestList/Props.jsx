import React from "react";
export const Props = (props) => {
  const { data } = props;
  return (
    <table className=" text-xs mr-[5%] ml-[5%] w-[90%] mb-12">
      <thead>
        <tr>
          <th className="pr-3 pl-3 pb-3">Байгууллага</th>
          <th className="pr-3 pl-3 pb-3">Ажлын байр</th>
          <th className="pr-3 pl-3 pb-3">Ажилтан</th>
          <th className="pr-3 pl-3 pb-3">Холбоо барих</th>
          <th className="pr-3 pl-3 pb-3">Хүсэлтийн төлөв</th>
        </tr>
      </thead>
      <tbody>
        {data.map((info) => (
          <>
            <tr>
              <td className="pr-3 pl-3 pb-3">{info.company}</td>
              <td className="pr-3 pl-3 pb-3">{info.position}</td>
              <td className="pr-3 pl-3 pb-3">{info.name}</td>
              <td className="pr-3 pl-3 pb-3">{info.phone}</td>
              <td className="pr-3 pl-3 pb-3">
                <div className="bg-slate-300 text-white rounded-[4px]">
                  {info.type}
                </div>
                <hr />
              </td>
            </tr>
            <tr>
              <td colSpan="5">
                <hr />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
