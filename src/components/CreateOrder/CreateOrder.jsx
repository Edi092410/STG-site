import React, { useState, useRef, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { CompanyNames } from "../CompanyNames/CompanyNames";
import { OrderContext } from "../../context/OrderProvider";
import { PostDataWithAuthorization } from "../../Axios/AxiosService2";
import { ServiceSelect } from "../ServiceSelect/ServiceSelect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Main/Button";
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
  const notify = ({ text, success }) => {
    {
      success
        ? toast.success(text, {
            position: "top-center", // Change the position of the toast
            autoClose: 1000, // Auto close the toast after 1 seconds
            hideProgressBar: true, // Hide the progress bar
            closeOnClick: true, // Close the toast when clicked
            draggable: true, // Allow dragging the toast
            className: "custom-toast", // Apply a custom CSS class to the toast
            bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
          })
        : toast.error(text, {
            position: "top-center", // Change the position of the toast
            autoClose: 1000, // Auto close the toast after 1 seconds
            hideProgressBar: true, // Hide the progress bar
            closeOnClick: true, // Close the toast when clicked
            draggable: true, // Allow dragging the toast
            className: "custom-toast", // Apply a custom CSS class to the toast
            bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
          });
    }
  };

  const onSubmit = async (e) => {
    if (selectedCompany !== "") {
      if (selectedOption !== "Санал хүсэлт") {
        setLoading(true);
        try {
          await PostDataWithAuthorization("/services/servicerequest", e);
          notify({ text: "Хүсэлт илгээгдлээ.", success: true });
          setRefresh((prev) => !prev);
          closeModal();
        } catch (err) {
          console.log("err", err);
          notify({ text: err.message, success: false });
        } finally {
          setLoading(false);
        }
      } else {
        delete e.servicetype;
        delete e.programcode;
        try {
          await PostDataWithAuthorization("/services/feedbackrequest", e);
          notify({ text: "Санал хүсэлт илгээгдлээ.", success: true });
          setRefresh((prev) => !prev);
          closeModal();
        } catch (err) {
          notify({ text: err.message, success: false });
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
    <div className="w-screen h-screen fixed top-0 left-0 bg-[#000000] bg-opacity-20 z-40">
      <div
        className="relative lg:mr-[20%] lg:ml-[20%] mr-[5%] ml-[5%] mt-[2%] mb-[2%] bg-white rounded-lg h-[90vh] overflow-y-auto"
        ref={menuRef}
      >
        <div className="p-[10%] pt-[5%]">
          <form className=" text-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full lg:w-1/2 h-fit md:h-[30px] md:mb-5">
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
            {/* <div className=" text-red-500 mt-8">
              {errors.customerId?.message}
            </div> */}
            {/* {selectedCompany === "" && (
              <div className="text-red-500 mt-8">Компаниа сонгоно уу</div>
            )} */}
            <div className="m-0 p-0 w-1/2"></div>

            <div className="md:pt-5 pb-2">Цахим шуудан</div>
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
                disabled={false}
              />
              <input type="hidden" {...register("serviceType")} />
            </div>
            <div className="flex flex-col lg:flex-row pt-5 pb-5 text-xs">
              <div className="w-full lg:w-1/2 pb-3">
                <div>
                  Холбогдох дугаар /{" "}
                  <span className="text-[10px]">
                    Хоёроос доошгүй дугаар оруулна уу
                  </span>
                </div>
                <input
                  className="w-full lg:w-[90%] h-[30px] border border-[#E1E1E1] pl-[15px]"
                  type="number"
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
                    className="w-full lg:w-[90%] h-[30px] border border-[#E1E1E1] pl-[15px]"
                    {...register("programcode")}
                  ></input>
                </div>
              )}
            </div>

            <div className="pb-2">Дэлгэрэнгүй тайлбар</div>
            <textarea
              className="w-full border border-[#E1E1E1] p-[15px] mb-2"
              rows={4}
              maxLength={2000}
              {...register("comment")}
            ></textarea>
            <div className="w-full">
              <div
                className="md:w-[20%] h-[40px] float-right"
                onClick={() => {
                  setValue("customerId", selectedCompany);
                  setValue("serviceType", selectedOption);
                  setValue("email", localStorage.getItem("email"));
                }}
              >
                <Button loading={loading} name={"Хадгалах"} />
              </div>
            </div>
          </form>
        </div>
        <div
          className="absolute top-5 right-5 w-[30px] h-[30px] bg-[rgba(0,0,0,0.25)] rounded-full text-white flex items-center justify-center cursor-pointer hover:scale-105 translition duration-300"
          onClick={() => {
            closeModal();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              fill="white"
            ></path>{" "}
          </svg>
        </div>
      </div>
    </div>
  );
};
