import React from "react";
import { useForm } from "react-hook-form"

export default function Main() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <form className="flex justify-center min-h-[80vh]  items-center"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="w-96">
        <div className="float-left text-xl font-bold w-full mb-5">
          GTS системд нэвтрэх
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
        <button type="submit" className=" w-full h-12 bg-slate-800 text-white rounded-3xl mt-6">
          Цааш
        </button>
      </div>
    </form>
  );
}
