import React, { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const Notification = (props) => {
  const { name, button, closeModal, path, stateFunction } = props;
  const menuRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        props.closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [props]);
  return (
    <div className="h-[100vh] w-[100vw] fixed top-0 left-0 bg-slate-300 bg-opacity-50 z-10 overflow-hidden">
      <div className="flex justify-center ">
        <div
          className="relative w-[400px] mt-[20vh] bg-white shadow-lg rounded-[20px] text-center"
          ref={menuRef}
        >
          <div className=" text-center text-xl m-16 mb-0">{name}</div>

          <button
            className="bg-slate-800 text-white rounded-[30px] w-[350px] h-10 mt-20 mb-10"
            onClick={() => {
              navigate(path);
              closeModal();
              stateFunction();
            }}
          >
            {button}
          </button>

          <FaTimes
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => closeModal()}
          />
        </div>
      </div>
    </div>
  );
};
