import React from "react";
import { LeftPic } from "../LeftPic/LeftPic";
import { BigPic } from "../Bigpic/BigPic";
import fiscus from "../../Assets/fiscus.png";
import acalouse from "../../Assets/acolous.png";
import payroll from "../../Assets/payroll.png";
export const RightSection = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-between">
        <LeftPic
          head="Fiscus"
          main="Өсөлтийг удирдах санхүүгийн систем"
          img={fiscus}
        />
        <LeftPic
          head="Acalouse"
          main="Өсөлтийг удирдах санхүүгийн систем"
          img={acalouse}
        />
        <LeftPic
          head="Payroll"
          main="Өсөлтийг удирдах санхүүгийн систем"
          img={payroll}
        />
      </div>
      <BigPic />
    </div>
  );
};
