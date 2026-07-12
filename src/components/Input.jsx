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
        className="  w-full h-11 rounded-full border  border-gray-400 pl-12 text-black  pr-4 text-sm md:text-base outline-none focus:ring-2 "
      />
{/* serach btn */}
<div className="bg-gray-200  h-10 text-sm w-10 mt-1 rounded-[50%]">
  <button onClick={handleSearch} className="h-auto flex justify-center items-center p-1 w-full ">
<IoMdSearch className="h-8 w-8"/>
  </button>
</div>
    </div>
  );
};

export default Input;