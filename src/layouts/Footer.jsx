import React, { useState, useEffect } from "react";
import { GetData } from "../Axios/Axios";

export default function Footer() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetData("/settings");
        setApi(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <footer className="flex md:flex-row flex-col items-center justify-around md:h-[8vh] h-fit bg-[#2D3648] p-5 text-white text-xs">
      <div className="md:m-0 my-2">{api.phone1}</div>
      <div className="md:m-0 my-2 text-center">{api.address}</div>
      <div className="md:m-0 my-2">{api.email1}</div>
    </footer>
  );
}
