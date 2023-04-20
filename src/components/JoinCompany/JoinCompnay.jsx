import React from "react";
import { FaPlus } from "react-icons/fa";
import image from "./JoinCompany.jpg";
export const JoinCompnay = () => {
  return (
    <div className="flex justify-center items-center w-full border-[1px] rounded-lg shadow-lg border-slate-300 mt-16">
      <div className="w-[35%] mt-8">
        <div className="flex">
          <img
            src={image}
            alt="description"
            className="w-[50px] h-[50px] mr-2"
          ></img>
          <div>
            <h1 className=" text-xl font-bold">Байгууллагадаа элсэх</h1>
            <div className=" text-xs">
              Та байгууллагын хэрэгчлэгч болсноор үйлчилгээ санал хүсэлтээ
              түргэн шуурхай авах боломжтой
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-8 mt-2">
          <button className="flex justify-center items-center text-white bg-blue-600 w-32 h-[40px] rounded-lg text-xs">
            <FaPlus className=" font-thin" />
            Хүсэлт илгээх
          </button>
        </div>
      </div>
    </div>
  );
};
