import React, {useEffect, useState} from 'react'
export const MainPicture = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Function to handle animation completion
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    console.log("changed", animationComplete)
  }, [animationComplete])
  return (
    <div className=' relative w-[800px] h-[460px]'>
      <div className='w-full h-full'>
      <svg xmlns="http://www.w3.org/2000/svg" width="789" height="460" viewBox="0 0 789 460" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M560.3 142.405C549.683 62.2628 470.408 0 374.188 0C279.548 0 201.3 60.2354 188.655 138.473C188.21 138.47 187.765 138.469 187.32 138.469C83.8659 138.469 0 210.446 0 299.234C0 388.022 83.8659 459.999 187.32 459.999C227.883 459.999 265.434 448.934 296.1 430.129C326.766 448.934 364.317 459.999 404.88 459.999C440.975 459.999 474.685 451.238 503.281 436.057C531.877 451.238 565.587 459.999 601.681 459.999C705.135 459.999 789.001 388.022 789.001 299.234C789.001 210.446 705.135 138.469 601.681 138.469C587.462 138.469 573.612 139.828 560.3 142.405Z" fill="url(#paint0_linear_2196_100777)"/>
          <defs>
              <linearGradient id="paint0_linear_2196_100777" x1="394.501" y1="115" x2="394.501" y2="459.999" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EAE8E1"/>
              <stop offset="1" stop-color="#F5F5F5" stop-opacity="0"/>
              </linearGradient>
          </defs>
      </svg>
      </div>
      {/* Deed gadnah */}
      <div className='absolute top-10 left-60'>
        <svg xmlns="http://www.w3.org/2000/svg" width="233" height="179" viewBox="0 0 233 179" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.955 178.415C4.28825 162.218 0 144.11 0 125C0 55.9644 55.9644 0 125 0C170.519 0 210.356 24.3307 232.214 60.6965L175.96 90.7617C165.205 74.6286 146.844 64 126 64C92.8629 64 66 90.8629 66 124C66 132.176 67.6354 139.97 70.597 147.073L11.955 178.415Z" fill="#DFE3EE"/>
        </svg>
      </div>
      <div className='absolute top-12 left-[250px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="253" height="131" viewBox="0 0 253 131" fill="none">
          <g filter="url(#filter0_d_2196_100831)">
            <circle cx="112" cy="24" r="20" fill="url(#paint0_linear_2196_100831)" shape-rendering="crispEdges"/>
            <circle cx="112" cy="24" r="22" stroke="url(#paint1_linear_2196_100831)" stroke-width="4" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter1_d_2196_100831)">
            <path d="M111.225 25.7555C111.354 25.879 111.561 25.8678 111.682 25.7308L113.656 23.4932L118.635 17.7011C118.977 17.3835 119.499 17.3817 119.826 17.697L119.947 17.8135C120.343 18.1954 120.366 18.8298 119.998 19.2586L116.87 22.9062L113.632 26.725C112.483 28.08 110.452 28.1893 109.231 26.9618L105.869 23.5818C105.565 23.2761 105.483 22.8094 105.662 22.406C105.966 21.7239 106.846 21.5368 107.371 22.0426L111.225 25.7555Z" fill="#FEFEFE"/>
            <path d="M118.302 17.3375L118.28 17.3572L118.262 17.3791L113.284 23.1687L111.44 25.2592L107.721 21.6767C106.948 20.9327 105.655 21.2078 105.208 22.2111C104.944 22.8045 105.064 23.4909 105.512 23.9406L108.874 27.3205C110.298 28.7526 112.668 28.6251 114.008 27.0443L117.244 23.2277L117.246 23.2255L120.373 19.5801C120.915 18.9473 120.882 18.0111 120.297 17.4475L120.176 17.3311C119.661 16.8345 118.839 16.8374 118.302 17.3375ZM111.312 25.4038C111.313 25.4037 111.313 25.4036 111.313 25.4035L111.312 25.4038Z" stroke="#FEFEFE"/>
          </g>
          <g filter="url(#filter2_d_2196_100831)">
            <circle cx="112" cy="24" r="20" fill="url(#paint2_linear_2196_100831)" shape-rendering="crispEdges"/>
            <circle cx="112" cy="24" r="22" stroke="url(#paint3_linear_2196_100831)" stroke-width="4" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter3_d_2196_100831)">
            <path d="M111.225 25.7555C111.354 25.879 111.561 25.8678 111.682 25.7308L113.656 23.4932L118.635 17.7011C118.977 17.3835 119.499 17.3817 119.826 17.697L119.947 17.8135C120.343 18.1954 120.366 18.8298 119.998 19.2586L116.87 22.9062L113.632 26.725C112.483 28.08 110.452 28.1893 109.231 26.9618L105.869 23.5818C105.565 23.2761 105.483 22.8094 105.662 22.406C105.966 21.7239 106.846 21.5368 107.371 22.0426L111.225 25.7555Z" fill="#FEFEFE"/>
            <path d="M118.302 17.3375L118.28 17.3572L118.262 17.3791L113.284 23.1687L111.44 25.2592L107.721 21.6767C106.948 20.9327 105.655 21.2078 105.208 22.2111C104.944 22.8045 105.064 23.4909 105.512 23.9406L108.874 27.3205C110.298 28.7526 112.668 28.6251 114.008 27.0443L117.244 23.2277L117.246 23.2255L120.373 19.5801C120.915 18.9473 120.882 18.0111 120.297 17.4475L120.176 17.3311C119.661 16.8345 118.839 16.8374 118.302 17.3375ZM111.312 25.4038C111.313 25.4037 111.313 25.4036 111.313 25.4035L111.312 25.4038Z" stroke="#FEFEFE"/>
          </g>
          <g filter="url(#filter4_d_2196_100831)">
            <circle cx="112" cy="24" r="20" fill="url(#paint4_linear_2196_100831)" shape-rendering="crispEdges"/>
            <circle cx="112" cy="24" r="22" stroke="url(#paint5_linear_2196_100831)" stroke-width="4" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter5_d_2196_100831)">
            <path d="M111.225 25.7555C111.354 25.879 111.561 25.8678 111.682 25.7308L113.656 23.4932L118.635 17.7011C118.977 17.3835 119.499 17.3817 119.826 17.697L119.947 17.8135C120.343 18.1954 120.366 18.8298 119.998 19.2586L116.87 22.9062L113.632 26.725C112.483 28.08 110.452 28.1893 109.231 26.9618L105.869 23.5818C105.565 23.2761 105.483 22.8094 105.662 22.406C105.966 21.7239 106.846 21.5368 107.371 22.0426L111.225 25.7555Z" fill="#FEFEFE"/>
            <path d="M118.302 17.3375L118.28 17.3572L118.262 17.3791L113.284 23.1687L111.44 25.2592L107.721 21.6767C106.948 20.9327 105.655 21.2078 105.208 22.2111C104.944 22.8045 105.064 23.4909 105.512 23.9406L108.874 27.3205C110.298 28.7526 112.668 28.6251 114.008 27.0443L117.244 23.2277L117.246 23.2255L120.373 19.5801C120.915 18.9473 120.882 18.0111 120.297 17.4475L120.176 17.3311C119.661 16.8345 118.839 16.8374 118.302 17.3375ZM111.312 25.4038C111.313 25.4037 111.313 25.4036 111.313 25.4035L111.312 25.4038Z" stroke="#FEFEFE"/>
          </g>
          <g filter="url(#filter6_d_2196_100831)">
            <circle cx="112" cy="24" r="20" fill="url(#paint6_linear_2196_100831)" shape-rendering="crispEdges"/>
            <circle cx="112" cy="24" r="22" stroke="url(#paint7_linear_2196_100831)" stroke-width="4" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter7_d_2196_100831)">
            <path d="M111.225 25.7555C111.354 25.879 111.561 25.8678 111.682 25.7308L113.656 23.4932L118.635 17.7011C118.977 17.3835 119.499 17.3817 119.826 17.697L119.947 17.8135C120.343 18.1954 120.366 18.8298 119.998 19.2586L116.87 22.9062L113.632 26.725C112.483 28.08 110.452 28.1893 109.231 26.9618L105.869 23.5818C105.565 23.2761 105.483 22.8094 105.662 22.406C105.966 21.7239 106.846 21.5368 107.371 22.0426L111.225 25.7555Z" fill="#FEFEFE"/>
            <path d="M118.302 17.3375L118.28 17.3572L118.262 17.3791L113.284 23.1687L111.44 25.2592L107.721 21.6767C106.948 20.9327 105.655 21.2078 105.208 22.2111C104.944 22.8045 105.064 23.4909 105.512 23.9406L108.874 27.3205C110.298 28.7526 112.668 28.6251 114.008 27.0443L117.244 23.2277L117.246 23.2255L120.373 19.5801C120.915 18.9473 120.882 18.0111 120.297 17.4475L120.176 17.3311C119.661 16.8345 118.839 16.8374 118.302 17.3375ZM111.312 25.4038C111.313 25.4037 111.313 25.4036 111.313 25.4035L111.312 25.4038Z" stroke="#FEFEFE"/>
          </g>
          <g filter="url(#filter8_d_2196_100831)">
            <ellipse cx="226.409" cy="95.9553" rx="19.8852" ry="19.9475" fill="url(#paint8_linear_2196_100831)"/>
            <path d="M246.294 95.9553C246.294 99.9005 245.128 103.757 242.943 107.038C240.758 110.318 237.652 112.875 234.018 114.384C230.385 115.894 226.387 116.289 222.529 115.519C218.672 114.75 215.129 112.85 212.348 110.06C209.567 107.271 207.673 103.716 206.906 99.8468C206.138 95.9774 206.532 91.9666 208.037 88.3217C209.542 84.6768 212.091 81.5614 215.361 79.3696C218.631 77.1777 222.476 76.0078 226.409 76.0078V95.9553H246.294Z" fill="url(#paint9_linear_2196_100831)"/>
            <path d="M240.261 110.353C237.908 112.631 235.032 114.292 231.886 115.188C228.74 116.085 225.423 116.189 222.227 115.492C219.032 114.795 216.057 113.319 213.566 111.193C211.076 109.067 209.146 106.358 207.948 103.306C206.751 100.254 206.322 96.952 206.7 93.6936C207.078 90.4352 208.251 87.3206 210.116 84.6258C211.981 81.931 214.479 79.739 217.39 78.2441C220.301 76.7493 223.534 75.9976 226.804 76.0557L226.452 96L240.261 110.353Z" fill="#0496D4"/>
          </g>
          <g filter="url(#filter9_d_2196_100831)">
            <ellipse cx="210.451" cy="95.9404" rx="26.5136" ry="26.5966" fill="url(#paint10_linear_2196_100831)"/>
            <path d="M236.965 95.9404C236.965 101.201 235.41 106.343 232.496 110.717C229.583 115.09 225.442 118.499 220.597 120.512C215.753 122.525 210.422 123.052 205.279 122.026C200.135 121 195.411 118.467 191.703 114.747C187.995 111.027 185.47 106.288 184.447 101.129C183.424 95.9699 183.949 90.6222 185.956 85.7623C187.962 80.9024 191.361 76.7486 195.721 73.8261C200.081 70.9036 205.207 69.3437 210.451 69.3438V95.9404H236.965Z" fill="url(#paint11_linear_2196_100831)"/>
            <path d="M228.927 115.137C225.789 118.174 221.954 120.389 217.76 121.584C213.565 122.779 209.142 122.919 204.881 121.99C200.621 121.06 196.654 119.092 193.333 116.257C190.012 113.423 187.439 109.811 185.842 105.741C184.245 101.671 183.674 97.2693 184.178 92.9248C184.682 88.5803 186.246 84.4275 188.733 80.8344C191.219 77.2413 194.55 74.3187 198.431 72.3255C202.312 70.3323 206.624 69.3301 210.983 69.4075L210.514 96L228.927 115.137Z" fill="#0496D4"/>
          </g>
          <g filter="url(#filter10_d_2196_100831)">
            <path d="M2 85.1367C2 84.0321 2.89543 83.1367 4 83.1367H12.9209C14.0255 83.1367 14.9209 84.0321 14.9209 85.1367V120.549C14.9209 121.654 14.0255 122.549 12.9209 122.549H4C2.89543 122.549 2 121.654 2 120.549V85.1367Z" fill="url(#paint12_linear_2196_100831)" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter11_d_2196_100831)">
            <path d="M2 85.1367C2 84.0321 2.89543 83.1367 4 83.1367H12.9209C14.0255 83.1367 14.9209 84.0321 14.9209 85.1367V120.549C14.9209 121.654 14.0255 122.549 12.9209 122.549H4C2.89543 122.549 2 121.654 2 120.549V85.1367Z" fill="url(#paint13_linear_2196_100831)" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter12_d_2196_100831)">
            <path d="M35.0781 94.6523C35.0781 93.5478 35.9736 92.6523 37.0781 92.6523H45.999C47.1036 92.6523 47.999 93.5478 47.999 94.6523V120.551C47.999 121.656 47.1036 122.551 45.999 122.551H37.0781C35.9736 122.551 35.0781 121.656 35.0781 120.551V94.6523Z" fill="url(#paint14_linear_2196_100831)" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter13_d_2196_100831)">
            <path d="M35.0781 94.6523C35.0781 93.5478 35.9736 92.6523 37.0781 92.6523H45.999C47.1036 92.6523 47.999 93.5478 47.999 94.6523V120.551C47.999 121.656 47.1036 122.551 45.999 122.551H37.0781C35.9736 122.551 35.0781 121.656 35.0781 120.551V94.6523Z" fill="url(#paint15_linear_2196_100831)" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter14_d_2196_100831)">
            <path d="M35.0781 94.6523C35.0781 93.5478 35.9736 92.6523 37.0781 92.6523H45.999C47.1036 92.6523 47.999 93.5478 47.999 94.6523V120.551C47.999 121.656 47.1036 122.551 45.999 122.551H37.0781C35.9736 122.551 35.0781 121.656 35.0781 120.551V94.6523Z" fill="url(#paint16_linear_2196_100831)" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter15_d_2196_100831)">
            <path d="M18.5352 72C18.5352 70.8954 19.4306 70 20.5352 70H29.4561C30.5606 70 31.4561 70.8954 31.4561 72V120.55C31.4561 121.654 30.5606 122.55 29.4561 122.55H20.5352C19.4306 122.55 18.5352 121.654 18.5352 120.55V72Z" fill="url(#paint17_linear_2196_100831)" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#filter16_d_2196_100831)">
            <path d="M18.5352 72C18.5352 70.8954 19.4306 70 20.5352 70H29.4561C30.5606 70 31.4561 70.8954 31.4561 72V120.55C31.4561 121.654 30.5606 122.55 29.4561 122.55H20.5352C19.4306 122.55 18.5352 121.654 18.5352 120.55V72Z" fill="url(#paint18_linear_2196_100831)" shape-rendering="crispEdges"/>
          </g>
          <defs>
            <filter id="filter0_d_2196_100831" x="86" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter1_d_2196_100831" x="102.57" y="16.459" width="20.6875" height="16.3594" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter2_d_2196_100831" x="86" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter3_d_2196_100831" x="102.57" y="16.459" width="20.6875" height="16.3594" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter4_d_2196_100831" x="86" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter5_d_2196_100831" x="102.57" y="16.459" width="20.6875" height="16.3594" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter6_d_2196_100831" x="86" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter7_d_2196_100831" x="102.57" y="16.459" width="20.6875" height="16.3594" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter8_d_2196_100831" x="204.523" y="76.0078" width="43.7695" height="43.9395" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter9_d_2196_100831" x="181.938" y="69.3438" width="57.0273" height="57.252" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter10_d_2196_100831" x="0" y="83.1367" width="16.9219" height="43.4121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter11_d_2196_100831" x="0" y="83.1367" width="16.9219" height="43.4121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter12_d_2196_100831" x="33.0781" y="92.6523" width="16.9219" height="33.8984" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter13_d_2196_100831" x="33.0781" y="92.6523" width="16.9219" height="33.8984" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter14_d_2196_100831" x="33.0781" y="92.6523" width="16.9219" height="33.8984" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter15_d_2196_100831" x="16.5352" y="70" width="16.9219" height="56.5488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <filter id="filter16_d_2196_100831" x="16.5352" y="70" width="16.9219" height="56.5488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2196_100831"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2196_100831" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_2196_100831" x1="106" y1="14.6667" x2="118" y2="38.6667" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0074E0"/>
              <stop offset="1" stop-color="#0074E0" stop-opacity="0.67"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2196_100831" x1="112" y1="4" x2="112" y2="44" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0496D4"/>
              <stop offset="1" stop-color="#0496D4" stop-opacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint2_linear_2196_100831" x1="106" y1="14.6667" x2="118" y2="38.6667" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0074E0"/>
              <stop offset="1" stop-color="#0074E0" stop-opacity="0.67"/>
            </linearGradient>
            <linearGradient id="paint3_linear_2196_100831" x1="112" y1="4" x2="112" y2="44" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0496D4"/>
              <stop offset="1" stop-color="#0496D4" stop-opacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint4_linear_2196_100831" x1="106" y1="14.6667" x2="118" y2="38.6667" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0074E0"/>
              <stop offset="1" stop-color="#0074E0" stop-opacity="0.67"/>
            </linearGradient>
            <linearGradient id="paint5_linear_2196_100831" x1="112" y1="4" x2="112" y2="44" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0496D4"/>
              <stop offset="1" stop-color="#0496D4" stop-opacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint6_linear_2196_100831" x1="106" y1="14.6667" x2="118" y2="38.6667" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0074E0"/>
              <stop offset="1" stop-color="#0074E0" stop-opacity="0.67"/>
            </linearGradient>
            <linearGradient id="paint7_linear_2196_100831" x1="112" y1="4" x2="112" y2="44" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0496D4"/>
              <stop offset="1" stop-color="#0496D4" stop-opacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint8_linear_2196_100831" x1="227.906" y1="84.2215" x2="228.568" y2="139.919" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0074E0"/>
              <stop offset="1" stop-color="#0074E0" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint9_linear_2196_100831" x1="223.829" y1="96.0335" x2="226.184" y2="130.865" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0457D4"/>
              <stop offset="1" stop-color="#0496D4" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint10_linear_2196_100831" x1="212.448" y1="80.2953" x2="213.33" y2="154.559" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0074E0"/>
              <stop offset="1" stop-color="#0074E0" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint11_linear_2196_100831" x1="207.012" y1="96.0447" x2="210.152" y2="142.486" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0457D4"/>
              <stop offset="1" stop-color="#0496D4" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint12_linear_2196_100831" x1="8.46045" y1="83.1367" x2="8.65899" y2="141.349" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0496D4"/>
              <stop offset="1" stop-color="#0496D4" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint13_linear_2196_100831" x1="8.46045" y1="83.1367" x2="8.65899" y2="141.349" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0496D4"/>
              <stop offset="1" stop-color="#0496D4" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint14_linear_2196_100831" x1="41.5386" y1="92.6523" x2="41.7371" y2="142.484" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2457C5"/>
              <stop offset="1" stop-color="#2457C5" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint15_linear_2196_100831" x1="41.5386" y1="92.6523" x2="41.7371" y2="142.484" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2457C5"/>
              <stop offset="1" stop-color="#2457C5" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint16_linear_2196_100831" x1="41.5386" y1="92.6523" x2="41.7371" y2="142.484" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2457C5"/>
              <stop offset="1" stop-color="#2457C5" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint17_linear_2196_100831" x1="24.9956" y1="70" x2="25.1941" y2="148.825" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0074E0"/>
              <stop offset="1" stop-color="#0074E0" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint18_linear_2196_100831" x1="24.9956" y1="70" x2="25.1941" y2="148.825" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0074E0"/>
              <stop offset="1" stop-color="#0074E0" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* gol */}
      <div className='absolute top-[145px] left-[325px] '>
        <svg xmlns="http://www.w3.org/2000/svg" width="94" height="70" viewBox="0 0 94 70" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M93.7478 18.369C95.7256 44.6103 73.8796 67.6505 44.9533 69.8307C26.9245 71.1895 10.4003 64.1243 0.0299168 52.2546L88.5636 0.775182C91.4533 6.10873 93.271 12.0432 93.7478 18.369Z" fill="#DFE3EE"/>
        </svg>
      </div>
      {/* first */}
      <div className={`absolute top-[200px] left-[260px] transition transform duration-300 delay-1000 ${animationComplete ? 'opacity-1' : 'opacity-0'}`}  onAnimationEnd={handleAnimationComplete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="69" viewBox="0 0 72 69" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0263955 33.1026C9.31563 46.7742 20.9418 58.9378 34.4803 68.9748L71.9283 13.9795C66.2267 10.3931 61.6238 6.04205 57.8442 0.942574L0.0263955 33.1026Z" fill="#FEFEFE"/>
        </svg>
      </div>
      {/* second */}
      <div className={`absolute top-[220px] left-[310px] transition transform duration-300 delay-2000 ${animationComplete ? 'opacity-1' : 'opacity-0'}`}  onAnimationEnd={handleAnimationComplete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="72" viewBox="0 0 53 72" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0591631 57.5315C14.9571 64.6908 31.1189 69.3725 47.8667 71.2551L52.6387 4.89114C45.9073 4.65241 39.7421 3.20071 33.913 0.688519L0.0591631 57.5315Z" fill="#FEFEFE"/>
        </svg>
      </div>
      {/* third */}
      <div className={`absolute top-[220px] left-[370px] transition transform duration-300 delay-3000 ${animationComplete ? 'opacity-1' : 'opacity-0'}`}  onAnimationEnd={handleAnimationComplete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="71" viewBox="0 0 50 71" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.361377 70.3469C17.166 70.5881 33.9213 68.0525 49.8649 62.7327L22.4252 0.55364C16.2647 3.1617 10.0329 4.43229 3.59609 4.60025L0.361377 70.3469Z" fill="#FEFEFE"/>
        </svg>
      </div>
      {/* fourth */}
      <div className={`absolute top-[205px] left-[405px] transition transform duration-300 delay-4000 ${animationComplete ? 'opacity-1' : 'opacity-0'}`}  onAnimationEnd={handleAnimationComplete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="71" viewBox="0 0 64 71" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3476 70.7618C39.2562 63.8262 52.0441 54.696 63.1351 43.651L13.3109 0.585314C9.57138 4.93792 5.35517 8.40659 0.649932 11.1699L25.3476 70.7618Z" fill="#FEFEFE"/>
        </svg>
      </div>
      {/* fifth */}
      <div className={`absolute top-[175px] left-[425px] transition transform duration-300 delay-5000 ${animationComplete ? 'opacity-1' : 'opacity-0'}`}  onAnimationEnd={handleAnimationComplete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="60" viewBox="0 0 72 60" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M52.239 59.514C61.2149 45.6353 67.892 30.1912 71.866 13.8138L6.63006 0.732459C5.54657 7.37989 3.33114 13.3131 0.106063 18.7795L52.239 59.514Z" fill="#FEFEFE"/>
        </svg>
      </div>
    </div>
  )
}
