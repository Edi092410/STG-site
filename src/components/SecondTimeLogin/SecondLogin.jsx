import React from "react";

export default function SecondLogin() {
  return (
    <form className="flex justify-center min-h-[80vh]  items-center">
      <div className="w-96">
        <div className="float-left text-xl font-bold w-full mb-5">
          Та GTS системд нэвтрэх гэж байна
        </div>
        <div className=" text-blue-500 font-bold w-full mb-3">Цахим шуудан</div>
        <input
          type="text"
          className="w-full h-12  border border-gray-600"
        ></input>
        <div className=" text-blue-500 font-bold w-full mb-3 mt-6">
          Баталгаажуулалт
        </div>
        <input
          type="text"
          className="w-full h-12  border border-gray-600"
        ></input>

        <div className=" text-blue-500 font-bold w-full mt-1">Дахин илгээх</div>
        <button type="submit" className=" w-full h-12 bg-slate-800 text-white rounded-3xl mt-6">
          Баталгаажуулах
        </button>
      </div>
    </form>
  );
}
