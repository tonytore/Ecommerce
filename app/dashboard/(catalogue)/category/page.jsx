import React from 'react'
import CatHeading from '../../../components/CarHeading'

const Category = () => {
  return (
    <div className=' text-white'>
      <CatHeading title="Category" href='/dashboard/category/new' linkTitle='Add Category'/>
    </div>
  )
}

export default Category
