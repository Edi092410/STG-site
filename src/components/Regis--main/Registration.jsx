import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "../../Assets/logo.jpg";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Main } from "../../layouts/Main";
import { Button } from "../Main/Button";
import { Box } from "../Main/Box";
export const Registration = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const notify = ({ text }) => {
    toast.success(text, {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsgEmail, setErrMsgEmail] = useState("");

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    delete e.checkbox;
    let token = "";
    try {
      const data = await axios.post(
        "https://admin.e-siticom.com/api/register",
        // "/api/register",
        e,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.request.status === 200) {
        token = data.data.data.token;
        // alert(data?.data?.message);
        notify(data?.data?.message);
        // Send verification email
        if (window.Email) {
          window.Email.send({
            SecureToken: "75e7c8f0-acc6-48cf-bfd8-d84e58225e1e",
            To: getValues("email"),
            From: "m.erdenebayar.siticom@gmail.com",
            Subject: "Цахим хаягаа баталгаажуулах",
            Body: `
            <html>
            <head>
          
              <style>
              button {
                background-color: red;
                border-style: none;
                border-radius: 8px;
                height: 30px;
                color: white;
                cursor: pointer;
              }
              img {
                  height: 30px;
                  border-radius: 15px;
                  margin-right: 10px;
              }
              .wrap {
                  display: flex;
                  margin-top: 0;
                  align-items: center;
                  width: 200px;
              }
              </style>
            </head>
            <body>
            <div class="wrap"><img src="https://admin.e-siticom.com/assets/images/logo.jpg">
            <p>Санхүүгийн Тооцоолох Групп Компани</p>
            </div>
            <div class="container">
            <div>
            <p>Эрхэм хэрэглэгч ${getValues(
              "name"
            )} танд энэ өдрийн мэнд хүргэе!</p>
            <p>Та STG веб сайтын хэрэглэгчээр бүртгүүлсэн байна.</p>
            <p>Танд хэрэглэгчийн цахим шуудангаа баталгаажуулах доорх холбоос-ыг илгээлээ. <a href="https://e-siticom.com/verification?token=${token}">Холбоос</a> дээр дарж өөрийгөө баталгаажуулна уу.</p>
            </div>
            <p>Хүндэтгэсэн Санхүүгийн Тооцоолох Групп компани.</p>
            </div>
            </body>
          </html>`,
          }).then((message) => notify(message));
          setValue(false);
        }
      }
    } catch (err) {
      console.log(err);
      setErrMsgEmail(err.response.data.data.email);
      setValue(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main head="Шинэ хэрэглэгчээр бүртгүүлэх" image={"register"}>
      <div className="w-full h-full flex justify-center items-center 3xl:mt-[90px] mt-[50px]">
        <div className="w-[430px]">
          <Box>
            <form
              className="flex justify-center min-h-[84vh]  items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full mx-[10%]">
                {/* <input type="hidden" {...register("url")}></input> */}
                <div className=" text-[#032D60] font-bold w-full mb-3 mt-[30px]">
                  Нэр
                </div>
                <input
                  type={"text"}
                  className="w-full h-[50px] bg-[#DFE3EE] pl-[15px]"
                  {...register("name", {
                    required: "Та нэрээ бичнэ үү!",
                  })}
                />
                <div className=" text-red-500">{errors.name?.message}</div>

                <div className=" text-[#032D60] font-bold w-full mb-3 mt-[30px]">
                  Цахим шуудан
                </div>
                <input
                  type={"email"}
                  className="w-full h-[50px] bg-[#DFE3EE] pl-[15px]"
                  {...register("email", {
                    required: "Та mail хаягаа оруулна уу",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                <div className=" text-red-500">{errors.email?.message}</div>

                <div className=" text-[#032D60] font-bold w-full mb-3 mt-[30px]">
                  Нууц үг
                </div>
                <div className="relative">
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
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])/,
                    })}
                    className="w-full h-[50px] bg-[#DFE3EE] pl-[15px]"
                  />
                </div>
                <div className="text-red-500">
                  {errors.password?.type === "required" &&
                    "Нууц үгээ оруулна уу"}
                </div>
                <div className="text-red-500">
                  {errors.password?.type === "minLength" &&
                    "Дор хаяж 6 тэмдэгт оруулна уу"}
                </div>
                {/* <div className="text-red-500">
                      {errors.password?.type === "pattern" &&
                        "Дор хаяж 1 жижиг үсэг, 1 том үсэг, 1 тоо, 1 тэмдэгт агуулна"}
                    </div> */}

                {/* <div className=" mt-5 mb-5">
                  <input
                    type="checkbox"
                    name="termsAndConditions"
                    className="mr-2"
                    {...register("checkbox", {
                      required: true,
                    })}
                  ></input>
                  <span>Үйлчилгээний нөхцлийг зөвшөөрч байна</span>
                  {errors.checkbox && (
                    <div className="text-red-500">This field is required.</div>
                  )}
                </div> */}
                <div className="mb-[50px] mt-[30px] mx-[25%]">
                  <Button name={"Бүртгүүлэх"} loading={loading} />
                </div>
              </div>
            </form>
          </Box>
        </div>
      </div>
    </Main>
  );
};
