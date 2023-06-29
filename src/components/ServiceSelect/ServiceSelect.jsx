import React, { useState } from "react";

export const ServiceSelect = ({
  selectedOption,
  onSelectedChange,
  selected,
}) => {
  const handleSelectedChange = (e) => {
    onSelectedChange(e.target.value);
  };

  useState(() => {
    if (selected !== 0) {
      onSelectedChange(selected);
    } else {
      onSelectedChange("Санал хүсэлт");
    }
  }, [selected, onSelectedChange]);
  return (
    <select
      className="w-full h-[40px] border border-slate-500 focus:border-blue-500 pl-[15px]"
      value={selectedOption}
      onChange={handleSelectedChange}
    >
      <optgroup label="Үйлчилгээ">
        <option value="19">Pkass</option>
        <option value="18">Fiscus</option>
        <option value="17">Pharmacy</option>
        <option value="10">Нэхэмжлэх</option>
        <option value="9">Эрх сунгах</option>
        <option value="7">Техник засвар</option>
        <option value="6">Leader</option>
        <option value="4">Plastic</option>
        <option value="3">Payroll</option>
        <option value="2">Acolous</option>
      </optgroup>
      <optgroup label="Санал хүсэлт">
        <option>Санал хүсэлт</option>
      </optgroup>
    </select>
  );
};
