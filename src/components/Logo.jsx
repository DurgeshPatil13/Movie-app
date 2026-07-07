import React from "react";
import logo from "../assets/cinedeck.jpeg";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 shrink-0">

      <img
        src={logo}
        alt="CineDeck Logo"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
      />

      <div>
        <h1 className="text-sm md:text-lg font-bold font-['Syne'] text-black tracking-wide">
          CINEDECK
        </h1>

        <p className="text-[9px] md:text-[10px] text-gray-500 font-['Syne']">
          EXPLORE • FIND • WATCH
        </p>
      </div>

    </div>
  );
};

export default Logo;