import React, { useContext } from 'react'
import { appContext } from '../Context/appContext.js'
import { eventsData } from '../Data/data'

const EventsComponent = () => {
  const {activeMenu} = useContext(appContext)

  return (
    <div className={`${activeMenu? 'md:w-full lg:w-[95%] xl:w-[47%]': 'w-[95%] sm:w-full md:w-[96%] lg:w-[47%] xl:w-[35%]'} h-[310px] ml-1 md:ml-5 my-2 mt-4 p-2 sm:p-4 bg-white dark:bg-secondary-dark-bg rounded-lg drop-shadow-md`}>
          <span className='text-primry-color dark:text-white font-bold text-lg'>Today Events</span>
          {
            eventsData.map((item,key)=>
                <div  key={key} className='flex items-center p-3 hover:rounded-lg border-b-1 cursor-pointer w-full hover:bg-main-bg dark:hover:bg-[#201A23]/75 '>
                    <div className='bg-main-bg dark:bg-[#201A23]/75  p-2 text-secondary-color dark:text-white rounded-lg drop-shadow-sm w-12 h-12 mr-3 pt-2'>
                        {item.icon}
                    </div>
                    <div className='flex justify-between items-center w-full'>
                      <div className='flex flex-col text-sm  text-primry-color dark:text-white'>
                          <span className=' font-extrabold '>{item.title}</span>
                          <span className='text-gray-400 font-light'>{item.desc}</span>
                      </div>
                      <span className='text-sm font-bold text-primry-color'>{item.Time}</span>
                    </div>
                </div>
            )
          }
          
        </div>
  )
}

export default EventsComponent