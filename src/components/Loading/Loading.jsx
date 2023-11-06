import React from "react";
import { ClipLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div
      className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-white bg-opacity-50 z-50"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <ClipLoader color="#123" size={35} speedMultiplier={0.7} />
    </div>
  );
};
