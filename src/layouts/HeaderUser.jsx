import React, { useEffect, useRef, useState } from "react";
import { GetData } from "../Axios/Axios";
import { Navbar } from "../components/Navbar/Navbar";
import { Menu } from "../components/ProfileMenu/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Notification } from "../components/Notification/Notification";

export const HeaderUser = (props) => {
  const [api, setApi] = useState([]);
  const [modal, setModal] = useState(false);
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

  const { setAuth } = useAuth();

  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    setAuth(false);
    navigate("/");
  };

  return (
    <>
      <header className="flex align-middle justify-around h-16 bg-slate-800 p-5">
        <img
          src={api.logo}
          alt="logo"
          className="rounded mr-auto pl-[10vw] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <Navbar />
        <div className="flex text-slate-200 text-xs pr-[8vw]">
          <div className="flex mr-2">
            {user ? (
              <Menu user={user} email={email} className=" h-4" />
            ) : (
              <div>
                <NavLink to="/login">Нэвтрэх</NavLink>
              </div>
            )}
          </div>
          {user ? (
            <div
              className="text-red-500 cursor-pointer"
              onClick={() => {
                setModal(true);
              }}
            >
              {/* <NavLink to="/">Гарах</NavLink> */}
              Гарах
            </div>
          ) : (
            <div className="text-red-500">
              <NavLink to="/register">Бүртгүүлэх</NavLink>
            </div>
          )}
        </div>
        {modal && (
          <Notification
            name="Та системээс гарах гэж байна?"
            button="Системээс гарах"
            closeModal={() => setModal(false)}
            path="/"
            StateFunction={logOut}
          />
        )}
      </header>
    </>
  );
};
