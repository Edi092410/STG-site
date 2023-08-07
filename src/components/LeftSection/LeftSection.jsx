import React from "react";
import { BigPic } from "../Bigpic/BigPic";
import { RightPic } from "../RightPic/RightPic";
import fiscus from "../../Assets/fiscus.png";
import acalouse from "../../Assets/acolous.png";
import payroll from "../../Assets/payroll.png";
export const LeftSection = () => {
  return (
    <div className="flex justify-between mt-32 mb-32">
      <BigPic />
      <div className="flex flex-col justify-between">
        <RightPic
          head="Fiscus"
          main="Өсөлтийг удирдах санхүүгийн систем"
          img={fiscus}
        />
        <RightPic
          head="Acalouse"
          main="Өсөлтийг удирдах санхүүгийн систем"
          img={acalouse}
        />
        <RightPic
          head="Payroll"
          main="Өсөлтийг удирдах санхүүгийн систем"
          img={payroll}
        />
      </div>
    </div>
  );
};
