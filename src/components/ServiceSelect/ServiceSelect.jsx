import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

export const ServiceSelect = ({
  selectedOption,
  onSelectedChange,
  selected,
}) => {
  const handleSelectedChange = (e) => {
    onSelectedChange(e.target.value);
  };

  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (selected !== undefined && selected !== null) {
      if (selected !== 0) {
        onSelectedChange(selected);
      } else {
        onSelectedChange("Санал хүсэлт");
      }
    }
  }, [selected, onSelectedChange]);

  const [option, setOption] = useState([]);

  // Өгөгдөл fetch хийж буйг харуулах
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await axios.get(
          // "https://service2.stg.mn/api/services/getservicetypes",
          "/api/services/getservicetypes",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-type": "application/json",
            },
          }
        );
        setOption(data.data);
        // onSelectedChange(option && option.length > 0 ? option[0].id : "");
        onSelectedChange(data.data && data.data.length > 0 && data.data[0].id);
      } catch (err) {
      } finally {
        setIsLoading(false);
        // onSelectedChange(option && option.length > 0 && option[0].id);
        // console.log(option && option.length > 0 && option[0].id);
      }
    };
    fetchData();
  }, []);

  // Энэ component-н гадна дарахад алга болгох funtion
  const menuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpened]);

  return (
    <div
      className="relative inline-block w-full h-[40px]"
      onClick={() => {
        setIsOpened(!isOpened);
      }}
      ref={menuRef}
    >
      <select
        className=" appearance-none w-full h-full border border-[#E1E1E1] focus:border-blue-500 pl-[15px] rounded"
        value={selectedOption}
        onChange={handleSelectedChange}
      >
        {isLoading ? (
          <option disabled value="Үйлчилгээ">
            Ачаалж байна
          </option>
        ) : (
          <>
            <optgroup label="Үйлчилгээ" className="text-[#0074E0]">
              {option.map((option) => {
                return (
                  <option
                    key={option.id}
                    value={option.id}
                    className="text-black"
                    // style="padding: 5px"
                  >
                    {option.name}
                  </option>
                );
              })}
            </optgroup>
            <optgroup label="Санал хүсэлт" className="text-[#0074E0]">
              <option className="text-black">Санал хүсэлт</option>
            </optgroup>
          </>
        )}
        {/* <option className=""></option> */}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-10 pointer-events-none">
        {isOpened === true ? (
          <SlArrowUp className="w-3 h-3 text-blue-500 cursor-pointer" />
        ) : (
          <SlArrowDown className="w-3 h-3 text-blue-500 cursor-pointer" />
        )}
      </div>
    </div>
  );
};
