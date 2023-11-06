import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.jpg";
import { Button } from "../../components/Main/Button";

export const PageNoteFound = () => {
  const navigate = useNavigate();

  return (
    // <div className="w-screen h-screen flex items-center justify-center">
    //   <div className="flex flex-col items-center">
    //     <div className="flex items-center">
    //       <img
    //         src="https://m.zangia.mn/l/f/2/J6-G06KAFI-JHDDE4X-0Z42Q2Q-69.jpg"
    //         className="h-auto w-[12vh]"
    //         alt="404 Image"
    //       />
    //       <div className="ml-4 text-center">
    //         <h1 className="text-slate-800 text-6xl">404!</h1>
    //         <div className="text-lg">Таны хайсан хаяг байхгүй байна.</div>
    //       </div>
    //     </div>
    //     <div className="flex justify-center items-center mt-4">
    //       <button
    //         className="bg-slate-800 text-white rounded-lg py-2 px-4"
    //         onClick={handleButtonClick}
    //       >
    //         Нүүр хуудас руу буцах
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-screen h-screen flex justify-center items-center text-6xl text-slate-700">
      <div>
        <div className="absolute inset-4 w-10">
          <img src={logo} className="rounded-full" />
        </div>
        <div>
          <p>404 | Таны хайсан хаяг байхгүй байна.</p>
          {/* <p> Таны хайсан хаяг байхгүй байна.</p> */}
        </div>
        {/* <div onClick={resetErrorBoundary}>Дахин ачаалах</div> */}
        <div className="w-full flex justify-center mt-4 ">
          <div className="text-base h-10" onClick={() => navigate("/")}>
            <Button name={"Нүүр хуудас руу буцах"} />
          </div>
        </div>
      </div>
    </div>
  );
};
