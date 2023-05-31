
import React, { useState } from "react";
import Select, { components } from "react-select";


export const Selection = (prop) => {

  const Control = ({ children, ...props }) => (
    <components.Control {...props}>
      Click to Select → {children}
    </components.Control>
  );

  // const options = [
  //   {value: "STG", label: "stg"},
  //   {value: "NUM", label: "num"},
  //   {value: "MUST", label: "must"},
  //   {value: "EDU", label: "edu"},
  // ];

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? prop.selectedTextColor : prop.unselectedTextColor,
      backgroundColor: state.isSelected ? prop.selectedBgColor : prop.bgColor,
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: prop.bgColor,
      border: "none",
      boxShadow: "none",
      textColor: prop.textColor,
      height: prop.height
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  }
  
  const [selected, setSelected] = useState("");
  var handleChange = (selected) => {
    setSelected(selected.value);
  };

  return (
    <Select
      options={prop.options}
      styles={customStyles}
      conponents = {{ Control }}
      onChange={ handleChange }
    />
  );
}





        