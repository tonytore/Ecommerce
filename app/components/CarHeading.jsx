import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const CatHeading = ({title,href,linkTitle}) => {
  return (
    <div className='text-white pl-3 flex justify-between items-center'>
     <h1 className=' text-2xl font-bold '> {title}</h1>
     <div className='bg-lime-500 px-4 py-2 rounded-lg flex items-center space-x-3'>
        <FaPlus />
        <button >
           <Link href={href}>
           {linkTitle}
           </Link>
        </button>
     </div>
    </div>
  )
}

export default CatHeading
