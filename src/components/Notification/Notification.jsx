import React, { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const Notification = (props) => {
  const { name, button, closeModal, path, StateFunction } = props;
  const menuRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        props.closeModal();
      }
      // console.log(menuRef.current && !menuRef.current.contains(event.target));
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [props]);
  return (
    <div className="h-[80vh] w-[100vw] absolute top-16 left-0 bg-slate-300 bg-opacity-0">
      <div className="flex justify-center ">
        <div
          className="relative w-[400px] mt-[20vh] bg-white border border-slate-500 shadow-lg rounded-[20px] text-center"
          ref={menuRef}
        >
          <div className=" text-center text-xl m-16 mb-0">{name}</div>

          <button
            className="bg-slate-800 text-white rounded-[30px] w-[350px] h-10 mt-20 mb-10"
            onClick={() => {
              navigate(path);
              closeModal();
              StateFunction();
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
