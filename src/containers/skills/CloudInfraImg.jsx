import React from "react";

function CloudInfraImg({ theme }) {
  return (
    <svg
      id="1dff4cb4-53bd-4ffc-acc1-5e8a2ceb72de"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1040 600"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="300"
          y1="300"
          x2="700"
          y2="300"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={theme === "dark" ? "#3f0355" : "#ff7b7b"} />
          <stop offset="1" stopColor={theme === "dark" ? "#14142b" : "#ffc1c1"} />
        </linearGradient>
      </defs>
      <path
        d="M700 300C700 387.8 620.8 457 533 457S366 387.8 366 300 445.2 143 533 143s167 70.2 167 157z"
        fill="url(#linear-gradient)"
      />
      <circle cx="533" cy="300" r="60" fill="#fff" />
      <rect
        x="480"
        y="260"
        width="100"
        height="20"
        fill="#fff"
        rx="10"
        ry="10"
      />
      <rect
        x="510"
        y="280"
        width="40"
        height="70"
        fill={theme === "dark" ? "#3f0355" : "#ff7b7b"}
        rx="10"
        ry="10"
      />
      {/* Add additional SVG paths or shapes as necessary */}
    </svg>
  );
}

export default CloudInfraImg;
