import React from "react";
import { PurposeHead } from "./PurposeHead";
import { PurposeElement } from "./PurposeElement";
import wealth from "../../Assets/trade.png";
import time from "../../Assets/clock.png";
import professional from "../../Assets/ocean-protocol-(ocean).png";
export const Purpose = () => {
  return (
    <div className="">
      <PurposeHead />
      <div className="flex mt-[90px]">
        <div className="mr-auto">
          <PurposeElement
            head="Хөрөнгөө удирдах"
            main="Санхүүгийн төлөвлөлт, мөнгөн урсгал, хөрөнгийг үр ашигтай удирдах, хянах, санхүүгийн шинжилгээ хийхэд зориулагдсан"
            img={wealth}
          />
        </div>
        <div className="mr-auto">
          <PurposeElement
            head="Цаг хугацаанд нь хянах"
            main="Бизнесийн үйл ажиллагаанд
оролцож буй оролцогч бүрийг 
хамруулсан бүх ажил 
үйлчилгээг цаг алдалгүй 
Яг цагт нь мэдээллэх 
боломжтой"
            img={time}
          />
        </div>
        <div className="">
          <PurposeElement
            head="Мэргэжилийн 
үйлчилгээ"
            main="Санхүү нягтлан бодох бүртгэлийн 
            20 жилийн туршлагатай 
            мэргэжилтнүүд таны санхүүгийн
            өдөр тутмын үйл ажиллагаанд 
            туслахаар бэлтгэгдсэн
            найдвартай үйлчилгээ дэмжлэгийг 
            үзүүлж байна.
            "
            img={professional}
          />
        </div>
      </div>
    </div>
  );
};
