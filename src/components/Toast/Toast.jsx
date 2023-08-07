import { toast } from "react-toastify";
export const Toast = ({ main }) => {
  toast.success(main, {
    position: "top-center", // Change the position of the toast
    autoClose: 1000, // Auto close the toast after 1 seconds
    hideProgressBar: true, // Hide the progress bar
    closeOnClick: true, // Close the toast when clicked
    draggable: true, // Allow dragging the toast
  });
};
