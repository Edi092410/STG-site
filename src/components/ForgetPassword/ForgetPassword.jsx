import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Main } from "../../layouts/Main";
import { Box } from "../Main/Box";
import { Button } from "../Main/Button";
import { GetData } from "../../Axios/AxiosService2";
// import { Button } from "../Main/Button";
export const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [error]);
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
  const onSubmit = async (e) => {
    let token = "";
    setLoading(true);
    try {
      const response = await axios.post(
        "https://admin.e-siticom.com/api/resetpassword",
        e,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.data.success === false) {
        // Handle specific errors from the API response

        // if (response.data.data && response.data.data.email) {
        //   setError(response.data.data.email);
        // } else {
        //   setError("An unknown error occurred.");
        // }

        console.log("admin did not find the email you wrote");

        try {
          const response = await GetData(
            `/users/forgotpassword?email=${e.email}`
          );
          if (response.response.data && response.response.data.msg) {
            setError(response.response.data.msg);
          } else {
            setError("An unknown error occurred.");
          }
          console.log("response:", response);
        } catch (error) {
          setError("Алдаа гарлаа. Дахин оролдоно уу!");
        }
      } else {
        setError("");
        token = response.data.data.token;
        if (window.Email) {
          window.Email.send({
            SecureToken: "75e7c8f0-acc6-48cf-bfd8-d84e58225e1e",
            To: getValues("email"),
            From: "m.erdenebayar.siticom@gmail.com",
            Subject: "Нууц үг сэргээх",
            // Body: `
            //   <html>
            //   <head>

            //     <style>
            //     button {
            //       background-color: red;
            //       border-style: none;
            //       border-radius: 8px;
            //       height: 30px;
            //       color: white;
            //       cursor: pointer;
            //     }
            //     img {
            //         height: 30px;
            //         border-radius: 8px;
            //         margin-right: 10px;
            //     }
            //     .wrap {
            //         display: flex;
            //         margin-top: 0;
            //         align-items: center;
            //         width: 200px;
            //     }
            //     </style>
            //   </head>
            //   <body>
            //   <div class="wrap"><img src=${logo}>
            //   <p>Санхүүгийн Тооцоолох Групп Компани</p>
            //   </div>
            //   <div class="container">
            //   <div>
            //   <p>Нууц үг сэргээх <a href="https://e-siticom.com/forgetField?token=${token}"></a> дээр даран нууц үгээ сэргээнэ үү. Хувийн мэдээллээ хамгаалж нууц үгээ бусдад дамжуулахгүй байна уу.</p>
            //   <p>Таныг хүндэтгэсэн, "Санхүүгийн Тооцоолох Групп" компани.</p>
            //   </div>
            //   </div>
            //   </body>
            // </html>`,
            Body: `
        <html>
        <head>
          <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
          }
          .header{
            display: flex;
          }

          .header img {
            max-width: 30px;
            max-height: 30px;
            height: auto;
            border-radius: 10px;
          }

          .header h1 {
            font-size: 24px;
            color: #333333;
            margin-left: 10px;
            margin-top: 0;
          }

          .content {
            margin-top: 20px;
            font-size: 16px;
            color: #555555;
          }

          .content a {
            color: #007bff;
            text-decoration: none;
          }

          .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #888888;
          }
        </style>

        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://admin.e-siticom.com/storage/logo.jpeg" alt="Logo" />
              <h1>Санхүүгийн Тооцоолох Групп Компани</h1>
            </div>
            <div class="content">
              <p>Нууц үг сэргээх <a href="https://e-siticom.com/forgetField?token=${token}">холбоос</a> дээр даран нууц үгээ сэргээнэ үү. Хувийн мэдээллээ хамгаалж нууц үгээ бусдад дамжуулахгүй байна уу.</p>
            </div>
            <div class="footer">
              <p>Таныг хүндэтгэсэн, "Санхүүгийн Тооцоолох Групп" компани.</p>
            </div>
          </div>
        </body>
        </html>
        `,
          }).then((message) => notify(message));
          // ${response.data.message}
          setSuccess(
            `Нууц үгийн сэргээлтийн бичлэг үүсгэлээ. Та цахим шуудангаа шалгана уу!`
          );
        }
      }
    } catch (err) {
      setError("Алдаа гарлаа. Дахин оролдоно уу!");
    } finally {
      setLoading(false); // Make sure to reset the loading state after the request completes
    }
  };
  return (
    <Main image={"login"} head={"Нууц үг мартсан"}>
      <div className="w-full h-full flex justify-center items-center 3xl:mt-[90px] mt-[50px]">
        <div className="w-[430px]">
          <Box>
            <form
              className="flex justify-center items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full m-[10%]">
                <div className=" text-[#032D60] font-bold w-full mb-3">
                  Цахим шуудан
                </div>
                <input
                  type={"email"}
                  className="w-full h-12 pl-[15px] bg-[#DEDEDE]"
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
                <div className=" text-red-500">{error}</div>
                <div>{success}</div>
                <div className="w-full flex justify-center my-8">
                  <div className="w-fit h-10">
                    <Button loading={loading} name="Нууц үг авах" />
                  </div>
                </div>
              </div>
            </form>
          </Box>
        </div>
      </div>
    </Main>
  );
};

// export const Button = ({ loading, button }) => {
//   return (
//     <button
//       type="submit"
//       className="w-full h-12 bg-slate-800 text-white rounded-3xl mt-6"
//       disabled={loading}
//     >
//       {loading ? <PulseLoader color="#fff" size={5} /> : button}
//     </button>
//   );
// };
