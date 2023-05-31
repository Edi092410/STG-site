import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from 'react-hook-form';

export default function ChangePasswordSecond() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);
     
  
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form className="flex justify-center min-h-[80vh]  items-center"
      onSubmit={handleSubmit(onSubmit)}>
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
        />
        <div className=" text-blue-500 font-bold w-full mb-3 mt-6">
          Шинэ нууц үг
        </div>

        <div className="relative mt-6">
          {showPassword ? (
            <FaEye
              className="h-5 w-5 absolute left-[90%] top-[30%] cursor-pointer"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaEyeSlash
              className="h-5 w-5 absolute left-[90%] top-[30%] cursor-pointer"
              onClick={toggleShowPassword}
            />
          )}
          <input
            type={showPassword ? "text" : "password"}
            className="w-full h-12 border border-gray-600 pl-[15px]"
            {...register("password", {
              required: true, 
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])/, 
                      
            })}
          ></input>
        </div>
        <div className="text-red-500">{errors.password?.type === "required" && "Нууц үгээ оруулна уу"}</div>
        <div className="text-red-500">{errors.password?.type === "minLength" && "Дор хаяж 8 тэмдэгт оруулна уу"}</div>
        <div className="text-red-500">{errors.password?.type === "pattern" && "Дор хаяж 1 жижиг үсэг, 1 том үсэг, 1 тоо, 1 тэмдэгт агуулна"}</div>
        
        <div className="text-right text-blue-500 font-bold w-full mb-3">
          Дахин нууц үг авах
        </div>
        <button type="submit" className=" w-full h-12 bg-slate-800 text-white rounded-3xl mt-6">
          Нэвтрэх
        </button>
      </div>
    </form>
  );
}
