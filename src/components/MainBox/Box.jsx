import React from "react";

export const Box = ({ bgColor, vectorColor, children, location }) => {
  return (
    <div className={`relative w-full h-full bg-[${bgColor}]`}>
      <div
        className={`absolute top-0 h-full ${
          location === "right" ? "right-0 transform rotate-180" : "left-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 335 415"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 0C5.87258 0 0.5 5.37258 0.5 12V403C0.5 409.627 5.87258 415 12.5 415H182.5H186.5V414.93C268.598 412.034 334.5 320.273 334.5 207.5C334.5 94.7267 268.598 2.96568 186.5 0.0704538V0H182.5H12.5Z"
            fill={vectorColor}
          />
        </svg>
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};
