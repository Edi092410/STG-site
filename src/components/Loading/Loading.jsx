import React from "react";
import { ClipLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <ClipLoader color="#123" size={35} speedMultiplier={0.7} />
    </div>
  );
};
