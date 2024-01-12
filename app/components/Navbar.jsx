import React from 'react'
import { IoIosMenu, IoIosNotificationsOutline } from 'react-icons/io'
import { IoSunnyOutline } from 'react-icons/io5'
import profile from '../../public/profile.jpg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-full h-16 fixed bg-slate-800 flex justify-between items-center gap-1 px-3 py-5 ">
        <p className="text-white text-2xl pl-3"><IoIosMenu /></p>
        <div className='space-x-3 text-white'>
        <IoSunnyOutline />
        <IoIosNotificationsOutline />
        <Image className='w-10 h-10 rounded-full' src={profile} alt='profile'/>
       <p className="text-white text-2xl pl-3">ASGSHFJFG</p>
        </div>
      </div>
  )
}

export default Navbar
