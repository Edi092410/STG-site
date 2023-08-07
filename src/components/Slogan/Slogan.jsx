import React from "react";
import { GetData } from "../../Axios/Axios";
import { MainBox } from "../MainBox/MainBox";
import img from "../../Assets/main.png";
export const Slogan = () => {
  return (
    <div className="w-full h-[50vh]">
      <MainBox location={"top"}>
        <div className="mx-[13vw] h-full flex text-[#1D3049] items-center">
          <div className="mr-auto md:w-[25vw] ml-[7vw]">
            <div className=" font-semibold text-[25px] 3xl:text-[36px] ">
              Стрессгүй амьдрал итгэлт үйлчилгээ
            </div>
            <div
              className=" font-extrabold text-[35px] 3xl:text-[48px] my-[40px] 3xl:my-[60px] "
              // style={{ fontFamily: "Comforter Brush, cursive" }}
            >
              Яг цагт нь
            </div>
            <div className=" font-bold text-[18px] 3xl:text-[23px]">
              Account Software | STG LLC
            </div>
          </div>
          <img
            src={img}
            className="h-[300px] w-[350px] mt-[50px]"
            alt="Symbol"
          />
        </div>
      </MainBox>
    </div>

    // <div className="w-full h-[450px] bg-[#2D3648]">
    //   <div className="flex p-10 justify-around">
    //     <div className="w-[40%] text-white">
    //       <div className="font-bold text-[28px]">{api.slogan}</div>
    //       <div className=" text-xl my-5">{api.subslogan}</div>
    //       <div
    //         className="h-10 w-fit flex items-center justify-center bg-[#DD2338] rounded-lg px-5 text-white text-sm my-16  cursor-pointer group duration-30
    //         0"
    //         onMouseOver={() => {
    //           setIsHover(true);
    //         }}
    //         onMouseLeave={() => {
    //           setIsHover(false);
    //         }}
    //       >
    //         <span className="block group-hover:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //           >
    //             <path
    //               d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
    //               stroke="#FEFEFE"
    //               strokeWidth="1.5"
    //               stroke-miterlimit="10"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M3.5 12H20.33"
    //               stroke="#FEFEFE"
    //               strokeWidth="1.5"
    //               stroke-miterlimit="10"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //         </span>
    //         <span className="hidden group-hover:block">Холбоо барих</span>
    //       </div>
    //     </div>
    //     <div className="w-[50%] xl:w-[40%] 2xl:w-[20%]">
    //       <div className="relative">
    //         <div className="absolute inset-0">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="411"
    //             height="382"
    //             viewBox="0 0 411 382"
    //             fill="none"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               clip-rule="evenodd"
    //               d="M245.27 17.2083C311.195 41.9594 388.14 71.7541 405.644 137.942C423.667 206.088 374.415 268.805 324.445 316.587C279.649 359.423 218.292 391.809 155.084 377.534C98.9108 364.848 77.5687 302.551 47.5637 254.059C23.0678 214.47 -5.18181 175.05 2.35533 130.702C10.6664 81.8001 42.0549 39.8077 87.5923 18.5319C136.598 -4.36417 192.881 -2.46045 245.27 17.2083Z"
    //               stroke="#DD2338"
    //               strokeWidth="2"
    //             />
    //           </svg>
    //         </div>

    //         <div className="absolute inset-x-[120px] inset-y-2">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="335"
    //             height="339"
    //             viewBox="0 0 337 341"
    //             fill="none"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               clip-rule="evenodd"
    //               d="M154.58 9.51718C201.468 3.98909 253.368 -13.3249 288.184 26.492C327.764 71.7579 346.03 146.352 330.467 210.67C315.754 271.476 263.918 299.362 216.655 322.105C175.514 341.902 131.378 348.18 91.0595 325.875C48.9038 302.553 11.5376 260.552 2.75818 203.773C-5.76218 148.67 17.8129 94.7419 49.1257 54.6772C76.4934 19.6602 115.676 14.1039 154.58 9.51718Z"
    //               stroke="#FAA61A"
    //               strokeWidth="2"
    //             />
    //           </svg>
    //         </div>

    //         <div className="absolute inset-x-[200px] inset-y-5">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="388"
    //             height="371"
    //             viewBox="0 0 402 379"
    //             fill="none"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               clip-rule="evenodd"
    //               d="M242.009 15.2954C306.201 39.1142 381.112 67.8151 397.455 133.378C414.281 200.881 365.369 263.78 315.93 311.848C271.61 354.94 211.214 387.842 149.557 374.402C94.7608 362.457 74.6184 300.805 45.8402 252.973C22.3457 213.923 -4.82219 175.085 3.07186 130.929C11.7765 82.2385 42.9725 40.1426 87.7643 18.4656C135.967 -4.86208 190.997 -3.63258 242.009 15.2954Z"
    //               stroke="#377A46"
    //               strokeWidth="2"
    //             />
    //           </svg>
    //         </div>

    //         <img
    //           src={fiscus}
    //           width="50px"
    //           height="50px"
    //           className="absolute rounded-full inset-y-7 inset-x-3 z-10"
    //         />
    //         <img
    //           src={acolous}
    //           width="50px"
    //           height="50px"
    //           className="absolute rounded-full inset-x-[195px] inset-y-[80px] z-10"
    //         />
    //         <img
    //           src={payroll}
    //           width="50px"
    //           height="50px"
    //           className="absolute rounded-full inset-x-[430px] inset-y-[150px] z-10"
    //         />
    //         <img
    //           src={logo}
    //           width="50px"
    //           height="50px"
    //           className="absolute inset-x-[265px] inset-y-[320px] z-10 rounded-full
    //           ."
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
