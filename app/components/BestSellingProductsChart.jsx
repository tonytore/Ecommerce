'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


 

  ChartJS.register(ArcElement, Tooltip, Legend);


const BestSellingProductsChart = () => {

 
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className='bg-slate-600 rounded-lg'>
      <h1 className='text-white text-2xl px-4 py-5 mb-3  font-semibold'>Best Selling Products</h1>
      <Pie data={data}/>
    </div>
  )
}

export default BestSellingProductsChart




