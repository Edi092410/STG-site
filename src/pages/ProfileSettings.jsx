import React from "react";
import { Outlet } from "react-router-dom";
import { ProfileSidebar } from "../components/ProfileSidebar/ProfileSidebar";

export const ProfileSettings = () => {
  return (
    <div className="flex justify-center items-center mt-[5vh] mb-[5vh]">
      <div className="flex w-[80vw] min-h-[90vh]">
        {/* <div className="hidden lg:block"> */}
        <ProfileSidebar />
        {/* </div> */}
        <Outlet />
      </div>
    </div>
  );
};
