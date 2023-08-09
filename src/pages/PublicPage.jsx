import React from "react";
import { Slogan } from "../components/Slogan/Slogan";
// import { SearchBar } from "../components/SearchBar.jsx/SearchBar";
// import { SectionName } from "../components/SectionName/SectionName";
// import { RightSection } from "../components/RightSection/RightSection";
// import { LeftSection } from "../components/LeftSection/LeftSection";

import { Purpose } from "../components/Purpose/Purpose";
import { Opportunity } from "../components/Opportunity/Opportunity";
import { Acalous } from "../components/Acalous/Acalous";
import { Partners } from "../components/Partners/Partners";
import { About } from "../components/About/About";
import { MainBox } from "../components/MainBox/MainBox";
import { CallCenter } from "../components/CallCenter/CallCenter";
export const PublicPage = () => {
  return (
    <div>
      <div className="mt-[90px]">
        <Slogan />
      </div>

      <div className="mx-[20%] mt-[90px]">
        <Purpose />
        <div className=" text-[#7B7B7B] h-[150px] font-normal flex items-center justify-center text-[14px] 3xl:text-base mt-[50px]">
          Шийдэл
        </div>
        <div className=" text-[#1D3049] text-[25px] 3xl:text-[36px] font-semibold h-[150px] text-center px-[10%]">
          Таны санхүүгийн үйл ажиллагаанд дэмжлэг үзүүлэх гол боломжууд
        </div>
        <div className="mx-[-20vw]">
          <Opportunity />
          <div className="bg-[#1D3049] text-white text-[25px] 3xl:text-[36px] font-semibold h-[250px] 3xl:first-letter:h-[350px] flex items-center justify-center px-[25%] text-center">
            20+ жилийн туршлагатай хамт олон таны санхүүгийн менежментийн итгэлт
            түнш
          </div>
        </div>
        <div className="text-[#1D3049] text-[28px] 3xl:text-[40px] font-semibold my-[90px] text-center px-[5vw]">
          Хамтын үйл ажиллагаагаа бататгасан 3000+ харилцагчид
        </div>
        <Acalous />
        <div className=" text-[#7B7B7B] h-[150px] font-normal flex items-center justify-center text-[14px] 3xl:text-base">
          Хамтын ажиллагаатай байгууллага
        </div>
        <div className="mx-[-10vw]">
          <Partners />
        </div>
        <div className=" text-[#7B7B7B] h-[150px] font-normal flex items-center justify-center text-[14px] 3xl:text-base">
          Харилцагчийн үйлчилгээ
        </div>
        <CallCenter />
        <div className="text-[#1D3049] text-[28px] 3xl:text-[40px] font-semibold mt-[90px] mb-[40px] 3xl:mb-[55px] text-center px-[5vw]">
          Хамтын үйл ажиллагаагаа бататгасан 3000+ харилцагчид
        </div>
        <div className="w-full flex justify-center">
          <button className=" p-3 bg-[#015488] text-white rounded-md">
            Онлайн хүсэлт илгээх
          </button>
        </div>

        <div className="mx-[-20vw] h-[50vh] mb-[90px]">
          {/* <About /> */}
          <MainBox location={"bottom"}>
            <div className="flex justify-center items-end h-full text-[16px] 3xl:text-[24px] font-bold text-[#032D60] text-center gap-[80px] 3xl:gap-[110px] pb-[50px]">
              <div className="w-[10%]">Онлайн харилцагчийн үйлчилгээ</div>
              <div className="w-[10%]">3000+ Харилцагч</div>
              <div className="w-[10%]">Итгэлт түнш найдвартай ажиллагаа</div>
            </div>
          </MainBox>
        </div>
      </div>
    </div>
  );
};
