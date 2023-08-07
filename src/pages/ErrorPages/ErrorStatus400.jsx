import React from "react";
import { useNavigate } from "react-router-dom";
export const ErrorStatus400 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <img
            src="https://m.zangia.mn/l/f/2/J6-G06KAFI-JHDDE4X-0Z42Q2Q-69.jpg"
            className="h-auto w-[12vh]"
            alt="404 Image"
          />
          <div className="ml-4 text-center">
            <h1 className="text-slate-800 text-6xl">404!</h1>
            <div className="text-lg">Мэдээллээ шалгана уу!</div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            className="bg-slate-800 text-white rounded-lg py-2 px-4"
            onClick={() => navigate(-1)}
          >
            Буцах
          </button>
        </div>
      </div>
    </div>
  );
};
