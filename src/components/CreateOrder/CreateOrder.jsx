import React, { useState, useRef, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { CompanyNames } from "../CompanyNames/CompanyNames";
import axios from "axios";
import { OrderContext } from "../../context/OrderProvider";
import { PulseLoader } from "react-spinners";
import { ServiceSelect } from "../ServiceSelect/ServiceSelect";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const CreateOrder = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { setRefresh } = useContext(OrderContext);
  const [loading, setLoading] = useState(false);

  const [selectedOption, setSelectedOption] = useState(); // Үйлчигээний
  const handleSelected = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  // companynames component-ээс ирж буй утгыг хадгалах
  const [selectedCompany, setSelectedCompany] = useState(""); // Сонгогдсон company-ны
  const handleSelectedCompany = (selectedCompany) => {
    setSelectedCompany(selectedCompany);
  };
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
    if (selectedCompany !== "") {
      if (selectedOption !== "Санал хүсэлт") {
        setLoading(true);
        try {
          await axios.post(
            // "https://service2.stg.mn/api/services/servicerequest",
            "/api/services/servicerequest",
            e,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json",
              },
            }
          );
          // alert("Хүсэлт илгээгдлээ");
          notify("Хүсэлт илгээгдлээ.");
          setRefresh((prev) => !prev);
          closeModal();
        } catch (err) {
        } finally {
          setLoading(false);
        }
      } else {
        delete e.servicetype;
        delete e.programcode;
        try {
          await axios.post(
            // "https://service2.stg.mn/api/services/feedbackrequest",
            "/api/services/feedbackrequest",
            e,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json",
              },
            }
          );
          // alert("Санал хүсэлт илгээгдлээ");
          notify("Санал хүсэлт илгээгдлээ.");
          setRefresh((prev) => !prev);
          closeModal();
        } catch (err) {
        } finally {
          setLoading(false);
        }
      }
    }
  };
  // Энэ component-н гадна дарахад алга болгох funtion
  const menuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-[#000000] bg-opacity-20 z-20">
      <div
        className="lg:mr-[20%] lg:ml-[20%] mr-[10%] ml-[10%] mt-[2%] mb-[2%] bg-white rounded-lg h-[90vh] overflow-y-auto"
        ref={menuRef}
      >
        <div className="p-[10%] pt-[5%]">
          <form className=" text-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full lg:w-1/2 h-fit md:h-[30px] mb-5">
              <div className="">
                <CompanyNames
                  selectedOption={selectedCompany}
                  onSelectedChange={handleSelectedCompany}
                />
              </div>

              <input
                type="hidden"
                {...register("customerId", {
                  required: "Компаниа сонгоно уу!",
                })}
              />
            </div>
            <div className=" text-red-500 mt-8">
              {errors.customerId?.message}
            </div>
            {/* {selectedCompany === "" && (
              <div className="text-red-500 mt-8">Компаниа сонгоно уу</div>
            )} */}
            <div className="m-0 p-0 w-1/2"></div>

            <div className=" pt-5 pb-2">Цахим шуудан</div>
            <div className="w-full lg:w-1/2 flex h-[30px] bg-[#D9D9D9] pl-[15px] items-center text-gray-400 mb-5">
              {localStorage.getItem("email")}
              <input type="hidden" {...register("email")} />
              {/* <span className=" text-blue-500 hidden md:inline">
                / {localStorage.getItem("position")}
              </span> */}
            </div>
            <div className="">
              <ServiceSelect
                selectedOption={selectedOption}
                onSelectedChange={handleSelected}
              />
              <input type="hidden" {...register("serviceType")} />
            </div>
            {/* <div>Мэйл хаяг</div>
            <input
              type="email"
              className="flex w-full lg:w-1/2 h-[30px] bg-slate-200 pl-[15px]"
              {...register("email", {
                required: "Та email хаягаа оруулна уу!",
              })}
            ></input>
            <div className=" text-red-500">{errors.email?.message}</div> */}
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
                  {...register("phone", {
                    required: "Та утасны дугаараа оруулна уу!",
                  })}
                ></input>
                <div className=" text-red-500">{errors.phone?.message}</div>
              </div>
              {selectedOption !== "Санал хүсэлт" && (
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
              maxLength={2000}
              {...register("comment")}
            ></textarea>
            <button
              type="submit"
              className="w-[80px] h-[40px] rounded-[30px] bg-slate-500 text-white float-right text-xs flex items-center justify-center"
              onClick={() => {
                // setSelectedOption(getValues("servicetype"));
                setValue("customerId", selectedCompany);
                setValue("serviceType", selectedOption);
                setValue("email", localStorage.getItem("email"));
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
