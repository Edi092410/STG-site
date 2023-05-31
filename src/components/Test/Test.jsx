import React, { useRef, useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Notification } from '../Notification/Notification';

export const Test = (props) => {

      const [modal, setModal] = useState(false);

      const closeModal = () => {
        setModal(false);
      };
  
      const handleClick = () => {
        setModal(!modal);
      }
  
      
  
      const menuRef = useRef();
      const buttonRef = useRef();
    
      useEffect(() => {
        const handleOutsideClick = (event) => {
        //   if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        //     closeModal();
        //   }
          console.log(menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target));
        
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      });

    return (
        <>
            <div 
                className='flex justify-center items-center rounded-lg bg-blue-300 h-10 w-[400px] p-2 cursor-pointer text-white'
                onClick={handleClick}
                ref={buttonRef}
            >Username</div>
            {modal && (
                < Menu menuref = {menuRef}/>
                // <div className='  absolute left-0 z-20 top-10' ref={menuRef}>
                //     <div className='float-right w-[400px] bg-white border border-slate-500 mt-2 mr-[5%]'>
                //         <div className=''>
                //             <div className='flex mr-[10%] ml-[10%] mt-4 h-20'>
                //                 <FaRegUserCircle className='h-auto w-[60px]'/>
                //                 <div className='ml-4'>
                //                     <h2 className=' font-bold text-xl'>{props.name}</h2>
                //                     <div className=' font-normal'>{props.email}</div>
                //                 </div>
                //             </div>

                //             <Options name={menu} className='hover:bg-slate-300 hover:text-white' onClick={() => setModal(false)}/>
                //             <div 
                //             className='flex h-20 items-center border-t border-slate-500 pr-[10%] pl-[10%] font-bold hover:bg-slate-300 hover:text-white transition-opacity duration-300 cursor-pointer'
                //             onClick={() => setModal(!modal)}
                //             >{third}</div>
                //             {/* {modal && (
                //             <div className='transition-opacity duration-300'>
                //                 <Notification
                //                 closeModal={closeModal}
                //                 className='z-20'
                //                 name='Та системээс гарах гэж байна'
                //                 button='Системээс гарах'
                //                 />
                //             </div>
                //             )} */}
                //         </div>
                //     </div>
                // </div>      
            )}
            
        </>
        
  )
}

export default function Options(props) {    
    const style = {
        borderBottom: '1px solid black'
    };

 
  return (
    
    <div className='flex flex-col justify-around border-t border-slate-500 ' >
        <ul>
        {props.name.map((prop, index) => ( 
            <>
                <li 
                    key={prop.to}
                    className='pl-[10%] pr-[10%] pt-2 pb-2 hover:bg-slate-300 transition-opacity duration-300 hover:text-white'
                    ><NavLink 
                        to={prop.to}
                    >
                        {prop.name}
                    </NavLink>
                </li>
                {index === 1 && <div style={style}></div>}
            </>
            
        ))}
        </ul>
    </div>
  );
}





const Menu = (props) => {
    
    const menu = [
        {
          name: "Хувийн тохиргоо",
          to: "settings/personal"
        },
        {
          name: "Байгууллагын нэр",
          to: "settings/multipleCompany"
        },
        {
          name: "Нууц үг өөрчлөх",
          to: "settings/privacy"
        },
        {
          name: "Эрх шилжүүлэх",
          to: "settings/disable"
        }];
  
      const third = "Системээс гарах";

      const [modal, setModal] = useState(false);

      const closeModal = () => {
        setModal(false);
      };

      const {name, email} = props;

      const menuRef = useRef();
    
      useEffect(() => {
        const handleOutsideClick = (event) => {
        //   if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        //     closeModal();
        //   }
          console.log(menuRef.current && !menuRef.current.contains(event.target));
        
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      });

    return(
        <div className='  absolute left-0 z-20 top-10' ref={menuRef}>
            <div className='float-right w-[400px] bg-white border border-slate-500 mt-2 mr-[5%]'>
                <div className=''>
                    <div className='flex mr-[10%] ml-[10%] mt-4 h-20'>
                        <FaRegUserCircle className='h-auto w-[60px]'/>
                        <div className='ml-4'>
                            <h2 className=' font-bold text-xl'>{name}</h2>
                            <div className=' font-normal'>{email}</div>
                        </div>
                    </div>

                    <Options name={menu} className='hover:bg-slate-300 hover:text-white' onClick={() => setModal(!modal)}/>
                    <div 
                    className='flex h-20 items-center border-t border-slate-500 pr-[10%] pl-[10%] font-bold hover:bg-slate-300 hover:text-white transition-opacity duration-300 cursor-pointer'
                    onClick={() => setModal(!modal)}
                    >{third}</div>
                    {modal && (
                    <div className='transition-opacity duration-300'>
                        <Notification
                        closeModal={closeModal}
                        onClick={() => setModal(false)}
                        className='z-20'
                        name='Та системээс гарах гэж байна'
                        button='Системээс гарах'
                        />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
    
}

