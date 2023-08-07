import React from "react";

export const ProfileHeading = (props) => {
  return (
    <div className="hidden md:block">
      <div className="w-full h-auto flex justify-center items-center  ">
        <div className="w-full md:w-[80%] text-center">
          <div className=" text-xl font-bold">{props.heading}</div>
          <div className="text-sm">{props.main}</div>
        </div>
      </div>
    </div>
  );
};
