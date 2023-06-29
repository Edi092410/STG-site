import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CreateOrder } from "../CreateOrder/CreateOrder";
export const NewReq = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-center bg-blue-500 rounded-lg text-white text-xs h-10 p-2 cursor-pointer shadow-lg"
        onClick={() => {
          setModal(true);
        }}
      >
        <FaPlus className="font-thin" />
        <div className="ml-2">{props.button}</div>
      </div>
      {modal && <CreateOrder closeModal={() => setModal(false)} />}
    </div>
  );
};
