import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "../../Assets/logo.jpg";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
export const Main = () => {
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
    console.log("data", e);
    console.log("name", getValues("name"));
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
        console.log(data);
        console.log("token", data.data.data.token);
        token = data.data.data.token;
        console.log("setToken:", token);
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
          console.log(token);
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
    <form
      className="flex justify-center min-h-[84vh]  items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-96 my-[10vh]">
        <div className="text-xl font-bold mb-5">
          Шинээр хэрэглэгчээр бүртгүүлэх
        </div>
        {/* <input type="hidden" {...register("url")}></input> */}
        <div className="text-blue-500 font-bold mb-3">Нэр</div>
        <input
          type="text"
          className="w-full h-12  border border-gray-600 pl-[15px]"
          {...register("name", {
            required: "Та нэрээ бичнэ үү!",
          })}
        ></input>
        <div className=" text-red-500">{errors.name?.message}</div>
        <div className=" float-left text-blue-500 font-bold my-5">
          Цахим шуудан
        </div>
        <input
          type="email"
          className="w-full h-12  border border-gray-600 pl-[15px]"
          {...register("email", {
            required: "Та mail хаягаа оруулна уу",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email format",
            },
            // validate: checkEmailExists
          })}
        ></input>
        <div className=" text-red-500">{errors.email?.message}</div>
        {errMsgEmail && <div className="text-red-500">{errMsgEmail}</div>}
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
        <div className="text-red-500">
          {errors.password?.type === "required" && "Нууц үгээ оруулна уу"}
        </div>
        <div className="text-red-500">
          {errors.password?.type === "minLength" &&
            "Дор хаяж 8 тэмдэгт оруулна уу"}
        </div>
        <div className="text-red-500">
          {errors.password?.type === "pattern" &&
            "Дор хаяж 1 жижиг үсэг, 1 том үсэг, 1 тоо, 1 тэмдэгт агуулна"}
        </div>
        <br></br>
        <div className=" mt-5 mb-5">
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
        </div>
        <button
          type="submit"
          className=" w-full h-12 bg-red-600 text-white rounded-3xl"
        >
          {loading === true ? (
            <PulseLoader color="#fff" size={5} />
          ) : (
            "БҮРТГҮҮЛЭХ"
          )}
        </button>
      </div>
    </form>
  );
};
