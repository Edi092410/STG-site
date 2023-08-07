import React from "react";

export const GenericErrorPage = () => {
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
            <div className="text-5xl font-bold">Алдаа гарлаа.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
