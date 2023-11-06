import React from "react";
import { Main } from "../../layouts/Main";
import { Box } from "../Main/Box";
import { Button } from "../Main/Button";
import image from "../../Assets/help/help.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Help = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const notify = () => {
    toast.warn("Харилцагчийн үйлчилгээ цэс рүү орох боломжгүй байна.", {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
  };

  return (
    <Main head="Харилцагчийн туслах">
      <div className="w-full h-full flex justify-center items-center 3xl:mt-[90px] mt-[50px]">
        <div className="w-[330px]">
          <Box>
            <div className="w-full flex flex-col justify-center px-[20%]">
              <div className="flex justify-center my-[20px]">
                <img
                  src={image}
                  alt="help page main picture"
                  width={"70px"}
                  height={"70px"}
                />
              </div>
              <div className=" text-center text-[#032D60] font-medium">
                24/7 Онлайн үйлчилгээний хүсэлт илгээх боломжтой
              </div>
              <div
                className="mb-[50px] mt-[30px]"
                onClick={() => {
                  // if (role) {
                  //   notify();
                  //   navigate("/");
                  // } else {
                  //   window.open("/program", "_blank", "noreferrer");
                  // navigate("/pass");
                }}
              >
                <Link to="/program" target="_blank">
                  <div className="h-10">
                    <Button name={"Танд туслая"} wiggleLength={100} />
                  </div>
                </Link>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </Main>
  );
};
