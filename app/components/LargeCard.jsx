'use server'
import { type } from 'os';
import React from 'react'

import { Interface } from 'readline';




const LargeCard = ({data}) => {

 

  return (
    <div className={`flex flex-col justify-center items-center py-11 rounded-md gap-1  text-white ${data.color}`}>
      
         {data.icon}
         <h3>{data.order}</h3>
         <h1 className='text-2xl font-medium'>{data.price}</h1>
      
    </div>
  )
}

export default LargeCard
