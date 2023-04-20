import React from "react";

export const Main = () => {
  return (
    <div className="flex justify-center min-h-[80vh]  items-center">
      <div className="w-96">
        <div className="float-left text-xl font-bold mb-5">
          Шинээр хэрэглэгчээр бүртгүүлэх
        </div>
        <div className=" float-left text-blue-500 font-bold mb-3">
          Цахим шуудан
        </div>
        <input
          type="text"
          className="w-full h-12  border border-gray-600"
        ></input>
        <div className="hidden float-left text-red-500 mt-3">
          Таны цахим шуудан бүртгэлтэй байгаа тул{" "}
          <span className="text-black">Нэвтрэх</span> хэсэгт хандах эсвэл өөр
          хаягаар бүргүүлнэ үү.
        </div>
        <div className=" float-left text-blue-500 font-bold mb-3 mt-5">
          Нууц үг үүсгэх
        </div>
        <input
          type="password"
          className="w-full h-12 border  border-gray-600"
        ></input>
        <br></br>
        <div className=" mt-5 mb-5">
          <input type="checkbox" className="mr-2"></input>
          <span>Үйлчилгээний нөхцлийг зөвшөөрч байна</span>
        </div>
        <button className=" w-full h-12 bg-red-600 text-white rounded-3xl">
          БҮРТГҮҮЛЭХ
        </button>
      </div>
    </div>
  );
};
