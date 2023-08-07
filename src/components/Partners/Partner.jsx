import React from "react";
import Mongol from "../../Assets/Mongolia.jpg";
export const Partner = ({ name }) => {
  return (
    <div
      className="h-[70px] 3xl:h-[105px] rounded-xl flex w-[200px] 3xl:w-[300px] shadow-2xl m-10 "
      key={name}
    >
      <img src={Mongol} alt="Mongolia" className="h-full w-auto rounded-l-xl" />
      <div className=" text-[12px] 3xl:text-[16px] p-[10px] 3xl:p-[15px]">
        {name}
      </div>
    </div>
  );
};
