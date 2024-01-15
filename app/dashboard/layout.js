"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";




export default function Layout({
  children
}) {

const [showSideBar,setShowSideBar] = useState(false)




  return (
    
  
           <div className='flex w-full bg-slate-600'>
         
      
        <SidebarContainer showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
     
       
       <div className='lg:ml-64 flex-grow bg-slate-800 min-h-screen'>
           <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
         <main className='p-8 h-full bg-slate-900 text-slate-50 mt-20'>
                 {children}
           </main>
       </div>
    </div>
        
      
    
    
  )
}












  