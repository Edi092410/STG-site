import React from "react";
import { BigPic } from "../Bigpic/BigPic";
import { RightPic } from "../RightPic/RightPic";
export const LeftSection = () => {
  return (
    <div className="flex justify-between mt-32 mb-32">
      <BigPic />
      <div className="flex flex-col justify-between">
        <RightPic />
        <RightPic />
        <RightPic />
      </div>
    </div>
  );
};
