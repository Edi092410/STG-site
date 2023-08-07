import React, { createContext, useState } from "react";
export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  return (
    <ToastContext.Provider value={{ showToast, setShowToast }}>
      {children}
    </ToastContext.Provider>
  );
};
