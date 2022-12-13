import React from 'react'
import { toDoList } from '../Data/data.js'

const ToDoList = () => {

  return (
    <div className={`w-[270px] h-full bg-white dark:bg-secondary-dark-bg rounded-lg drop-shadow-md p-4 `}>
          <span className="text-primry-color dark:text-white font-bold text-lg">your to-Do List</span>
          <div className='flex flex-wrap'>
            {
                toDoList.map((item,key)=>
                    key<=4 && <div key={key} className='flex items-center p-3 hover:rounded-lg border-b-1 cursor-pointer w-full hover:bg-main-bg dark:hover:bg-[#201A23]/75 '>
                        <div className='bg-main-bg dark:bg-[#201A23]/75 p-2 text-secondary-color dark:text-white rounded-lg drop-shadow-sm  mr-3 pt-2'>
                            {item.icon}
                        </div>
                        <div className='flex flex-col text-sm w-full text-primry-color dark:text-white'>
                            <span className=' font-extrabold '>{item.title}</span>
                            <span className='text-gray-400 font-light'>{item.desc}</span>
                        </div>
                    </div>
                )
            }
          </div>
    </div>
  )
}

export default ToDoList