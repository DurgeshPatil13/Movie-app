import React from "react";
import { IoMdSearch } from "react-icons/io";
const Input = ({search,setSearch,handleSearch}) => {
  return (
    <div className="flex bg-[#161B26]  justify-between gap-4 w-full">
      <input
        value={search}
  onChange={(e) => setSearch(e.target.value)}
  type="text"
        placeholder="Search for a movie..."
     className="w-full h-11 rounded-full
bg-[#161B26]
backdrop-blur-md
border border-[#172a5af2] outline-none
pl-4 pr-4
text-gray-300

placeholder:text-gray-500"
      />
{/* serach btn */}
<div className="h-11 w-11 rounded-full
   bg-[#1f2635]
backdrop-blur-md
border
shadow-md
hover:scale-110
hover:border-[#172a5af2]
transition-all duration-300
flex items-center justify-center">
  <button onClick={handleSearch} className="h-auto flex justify-center items-center p-1 w-full ">
<IoMdSearch className="h-8 w-8 hover:text-[#666666] "/>
  </button>
</div>
    </div>
  );
};

export default Input;