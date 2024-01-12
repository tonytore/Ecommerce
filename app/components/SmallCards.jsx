import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { LuLoader2 } from "react-icons/lu";
import { TfiReload } from "react-icons/tfi";
import { IoCheckmarkDone } from "react-icons/io5";
import SmallCard from './SmallCard'

const SmallCards = () => {
        const orderState = [
        {
            icon:<FiShoppingCart/>,
            order:"Today Orders",
            price:500,
            color:'bg-green-600'
        },
        {
            icon:<LuLoader2/>,
            order:"Orders Pending",
            price:100,
            color:'bg-blue-600'
        },
        {
            icon:<TfiReload/>,
            order:"Order Processing",
            price:200,
            color:'bg-orange-600'
        },
        {
            icon:<IoCheckmarkDone/>,
            order:"Orders Deliverd",
            price:300,
            color:'bg-pink-600'
        },
    ]
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      
    {
    orderState.map((item,i)=>{
      return<SmallCard data={item} key={i}/>
     
    })
    }


  </div>
  )
}

export default SmallCards
