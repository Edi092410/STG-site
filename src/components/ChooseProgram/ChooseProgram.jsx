import React, { useState, useContext } from "react";
import { Main } from "../../layouts/Main";
import { Button } from "../Main/Button";
import { Box } from "../Main/Box";
import acalous from "../../Assets/ChooseProgram/acalous.png";
import fiscus from "../../Assets/ChooseProgram/fiscus.png";
import leader from "../../Assets/ChooseProgram/leader.png";
import payroll from "../../Assets/ChooseProgram/payroll.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ProgramContext } from "../../context/ProgramProvider";
import { useNavigate } from "react-router-dom";

export const ChooseProgram = () => {
  const data = [
    {
      name: "acolous",
      img: acalous,
      width: "40px",
      height: "34px",
      id: 0,
    },
    {
      name: "fiscus",
      img: fiscus,
      width: "32px",
      height: "35px",
      id: 1,
    },
    {
      name: "leader",
      img: leader,
      width: "38px",
      height: "32px",
      id: 2,
    },
    {
      name: "payrol",
      img: payroll,
      width: "37px",
      height: "32px",
      id: 3,
    },
  ];

  const [selectedChips, setSelectedChips] = useState([]);
  // const { selectedChips, setSelectedChips } = useContext(ProgramContext);
  // console.log("local storage:", localStorage.getItem("programmes"));

  // useeffect

  const toggleChip = (index) => {
    setSelectedChips((prevSelected) => {
      const updatedSelected = [...prevSelected];
      updatedSelected[index] = !updatedSelected[index];
      // console.log("Index:", (updatedSelected[index] = !updatedSelected[index]));
      return updatedSelected;
    });
  };

  // const saveSelectedChips = () => {
  //   const selectedChipNames = data
  //     .filter((item, index) => selectedChips[index])
  //     .map((item) => item.id);
  //   if (selectedChipNames.length !== 0) {
  //     SetSelected(true);
  //     // navigate("/service/list");
  //     console.log("Iffffff");
  //     console.log("selected chips:", selectedChips);
  //     localStorage.setItem("programmes", JSON.stringify(selectedChipNames));
  //     console.log("local storage:", localStorage.getItem("programmes"));
  //     navigate("/test");
  //   } else {
  //     SetSelected(false);
  //     notify();
  //     setTimeout(() => {
  //       SetSelected(true);
  //     }, 1000); // Reset the animation after 1 second
  //   }
  // };

  const saveSelectedChips = () => {
    if (selectedChips.length !== 0) {
      SetSelected(true);
      // navigate("/service/list");
      console.log("Iffffff");
      console.log("selected chips:", selectedChips);
      localStorage.setItem("programmes", JSON.stringify(selectedChips));
      console.log("local storage:", localStorage.getItem("programmes"));
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

  const navigate = useNavigate();

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
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`w-[120px] h-[60px] flex items-center justify-center rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] cursor-pointer ${
                      selectedChips[index]
                        ? " transition duration-300 bg-slate-200"
                        : " transition duration-300 hover:scale-110"
                    } ${selected === false && " border border-red-500"} `}
                    onClick={() => toggleChip(index)}
                  >
                    <img
                      src={item.img}
                      alt={index}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                ))}
              </div>
              <div
                className={`w-full `}
                onClick={() => {
                  saveSelectedChips();
                }}
              >
                <Button name={"Сонгох"} />
              </div>

              {/* {selected == false && <div className='gal w-full text-center mt-4'>Та дор хаяж нэг бүтээгдэхүүн сонгоно уу!</div>} */}
            </div>
          </Box>
        </div>
      </div>
    </Main>
  );
};
