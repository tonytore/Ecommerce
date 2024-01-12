"use client"
import React from 'react'


const SmallCard = ({data}) => {
  return (
    <div className={`flex justify-start items-center py-2 px-5 rounded-md gap-5 bg-slate-600 text-white`}>
      
          <div className={`${data.color} w-20 h-20 rounded-full flex justify-center items-center text-white`}>
            <p className=''>{data.icon}</p>
          </div>
        <div className='flex flex-col gap-1 items-start justify-start'>
          <h3>{data.order}</h3>
          <h1 className='text-2xl font-medium'>{data.price}</h1>
        </div>
      
    </div>
  )
}

export default SmallCard