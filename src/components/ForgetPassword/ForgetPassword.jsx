import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import axios from "axios";
import logo from "../../Assets/logo.jpg";
import { toast } from "react-toastify";
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
    console.log(e);
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
      console.log("first", response);
      if (response.data.success === false) {
        // Handle specific errors from the API response
        if (response.data.data && response.data.data.email) {
          setError(response.data.data.email);
        } else {
          setError("An unknown error occurred.");
        }
      } else {
        setError("");
        console.log(response.data);
        token = response.data.data.token;
        if (window.Email) {
          window.Email.send({
            SecureToken: "75e7c8f0-acc6-48cf-bfd8-d84e58225e1e",
            To: getValues("email"),
            From: "m.erdenebayar.siticom@gmail.com",
            Subject: "Нууц үг сэргээх",
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
                    border-radius: 8px;
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
              <div class="wrap"><img src=${logo}>
              <p>Санхүүгийн Тооцоолох Групп Компани</p>
              </div>
              <div class="container">
              <div>
              <p>Нууц үг сэргээх <a href="https://e-siticom.com/forgetField?token=${token}"></a> дээр даран нууц үгээ сэргээнэ үү. Хувийн мэдээллээ хамгаалж нууц үгээ бусдад дамжуулахгүй байна уу.</p>
              <p>Таныг хүндэтгэсэн, "Санхүүгийн Тооцоолох Групп" компани.</p>
              </div>
              </div>
              </body>
            </html>`,
          }).then((message) => notify(message));
          setSuccess(`${response.data.message} Та цахим шуудангаа шалгана уу!`);
        }
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Make sure to reset the loading state after the request completes
    }
  };
  return (
    <form
      className="flex justify-center min-h-[84vh] items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-96">
        <div className="float-left text-xl font-bold w-full mb-5">
          Та нууц үгээ шинэчлэх гэж байна.
        </div>
        <div className=" text-blue-500 font-bold w-full mb-3">Цахим шуудан</div>
        <input
          type={"email"}
          className="w-full h-12  border border-gray-600 pl-[15px]"
          {...register("email", {
            required: "Та mail хаягаа оруулна уу",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email format",
            },
          })}
        />
        <div className=" text-red-500">{errors.email?.message}</div>
        <div className=" text-red-500">{error}</div>
        <div>{success}</div>
        <Button loading={loading} button="Солих" />
      </div>
    </form>
  );
};

export const Button = ({ loading, button }) => {
  return (
    <button
      type="submit"
      className="w-full h-12 bg-slate-800 text-white rounded-3xl mt-6"
      disabled={loading}
    >
      {loading ? <PulseLoader color="#fff" size={5} /> : button}
    </button>
  );
};
