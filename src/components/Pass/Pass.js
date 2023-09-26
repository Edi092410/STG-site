import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Pass = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("role")) navigate("/");
    else window.open("/program", "_blank", "noreferrer");
  }, []);
};
