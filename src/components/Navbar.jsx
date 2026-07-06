import React from 'react'
import Logo from './Logo'
import Input from './Input'
import Heart from './Heart'
const Navbar = () => {
  return (
    <div className='h-15 w-full bg-gray-100  flex justify-between'>
<Logo/>
<Input/> 
<Heart/>
</div>
  )
}

export default Navbar