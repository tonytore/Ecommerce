"use client"

import React, { useEffect, useState } from 'react'
import data from '../../data.json'

const DashboardTable = () => {

const [currentPage,setCurrentPage] = useState(1)


const PAGE_SIZE = 10
const startIndex = (currentPage-1)*PAGE_SIZE
const lastIndex = startIndex + PAGE_SIZE

const totalPages =Math.ceil(data.length/PAGE_SIZE)

const itemTotalIndex = data.length
const itemStartIndex = startIndex +1
const itemEndIndex = Math.min(startIndex + PAGE_SIZE,data.length)

useEffect(()=>{
  
  setCurrentPage(currentPage-1)
},[currentPage])

  return (

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-slate-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   id
                </th>
                <th scope="col" class="px-6 py-3">
                    First_name
                </th>
                <th scope="col" class="px-6 py-3">
                    Last_name
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    gender
                </th>
               
            </tr>
        </thead>
        <tbody>
      
        {
                data.slice(startIndex,lastIndex).map((item,i)=>{
                    return (
                        <tr class="bg-slate-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            {item.id}
                        </td>
                        <th  class="px-6 py-4">
                            {item.first_name}
                        </th>
                        <td class="px-6 py-4">
                            {item.last_name}
                        </td>
                        <td class="px-6 py-4">
                            {item.email}
                        </td>
                        <td class="px-6 py-4">
                            {item.gender}
                        </td>
                       
                    </tr>
                    )
                })
            }
      
            {/*  */}
          </tbody>
    </table>
    {/* <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-50 dark:text-white">{itemStartIndex}-{itemEndIndex}</span> of <span className="font-semibold text-gray-50 dark:text-white">{totalPages}</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 bg-slate-900">
            <li>
                <button 
                onClick={setCurrentPage(currentPage-1)} 
                disabled={currentPage==1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
            </li>

                {
                    Array.from({length:totalPages},(_,i)=>{
                         return (
                            <li key={i}>
                            <button
                            onClick={setCurrentPage(i+1)}
                             className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i+1}</button>
                        </li>
                         )
                    })
                }
           
           
            <li>
        <button 
        // onClick={setCurrentPage(currentPage+1)} 
        // disabled={currentPage == totalPages}
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
            </li>
        </ul>
    </nav> */}
</div>



        
)}

export default DashboardTable
