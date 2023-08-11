import React, {useEffect, useState} from 'react'
import img from "../../Assets/MainPage/mainPicture.png"
export const MainPicture = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [last, setLast] = useState(false)

  const handleFirst = () => {
    setFirst(true);
  }  
  const handleSecond = () => {
    setSecond(true);
  }  
  const handleThird = () => {
    setThird(true);
  }  
  const handleFourth = () => {
    setFourth(true);
  }  
  const handleFifth = () => {
    setFifth(true);
    setLast(true);
  }  

  useEffect(() => {
    console.log("changed", first)
  }, [first])


  
  return (
    <div className='bg-slate-300 w-screen h-screen'>
      <div className="w-[500px] bg-white rounded-b-full rounded-r-full rounded-l-full pb-[150px] ">
        <div className='relative w-full'>
          <img
            src={img}
            className="w-full pt-[50px]"
            alt="Symbol"
          />  
          <div className='text-[#024184] text-[23px] font-bold absolute bottom-10 right-[15%] '>
            {/* ...since 1997 */}
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".05s"}}>.</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".1s"}}>.</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".15s"}}>.</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".2s"}}>s</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".25s"}}>i</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".3s"}}>n</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".35s"}}>c</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".4s"}}>e</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".45s"}}> </span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".5s"}}>1</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".55s"}}>9</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".6s"}}>9</span>
            <span className=' opacity-0 translate-[0_-100px] rotate-360 scale-0 animate-revolveDrop' style={{animationDelay: ".65s"}}>7</span>
            </div>
        </div>
      </div>
    </div>
    
  )
}
