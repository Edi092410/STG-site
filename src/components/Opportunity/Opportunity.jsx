import React, { useState } from "react";
import { OpportunityElement } from "./OpportunityElement";
import time from "../../Assets/Opportunities/timer.png";
import davtan from "../../Assets/Opportunities/davtan.png";
import interprize from "../../Assets/Opportunities/interprize.png";
import olonUls from "../../Assets/Opportunities/olonUls.png";
import baraa from "../../Assets/Opportunities/baraa.png";
import barimt from "../../Assets/Opportunities/barimt.png";
import valut from "../../Assets/Opportunities/valut.png";
import sanhuu from "../../Assets/Opportunities/Sanhuu.png";
import online from "../../Assets/Opportunities/online.png";
import tatvar from "../../Assets/Opportunities/tatvar.png";
import nuutslal from "../../Assets/Opportunities/Nuutslal.png";
import mergejil from "../../Assets/Opportunities/mergejil.png";
export const Opportunity = () => {
  const data = [
    {
      head: "Бизнесээ бодит горимд удирдах",
      main: "Санхүүгийн үйл ажиллагаанд оролцож байгаа оролцогч бүрт тохирох мэдэгдэл, сануулгыг илгээх боломжтой.",
      img: time,
    },
    {
      head: "Давтан хийгддэг ажлыг автоматчлах",
      main: "Санхүүгийн бүртгэлийн үйл ажиллагаанд байнга давтагдан хийгддэг ажлыг автоматжуулж, ажлын бүтээмжийг дээшлүүлэх, ажлын цаг үр дүнтэй болгох, алдаа гарах механик ажлыг хөнгөвчилсөн.",
      img: davtan,
    },
    {
      head: "Интерпрайз архитектур шийдэл",
      main: "Бүтцийн олон нэгжтэй байгууллагын харьяа хэлтэс газрын санхүүгийн тайлан мэдээг системээс авч дүн шинжилгээ хийх, үйл ажиллагааг бодит цагийн горимд удирдан зохион байгуулах боломжтой.",
      img: interprize,
    },
    {
      head: "Олон улсын стандартын дагуу бүртгэл хөтлөх",
      main: "Нэхэмжлэхийн загвар үүсгэж төлбөр төлөх сануулга илгээх, боломжтой",
      img: olonUls,
    },
    {
      head: "Бараа материалын хяналтыг сайжруулах",
      main: "Бараа материалын орлогыг цаг тухайд нь хүлээн авч тоо хэмжээгээ хянаж өдөр барааны үлдэгдлийг тооллого хэсгээр хийх боломжтой.",
      img: baraa,
    },
    {
      head: "Баримтын давхардал үүсэхгүй",
      main: "Анхан шатны баримт нь санхүүгийн шат шатны баримт болж нэг баримтаар олон үйл ажиллагааг зэрэг бүртгэх боломжтой",
      img: barimt,
    },
    {
      head: "Валютын олон төрлийг дэмжинэ",
      main: "Тайлангийн тохируулга, нэхэмжлэх илгээх, гүйлгээний бичилт хийх зэрэгт олон вальютын төрлийг дэмжинэ",
      img: valut,
    },
    {
      head: "Санхүүгийн нэгдсэн тайлан",
      main: "Төсвийн болон жижиг дунд бизнес эрхлэгчийн санхүүгийн тайлангийн аль ч загвараар тайланг хүссэнээрээ гаргах боломж бүрдсэн.",
      img: sanhuu,
    },
    {
      head: "Онлайн болон оффлайн хувилбар",
      main: "Цаг хугацаа орон зайнаас үл хамааран хүссэн төхөөрөмжөөс ашиглах нэвтрэх боломжтой. Хэрэглэгчийн эрхээс хамаарсан өгөгдөлд хандах эрхийг хязгаарлах боломжтой",
      img: online,
    },
    {
      head: "Татварын тооцоолол",
      main: "Бүх төрлийн татварын төрлүүд багтсан. Хүссэнээрээ тохируулж тооцооллыг хийх, алдаа гаргах боломжийг багасгасан.",
      img: tatvar,
    },
    {
      head: "Нууцлал аюулгүй байдлыг хангасан",
      main: "Мэдээллийн алдагдлаас сэргийлэх backup, аюулгүй байдлыг хангасан сервер мэргэжлийн инженер технийкийн ажилтнуудын 24/7 сервис багтсан.",
      img: nuutslal,
    },
    {
      head: "Мэргэжлийн үйлчилгээ",
      main: "Санхүү нягтлан бодох бүртгэлийн 20 жилийн туршлагатай мэргэжилтнүүд таны санхүүгийн өдөр тутмын үйл ажиллагаанд туслахаар бэлтгэгдсэн найдвартай үйлчилгээ дэмжлэгийг үзүүлж байна.",
      img: mergejil,
    },
  ];
  const [showMore, setShowMore] = useState(true);
  const first = data.slice(1, 9);
  const second = data.slice(8);
  return (
    <div className="bg-[rgba(246,237,206,0.30)] py-[90px]" on>
      <div className="grid grid-cols-4 gap-[90px] gap-y-[70px] mb-[70px] mx-[20vw]">
        {first.map((data) => (
          <OpportunityElement
            key={data.head}
            img={data.img}
            head={data.head}
            main={data.main}
          />
        ))}
      </div>
      {showMore === true ? (
        <div
          className="w-[100vw] flex justify-center cursor-pointer"
          onClick={() => {
            setShowMore(false);
          }}
        >
          Дэлгэрэнгүй
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-[90px] m-[20vw] my-0 animate-upToDown">
          {second.map((data) => (
            <OpportunityElement
              key={data.head}
              img={data.img}
              head={data.head}
              main={data.main}
            />
          ))}
        </div>
      )}
    </div>
  );
};
