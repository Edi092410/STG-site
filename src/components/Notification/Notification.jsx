import React, { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../Main/Button";
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
    <div className="h-screen w-screen fixed inset-0 bg-slate-300 bg-opacity-50 z-50">
      <div className="flex justify-center ">
        <div
          className="relative w-[400px] mt-[20vh] bg-white shadow-lg rounded-[20px] text-center"
          ref={menuRef}
        >
          <div className=" text-center text-xl m-16 mb-0">{name}</div>
          <div className="flex justify-center my-10">
            <div
              className="w-fit h-10"
              onClick={() => {
                navigate(path);
                closeModal();
                stateFunction();
              }}
            >
              <Button name={button} />
            </div>
          </div>

          <FaTimes
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => closeModal()}
          />
        </div>
      </div>
    </div>
  );
};
