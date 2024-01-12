import React from 'react'
import LargeCard from './LargeCard'
import { GrResources } from 'react-icons/gr'

const LargeCards = () => {

    const orderState = [
        {
            icon:<GrResources/>,
            order:"Today Orders",
            color:"bg-green-600",
            price:"UGX.110000"
        },
        {
            icon:<GrResources/>,
            order:"Yesterday Orders",
            color:"bg-blue-600",
            price:"UGX.130000"
        },
        {
            icon:<GrResources/>,
            order:"This Month",
            color:"bg-orange-600",
            price:"UGX.300000"
        },
        {
            icon:<GrResources/>,
            order:"All-Time Sales",
            color:"bg-pink-600",
            price:"UGX.500000"
        },
    ]
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      
      {
      orderState.map((item,i)=>{
        return<LargeCard data={item} key={i}/>
      })
      }


    </div>
  )
}

export default LargeCards
