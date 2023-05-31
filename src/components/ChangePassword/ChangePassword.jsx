import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ChangePassword() {
  const {handleSubmit, formState: {errors}} = useForm();
  const [password, setPassword] = useState("");

  const onSubmit = () => console.log(password);
     
  return (
    <form className="flex justify-center min-h-[80vh]  items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-96">
        <div className="float-left text-xl font-bold w-full mb-5">
          Та нууц үгээ шинэчлэх гэж байна
        </div>
        <div className=" text-blue-500 font-bold w-full mb-3">
          Системээс өгсөн нууц үг
        </div>
        <input
          type="password"
          className="w-full h-12  border border-gray-600 pl-[15px]"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className=" w-full h-12 bg-slate-800 text-white rounded-3xl mt-6">
          Цааш
        </button>
      </div>
    </form>
  );
}
