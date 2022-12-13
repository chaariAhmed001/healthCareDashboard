import React from 'react'

const AnalyticsCard = ({title,value,icon,stat,up}) => {
    return (
        <div className='w-[90%] sm:w-[44%] md:w-[40%] xl:w-[80%] h-28 bg-main-bg dark:bg-[#201A23]/75 drop-shadow-sm rounded-2xl flex flex-col p-3 m-4'>
          <span className='font-bold text-lg mb-3'>{title}</span>
          <div className='flex justify-between items-center'>
            <span className='text-5xl font-bold'>{value}</span>
            <span className={ ` ${up ?"bg-green-200" : "bg-red-200" } rounded-3xl flex items-center justify-between w-14 px-2 py-1 text-sm font-bold text-primry-color` }>{icon} {stat}%</span>
          </div>
        </div>
      )
}

export default AnalyticsCard