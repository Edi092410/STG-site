import React from "react";
import { PacmanLoader } from "react-spinners";
export const Loading = () => {
  return (
    // <div className="absolute top-0 left-0">
    <div className="h-full w-full opacity-50 flex items-center justify-center">
      <PacmanLoader color="#123" size={25} />
    </div>
    // </div>
  );
};
