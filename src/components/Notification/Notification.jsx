import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
export const Notification = (props) => {
    const { name, button, closeModal } = props;
    return (
        <div className="h-[100vh] w-[100vw] fixed top-0 bg-slate-300 bg-opacity-50">
            <div className="flex justify-center ">
                    <div className="relative w-[450px] mt-[20vh] bg-white rounded-[20px] text-center">
                        <div className=" text-center mt-16">{name}</div>
                        <Link to="/">
                            <button 
                            className="bg-slate-800 text-white rounded-[30px] w-[350px] h-10 mt-20 mb-10">
                            {button}
                            </button>
                        </Link>
                        
                        <FaTimes 
                        className="absolute top-4 right-4 cursor-pointer" 
                        onClick={() => closeModal(false)}
                        />
                    </div>
                
            </div>
        </div>
  )
}

// import React from "react";

// export default function SecondLoginSecond() {
//   return (
//     <form className="flex justify-center min-h-[80vh]  items-center bg-slate-300">
//       <div className=" flex justify-center items-center w-[500px] h-96 bg-white rounded-3xl flex-wrap">
//         <div className=" text-center m-20 mb-0 text-xl">
//           Амжилттай баталгаажууллаа Нүүр хуудас руу очих уу?
//         </div>
//         <button type="submit" className=" w-96 h-12 bg-slate-800 text-white rounded-3xl">
//           Тэгье
//         </button>
//       </div>
//     </form>
//   );
// }



