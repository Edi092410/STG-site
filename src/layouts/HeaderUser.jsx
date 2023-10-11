import React, { useEffect, useContext, useState, useRef } from "react";
import { GetData } from "../Axios/Axios";
import { Navbar } from "../components/Navbar/Navbar";
import { Menu } from "../components/ProfileMenu/Menu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChooseCompany } from "../components/CompanyNames/ChooseCompany";
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

  const { auth } = useAuth();

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

  const [isOpened, setIsOpened] = useState(false);
  // Энэ component-н гадна дарахад алга болгох funtion
  const menuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpened]);

  return (
    <div className="relative">
      <header className=" flex items-center justify-between 3xl:h-[80px] h-[60px] bg-[#2D3648]">
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
          className={`absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] top-[60px] lg:ease-in-out z-30 ${
            isMenuOpen ? "opacity-100 max-h-[400px] " : "opacity-0 max-h-0 py-0"
          }`}
          ref={menuRef}
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          <Navbar isMenuOpen={isMenuOpen} />
        </div>

        <div className="flex text-slate-200 text-[12px] 3xl:text-[16px] mr-[35px]">
          <div className="flex ">
            {/* {user ? ( */}
            {auth ? (
              <>
                <div className="md:w-full w-[60%] truncate mr-4">
                  <ChooseCompany />
                </div>

                <Menu user={user} email={email} className="" />
              </>
            ) : (
              <div
                className="3xl:mr-[30px] mr-[20px]"
                onClick={() => handlePathName(1)}
              >
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "pb-[5px] border-b-2 border-white transition-all duration-300"
                      : "hover:pb-[5px] hover:border-b-2 hover:border-white transition-all duration-300"
                  }
                >
                  Нэвтрэх
                </NavLink>
              </div>
            )}
          </div>
          {/* {!user && ( */}
          {!auth && (
            <div className="text-red-500">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "pb-[5px] border-b-2 border-red-500 transition-all duration-300"
                    : "hover:pb-[5px] hover:border-b-2 hover:border-red-500 transition-all duration-300"
                }
              >
                Бүртгүүлэх
              </NavLink>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
