import React from "react";
import { useForm } from "react-hook-form";
export const Email = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const logoUrl = `https://admin.e-siticom.com/assets/logo.jpg`;
  const onSubmit = (e) => {
    console.log(e);
    if (window.Email) {
      window.Email.send({
        SecureToken: "75e7c8f0-acc6-48cf-bfd8-d84e58225e1e",
        To: getValues("email"),
        From: "m.erdenebayar.siticom@gmail.com",
        Subject: getValues("description"),
        Body: `<html>
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
        <div class="wrap"><img src="https://admin.e-siticom.com/assets/images/logo.jpg">
        <p>Санхүүгийн Тооцоолох Групп Компани</p>
        </div>
        <div class="container">
        <div>
        <p>Нууц үг сэргээх <a href="https://e-siticom.com/forgetField?token=">холбоос</a> дээр даран нууц үгээ сэргээнэ үү. Хувийн мэдээллээ хамгаалж нууц үгээ бусдад дамжуулахгүй байна уу.</p>
        <p>Таныг хүндэтгэсэн, "Санхүүгийн Тооцоолох Групп" компани.</p>
        </div>
        </div>
        </body>
      </html>`,
        Attachment: [
          {
            name: "logo.jpg",
            path: "https://admin.e-siticom.com/assets/images/logo.jpg",
          },
        ],
      }).then((message) => alert(message));
      console.log("Email sent");
    }
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="border border-slate-500 w-80"
        placeholder="Name"
        {...register("name")}
      ></input>
      <input
        type="email"
        className="border border-slate-500 w-80"
        placeholder="Email"
        {...register("email")}
      ></input>
      <input
        type="text"
        className="border border-slate-500 w-80"
        placeholder="Description"
        {...register("description")}
      ></input>
      <button
        type="submit"
        className=" w-40 h-12 bg-red-600 text-white rounded-3xl"
      >
        Click me
      </button>
    </form>
  );
};
