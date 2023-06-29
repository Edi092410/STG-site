import React, { useState } from "react";

export const CompanyNames = ({
  selectedOption,
  onSelectedChange,
  selected,
}) => {
  const handleSelectedChange = (e) => {
    onSelectedChange(e.target.value);
  };

  const companies = JSON.parse(localStorage.getItem("companies"));

  // Set the selected option on component render
  useState(() => {
    if (selected) {
      onSelectedChange(selected);
    }
  }, [selected, onSelectedChange]);

  return (
    <>
      <div className="mb-2">Компани</div>
      <select
        className="w-full h-full border bg-slate-300 pl-[15px] float-left text-center text-blue-500"
        value={selectedOption}
        onChange={handleSelectedChange}
      >
        <option></option>
        {companies.map((prop) => (
          <option value={prop.customerId} key={prop.customerId}>
            {prop.name}
          </option>
        ))}
      </select>
    </>
  );
};
