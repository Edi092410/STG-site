import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

export const TimeFilter = ({ time, text, limit, onTimeChange }) => {
  const handleIncrement = () => {
    if (limit > time) {
      onTimeChange(time + 1);
    } else onTimeChange(1);
  };

  const handleDecrement = () => {
    if (time > 1) {
      onTimeChange(time - 1);
    } else onTimeChange(limit);
  };
  return (
    <div className="flex text-xs items-center">
      <SlArrowLeft
        className="mr-2 text-md cursor-pointer transition-transform transform-gpu hover:scale-125 "
        onClick={handleDecrement}
      />
      <div className="rounded-2xl shadow-md shadow-[rgba(0, 0, 0, 0.15)] px-[15px] py-[10px] bg-[#F6F6F6]">
        {time}
        {text}
      </div>
      <SlArrowRight
        className="ml-2 text-md cursor-pointer transition-transform transform-gpu hover:scale-125"
        onClick={handleIncrement}
      />
    </div>
  );
};
