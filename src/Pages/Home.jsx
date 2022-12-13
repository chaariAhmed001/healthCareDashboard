import AnalyticsComponent from '../Components/AnalyticsComponent'
import { cards, downIcon, pieChartData, upIcon } from '../Data/data'
import Doughnut from '../Components/Pie.jsx';
import { EventsComponent, ToDayPatients,EarningChart, ToDoList, PatientsComments} from "../Components";
import { useContext } from 'react';
import { appContext } from '../Context/appContext.js';


const Home = () => {
  const {activeMenu,screenSize} = useContext(appContext)
  return (
    <div className={`mx-4 flex flex-wrap ${!activeMenu && 'flex-row'}`}>
      <div className='flex flex-col flex-warp'>
        <div className='flex flex-wrap md:gap-2'>
          { 
            cards.map((card,index)=>
            <div key={index} className={`h-28 ${activeMenu ? 'w-full lg:w-[45%] xl:w-[216px]' : 'w-full md:w-[45%] lg:w-[430px] xl:w-[272px]'} p-4 rounded-lg bg-white dark:bg-secondary-dark-bg m-2 md:ml-5 xl:m-2 xl:ml-4 drop-shadow-sm flex items-center gap-4`}>
              <div className='bg-main-bg dark:bg-[#201A23]/75 rounded-2xl p-2 text-primry-color dark:text-white w-12 h-12 mt-2 '>
                {card.icon}
              </div>
              <div className='flex flex-col w-[70%] text-primry-color dark:text-white'>
                  <span className='font-extrabold mt-2'>{card.text}</span>
                  <div className={`flex flex-col ${ !activeMenu && 'lg:flex-row xl:flex-col lg:justify-between '} `}>
                    <span className='font-extrabold '>+ {card.valeu}</span>
                    <span className={`flex items-center ${card.up ? "text-secondary-color" : "text-tertiary-color"}`}>{card.up ? upIcon : downIcon}<span className='ml-1'>{card.stat}%</span></span>
                  </div>
                 
              </div>
            </div>
            )
          }
        </div>
       <div className='flex gap-9 mt-2'>
          <AnalyticsComponent />
          {
            !activeMenu && screenSize>=1280 && <ToDoList />
          }
        </div>
        <div className='flex flex-wrap w-full'>
          <ToDayPatients />
          <EventsComponent />
          {
            !activeMenu && screenSize >= 1280 &&  <PatientsComments />
          }
        </div> 
      </div>
       
      {/* <div className={`flex   ${!activeMenu ?  'flex-col gap-y-2 mt-4' : 'gap-x-7 m-5'}`}>
        <EarningChart />
        <ToDoList />
        <PatientsComments />
      </div> */}
    </div>
  )
}

export default Home


