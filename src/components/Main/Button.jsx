import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
export const Button = ({ name, wiggleLength, loading, text }) => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="relative w-full h-10 flex justify-center items-center">
      <button
        className={`rounded-full bg-[#2D3648] h-full w-full px-5 transform transition duration-300 hover:scale-110 text-white ${text}`}
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
        type="submit"
        disabled={loading}
      >
        {loading ? <PulseLoader color="#fff" size={5} /> : name}
      </button>
      {wiggleLength && (
        <div
          className={`rounded-full w-[15px] h-[15px] absolute -top-[7.5px] -translate-y-1/2 -left-7.5 bg-[#3FD4CF] ${
            animate === false ? "animate-wiggle" : "top-[0]"
          }`}
        ></div>
      )}
    </div>
  );
};
