import React, { useState, useEffect } from "react";
import { GetData } from "../Axios/Axios";

export default function Footer() {
  const [api, setApi] = useState([]);
  const [phone1, setPhone1] = useState("");
  const [address, setAddress] = useState("");
  const [email1, setEmail1] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetData("/settings");
        setApi(data);
        const phone1Value = data.find((element) => element.key === "phone1");
        const addressValue = data.find((element) => element.key === "address");
        const email1Value = data.find((element) => element.key === "email1");

        if (phone1Value) {
          setPhone1(phone1Value.value);
        }
        if (addressValue) {
          setAddress(addressValue.value);
        }
        if (email1Value) {
          setEmail1(email1Value.value);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="flex md:flex-row flex-col items-center justify-around md:h-[8vh] h-fit bg-[#2D3648] p-5 text-white text-xs">
      <div className="md:m-0 my-2">{phone1}</div>
      <div className="md:m-0 my-2 text-center">{address}</div>
      <div className="md:m-0 my-2">{email1}</div>
    </footer>
  );
}
