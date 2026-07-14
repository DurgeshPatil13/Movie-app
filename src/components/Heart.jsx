import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Heart = () => {
  return (
    <Link to={`/favourites`}>
      
    <button
      className="
        w-11
        h-11
        rounded-full
   bg-[#1f2635]
        flex
        items-center
        justify-center
        hover:border-[#F40B74]
        hover:scale-110
        transition
     border border-[#172a5af2]
      "
    >
      <FaRegHeart className="text-xl md:text-2xl text-[#F40B74]" />
    </button>
    </Link>
  );
};

export default Heart;