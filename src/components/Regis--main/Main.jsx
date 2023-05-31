import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
// import axios from "axios";


export const Main = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);
     
  
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };



  // const checkEmailExists = async (email) => {
  //   try {
  //     const response = await axios.get(`https://apilayer.net/api/check?access_key=DcPdoRFrKqLXJKzYEgOtaafV9me2FGXF&email=${email}`);
  //     return response.data.format_valid && response.data.mx_found;
  //   } catch (error) {
  //     console.error(error);
  //     return false;
  //   }
  // };

  return (
    <form className="flex justify-center min-h-[80vh]  items-center"
          onSubmit={handleSubmit(onSubmit)}>
      <div className="w-96">
        <div className="float-left text-xl font-bold mb-5">
          Шинээр хэрэглэгчээр бүртгүүлэх
        </div>
        <div className=" float-left text-blue-500 font-bold mb-3">
          Цахим шуудан
        </div>
        <input
          type="email"
          className="w-full h-12  border border-gray-600 pl-[15px]"
          {...register("email", {
            required: "Та mail хаягаа оруулна уу",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email format"
            },
            // validate: checkEmailExists 
          })}
        ></input>
        <div className=" text-red-500">{errors.email?.message}</div>
        {/* {errors.email?.type === "validate" && "ааааааа"} */}
        <div className="hidden float-left text-red-500 mt-3">
          Таны цахим шуудан бүртгэлтэй байгаа тул{" "}
          <span className="text-black">Нэвтрэх</span> хэсэгт хандах эсвэл өөр
          хаягаар бүргүүлнэ үү.
        </div>
        <div className=" float-left text-blue-500 font-bold mb-3 mt-5">
          Нууц үг үүсгэх
        </div>
        <div className="relative mt-6">
          {showPassword ? (
            <FaEye
              className="h-5 w-5 absolute left-[90%] top-[60%] cursor-pointer"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaEyeSlash
              className="h-5 w-5 absolute left-[90%] top-[60%] cursor-pointer"
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
        <br></br>
        <div className=" mt-5 mb-5">
          <input 
            type="checkbox"
            name="termsAndConditions"
            className="mr-2"
            {...register("checkbox", {
              required: true
            })}
            ></input>
          <span>Үйлчилгээний нөхцлийг зөвшөөрч байна</span>
          <div>{errors.checkbox?.message}</div>
        </div>
        <button type="submit" className=" w-full h-12 bg-red-600 text-white rounded-3xl">
          БҮРТГҮҮЛЭХ
        </button>
      </div>
    </form>
    
  );
};
