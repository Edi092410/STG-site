import React, { useState, useEffect, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { State } from "../OrderList/OrderList";
import { CompanyNames } from "../CompanyNames/CompanyNames";
import { ServiceSelect } from "../ServiceSelect/ServiceSelect";
import { Notification } from "../Notification/Notification";
import { OrderContext } from "../OrderList/OrderProvider";
import { Loading } from "../Loading/Loading";
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
        const data = await axios.get(
          `/api/services/getservicelist?customerId=${selectedOption}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-type": "application/json",
            },
          }
        );
        console.log(number);
        console.log("order: ", data.data);
        console.log(
          "filtered: ",
          data.data.filter((OrderNumber) => OrderNumber.number === number)
        );
        const result = data.data.filter(
          (OrderNumber) => OrderNumber.number === number
        );
        console.log("Result:", result);
        setData(result);
      } catch (err) {
        console.log(err.response);
      }
      setLoading(false);
    };
    FetchData();

    console.log("Order data: ", data);
  }, [number]);

  // Захиалга цуцлах
  const deleteOrder = async () => {
    try {
      setLoading(true);
      axios.post(
        `/api/services/deleteservice?number=${number}&type=${type}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
          },
        }
      );
      setRefresh((prev) => !prev);
      setLoading(false);
      alert("Устгагдлаа");
      closeModal();
    } catch (err) {
      console.log(err.response);
    }
  };

  const onSubmit = async (e) => {
    console.log(e);
    console.log("Selected:", selected);
    if (selected !== "Санал хүсэлт") {
      setSubmitLoading(true);
      // setValue("serviceType", selected);
      try {
        axios.post("/api/services/servicerequest", e, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
          },
        });
        setSubmitLoading(false);
        alert("Хүсэлт засагдлаа");
        closeModal();
      } catch (err) {
        console.log(err.response);
      }
    } else {
      delete e.programCode;
      try {
        setSubmitLoading(true);
        axios.post("/api/services/feedbackrequest", e, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
          },
        });
        setSubmitLoading(false);
        alert("Санал хүсэлт засагдлаа");
        closeModal();
      } catch (err) {
        console.log(err.response);
      }
    }
  };
  return (
    <div className="w-screen h-screen absolute top-16 left-0 bg-slate-300 bg-opacity-50 z-20">
      <div
        className="mr-[20%] ml-[20%] mt-[2%] mb-[2%] bg-white rounded-lg h-[90vh] overflow-y-scroll"
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
                    <input type="hidden" {...register("customerId")} />
                  </div>

                  <div
                    className="ml-4"
                    style={props.serviceType === 0 ? { display: "none" } : null}
                  >
                    <div className="mb-1 md:mb-0 md:mt-4 lg:mt-0">
                      Захиалгын төлөв
                    </div>
                    <div className="flex items-center h-fit md:h-[50px]">
                      <State data={props.state} />
                      <div
                        className="text-red-500 ml-5 cursor-pointer"
                        onClick={() => {
                          setModal(true);
                        }}
                      >
                        Захиалга цуцлах
                      </div>
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
                  Захиалга үүсгэгч
                </div>
                <div className="lg:w-1/2 w-full flex h-[30px] bg-slate-200  pl-[15px] items-center ">
                  {localStorage.getItem("name")}{" "}
                  <span className=" text-blue-500 hidden md:inline">
                    / {localStorage.getItem("position")}
                  </span>
                </div>
                <div className="pt-4 pb-5">
                  <ServiceSelect
                    selectedOption={selected}
                    onSelectedChange={handleSelected}
                    selected={props.serviceType}
                  />
                  <input type="hidden" {...register("serviceType")} />
                </div>
                <div className="pb-2">Дэлгэрэнгүй тайлбар</div>
                <textarea
                  className="w-full border border-slate-500 p-[15px] mb-2"
                  rows={4}
                  maxLength={2000}
                  defaultValue={props.comment}
                  {...register("comment")}
                ></textarea>
                <div
                  className="w-full lg:w-1/2 pb-3"
                  style={props.serviceType === 0 ? { display: "none" } : null}
                >
                  <div>
                    Холбогдох программын код /{" "}
                    <span className="text-[10px]">Anydesk, Teamviewer</span>
                  </div>
                  <input
                    className="w-full lg:w-[90%] h-[30px] border border-slate-500 pl-[15px]"
                    value={props.programCode}
                    {...register("programCode")}
                  ></input>
                </div>
                <div
                  className="flex flex-col lg:flex-row pt-5 pb-5 "
                  style={props.serviceType === 0 ? { display: "none" } : null}
                >
                  <div className="w-full lg:w-1/2 pb-3">
                    <div className="">Хариуцсан ажилтан</div>
                    <div className="w-full lg:w-[90%] h-[30px] border border-slate-500 pl-[15px]flex justify-center items-center">
                      {props.servedUser}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 pb-3">
                    <div className="">
                      Хариуцсан ажилтан таны дуудлагаас гадна
                    </div>
                    <div className="w-full lg:w-[90%] h-[30px] border border-slate-500 pl-[15px] rounded-3xl flex justify-center items-center">
                      {props.servedUserCount} захиалгатай байна
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-[100px] h-[50px] rounded-[30px] bg-slate-500 text-white float-right"
                  onClick={() => {
                    setValue("customerId", selectedCompany);
                    setValue("number", number);
                    console.log(selected);
                    setValue("serviceType", selected);
                  }}
                >
                  Хадгалах
                </button>
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
            StateFunction={deleteOrder}
          />
        )}
        {submitLoading && <Loading />}
      </div>
    </div>
  );
};
