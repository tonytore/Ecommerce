import React from 'react'
import Heading from '../components/Heading'
import LargeCards from '../components/LargeCards'
import SmallCards from '../components/SmallCards'
import DashboardChart from '../components/DashboardChart'
import DashboardTable from '../components/DashboardTable'




const DashBoard = () => {
  return (
   
    <div className='flex flex-col gap-16 w-full h-full bg-slate-900'>
     <div className='py-14 text-2xl text-red-500'>
      <Heading title="Dashboard Overview"/>
    </div>
    <LargeCards/>
    <SmallCards/>
    <DashboardChart/>
     <DashboardTable/>
   
    
    </div>
   
  )
}

export default DashBoard
