import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const Heart = () => {
   
  return (
    <div className='h-[90%] md:mt-1 bg-[#e4e3e3] rounded-[50%] w-15  md:mr-3 flex justify-center items-center'>
<button >
    <FaRegHeart className='text-3xl text-gray-800' />
</button>

    </div>
  )
}

export default Heart