import React, { useState, useRef, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { CompanyNames } from "../CompanyNames/CompanyNames";
import axios from "axios";
import { OrderContext } from "../OrderList/OrderProvider";
import { PulseLoader } from "react-spinners";
export const CreateOrder = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm();

  const { setRefresh } = useContext(OrderContext);
  const [loading, setLoading] = useState(false);

  const [selectedOption, setSelectedOption] = useState(""); // Үйлчигээний
  // companynames component-ээс ирж буй утгыг хадгалах
  const [selectedCompany, setSelectedCompany] = useState(""); // Сонгогдсон company-ны
  const handleSelectedCompany = (selectedCompany) => {
    setSelectedCompany(selectedCompany);
  };

  const onSubmit = async (e) => {
    console.log("data: ", e);
    console.log("Selected option:", selectedOption);
    console.log("Selected company:", selectedCompany);
    if (selectedCompany !== "") {
      if (watchOption !== "Санал хүсэлт") {
        setLoading(true);
        try {
          await axios.post("/api/services/servicerequest", e, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-type": "application/json",
            },
          });
          alert("Хүсэлт илгээгдлээ");
          setRefresh((prev) => !prev);
          closeModal();
        } catch (err) {
          console.log(err.response);
        }
      } else {
        delete e.servicetype;
        delete e.programcode;
        try {
          await axios.post("/api/services/feedbackrequest", e, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-type": "application/json",
            },
          });
          setLoading(false);
          alert("Санал хүсэлт илгээгдлээ");
          setRefresh((prev) => !prev);
          closeModal();
        } catch (err) {
          console.log(err.response);
        }
      }
    } else {
      console.log("reight there");
    }
  };
  // Энэ component-н гадна дарахад алга болгох funtion
  const menuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeModal();
      }
      // console.log(menuRef.current && !menuRef.current.contains(event.target));
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  const watchOption = watch("servicetype");

  return (
    <div className="w-screen h-screen absolute top-16 left-0 bg-slate-300 bg-opacity-50 z-20">
      <div
        className="mr-[20%] ml-[20%] mt-[2%] mb-[2%] bg-white rounded-lg h-[90vh] overflow-y-scroll"
        ref={menuRef}
      >
        <div className="p-[10%] pt-[5%]">
          <form className=" text-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full lg:w-1/2 h-fit md:h-[30px] mb-5">
              <CompanyNames
                selectedOption={selectedCompany}
                onSelectedChange={handleSelectedCompany}
              />
              <input type="hidden" {...register("customerId")} />
            </div>
            {selectedCompany === "" && (
              <div className="text-red-500 mt-8">Компаниа сонгоно уу</div>
            )}
            <div className="m-0 p-0 w-1/2"></div>

            <div className=" pt-5 pb-2">Захиалга үүсгэгч</div>
            <div className="w-full lg:w-1/2 flex h-[30px] bg-slate-200  pl-[15px] items-center">
              {localStorage.getItem("name")}{" "}
              <span className=" text-blue-500 hidden md:inline">
                / {localStorage.getItem("position")}
              </span>
            </div>
            <div className="pt-4 pb-5">
              <select
                className="w-full h-[40px] border border-slate-500 focus:border-blue-500 pl-[15px]"
                {...register("servicetype")}
              >
                <optgroup label="Үйлчилгээ">
                  <option value="19">Pkass</option>
                  <option value="18">Fiscus</option>
                  <option value="17">Pharmacy</option>
                  <option value="10">Нэхэмжлэх</option>
                  <option value="9">Эрх сунгах</option>
                  <option value="7">Техник засвар</option>
                  <option value="6">Leader</option>
                  <option value="4">Plastic</option>
                  <option value="3">Payroll</option>
                  <option value="2">Acolous</option>
                </optgroup>
                <optgroup label="Санал хүсэлт">
                  <option>Санал хүсэлт</option>
                </optgroup>
              </select>
            </div>
            <div>Мэйл хаяг</div>
            <input
              type="email"
              className="flex w-full lg:w-1/2 h-[30px] bg-slate-200 pl-[15px]"
              {...register("email")}
            ></input>
            <div className="flex flex-col lg:flex-row pt-5 pb-5 text-xs">
              <div className="w-full lg:w-1/2 pb-3">
                <div>
                  Холбогдох дугаар /{" "}
                  <span className="text-[10px]">
                    Хоёроос доошгүй дугаар оруулна уу
                  </span>
                </div>
                <input
                  className="w-full lg:w-[90%] h-[30px] border border-slate-500 pl-[15px]"
                  {...register("phone")}
                ></input>
              </div>
              {watchOption !== "Санал хүсэлт" && (
                <div className="w-full lg:w-1/2 pb-3">
                  <div>
                    Холбогдох программын код /{" "}
                    <span className="text-[10px]">Anydesk, Teamviewer</span>
                  </div>
                  <input
                    className="w-full lg:w-[90%] h-[30px] border border-slate-500 pl-[15px]"
                    {...register("programcode")}
                  ></input>
                </div>
              )}
            </div>

            <div className="pb-2">Дэлгэрэнгүй тайлбар</div>
            <textarea
              className="w-full border border-slate-500 p-[15px] mb-2"
              rows={4}
              {...register("comment")}
            ></textarea>
            <button
              type="submit"
              className="w-[100px] h-[50px] rounded-[30px] bg-slate-500 text-white float-right"
              onClick={() => {
                setSelectedOption(getValues("servicetype"));
                setValue("customerId", selectedCompany);
              }}
              disabled={loading}
            >
              {loading ? <PulseLoader color="#fff" size={5} /> : "Хадгалах"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
