import React from 'react'
import logo from '../assets/cinedeck.jpeg'
const Logo = () => {
  return (
      <div className="h-15 w-60 flex items-center gap-3  px-3">
  {/* Logo */}
  <div className="w-12 h-12 ">
    <img
      className="w-full h-full rounded-full object-cover"
      src={logo}
      alt="CineDeck Logo"
    />
  </div>

  {/* Text */}
  <div className="flex flex-col">
    <h1 className="text-md font-bold font-['syne'] text-black tracking-wide">CINEDECK</h1>
    <p className="text-[10px] font-['syne'] text-gray-600">EXPLORE • FIND • WATCH</p>
  </div>
</div>
  )
}

export default Logo