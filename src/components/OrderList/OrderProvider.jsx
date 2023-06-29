import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  return (
    <OrderContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </OrderContext.Provider>
  );
};
