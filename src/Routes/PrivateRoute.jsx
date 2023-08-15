import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const user = localStorage.getItem("name");
  return user ? <Outlet /> : <Navigate to="/login" />;
};
