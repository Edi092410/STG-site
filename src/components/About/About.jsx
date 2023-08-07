import React from "react";

export const About = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mt-[90px]">
      <Shape>
        <div className="flex justify-center items-center h-full text-[16px] 3xl:text-[24px] font-bold text-white text-center gap-[80px] 3xl:gap-[110px]">
          <div className="w-[10%]">Онлайн харилцагчийн үйлчилгээ</div>
          <div className="w-[10%]">3000+ Харилцагч</div>
          <div className="w-[10%]">Итгэлт түнш найдвартай ажиллагаа</div>
        </div>
      </Shape>
    </div>
  );
};

export const Shape = ({ children }) => {
  return (
    <div className="w-full relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 2165 310"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2165 226.882V309.999H0V226.882V225.881H1.24187C101.689 145.562 487.135 0 1082.5 0C1677.92 0 2036.53 143.899 2163.46 225.881H2165V226.882Z"
          fill="#336178"
        />
      </svg>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};
