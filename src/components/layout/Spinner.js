import React from "react";

const Spinner = () => {
  return (
    <div className="text-center py-5">
      <svg
        height="140"
        width="140"
        viewBox="-70 -70 140 140"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="16"
      >
        <defs>
          <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BC9B" />
            <stop stopColor="#1F61DC" />
            <animateTransform
              attributeName="gradientTransform"
              dur="2s"
              type="rotate"
              values="120; 480;"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.64 0.25 0.36 0.75"
            />
          </linearGradient>
        </defs>
        <path d="M-5 -61a10 10 0 0110 0l45 26a10 10 0 015 9v52a10 10 0 01-5 9L15 61a10 10 0 01-10 0l-45-26a10 10 0 01-5-9v-52a10 10 0 015-9z" />
        <path d="M-5 -61a10 10 0 0110 0l45 26a10 10 0 015 9v52a10 10 0 01-5 9L15 61a10 10 0 01-10 0l-45-26a10 10 0 01-5-9v-52a10 10 0 015-9z" />
        <path d="M-5 -61a10 10 0 0110 0l45 26a10 10 0 015 9v52a10 10 0 01-5 9L15 61a10 10 0 01-10 0l-45-26a10 10 0 01-5-9v-52a10 10 0 015-9z" />
      </svg>
    </div>
  );
  
};


export default Spinner;
