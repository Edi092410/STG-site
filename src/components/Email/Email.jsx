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
        // SecureToken: "75e7c8f0-acc6-48cf-bfd8-d84e58225e1e",
        SecureToken: "d9eda9be-0a46-449c-965b-1860bafba90c",
        To: getValues("email"),
        From: "eba524682@gmail.com",
        Subject: getValues("description"),
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
              <img src="https://admin.e-siticom.com/assets/images/logo.jpg" alt="Logo" />
              <h1>Санхүүгийн Тооцоолох Групп Компани</h1>
            </div>
            <div class="content">
              <p>Нууц үг сэргээх <a href="https://e-siticom.com/forgetField?token=">холбоос</a> дээр даран нууц үгээ сэргээнэ үү. Хувийн мэдээллээ хамгаалж нууц үгээ бусдад дамжуулахгүй байна уу.</p>
            </div>
            <div class="footer">
              <p>Таныг хүндэтгэсэн, "Санхүүгийн Тооцоолох Групп" компани.</p>
            </div>
          </div>
        </body>
        </html>
        `,
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
