import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Main } from "../../layouts/Main";
import { Button } from "../Main/Button";
import { Box } from "../Main/Box";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
export const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (err) {
      const timer = setTimeout(() => {
        setErr("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [err]);

  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    setLoading(true);
    const formdata = { ...e };
    delete formdata.confirmPassword;
    // setValue("token", token);
    formdata.token = token;
    try {
      const response = await axios.post(
        `https://admin.e-siticom.com/api/setpassword`,
        formdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success === false) setErr(response.data.message);
      else setMsg(response.data.message);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {msg ? (
        <div className="min-h-[90vh] w-full flex justify-center items-center">
          <div>
            <div className=" text-5xl">Таны нууц үг амжилттай солигдлоо.</div>
            <div className="flex justify-center">
              <button
                className="w-48 h-12 bg-slate-800 text-white rounded-3xl mt-6"
                onClick={() => navigate("/login")}
              >
                Нэвтрэх
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Main image={"login"} head={"Нууц үг мартсан"}>
          <div className="w-full h-full flex justify-center items-center 3xl:mt-[90px] mt-[50px]">
            <div className="w-[430px]">
              <Box>
                <form
                  className="flex justify-center items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="w-full m-[10%]">
                    {/* <input type="hidden" {...register("token")}></input>
                        <div className=" text-[#032D60] font-bold w-full mb-3">
                          Цахим шуудан
                        </div>
                        <input
                          type={"email"}
                          className="w-full h-12  bg-[#DEDEDE] pl-[15px] mb-5"
                          {...register("email", {
                            required: "Та mail хаягаа оруулна уу",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        <div className=" text-red-500">{errors.email?.message}</div> */}
                    <div className=" text-[#032D60] font-bold w-full">
                      Системээс өгсөн нууц үг
                    </div>
                    <div className="relative mt-1">
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
                        className="w-full h-12 bg-[#DEDEDE] pl-[15px] "
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
                    <div className=" text-[#032D60] font-bold w-full mt-5">
                      Шинэ нууц үг
                    </div>
                    <div className="relative mt-1">
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
                        {...register("confirmPassword", {
                          required: true,
                          minLength: 6,
                          // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])/,
                          //   validate: (value) => {
                          //     if (watch("password") !== value) {
                          //       return "Нууц үгүүд таарсангүй.";
                          //     }
                          //   },
                        })}
                        className="w-full h-12 bg-[#DEDEDE] pl-[15px]"
                      />
                    </div>
                    {errors.confirmPassword && (
                      <div className="text-red-500">
                        {errors.confirmPassword.message}
                      </div>
                    )}
                    {err && <div className=" text-red-500">{err}</div>}
                    <div className="w-full flex justify-center my-8">
                      <div className="w-fit h-10">
                        <Button loading={loading} name="Шинэчлэх" />
                      </div>
                    </div>
                  </div>
                </form>
              </Box>
            </div>
          </div>
        </Main>
      )}
    </>
  );
};
