import React from 'react'
import { IoMdSearch } from "react-icons/io";

const Input = () => {
  return (
    <div className='h-full w-250  '>
        <div className='h-full  w-full ml-15 mt-2 rounded-4xl'>
            
<input className='border border-gray-500 h-[80%] w-[80%] p-3 rounded-4xl text-xl text-black' type="text" placeholder='Search for a movie...' /> 
        </div>
    </div>
  )
}

export default Input