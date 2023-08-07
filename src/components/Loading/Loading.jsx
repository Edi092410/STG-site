import React from "react";
// import { PacmanLoader } from "react-spinners";
import { ClipLoader } from "react-spinners";
export const Loading = () => {
  return (
    <div className="h-full w-full opacity-50 bg-white flex items-center justify-center z-[-1]">
      <ClipLoader color="#123" size={35} speedMultiplier={0.7} />
    </div>
  );
};
