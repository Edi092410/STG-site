import React from "react";

export const Error = () => {
  return (
    <div className="flex items-center justify-center border border-[#484848] rounded-[4px] w-[20px] h-[20px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M3 3L8.99999 8.99999"
          stroke="#484848"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.00001 8.99999L9 3"
          stroke="#484848"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
