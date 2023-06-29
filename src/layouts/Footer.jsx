import React, { useState, useEffect } from "react";
import { GetData } from "../Axios/Axios";

export default function Footer() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetData("/settings");
        console.log("Data:", data);
        setApi(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="flex align-middle justify-around h-16 bg-slate-800 p-5 text-white text-xs ">
      <div>{api.phone1}</div>
      <div>{api.address}</div>
      <div>{api.email1}</div>
    </footer>
  );
}
