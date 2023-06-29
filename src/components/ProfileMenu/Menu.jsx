import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Notification } from "../Notification/Notification";
import { useAuth } from "../../context/AuthProvider";
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

  const third = "Системээс гарах";
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { setAuth } = useAuth();
  const logOut = () => {
    localStorage.clear();
    setAuth(false);
    navigate("/");
  };
  return (
    <div className="flex">
      <DropdownMenu.Root className="">
        <DropdownMenu.Trigger asChild>
          <button
            className="flex text-white outline-none"
            aria-label="Customise options"
          >
            <FaRegUserCircle className=" mt-[1.5px] mr-1" />
            {props.user}
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group text-[13px] leading-none text-black rounded-[3px] flex items-center h-[50px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-400 data-[highlighted]:text-white">
              <div className="flex">
                <FaRegUserCircle className="h-auto w-8" />
                <div className="flex-none ml-2">
                  <div>{props.user}</div>
                  <div className="mt-1">{props.email}</div>
                </div>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-[1px] bg-slate-500 m-[5px]" />

            {menu.map((prop, index) => {
              return (
                <>
                  <DropdownMenu.Item className="group text-[13px] leading-none text-black rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-400 data-[highlighted]:text-white">
                    <NavLink to={prop.to} key={prop.key}>
                      {prop.name}
                    </NavLink>
                  </DropdownMenu.Item>

                  {index === 1 && (
                    <DropdownMenu.Separator className="h-[1px] bg-slate-500 m-[5px]" />
                  )}
                </>
              );
            })}

            <DropdownMenu.Separator className="h-[1px] bg-slate-500 m-[5px]" />
            <DropdownMenu.Item
              className="group font-bold text-[13px] leading-none text-black rounded-[3px] flex items-center h-[50px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-400 data-[highlighted]:text-white cursor-pointer"
              onClick={() => {
                setModal(true);
                console.log(modal);
              }}
            >
              Системээс гарах
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
        {modal && (
          <div className="text-black text-base">
            <Notification
              name="Та системээс гарах гэж байна?"
              button="Системээс гарах"
              closeModal={() => setModal(false)}
              path="/"
              StateFunction={logOut}
            />
          </div>
        )}
      </DropdownMenu.Root>
    </div>
  );
};
