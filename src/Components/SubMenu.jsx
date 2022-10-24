import React from 'react'
const SubMenu = ({items,open}) => { 
    return (
        open &&<ul>
            {items.map((item,index)=>(
                <li key={index} className="text-gray-300 font-semibold capitalize items-center gap-x-4 cursor-pointer px-5 p-2 ml-6 hover:bg-secondary-color rounded-md ">
                    {item}
                </li>
            ))}
        </ul>
  )
}

export default SubMenu