import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const LoginStatus = () => {
  const user = localStorage.getItem("name");
  return user ? <Navigate to="/" /> : <Outlet />;
};
