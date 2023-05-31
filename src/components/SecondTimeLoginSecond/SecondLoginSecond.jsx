import React from "react";

export default function SecondLoginSecond() {
  return (
    <form className="flex justify-center min-h-[80vh]  items-center bg-slate-300">
      <div className=" flex justify-center items-center w-[500px] h-96 bg-white rounded-3xl flex-wrap">
        <div className=" text-center m-20 mb-0 text-xl">
          Амжилттай баталгаажууллаа Нүүр хуудас руу очих уу?
        </div>
        <button type="submit" className=" w-96 h-12 bg-slate-800 text-white rounded-3xl">
          Тэгье
        </button>
      </div>
    </form>
  );
}
