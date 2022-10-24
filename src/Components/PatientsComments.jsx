import React, { useContext } from 'react'
import { appContext } from '../Context/appContext.js'
import { commentsList, notificationData } from '../Data/data.js'

const PatientsComments = () => {
    const {activeMenu} = useContext(appContext)

  return (
    <div className={`bg-white dark:bg-secondary-dark-bg h-64 rounded-lg drop-shadow-md p-4 ${!activeMenu ?  'w-60' : 'w-72'}`}>
        <span className="text-primry-color dark:text-white font-bold text-lg">Patient Comments</span>
        <div>
        {commentsList.map((item,index)=>
          <div key={index} className='flex items-center p-3 rounded-lg  cursor-pointer w-full hover:bg-main-bg dark:hover:bg-[#201A23]/60'>
            <div className='w-10 h-10 rounded-full drop-shadow-sm mr-3'>
              <img src={item.image} alt="" srcset="" />
            </div>
            <div className='flex flex-col text-sm w-full  text-primry-color dark:text-white'>
              <span className=' font-extrabold'>{item.name}</span>
              <span className='text-gray-400 text-sm font-light'>{item.comments}</span>
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default PatientsComments