import React from "react";
import Logo from "./Logo";
import Input from "./Input";
import Heart from "./Heart";

const Navbar = () => {
  return (
    <nav className="w-full  mb-5 sticky top-0 z-100 bg-gray-100 px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">

        <Logo />

        <div className="order-3 w-full md:order-2 md:flex-1">
          <Input />
        </div>

        <div className="order-2 ml-auto md:order-3 md:ml-4">
          <Heart />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;