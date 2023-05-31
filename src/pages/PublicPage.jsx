import React from "react";
import { Slogan } from "../components/Slogan/Slogan";
import { SearchBar } from "../components/SearchBar.jsx/SearchBar";
import { SectionName } from "../components/SectionName/SectionName";
import { RightSection } from "../components/RightSection/RightSection";
import { LeftSection } from "../components/LeftSection/LeftSection";
// import { Link } from "react-router-dom";
export const PublicPage = () => {
  return (
    <div>
      <div className=" pl-[15%] pr-[15%]">
        <SearchBar />
        <Slogan />
        <SectionName />
        <RightSection />
        <LeftSection />
      </div>
    </div>
  );
};
