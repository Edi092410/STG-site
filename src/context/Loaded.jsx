import React, { createContext, useState } from "react";
export const LoadedContext = createContext();
export const Loaded = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadedContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadedContext.Provider>
  );
};
