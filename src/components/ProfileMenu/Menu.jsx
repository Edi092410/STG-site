import React, { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Notification } from "../Notification/Notification";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../Loading/Loading";
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
  const [loading, setLoading] = useState(false);
  const logOut = () => {
    localStorage.clear();
    setAuth(false);
    notify();
    navigate(-1);
    // setLoading(true);
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
            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade mr-3 md:mr-0 absolute left-[-250px]"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group text-[13px] leading-none text-black rounded-[3px] flex items-center h-[50px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
              <div className="flex">
                {/* <FaRegUserCircle className="h-auto w-8" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="auto"
                  viewBox="0 0 70 71"
                  fill="none"
                >
                  <path
                    d="M64.1663 35.8747C64.1663 19.8038 51.0705 6.70801 34.9997 6.70801C18.9288 6.70801 5.83301 19.8038 5.83301 35.8747C5.83301 44.333 9.47884 51.9455 15.2538 57.283C15.2538 57.3122 15.2538 57.3122 15.2247 57.3413C15.5163 57.633 15.8663 57.8663 16.158 58.1288C16.333 58.2747 16.4788 58.4205 16.6538 58.5372C17.1788 58.9747 17.7622 59.383 18.3163 59.7913C18.5205 59.9372 18.6955 60.0538 18.8997 60.1997C19.4538 60.5788 20.0372 60.9288 20.6497 61.2497C20.8538 61.3663 21.0872 61.5122 21.2913 61.6288C21.8747 61.9497 22.4872 62.2413 23.1288 62.5038C23.3622 62.6205 23.5955 62.7372 23.8288 62.8247C24.4705 63.0872 25.1122 63.3205 25.7538 63.5247C25.9872 63.6122 26.2205 63.6997 26.4538 63.758C27.1538 63.9622 27.8538 64.1372 28.5538 64.3122C28.758 64.3705 28.9622 64.4288 29.1955 64.458C30.0122 64.633 30.8288 64.7497 31.6747 64.8372C31.7913 64.8372 31.908 64.8663 32.0247 64.8955C33.0163 64.983 34.008 65.0413 34.9997 65.0413C35.9913 65.0413 36.983 64.983 37.9455 64.8955C38.0622 64.8955 38.1788 64.8663 38.2955 64.8372C39.1413 64.7497 39.958 64.633 40.7747 64.458C40.9788 64.4288 41.183 64.3413 41.4163 64.3122C42.1163 64.1372 42.8455 63.9913 43.5163 63.758C43.7497 63.6705 43.983 63.583 44.2163 63.5247C44.858 63.2913 45.5288 63.0872 46.1413 62.8247C46.3747 62.7372 46.608 62.6205 46.8413 62.5038C47.4538 62.2413 48.0663 61.9497 48.6788 61.6288C48.9122 61.5122 49.1163 61.3663 49.3205 61.2497C49.9038 60.8997 50.4872 60.5788 51.0705 60.1997C51.2747 60.083 51.4497 59.9372 51.6538 59.7913C52.2372 59.383 52.7913 58.9747 53.3163 58.5372C53.4913 58.3913 53.6372 58.2455 53.8122 58.1288C54.133 57.8663 54.4538 57.6038 54.7455 57.3413C54.7455 57.3122 54.7455 57.3122 54.7163 57.283C60.5205 51.9455 64.1663 44.333 64.1663 35.8747ZM49.408 50.3705C41.5038 45.0622 28.5538 45.0622 20.5913 50.3705C19.308 51.2163 18.258 52.208 17.383 53.2872C12.9497 48.7955 10.208 42.6413 10.208 35.8747C10.208 22.1955 21.3205 11.083 34.9997 11.083C48.6788 11.083 59.7913 22.1955 59.7913 35.8747C59.7913 42.6413 57.0497 48.7955 52.6163 53.2872C51.7705 52.208 50.6913 51.2163 49.408 50.3705Z"
                    fill="#121212"
                  />
                  <path
                    d="M35 21.0869C28.9625 21.0869 24.0625 25.9869 24.0625 32.0244C24.0625 37.9452 28.7 42.7577 34.8542 42.9327C34.9417 42.9327 35.0583 42.9327 35.1167 42.9327C35.175 42.9327 35.2625 42.9327 35.3208 42.9327C35.35 42.9327 35.3792 42.9327 35.3792 42.9327C41.2708 42.7286 45.9083 37.9452 45.9375 32.0244C45.9375 25.9869 41.0375 21.0869 35 21.0869Z"
                    fill="#121212"
                  />
                </svg>
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
                  <DropdownMenu.Item className="group text-[13px] leading-none text-black flex items-center h-[40px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-300 data-[highlighted]:text-white">
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
              // path="/"
              stateFunction={logOut}
            />
          </div>
        )}
        {loading && <Loading />}
      </DropdownMenu.Root>
    </div>
  );
};
