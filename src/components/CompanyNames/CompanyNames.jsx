import React, { useState, useEffect, useRef } from "react";

import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
export const CompanyNames = ({
  selectedOption,
  onSelectedChange,
  selected,
}) => {
  const handleSelectedChange = (e) => {
    onSelectedChange(e.target.value);
  };

  const companies = JSON.parse(localStorage.getItem("companies"));
  // const companies = company.data;

  // Set the selected option on component render
  useState(() => {
    if (selected) {
      onSelectedChange(selected);
    }
  }, [selected, onSelectedChange]);

  useEffect(() => {
    // Set the selected option on component render
    if (selected) {
      onSelectedChange(selected);
    }
  }, []);

  const [isOpened, setIsOpened] = useState(false);
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
    <div className="w-full text-[14px]">
      <div className="mb-2">Компани</div>
      <div
        className="relative inline-block"
        ref={menuRef}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <select
          className=" appearance-none w-full md:w-[325px] h-[30px] border bg-[#D9D9D9] pl-[15px] float-left text-center text-[#0074E0] pr-14"
          value={selectedOption}
          onChange={handleSelectedChange}
        >
          <option>Компани аа сонгоно уу!</option>
          {companies && companies.length > 0 ? (
            companies.map((prop) => (
              <option
                value={prop.customerId}
                key={prop.customerId}
                className="text-sm"
              >
                {prop.name}
              </option>
            ))
          ) : (
            <option>Компани байхгүй байна</option>
          )}
        </select>
        <div className="absolute inset-y-4 right-0 flex items-center pr-10 pointer-events-none">
          {isOpened === true ? (
            <SlArrowUp className="w-3 h-3 cursor-pointer" />
          ) : (
            <SlArrowDown className="w-3 h-3 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};
