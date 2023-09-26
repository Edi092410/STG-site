import React, { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Main } from "../../layouts/Main";
import { Button } from "../Main/Button";
import { Box } from "../Main/Box";
import { LoginPathContext } from "../../context/LoginPathProvider";
export default function SecondLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { pathName } = useContext(LoginPathContext);
  const { setAuth } = useAuth();

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const notify = () => {
    toast.success("Амжилттай нэвтэрлээ", {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };
  const message = (err) => {
    setErrMsg(err.response?.statusText);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    try {
      // Get CSRF cookie
      await axios.get("https://admin.e-siticom.com/sanctum/csrf-cookie", {
        header: {
          "X-Requested-With": "XMLHttpRequest",
        },
        withCredentials: true,
      });

      // Proceed with the login request
      const data = await axios.post(
        "https://admin.e-siticom.com/api/login",
        // "/api/login",
        e,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (data.request.status === 200) {
        localStorage.setItem("name", data?.data?.data?.name);
        localStorage.setItem("token", data?.data?.data?.token);
        localStorage.setItem("role", data?.data?.data?.role);
        localStorage.setItem("email", data.data.data.email);
        setAuth(true);
        if (pathName) {
          navigate(-1);
        } else {
          navigate(-2);
        }
        notify();
      }
    } catch (err) {
      if (err.request.status === 401) {
        try {
          const data = await axios.post(
            // "https://service2.stg.mn/api/users/authenticate",
            "/api/users/authenticate",
            e,
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          if (data.status === 200) {
            // role?
            localStorage.setItem("name", data?.data?.user?.username);
            localStorage.setItem("token", data?.data?.token);
            localStorage.setItem("email", data.data.user.email);
            localStorage.setItem("companies", JSON.stringify(data.data.orgs));

            setAuth(true);
            if (pathName) {
              navigate(-1);
            } else {
              navigate(-2);
            }
            notify();
          }
        } catch (err) {
          message(err);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Main
      head="Системд бүртгэгдсэн харилцагчийн бүртгэлээ ашиглана уу."
      image={"login"}
    >
      <div className="w-full h-full flex justify-center items-center 3xl:mt-[90px] mt-[50px]">
        <div className="w-[430px]">
          <Box>
            <form
              className="flex justify-center items-cber"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full mx-[10%]">
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

                <div className="relative mt-[40px]">
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
                <Link to="/forget">
                  <div
                    className="text-right text-[#032D60] w-full mb-3 cursor-pointer"
                    // onClick={() => navigate("/forget")}
                  >
                    Нууц үг мартсан
                  </div>
                </Link>

                <div className=" text-red-500 text-center">{errMsg}</div>
                {/* <button
                      type="submit"
                      className="w-full h-12 bg-slate-800 text-white rounded-3xl mt-6"
                      disabled={loading}
                    >
                      {loading ? <PulseLoader color="#fff" size={5} /> : "Нэвтрэх"}
                    </button> */}
                <div className="mb-[50px] mt-[30px] mx-[25%]">
                  <Button name={"Нэвтрэх"} loading={loading} />
                </div>
              </div>
            </form>
          </Box>
        </div>
      </div>
    </Main>
  );
}
