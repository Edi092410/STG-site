import React, { useState, useContext, useEffect } from "react";
import { Main } from "../../layouts/Main";
import { Button } from "../Main/Button";
import { Box } from "../Main/Box";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ChooseProgram = () => {
  const [data, setData] = useState([]);

  const [selectedChips, setSelectedChips] = useState([]);

  const navigate = useNavigate();

  const toggleChip = (index, id) => {
    setSelectedChips((prevSelected) => {
      const updatedSelected = [...prevSelected];
      const currentChip = updatedSelected[index] || {}; // Initialize as an empty object if undefined
      updatedSelected[index] = {
        id: data[index].id,
        select: !currentChip.select, // Toggle the select property
      };
      return updatedSelected;
    });
  };

  useEffect(() => {
    const solutions = async () => {
      try {
        const data = await axios.get(
          "https://admin.e-siticom.com/api/solutions"
        );
        setData(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (localStorage.getItem("role")) navigate("/");
    solutions();
  }, []);

  const saveSelectedChips = () => {
    if (selectedChips.length !== 0) {
      SetSelected(true);
      localStorage.setItem("programmes", JSON.stringify(selectedChips));
      navigate("/test");
    } else {
      SetSelected(false);
      notify();
      setTimeout(() => {
        SetSelected(true);
      }, 1000); // Reset the animation after 1 second
    }
  };

  const [selected, SetSelected] = useState();

  const notify = () => {
    toast.warning("Та дор хаяж нэг бүтээгдэхүүн сонгоно уу!", {
      position: "top-center", // Change the position of the toast
      autoClose: 2000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };

  return (
    <Main
      head={
        "Өөрт тохирсон системийн тусламж, гарын авлага, сервис үйлчилгээ, Ня-Бо санхүүгийн контентийг сонгож аваарай"
      }
    >
      <div className="w-full h-full flex justify-center items-center 3xl:mt-[90px] mt-[50px]">
        <div className="w-[430px]">
          <Box>
            <div className="w-full h-full flex flex-col items-center justify-center px-[20%] py-[60px]">
              <div className="font-bold text-[#032D60] text-center ">
                Та аль програмын хэрэглэгч вэ? Дор хаяж нэг бүтээгдэхүүн сонгох
                хэрэгтэй.
              </div>
              <div className=" grid grid-cols-2 gap-[30px] mt-4 mb-8">
                {data &&
                  data.length > 0 &&
                  data.map((item, index) => (
                    <div
                      key={index}
                      className={`md:w-[120px] md:h-[60px] w-[100px] h-[50px] flex items-center justify-center rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] cursor-pointer ${
                        selectedChips[index]?.select
                          ? // selectedChips[index]
                            " transition duration-300 bg-slate-200"
                          : " transition duration-300 hover:scale-110"
                      } ${selected === false && " border border-red-500"} `}
                      onClick={() => {
                        toggleChip(index, item.id);
                      }}
                    >
                      <img src={item.image} alt={index} className="" />
                    </div>
                  ))}
              </div>
              <div
                className={`w-full h-10`}
                onClick={() => {
                  saveSelectedChips();
                }}
              >
                <Button name={"Сонгох"} />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </Main>
  );
};
