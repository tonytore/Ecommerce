"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { LuSlack, LuUser2 } from 'react-icons/lu'
import DashboardSideBar from './DashboardSideBar'
import { GrDeliver } from 'react-icons/gr'
import { FaRegUserCircle } from "react-icons/fa";
import { ImCoinDollar } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { usePathname } from 'next/navigation'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"


const SidebarContainer = ({showSideBar,setShowSideBar}) => {

  const pathname = usePathname()

  const sidebarLinks = [
    {
      icon:LuUser2,
      title:"Customers",
      textColor:"text-green-500",
      href:"/dashboard/customers"
    },
  
    {
      icon:GrDeliver,
      title:"Orders",
      textColor:"text-green-500",
      href:"/dashboard/orders"
    },
    {
      icon:LuUser2,
      title:"Our Staff",
      textColor:"text-green-500",
      href:"/dashboard/ourstaff"
    },
    {
      icon:FaRegUserCircle,
      title:"Farmer",
      textColor:"text-green-500",
      href:"/dashboard/farmers"
    },
    {
      icon:ImCoinDollar,
      title:"Wallet",
      textColor:"text-green-500",
      href:"/dashboard/wallet"
    },
    {
      icon:IoSettingsOutline,
      title:"Settings",
      textColor:"text-green-500",
      href:"/dashboard/settings"
    }

  ]
  const catalogueLinks = [
    {
      icon:LuUser2,
      title:"Product",
      textColor:"text-green-500",
      href:"/dashboard/catalogue/products"
    },
    {
      icon:LuUser2,
      title:"Catagory",
      textColor:"text-green-500",
      href:"/dashboard/catalogue/category"
    },
  
    {
      icon:GrDeliver,
      title:"Orders",
      textColor:"text-green-500",
      href:"/dashboard/catalogue/orders"
    },
    {
      icon:LuUser2,
      title:"Attribute",
      textColor:"text-green-500",
      href:"/dashboard/catalogue/attribute"
    },
    {
      icon:FaRegUserCircle,
      title:"Coupons",
      textColor:"text-green-500",
      href:"/dashboard/catalogue/Coupons"
    },
    {
      icon:ImCoinDollar,
      title:"store slider",
      textColor:"text-green-500",
      href:"/dashboard/catalogue/store"
    },
  ]
  
const [openMenu, setOpenMenu] = useState(false)

  return (

     <div className={showSideBar?'sm:block mt-4 h-full md:mt-20 fixed bg-slate-600 w-64 flex flex-col space-y-12 text-md':"hidden sm:block mt-4 h-full md:mt-20 fixed bg-slate-600 w-64  flex-col space-y-12 text-md"}>
      <h1 className='text-2xl font-bold px-5'>Logo</h1>
      <Link 
        href='/dashboard'
        className={`${pathname==='/dashboard'?'px-5 border-l-4  flex items-center space-x-3 py-2 text-green-600  border-teal-500':"px-5 flex items-center text-slate-100 space-x-3 py-2  "}`}>
           <LuSlack/> 
          <span>Dashboard</span>
         </Link>
     

         <Collapsible>
  <CollapsibleTrigger onClick={()=>setOpenMenu(!openMenu)}>
  <button 
        href='/dashboard/catalogue'
        className={pathname==='/dashboard/catalogue'?
        'px-5 border-l-4  flex items-center space-x-3 py-2 text-green-600  border-teal-500':
        "flex items-center space-x-3 text-slate-100  py-2 px-6"}>
           <LuSlack/> 
          <span>Catalogue</span>
          {openMenu?<FaChevronDown />:<FaChevronRight/>}
          </button>
  </CollapsibleTrigger>
  {
      catalogueLinks.map((item,i)=>{
  

         const Icon = item.icon
        return(
          <CollapsibleContent 
          className={`${pathname===item.href?
            'ml-10 mr-10 border-l-8 bg-slate-800 flex flex-col items-center  border-teal-500' :
          "bg-slate-800 mx-10 flex flex-col items-center"}`
          }>
              <Link 
              onClick={()=>setShowSideBar(!showSideBar)}
              key={i}
              href={item.href}
             className={pathname===item.href?"px-5 flex items-center  text-green-600 space-x-3 py-2":"px-5 flex items-center text-slate-100 space-x-3 py-2"}>
           <Icon/> 
          <span>{item.title}</span>
         </Link>
         </CollapsibleContent>
        )
      })
     
    }
  
</Collapsible>
         
       {
        sidebarLinks.map((item,id)=>{  
         return <DashboardSideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} key={id} data={item}/>
        })
       }
  
  <button className='flex items-center mx-auto px-6 py-2 rounded-md bg-teal-600 hover:bg-teal-500'>
    <FiLogOut/>
    <span className='px-4 py-2 text-white'>Logout</span>
  </button>
    </div>
  
  )
}

export default SidebarContainer
