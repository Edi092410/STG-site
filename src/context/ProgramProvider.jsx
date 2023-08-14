import React, { createContext, useState } from "react";
export const ProgramContext = createContext();
export const ProgramProvider = ({children}) => {
  const [selectedChips, setSelectedChips] = useState([]);
  return (
    <ProgramContext.Provider value={{ selectedChips, setSelectedChips}}>
        {children}
    </ProgramContext.Provider>
  )
}


