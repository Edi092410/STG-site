import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const PrivateRoute = () => {
  const { setAuth } = useAuth();
  const user = localStorage.getItem("name");
  return user ? <Outlet /> : <Navigate to="/login" />;
};
