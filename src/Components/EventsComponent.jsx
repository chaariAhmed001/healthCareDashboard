import React from 'react'
import { eventsData } from '../Data/data'

const EventsComponent = () => {
  return (
    <div className='w-100 lg:w-[34vw] bg-white dark:bg-secondary-dark-bg ml-5 my-4 p-4 rounded-lg drop-shadow-md '>
          <span className='text-primry-color dark:text-white font-bold text-lg'>Today Events</span>
          {
            eventsData.map((item,key)=>
                <div  key={key} className='flex items-center p-3 hover:rounded-lg border-b-1 cursor-pointer w-full hover:bg-main-bg dark:hover:bg-[#201A23]/75 '>
                    <div className='bg-main-bg dark:bg-[#201A23]/75  p-2 text-secondary-color dark:text-white rounded-lg drop-shadow-sm w-12 h-12 mr-3 pt-2'>
                        {item.icon}
                    </div>
                    <div className='flex flex-col text-sm w-full text-primry-color dark:text-white'>
                        <span className=' font-extrabold '>{item.title}</span>
                        <span className='text-gray-400 font-light'>{item.desc}</span>
                    </div>
                    <span className='text-md font-bold w-full text-primry-color'>{item.Time}</span>
                </div>
            )
          }
          
        </div>
  )
}

export default EventsComponent