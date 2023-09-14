import React, { createContext, useState } from "react";
export const TimeFilterContext = createContext();
export const TimeFilterProvider = ({ children }) => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(currentYear);
  const handleTime = (time) => {
    setTime(time);
  };
  return (
    <TimeFilterContext.Provider value={{ time, setTime, handleTime }}>
      {children}
    </TimeFilterContext.Provider>
  );
};
