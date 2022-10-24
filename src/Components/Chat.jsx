import { TooltipComponent } from '@syncfusion/ej2-react-popups/index.js'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../Context/appContext.js'
import { chatData, icon2 } from '../Data/data.js'

const Chat = () => {
  const {handleClick} = useContext(appContext)

  return (
    <div className={`flex flex-col absolute top-16 right-6 md:right-20 md:rigth-16 rounded-lg w-80 bg-white dark:bg-secondary-dark-bg`} style={{zIndex: "100000"}}>
      <div className='flex justify-between items-center w-full p-4'>
        <span className='text-primry-color dark:text-white font-bold'>Chats</span>
        <TooltipComponent content="Close Chat" position="BottomCenter">
          <button
            type="button"
           onClick={()=>{handleClick('chat',"close")}} 
           className='rounded-full hover:drop-shadow-lg hover:bg-main-bg dark:hover:bg-[#201A23]/75 p-1.5 m-auto '
          >
            {icon2}
          </button>
        </TooltipComponent>
      </div>
      <div className='p-2 m-x-2 '>
        {chatData.map((item,index)=>
          <div key={index} className='flex items-center p-3 rounded-lg  cursor-pointer w-full hover:bg-main-bg dark:hover:bg-[#201A23]/75'>
            <div className='w-14 h-14 rounded-full drop-shadow-sm mr-3'>
              <img src={item.image} alt="" srcset="" />
            </div>
            <div className='flex flex-col text-sm w-full  text-primry-color dark:text-white'>
              <span className=' font-extrabold'>{item.desc}</span>
              <span className='text-gray-400 font-light'>{item.message}</span>
              <span className='font-medium'>{item.time}</span>
            </div>
          </div>
        )}
      </div>
      <div className='p-2 text-secondary-color font-bold border-t-2 w-[90%] m-auto'>
        <Link to='#'>View all messages</Link>
      </div>
    </div>
  )
}

export default Chat