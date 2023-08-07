import React from "react";

export const ServerErrorPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <img
            src="https://m.zangia.mn/l/f/2/J6-G06KAFI-JHDDE4X-0Z42Q2Q-69.jpg"
            className="h-auto w-[15vh]"
            alt="404 Image"
          />
          <div className="ml-4 text-center">
            <h1 className="text-slate-800 text-6xl">500!</h1>
            <div className="text-lg">
              Серверд алдаа гарсан байна. Та түр хүлээнэ үү!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
