import React from "react";
import { IoMdSearch } from "react-icons/io";
const Input = ({search,setSearch,handleSearch}) => {
  return (
    <div className="flex justify-between gap-4 w-full">
      <input
        value={search}
  onChange={(e) => setSearch(e.target.value)}
  type="text"
        placeholder="Search for a movie..."
     className="w-full h-11 rounded-full
bg-white/50
backdrop-blur-md
border border-black/40
pl-12 pr-4
text-black
placeholder:text-gray-500

focus:border-white/70
focus:ring-2 focus:ring-white/30"
      />
{/* serach btn */}
<div className="h-11 w-11 rounded-full
bg-white/40
backdrop-blur-md
border border-white/30
shadow-md
hover:bg-white/60
transition-all duration-300
flex items-center justify-center">
  <button onClick={handleSearch} className="h-auto flex justify-center items-center p-1 w-full ">
<IoMdSearch className="h-8 w-8"/>
  </button>
</div>
    </div>
  );
};

export default Input;