import React, { useContext } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { TimeFilterContext } from "../../context/TimeFilterProvider";

export const TimeFilter = ({ text, limit }) => {
  // { time, text, limit, onTimeChange }
  const { time, handleTime } = useContext(TimeFilterContext);

  // const handleIncrement = () => {
  //   if (limit > time) {
  //     onTimeChange(time + 1);
  //   } else onTimeChange(1);
  // };

  // const handleDecrement = () => {
  //   if (time > 1) {
  //     onTimeChange(time - 1);
  //   } else onTimeChange(limit);
  // };

  const handleIncrement = () => {
    if (limit > time) {
      handleTime(time + 1);
    } else handleTime(1);
  };

  const handleDecrement = () => {
    if (time > 1) {
      handleTime(time - 1);
    } else handleTime(limit);
  };
  return (
    <div className="flex text-xs items-center">
      {/* <SlArrowLeft
        className="mr-2 text-md cursor-pointer transition-transform transform-gpu hover:scale-125 "
        onClick={handleDecrement}
      /> */}
      <div
        className="cursor-pointer transition-transform transform-gpu hover:scale-125 "
        onClick={handleDecrement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M13.9783 5.32073L10.7683 8.53072L8.79828 10.4907C7.96828 11.3207 7.96828 12.6707 8.79828 13.5007L13.9783 18.6807C14.6583 19.3607 15.8183 18.8707 15.8183 17.9207V12.3107V6.08072C15.8183 5.12072 14.6583 4.64073 13.9783 5.32073Z"
            fill="#DFE3EE"
          />
        </svg>
      </div>
      <div className="rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] px-[15px] py-[10px] bg-[#F6F6F6]">
        {time}
        {text}
      </div>
      {/* <SlArrowRight
        className={`ml-2 text-md cursor-pointer transition-transform transform-gpu hover:scale-125 ${
          time === limit && " pointer-events-none"
        }`}
        onClick={handleIncrement}
      /> */}
      <div
        className={`cursor-pointer transition-transform transform-gpu hover:scale-125 ${
          time === limit && " pointer-events-none"
        }`}
        onClick={handleIncrement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.1997 10.4899L13.2297 8.51993L10.0197 5.30993C9.33969 4.63993 8.17969 5.11993 8.17969 6.07993V12.3099V17.9199C8.17969 18.8799 9.33969 19.3599 10.0197 18.6799L15.1997 13.4999C16.0297 12.6799 16.0297 11.3199 15.1997 10.4899Z"
            fill="#DFE3EE"
          />
        </svg>
      </div>
    </div>
  );
};
