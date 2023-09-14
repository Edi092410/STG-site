import React, { createContext, useState } from "react";
export const PaymentContext = createContext();
export const PaymentProvider = ({ children }) => {
  const [number, setNumber] = useState("");
  return (
    <PaymentContext.Provider value={{ number, setNumber }}>
      {children}
    </PaymentContext.Provider>
  );
};
