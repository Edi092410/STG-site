import React, { useState, useEffect, useRef, useContext } from "react";
import { CompanyContext } from "../../context/CompanyProvider";
export const ChooseCompany = ({
  // selectedOption,
  // onSelectedChange,
  selected,
}) => {
  const handleSelectedChange = (e) => {
    // onSelectedChange(e.target.value);
    handleSelectedCompany(e.target.value);
  };
  const { selectedCompany, handleSelectedCompany } = useContext(CompanyContext);

  const companies = JSON.parse(localStorage.getItem("companies"));

  // Set the selected option on component render
  useEffect(() => {
    if (selected) {
      // onSelectedChange(selected);
      handleSelectedCompany(selected);
    }
  }, [selected, handleSelectedCompany]);

  useEffect(() => {
    handleSelectedCompany(
      companies && companies.length > 0 && companies[0].customerId
    );
  }, []);
  // [selected, onSelectedChange]
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
    <div className="w-fit text-[12px] 3xl:text-[16px] mr-4">
      {/* <div className="mb-2">Компани</div> */}
      <div
        className="relative inline-block"
        ref={menuRef}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <select
          className=" appearance-none w-fit h-[30px] bg-transparent text-white focus:outline-none pr-6 text-right cursor-pointer "
          // defaultValue={selectedCompany}
          defaultValue={selectedCompany}
          onChange={handleSelectedChange}
        >
          {/* <option>Компани аа сонгоно уу!</option> */}
          {companies && companies.length > 0 ? (
            companies.map((prop) => (
              <option
                value={prop.customerId}
                key={prop.customerId}
                className="text-black "
              >
                {prop.name.split("[")[0]}
              </option>
            ))
          ) : (
            <option>Компани байхгүй байна</option>
          )}
        </select>
        <div className="absolute inset-y-4 right-0 flex items-center pointer-events-none">
          {isOpened === true ? (
            <div className=" rotate-180 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.5081 15.1997L15.4781 13.2297L18.6881 10.0197C19.3581 9.33969 18.8781 8.17969 17.9181 8.17969H11.6881H6.07812C5.11812 8.17969 4.63812 9.33969 5.31812 10.0197L10.4981 15.1997C11.3181 16.0297 12.6781 16.0297 13.5081 15.1997Z"
                  fill="#DFE3EE"
                />
              </svg>
            </div>
          ) : (
            <div className=" cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.5081 15.1997L15.4781 13.2297L18.6881 10.0197C19.3581 9.33969 18.8781 8.17969 17.9181 8.17969H11.6881H6.07812C5.11812 8.17969 4.63812 9.33969 5.31812 10.0197L10.4981 15.1997C11.3181 16.0297 12.6781 16.0297 13.5081 15.1997Z"
                  fill="#DFE3EE"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
