import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProductsChart from './BestSellingProductsChart'

const DashboardChart = () => {
  return (
    <div className=' h-screen grid grid-cols-1 lg:grid-cols-2 gap-3'>
      <WeeklySalesChart/>
      <BestSellingProductsChart/>
      
    </div>
  )
}

export default DashboardChart
