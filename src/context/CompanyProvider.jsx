import React, { createContext, useState } from "react";
export const CompanyContext = createContext();
export const CompanyProvider = ({ children }) => {
  // companynames component-ээс ирж буй утгыг хадгалах
  const [selectedCompany, setSelectedCompany] = useState(""); // Сонгогдсон company-ны
  const handleSelectedCompany = (selectedCompany) => {
    setSelectedCompany(selectedCompany);
  };
  return (
    <CompanyContext.Provider value={{ selectedCompany, handleSelectedCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
