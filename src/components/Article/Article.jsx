import React from "react";
import img from "../../Assets/ComingSoon/scarf boy nothin1.png";
export const Article = () => {
  return (
    <div className="min-h-[84vh] w-full flex flex-col justify-center items-center  font-bold text-xl">
      <img src={img} className="w-[20%]" />
      <div className="">Тун удахгүй</div>
    </div>
  );
};
