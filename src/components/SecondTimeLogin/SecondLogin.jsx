import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Notification } from "../Notification/Notification";

export default function SecondLogin() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  const [modal, setModal] = useState(false);

  
  // let timeLeft = 30;
  // let timeInterval;

  // function startTimer() {
  //   clearInterval(timeInterval);
  //   timeInterval = setInterval(updateTimer, 1000);
  // }

  // function updateTimer(){
  //   timeLeft--;
  //   if(timeLeft <= 0) {
  //     clearInterval(timeInterval);
  //     document.getElementById("timer").textContent = '0';
  //   } else {
  //     document.getElementById("timer").textContent = timeLeft + " секунд";
  //   }
  // }

  
  return (
    <>
      <form className="flex justify-center min-h-[80vh]  items-center"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="w-96">
          <div className="float-left text-xl font-bold w-full mb-5">
            Та GTS системд нэвтрэх гэж байна
          </div>
          <div className=" text-blue-500 font-bold w-full mb-3">Цахим шуудан</div>
          <input
            type="email"
            className="w-full h-12  border border-gray-600 pl-[15px]"
            {...register("email", {
              required: "Та mail хаягаа оруулна уу",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email format"
              },
            })}
          ></input>
          <div className=" text-red-500">{errors.email?.message}</div>
          
          <div className=" text-blue-500 font-bold w-full mb-3 mt-6">
            Баталгаажуулалт
          </div>
          <input
            type="password"
            className="w-full h-12  border border-gray-600 pl-[15px]"
          ></input>

          <div className=" text-blue-500 font-bold w-full mt-1 cursor-pointer" /*onClick={startTimer()}*/>Дахин илгээх</div>
          {/* <span id="timer" className="ml-2 text-slate-500"></span> */}
          <button 
          type="submit" 
          className=" w-full h-12 bg-slate-800 text-white rounded-3xl mt-6"
          onClick={() => {setModal(true)}}
          >
            Баталгаажуулах
          </button>
        </div>
      </form>
      {modal && (
        <Notification 
          name="Амжилттай баталгаажууллаа Нүүр хуудас руу очих уу" 
          button="Тэгье" 
          closeModal={() => setModal(false)}
        />
      )}
    </>
  );
}
