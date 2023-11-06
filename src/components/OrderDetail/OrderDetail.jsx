import React, { useState, useEffect, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { State } from "../OrderList/OrderList";
import { CompanyNames } from "../CompanyNames/CompanyNames";
import { ServiceSelect } from "../ServiceSelect/ServiceSelect";
import { Notification } from "../Notification/Notification";
import { OrderContext, OrderProvider } from "../../context/OrderProvider";
import { Loading } from "../Loading/Loading";
import {
  GetDataWithAuthorization,
  PostDataWithAuthorization,
} from "../../Axios/AxiosService2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Main/Button";
export const OrderDetail = ({ closeModal, number, selectedOption, type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [data, setData] = useState([]);
  // companynames component-ээс ирж буй утгыг хадгалах
  const [selectedCompany, setSelectedCompany] = useState(""); // Сонгогдсон company-ны
  const handleSelectedCompany = (selectedCompany) => {
    setSelectedCompany(selectedCompany);
  };

  const { setRefresh } = useContext(OrderContext);
  const [modal, setModal] = useState(false);

  const [selected, setSelected] = useState({});
  const handleSelected = (selected) => {
    setSelected(selected);
  };

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
  // Form-н өмнө бөглөгдсөн мэдээллүүдийг авах
  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const data = await GetDataWithAuthorization(
          `/services/getservicelist?customerId=${selectedOption}`
        );
        const result = data.data.filter(
          (OrderNumber) => OrderNumber.number === number
        );
        setData(result);
      } catch (err) {
        notify({ text: err.message, success: false });
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [number]);

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
  // Захиалга цуцлах
  const deleteOrder = async () => {
    try {
      await PostDataWithAuthorization(
        `/services/deleteservice?number=${number}&type=${type}`,
        {}
      );
      notify({ text: "Устгагдлаа", success: true });
      closeModal();
      setRefresh((prev) => !prev);
    } catch (err) {
      notify({ text: err.message, success: false });
    }
  };

  const onSubmit = async (e) => {
    setSubmitLoading(true);
    if (selected !== "Санал хүсэлт") {
      try {
        await PostDataWithAuthorization("/services/servicerequest", e);
        notify({ text: "Хүсэлт засагдлаа.", success: true });
        setRefresh((prev) => !prev);
        setSubmitLoading(false);
        closeModal();
      } catch (err) {
        notify({ text: err.message, success: false });
      }
    } else {
      delete e.programCode;
      try {
        setSubmitLoading(true);
        await PostDataWithAuthorization("/services/feedbackrequest", e);
        notify({ text: "Санал хүсэлт засагдлаа.", success: true });
        setRefresh((prev) => !prev);
        setSubmitLoading(false);
        closeModal();
      } catch (err) {
        notify({ text: err.message, success: false });
      }
    }
  };

  return (
    <OrderProvider>
      <div className="w-screen h-screen fixed top-0 left-0 bg-slate-300 bg-opacity-50 z-30">
        <div
          className="relative lg:mx-[20%] mx-[5%] mt-[2%] mb-[2%] bg-white rounded-lg h-[90vh] overflow-y-auto"
          ref={menuRef}
        >
          {data.length > 0 ? (
            data.map((props) => (
              <div className="p-[10%] pt-[5%]">
                <form className=" text-sm" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 h-fit md:h-[30px] mb-5 md: mb">
                      <input type="hidden" {...register("number")} />
                      <CompanyNames
                        selectedOption={selectedCompany}
                        onSelectedChange={handleSelectedCompany}
                        selected={props.customerId}
                      />
                      <input
                        type="hidden"
                        {...register("customerId", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="ml-0 mb-4 md:ml-16 md:mb-0">
                      <div className="mb-1 md:mb-0 md:mt-4 lg:mt-0">
                        Захиалгын төлөв
                      </div>
                      <div className="flex items-center h-fit md:h-[50px]">
                        <State data={props.state} />
                        {!props.servedUser && props.state === 0 && (
                          <div
                            className="text-red-500 ml-5 cursor-pointer"
                            onClick={() => {
                              setModal(true);
                            }}
                          >
                            Захиалга цуцлах
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="m-0 p-0 w-1/2"></div>

                  <div
                    className=" pb-2"
                    style={
                      props.serviceType === 0 ? { "margin-top": "16px" } : null
                    }
                  >
                    Цахим шуудан
                  </div>
                  <div className="lg:w-1/2 w-full flex h-[30px] bg-[#D9D9D9]  pl-[15px] items-center ">
                    {props.email}
                    <input type="hidden" {...register("email")} />
                  </div>
                  <div className="pt-4 pb-5">
                    <ServiceSelect
                      selectedOption={selected}
                      onSelectedChange={handleSelected}
                      selected={props.serviceType}
                      disabled={props.state !== 0}
                    />
                    <input type="hidden" {...register("serviceType")} />
                  </div>
                  <div className="pb-2">Дэлгэрэнгүй тайлбар</div>
                  <textarea
                    className="w-full border border-[#E1E1E1] p-[15px] mb-2"
                    rows={4}
                    maxLength={2000}
                    defaultValue={props.comment}
                    disabled={props.state !== 0}
                    {...register("comment")}
                  ></textarea>
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
                        defaultValue={props.phone}
                        disabled={props.state !== 0}
                        {...register("phone", {
                          required: true,
                        })}
                      ></input>
                    </div>
                    {!(
                      props.serviceType === 0 && selected === "Санал хүсэлт"
                    ) && (
                      <div className="w-full lg:w-1/2 pb-3">
                        <div>
                          Холбогдох программын код /{" "}
                          <span className="text-[10px]">
                            Anydesk, Teamviewer
                          </span>
                        </div>
                        <input
                          className="w-full lg:w-[90%] h-[30px] border border-[#E1E1E1] pl-[15px]"
                          defaultValue={props.programCode}
                          disabled={props.state !== 0}
                          {...register("programcode")}
                        ></input>
                      </div>
                    )}
                  </div>

                  {!(
                    props.serviceType === 0 && selected === "Санал хүсэлт"
                  ) && (
                    <div className="flex flex-col lg:flex-row pt-5 pb-5 ">
                      <div className="w-full lg:w-1/2 pb-3">
                        <div className="">Хариуцсан ажилтан</div>
                        <div className="w-full lg:w-[90%] h-[30px] border border-[#E1E1E1] pl-[15px] flex items-center">
                          {props.servedUser}
                        </div>
                      </div>
                      {props.servedUserCount > 0 && (
                        <div className="w-full lg:w-1/2 pb-3">
                          <div className="">
                            Хариуцсан ажилтан таны дуудлагаас гадна
                          </div>
                          <div className="w-full lg:w-[90%] h-[30px] pl-[15px] flex items-center">
                            <p className="px-2 bg-[#FAA61A] rounded-2xl mr-2">
                              {props.servedUserCount}
                            </p>
                            <p>захиалгатай байна</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {props.state === 0 && (
                    <div className="w-full">
                      <div
                        className="md:w-[20%] h-10 float-right"
                        onClick={() => {
                          setValue("customerId", selectedCompany);
                          setValue("number", number);
                          setValue("serviceType", selected);
                          setValue("email", props.email);
                        }}
                      >
                        <Button loading={submitLoading} name={"Хадгалах"} />
                      </div>
                    </div>
                  )}
                </form>
              </div>
            ))
          ) : (
            <Loading />
          )}
          {modal && (
            <Notification
              name="Та захиалгаа цуцлахыг зөвшөөрч байна уу?"
              button="Тийм"
              closeModal={() => setModal(false)}
              stateFunction={deleteOrder}
            />
          )}
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
    </OrderProvider>
  );
};
