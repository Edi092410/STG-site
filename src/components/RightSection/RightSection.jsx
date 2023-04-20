import React from "react";
import { LeftPic } from "../LeftPic/LeftPic";
import { BigPic } from "../Bigpic/BigPic";
export const RightSection = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-between">
        <LeftPic />
        <LeftPic />
        <LeftPic />
        <LeftPic />
      </div>
      <BigPic />
    </div>
  );
};
