import React, { createContext, useState } from "react";
export const LoginPathContext = createContext();
export const LoginPathProvider = ({ children }) => {
  const [pathName, setPathName] = useState("");
  const handlePathName = (pathName) => {
    setPathName(pathName);
  };
  return (
    <LoginPathContext.Provider value={{ pathName, handlePathName }}>
      {children}
    </LoginPathContext.Provider>
  );
};
