import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Notification } from "../Notification/Notification";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const Menu = (props) => {
  const menu = [
    {
      name: "Хувийн тохиргоо",
      to: "settings/personal",
      key: "personal",
    },
    {
      name: "Байгууллагын нэр",
      to: "settings/multipleCompany",
      key: "company",
    },
    {
      name: "Нууц үг өөрчлөх",
      to: "settings/privacy",
      key: "privacy",
    },
    {
      name: "Эрх шилжүүлэх",
      to: "settings/disable",
      key: "disable",
    },
  ];

  const notify = () => {
    toast.success("Системеес гарлаа.", {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };

  const third = "Системээс гарах";
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { setAuth } = useAuth();
  const logOut = () => {
    localStorage.clear();
    setAuth(false);
    notify();
    navigate("/");
  };
  return (
    <div className="flex">
      <DropdownMenu.Root className="">
        <DropdownMenu.Trigger asChild className="flex items-center">
          <button
            className="flex text-white outline-none"
            aria-label="Customise options"
          >
            <FaRegUserCircle className="relative mr-1 text-lg" />
            {props.user}
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade mr-3 md:mr-0 absolute left-[-200px]"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group text-[13px] leading-none text-black rounded-[3px] flex items-center h-[50px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
              <div className="flex">
                <FaRegUserCircle className="h-auto w-8" />
                <div className="flex-none ml-2">
                  <div>{props.user}</div>
                  <div className="mt-1">{props.email}</div>
                </div>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-[1px] bg-[#E1E1E1]" />

            {menu.map((prop, index) => {
              return (
                <React.Fragment key={prop.key}>
                  <DropdownMenu.Item className="group text-[13px] leading-none text-black flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-300 data-[highlighted]:text-white">
                    <NavLink to={prop.to}>{prop.name}</NavLink>
                  </DropdownMenu.Item>

                  {index === 1 && (
                    <DropdownMenu.Separator className="h-[1px] bg-[#E1E1E1]" />
                  )}
                </React.Fragment>
              );
            })}

            <DropdownMenu.Separator className="h-[1px] bg-[#E1E1E1]" />
            <DropdownMenu.Item
              className="group font-bold text-[13px] leading-none text-black flex items-center h-[50px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none cursor-pointer"
              onClick={() => {
                setModal(true);
              }}
            >
              Системээс гарах
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className="fill-white pr-36" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
        {modal && (
          <div className="absolute top-0 left-0 text-black text-base z-10">
            <Notification
              name="Та системээс гарах гэж байна?"
              button="Системээс гарах"
              closeModal={() => setModal(false)}
              path="/"
              stateFunction={logOut}
            />
          </div>
        )}
      </DropdownMenu.Root>
    </div>
  );
};
