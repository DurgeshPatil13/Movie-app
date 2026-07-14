import React from "react";
import Logo from "./Logo";
import Input from "./Input";
import Heart from "./Heart";

const Navbar = ({search, setSearch, handleSearch}) => {

  return (
    <nav className="sticky bg-[#161B26] top-0 z-50 mb-5 w-full

backdrop-blur-xl
border-b border-[#172a5af2]
shadow-[0_8px_32px_rgba(0,0,0,0.08)]
px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">

        <Logo />

        <div className="order-3 w-full md:order-2 md:flex-1">
          <Input 
           search={search}
    setSearch={setSearch}
    handleSearch={handleSearch} />
        </div>

        <div className="order-2 ml-auto md:order-3 md:ml-4">
          <Heart />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;