import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

export const TimeFilter = ({ time, text, limit, onTimeChange }) => {
  const handleIncrement = () => {
    if (limit > time) {
      onTimeChange(time + 1);
    } else onTimeChange(1);
    console.log(time);
  };

  const handleDecrement = () => {
    if (time > 1) {
      onTimeChange(time - 1);
    } else onTimeChange(limit);
    console.log(time);
  };
  return (
    <div className="flex text-xs ">
      <SlArrowLeft
        className="mr-2 text-lg cursor-pointer"
        onClick={handleDecrement}
      />
      <div id="num">
        {time}
        {text}
      </div>
      <SlArrowRight
        className="ml-2 text-lg cursor-pointer"
        onClick={handleIncrement}
      />
    </div>
  );
};
