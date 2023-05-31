import React, {useEffect, useRef, useState} from "react";
import logo from "../assets/logo.jpg";
import { Navbar } from "../components/Navbar/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";

export const HeaderUser = (props) => {
  const [modal, setModal] = useState(false);  

  const closeModal = () => {
    setModal(false);
  };

  const handleClick = () => {
    setModal((prev) => !prev);
  };

  const menuRef = useRef();
      const buttonRef = useRef();
    
      useEffect(() => {
        const handleOutsideClick = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
            closeModal();
          }
        //   console.log(menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target));
        
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      });
  

  return (
    <>
      <header className="flex align-middle justify-around h-16 bg-slate-800 p-5">
        <img src={logo} alt="logo" className="rounded mr-auto pl-[10vw]"></img>
        <Navbar />
        <div className="flex text-slate-200 text-xs pr-[8vw]">
          <div className="flex mr-2" onClick={() => setModal(!modal) }>
            <FaRegUserCircle className="w-6 h-6 mr-1 pb-2" />
            <div 
            className="cursor-pointer"
            ref={buttonRef}
            >{props.user}
            </div>
          </div>
          <div className="text-red-500">Гарах</div>
        </div>
      </header>
        {modal && (
          <div className='transition-opacity duration-300'>
            <ProfileMenu
              closeModal={closeModal}
              name='Binderiya'
              email='binderiya.siticom@gmail.com'
              ref={menuRef}
            />
          </div>
        )}

        
      </>  
    );
  
};
