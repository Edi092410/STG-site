import React from "react";
import { Slogan } from "../components/Slogan/Slogan";
import { SearchBar } from "../components/SearchBar.jsx/SearchBar";
import { HeaderWithNavbar } from "../layouts/HeaderWithNavbar";
import Footer from "../layouts/Footer";
import { SectionName } from "../components/SectionName/SectionName";
import { RightSection } from "../components/RightSection/RightSection";
import { LeftSection } from "../components/LeftSection/LeftSection";
export const PublicPage = () => {
  return (
    <div>
      <HeaderWithNavbar />
      <div className=" pl-[15%] pr-[15%]">
        <SearchBar />
        <Slogan />
        <SectionName />
        <RightSection />
        <LeftSection />
      </div>
      <Footer />
    </div>
  );
};
