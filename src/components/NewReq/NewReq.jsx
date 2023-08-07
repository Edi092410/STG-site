import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CreateOrder } from "../CreateOrder/CreateOrder";
export const NewReq = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div
        className={`flex items-center justify-center bg-[#0074E0] rounded-lg text-white text-xs h-10 px-2 py-4 cursor-pointer shadow-lg transform transition duration-300 ${
          modal ? "scale-100" : "hover:scale-110"
        }`}
        onClick={() => {
          setModal(true);
        }}
      >
        <div className="m-[10px] mr-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.833 4.16683C10.833 3.70659 10.4599 3.3335 9.99967 3.3335C9.53944 3.3335 9.16634 3.70659 9.16634 4.16683V9.16683H4.16634C3.7061 9.16683 3.33301 9.53993 3.33301 10.0002C3.33301 10.4604 3.7061 10.8335 4.16634 10.8335H9.16634V15.8335C9.16634 16.2937 9.53944 16.6668 9.99967 16.6668C10.4599 16.6668 10.833 16.2937 10.833 15.8335V10.8335H15.833C16.2932 10.8335 16.6663 10.4604 16.6663 10.0002C16.6663 9.53993 16.2932 9.16683 15.833 9.16683H10.833V4.16683Z"
              fill="#F6F6F6"
            />
          </svg>
        </div>
        <div className="m-[10px]">{props.button}</div>
      </div>
      {modal && <CreateOrder closeModal={() => setModal(false)} />}
    </div>
  );
};
