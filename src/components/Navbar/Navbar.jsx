import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = ({ isMenuOpen, setIsMenuOpened }) => {
  const selectedChips = JSON.parse(localStorage.getItem("programmes"));
  const location = useLocation();
  const navbar = [
    {
      name: "Шийдэл",
      to: "/",
      key: "product",
    },
    {
      name: "Харилцагчийн үйлчилгээ",
      to:
        !selectedChips || (selectedChips && selectedChips.length === 0)
          ? "/help"
          : "/test",
      key: "service",
    },
    {
      name: "Сургалт",
      to: "/course",
      key: "course",
    },
    {
      name: "Бичвэр",
      to: "/article",
      key: "article",
    },
  ];

  // Энэ component-н гадна дарахад алга болгох funtion
  const menuRef = useRef(null);
  // only works on small screen sized devices
  useEffect(() => {
    const x = window.matchMedia("(max-width: 640px)");
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpened(false);
      }
    };

    if (x.matches) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick); // Ensure the event listener is removed on larger screens
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div
      className={` md:min-h-fit min-h-[50vh]  bg-[#2D3648] ${
        isMenuOpen ? "block animate-upToDown" : "hidden md:block"
      } `}
      ref={menuRef}
    >
      <ul className="flex md:flex-row flex-col text-white text-[12px] 3xl:text-base md:items-center gap-[6vh] md:gap-0 ml-4 md:ml-0 text-left">
        {navbar.map((prop, index) => (
          <li
            key={prop.key}
            className={`mr-5 ${
              prop.name === "Харилцагчийн үйлчилгээ" &&
              (localStorage.getItem("role") === "User" ||
                localStorage.getItem("role") === "Admin") &&
              "hidden"
            }`}
          >
            <NavLink
              to={prop.to}
              className={({ isActive }) =>
                isActive ||
                (location.pathname == "/program" &&
                  prop.name === "Харилцагчийн үйлчилгээ")
                  ? "pb-[5px] text-[#DEDEDE] border-b-2 border-white"
                  : "hover:pb-[5px] hover:border-b-2 hover:border-white  transition-all duration-300"
              }
              onClick={() => setIsMenuOpened(false)}
            >
              {prop.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
