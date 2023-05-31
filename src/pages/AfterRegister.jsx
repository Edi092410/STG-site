import React from "react";
import { RequestList } from "../components/RequestList/RequestList";
import { SearchBar } from "../components/SearchBar.jsx/SearchBar";
import { SectionName } from "../components/SectionName/SectionName";
import { RightSection } from "../components/RightSection/RightSection";
import { LeftSection } from "../components/LeftSection/LeftSection";
//import { Notification } from "../components/Notification/Notification";
export const AfterRegister = () => {
  return (
    <div>
        <div className=" pl-[15%] pr-[15%]">
          <SearchBar />
          <RequestList />
          <SectionName />
          <RightSection />
          <LeftSection />
          
        </div>  
    </div>
  );
};
