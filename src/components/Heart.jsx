import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Heart = () => {
  return (
    <button
      className="
        w-11
        h-11
        rounded-full
        bg-gray-200
        flex
        items-center
        justify-center
        hover:bg-gray-300
        transition
      "
    >
      <FaRegHeart className="text-xl md:text-2xl text-gray-800" />
    </button>
  );
};

export default Heart;