import React, { useState } from "react";
import { Toast } from "./Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toast.css";
export const SuccessToast = () => {
  // const [showToast, setShowToast] = useState(false);
  const notify = () => {
    toast.success("Congrats", {
      position: "top-center", // Change the position of the toast
      autoClose: 1000, // Auto close the toast after 1 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      draggable: true, // Allow dragging the toast
      className: "custom-toast", // Apply a custom CSS class to the toast
      bodyClassName: "custom-toast-body", // Apply a custom CSS class to the toast body
    });
    // toast.success(<Toast main={"Амжилттай"} />, {
    //   hideProgressBar: true,
    //   position: "top-center",
    //   autoClose: 2000,
    // });
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <button
        className="w-[100px] h-[40px] bg-slate-500 text-white rounded-lg"
        onClick={() => {
          // setShowToast(true);
          notify();
        }}
      >
        Click me
      </button>
      <ToastContainer />
      {/* {showToast && (
        <Toast main={"Congrats mofucka"} setShowToast={setShowToast} />
      )} */}
    </div>
  );
};
