"use client"
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
 import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  
  ],
};
const WeeklySalesChart = () => {

const tabs = [
  {
  title:"Sales",
  type:'sales'
},
{
  title:"Orders",
  type:'orders'
},
]

  const [displayToChart,setDisplayToChart] = useState(tabs[0].type)



  return (
    <div className='bg-slate-600 rounded-lg'>
       <h1 className='text-white text-2xl px-4 py-5 font-semibold'>Weekly Sales</h1>
    

<div className="text-sm font-medium text-center ml-4 text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
      {
        tabs.map((tab,i)=>{
          return  (<li className="me-2 text-center" key={i}>
          <button onClick={()=>setDisplayToChart(tab.type)} className={displayToChart===tab.type?
            `inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-300 hover:border-orange-300 dark:hover:text-gray-300`:
            "inline-block p-4 hover:text-blue-600 border-b-2 hover:border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"}>
              {tab.title}
              </button>
      </li>)
        })
      }
        
        
       
    </ul>
</div>

    {
      tabs.map((tab,i)=>{
        if(displayToChart == tab.type){
          return (
            <>
            
            <Line options={options} data={data}/>
            </>
          )
        }
        return null
      })
    }


    </div>
 
  )
}

export default WeeklySalesChart
