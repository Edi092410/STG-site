import React from "react";
import character from "../../Assets/ServiceCharacter.png";
export const ProgramRelease = () => {
  return (
    <Box head={"Програмын шинэчлэл"}>
      <div>Payroll дээр ажилтны газар хэлтсийг яаж солих вэ?</div>
      <div>Дарга, нягтлан, ерөнхий менежерийн нэрийг яаж солих вэ?</div>
    </Box>
  );
};
export const Box = ({ head, img, children }) => {
  return (
    <div className="w-full">
      {img && (
        <img
          src={character}
          className=" w-[60px] mb-2"
          alt="character picture"
        />
      )}
      <div className="3xl:text-[24px] text-[16px] font-semibold mb-4">
        {head}
      </div>
      <div className="w-full max-h-[25%] rounded-lg shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)] text-[#7B7B7B] 3xl:text-sm text-xs p-[8%] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
