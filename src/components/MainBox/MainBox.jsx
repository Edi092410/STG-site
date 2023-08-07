import React from "react";

export const MainBox = ({ location, children }) => {
  return (
    <div
      className={`w-full h-full ${
        location === "top"
          ? "rounded-[100px_100px_0px_0px] 3xl:rounded-[180px_180px_0px_0px] bg-gradient-to-b from-[#1d9cd333] to-[#1d9cd300]"
          : "rounded-[0px_0px_100px_100px] 3xl:rounded-[0px_0px_180px_180px] bg-gradient-to-b from-[#1d9cd300] to-[#1d9cd333] "
      }`}
    >
      {children}
    </div>
  );
};
