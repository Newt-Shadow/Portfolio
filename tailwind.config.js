/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Paths to your files for purging unused styles
  theme: {
    fontFamily: {
      Poppins: "Poppins",          // Custom font families
      Paprika: "Paprika",
      Inria: "Inria Serif",
      'google-sans': ['"Google Sans Regular"', 'sans-serif'], // New custom font
    },
    container: {
      center: true,               // Center container by default
      padding: "4rem",           // Apply 4rem padding inside container
    },
    extend: {
      colors: {
        dark_primary: "#06223F",     // Custom colors
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
        body: '#EDF9FE',             // New custom color
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)", // Custom gradient background
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)", // Custom drop shadow
      },
    },
  },
  plugins: [], // Add any plugins here if needed
};
