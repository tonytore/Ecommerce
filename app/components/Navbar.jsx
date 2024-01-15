"use client"

import React from 'react'
import { IoIosMenu, IoIosNotificationsOutline } from 'react-icons/io'
import { IoPartlySunnyOutline, IoSunnyOutline } from 'react-icons/io5'
import profile from '../../public/profile.jpg'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"



const Navbar = ({showSideBar,setShowSideBar}) => {
  return (
    <div className="w-full h-20 text-green fixed  bg-slate-800 flex justify-between  items-center">
        <button 
        onClick={()=>setShowSideBar(!showSideBar)}
        className="text-green-600 cursor-pointer sm:pr-[100px] text-2xl pl-3">
          <IoIosMenu />
          </button>
        <div className='flex pr-[400px] space-x-5 items-center cursor-pointer'>
          <p className="text-green-600 text-2xl"><IoPartlySunnyOutline /></p>
            <p className="text-green-600 text-2xl"><IoIosNotificationsOutline /></p>
           
           <DropdownMenu>
              <DropdownMenuTrigger>
              <Image className='w-7 h-7 rounded-full' src={profile} alt='profile'/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div className='bg-slate-800 flex flex-col items-center px-8 py-4 mt-6 mr-[70px]'>
                <DropdownMenuLabel className='px-3 py-1'>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='px-3 py-1'>Profile</DropdownMenuItem>
                <DropdownMenuItem className='px-3 py-1'>Billing</DropdownMenuItem>
                <DropdownMenuItem className='px-3 py-1'>Team</DropdownMenuItem>
                <DropdownMenuItem className='px-3 py-1'>Subscription</DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          
            
            
        </div>
      
            
        
      </div>
  )
}

export default Navbar
