import Link from 'next/link'
import React from 'react'
import SideBar from './SideBar'

const SidebarContainer = () => {
  return (
  
     <div className=' mt-4 h-full fixed  flex flex-col space-y-12 text-xl'>
      <h1 className='text-2xl font-bold'>Logo</h1>
      <Link href={'/dashboard'}>  <SideBar text='Dashboard'/></Link>
      <Link href={'dashboard/catalogue'}>  <SideBar text='Catalogue'/></Link>
      <Link href={'/dashboard'}>  <SideBar text='Dashboard'/></Link>
      <Link href={'dashboard/catalogue'}>  <SideBar text='Catalogue'/></Link>
      <Link href={'/dashboard'}>  <SideBar text='Dashboard'/></Link>
      <Link href={'dashboard/catalogue'}>  <SideBar text='Catalogue'/></Link>
      <Link href={'/dashboard'}>  <SideBar text='Dashboard'/></Link>
      <Link href={'dashboard/catalogue'}>  <SideBar text='Catalogue'/></Link>
    </div>
  
  )
}

export default SidebarContainer
