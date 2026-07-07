import React from "react";
import { IoMdSearch } from "react-icons/io";

const Input = () => {
  return (
    <div className="relative w-full">

      <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

      <input
        type="text"
        placeholder="Search for a movie..."
        className="
          w-full
          h-11
          rounded-full
          border
          border-gray-400
          pl-12
text-black
          pr-4
          text-sm
          md:text-base
          outline-none
          focus:ring-2
       
        "
      />

    </div>
  );
};

export default Input;