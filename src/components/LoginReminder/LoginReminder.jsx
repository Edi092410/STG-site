import React, { useState } from "react";
import img from "../../Assets/characterFace.png";

export const LoginReminder = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-300 relative">
      <div className="absolute bottom-20 right-20">
        <div className="absolute right-[70px] 3xl:right-[130px] bottom-10">
          <div
            className={`w-[360px] h-[270px] ${
              selected
                ? "block transition-opacity duration-300 opacity-100"
                : "hidden transition-opacity duration-300 opacity-0"
            }`}
          >
            <div className="h-[50px] w-full bg-[#2D3648] flex items-center justify-end text-white pr-[20px] transition-opacity duration-300">
              <div
                className="cursor-pointer"
                onClick={() => setSelected(false)}
              >
                x
              </div>
            </div>
            <div className="h-full w-full p-[10%] text-[#7B7B7B] text-[20px] bg-white">
              Хэрвээ танд харилцагчийн эрх байхгүй эсвэл баталгаажуулаагүй бол
              example.com хаягт харилцагчаар элсэх хүсэлтээ илгээгээрэй.
            </div>
          </div>
        </div>
        <div
          className={`h-[60px] 3xl:h-[110px] w-fit bg-white rounded-full cursor-pointer text-[#032D60] font-semibold text-base 3xl:text-[20px] transition duration-300 transform hover:scale-110`}
          onClick={() => setSelected(true)}
        >
          <div className="flex items-center justify-center w-full h-full p-[5%] ">
            <img src={img} alt="character face image" className="h-full" />
            <div className={` ${selected ? "hidden" : "ml-2"}`}>
              Над дээр дараарай
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
