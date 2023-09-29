import React, { useEffect, useContext, useState } from "react";
import { GetData } from "../Axios/Axios";
import { Navbar } from "../components/Navbar/Navbar";
import { Menu } from "../components/ProfileMenu/Menu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Notification } from "../components/Notification/Notification";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChooseCompany } from "../components/CompanyNames/ChooseCompany";
import { CompanyContext } from "../context/CompanyProvider";
import { LoginPathContext } from "../context/LoginPathProvider";
export const HeaderUser = () => {
  const [api, setApi] = useState([]);
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const { pathName, handlePathName } = useContext(LoginPathContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetData("/settings");
        setApi(data.logo);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const { auth, setAuth } = useAuth();

  const notify = () => {
    toast.success("Системээс гарлаа", {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };
  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // const { selectedCompany, handleSelectedCompany } = useContext(CompanyContext);

  useEffect(() => {
    if (pathName === 1) {
      const timeoutId = setTimeout(() => {
        handlePathName(null);
        console.log("pathName changed to null");
      }, 10000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [pathName]);

  return (
    <div className="relative">
      <header className=" flex items-center justify-between 3xl:h-[100px] h-[60px] bg-[#2D3648]">
        <div className="absolute left-4 text-white md:hidden cursor-pointer">
          {isMenuOpen === true ? (
            <FaTimes onClick={() => setIsMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsMenuOpen(true)} />
          )}
        </div>

        <img
          src={`https://admin.e-siticom.com/assets/images/${api}`}
          alt="logo"
          className="3xl:w-[50px] 3xl:h-[50px] w-[40px] h-[40px] rounded-full  cursor-pointer ml-[35px]"
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <div
          className={`absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] mt-[370px] md:mt-0  lg:transition-all lg:duration-300 lg:ease-in-out  ${
            isMenuOpen
              ? "opacity-100 max-h-[400px] py-4"
              : "opacity-0 max-h-0 py-0"
          }`}
        >
          <Navbar isMenuOpen={isMenuOpen} />
        </div>

        <div className="flex text-slate-200 text-[12px] 3xl:text-[16px] mr-[35px]">
          <div className="flex ">
            {/* {user ? ( */}
            {auth ? (
              <>
                <ChooseCompany
                // selectedOption={selectedCompany}
                // onSelectedChange={handleSelectedCompany}
                />
                <Menu user={user} email={email} className="" />
              </>
            ) : (
              <div
                className="3xl:mr-[30px] mr-[20px]"
                onClick={() => handlePathName(1)}
              >
                <NavLink to="/login">Нэвтрэх</NavLink>
              </div>
            )}
          </div>
          {/* {!user && ( */}
          {!auth && (
            <div className="text-red-500">
              <NavLink to="/register">Бүртгүүлэх</NavLink>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
