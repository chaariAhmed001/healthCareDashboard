import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { RgbColor } from '@syncfusion/ej2/heatmap'
import React from 'react'
import { Link } from 'react-router-dom'
import { rigthAroow, todayPatientsButtons, todyPatients } from '../Data/data'

const ToDayPatients = () => {
  return (
    <div className='w-100 lg:w-[34vw] bg-white dark:bg-secondary-dark-bg ml-5 my-4 p-4 rounded-lg drop-shadow-md '>
          <div className='flex justify-between items-center'>
            <span className='text-primry-color dark:text-white font-bold text-lg'>Today Patients</span>
            <Link to='#' className='flex items-center gap-1 text-secondary-color/[50%] dark:text-white text-sm hover:text-secondary-color'>All Appointments <span>{rigthAroow}</span></Link>          
          </div>
          <div className='flex flex-warp flex-col h-60 overflow-hidden hover:overflow-scroll mt-2'>
             {
              todyPatients.map((item,key)=>
              <div key={key} className='flex items-center p-3 rounded-lg  cursor-pointer w-full hover:bg-main-bg dark:hover:bg-[#201A23]/75'>
                  <div className='w-16 h-16 rounded-full drop-shadow-sm mr-3 pt-2'>
                    <img src={item.photo} alt="" srcset="" />
                  </div>
                  <div className='flex flex-col text-sm w-full  text-primry-color dark:text-white'>
                    <span className=' font-extrabold'>{item.name}</span>
                    <span className='text-gray-400 font-light'>{item.Diagnosis}</span>
                    <span className='font-bold'>{item.time}</span>
                  </div>
                  <div className='flex gap-2'>
                    {todayPatientsButtons.map((item,key)=>
                    <TooltipComponent key={key} content={item.text} position='BottomCenter'>
                        <button className={`text-white p-1 rounded-full hover:opacity-100]`} style={{backgroundColor: `rgba(${item.color}, 0.8)` ,}}>
                          {item.icon}
                        </button>
                    </TooltipComponent>
                    )}
                  </div>
              </div>)
             }
          </div>
        </div>
  )
}

export default ToDayPatients