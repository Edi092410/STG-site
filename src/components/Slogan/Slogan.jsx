import React, { useState, useEffect } from "react";
import { GetData } from "../../Axios/Axios";

export const Slogan = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetData("/settings");
        console.log("Data:", data);
        setApi(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mr-[15%] ml-[15%]">
      {api ? (
        <div key={api.id} className="m-4">
          <h1 className=" text-center mt-8 mb-8 text-4xl ">{api.slogan}</h1>
          <h3 className="text-center mt-8 font-normal text-2xl">
            {api.subslogan}
          </h3>
        </div>
      ) : null}
      {/* <h1 className=" text-center mt-8 mb-8 text-4xl ">
        "Яг цагтаа" стрессгүй амьдралын итгэлт үйлчилгээ
      </h1>
      <h3 className=" text-center mt-8 font-normal text-2xl">
        Хэрэглэгчийн туршлагын суурилсан энгийн ухаалаг систем таныг ажлын арга
        барилыг дараагийн түвшинд хүргэнэ
      </h3> */}
    </div>
  );
};
