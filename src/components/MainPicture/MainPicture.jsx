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
    // <div className='bg-slate-300 w-screen h-screen'>
    <div className='w-full h-full bg-white rounded-full flex items-center p-[5%] '>
      <div className=' relative '>
            <img src={img}  className='w-full '/>
          {/* first */}
          <div className={`absolute top-[160px] left-[95px] animate-appear ${first === false ? "opacity-0" : "opacity-100"}`} style={{animationDelay: "0s"}}  onAnimationEnd={handleFirst}>
            <svg xmlns="http://www.w3.org/2000/svg" width="55px" height="52" viewBox="0 0 56 52" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.63707 24.4665C7.66411 34.6228 16.4591 43.6586 26.7008 51.1145L55.0261 10.2634C50.7122 7.59895 47.2298 4.36627 44.3704 0.577446L0.63707 24.4665Z" fill="url(#paint0_linear_2243_13055)"/>
              <defs>
                <linearGradient id="paint0_linear_2243_13055" x1="28.6086" y1="-0.0988724" x2="26.4116" y2="51.1021" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FEFEFE"/>
                  <stop offset="1" stop-color="#FEFEFE" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* second */}
          <div className={`absolute top-[175px] left-[125px] animate-appear ${second === false ? "opacity-0" : "opacity-100"} `} style={{animationDelay: "0.25s"}}  onAnimationEnd={handleSecond}>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 59 78" fill="none">
              <g filter="url(#filter0_d_2245_13063)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.32193 57.7693C19.32 64.1943 35.4634 68.1309 52.07 69.291L54.0428 3.82929C47.3923 3.86868 41.25 2.69263 35.3953 0.46051L4.32193 57.7693Z" fill="#FEFEFE"/>
              </g>
              <defs>
                <filter id="filter0_d_2245_13063" x="0.320312" y="0.460938" width="57.7188" height="76.8301" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2245_13063"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2245_13063" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
          {/* third */}
          <div className={`absolute top-[175px] left-[170px] animate-appear ${third === false ? "opacity-0" : "opacity-100"}`} style={{animationDelay: "0.5s"}}  onAnimationEnd={handleThird}>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 57 78" fill="none">
              <g filter="url(#filter0_d_2245_13071)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44375 69.8987C21.0421 69.4398 37.4773 66.2516 52.9961 60.3584L23.3464 0.342592C17.3721 3.16424 11.2724 4.67285 4.92472 5.10506L4.44375 69.8987Z" fill="#FEFEFE"/>
              </g>
              <defs>
                <filter id="filter0_d_2245_13071" x="0.445312" y="0.341797" width="56.5547" height="77.5566" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2245_13071"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2245_13071" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
          {/* fourth */}
          <div className={`absolute top-[163px] left-[202px] animate-appear ${fourth === false ? "opacity-0" : "opacity-100"} `} style={{animationDelay: "0.75s"}}  onAnimationEnd={handleFourth}>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 72 78" fill="none">
            <g filter="url(#filter0_d_2245_13078)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0632 69.0633C44.508 61.6658 56.7557 52.1558 67.249 40.8323L16.2904 0.539238C12.778 4.9768 8.75826 8.56411 4.22634 11.4775L31.0632 69.0633Z" fill="#FEFEFE"/>
            </g>
            <defs>
              <filter id="filter0_d_2245_13078" x="0.226562" y="0.539062" width="71.0234" height="76.5234" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2245_13078"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2245_13078" result="shape"/>
              </filter>
            </defs>
          </svg>
          </div>
          {/* fifth */}
          <div className={`absolute top-[135px] left-[225px] animate-appear ${fifth === false ? "opacity-0" : "opacity-100"}`} style={{animationDelay: "1s"}}  onAnimationEnd={handleFifth}>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 80 65" fill="none">
            <g filter="url(#filter0_d_2245_13086)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7218 56.5263C66.0098 42.5045 71.9639 27.038 75.2108 10.7655L10.2759 0.600488C9.48144 7.18432 7.53988 13.1123 4.58216 18.6228L57.7218 56.5263Z" fill="#FEFEFE"/>
            </g>
            <defs>
              <filter id="filter0_d_2245_13086" x="0.585938" y="0.599609" width="78.625" height="63.9258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2245_13086"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2245_13086" result="shape"/>
              </filter>
            </defs>
          </svg>
          </div>
        </div>
    </div>
    // </div>
    
  )
}
