import React from "react";
import { RequestList } from "../components/RequestList/RequestList";
import { SearchBar } from "../components/SearchBar.jsx/SearchBar";
import { HeaderUser } from "../layouts/HeaderUser";
import Footer from "../layouts/Footer";
import { SectionName } from "../components/SectionName/SectionName";
import { RightSection } from "../components/RightSection/RightSection";
import { LeftSection } from "../components/LeftSection/LeftSection";
export const AfterRegister = () => {
  return (
    <div>
      <div>
        <HeaderUser />
        <div className=" pl-[15%] pr-[15%]">
          <SearchBar />
          <RequestList />
          <SectionName />
          <RightSection />
          <LeftSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};
