import AnalyticsComponent from '../Components/AnalyticsComponent'
import { cards, downIcon, pieChartData, upIcon } from '../Data/data'
import Doughnut from '../Components/Pie.jsx';
import { EventsComponent, ToDayPatients,EarningChart, ToDoList, PatientsComments} from "../Components";
import { useContext } from 'react';
import { appContext } from '../Context/appContext.js';


const Home = () => {
  const {activeMenu} = useContext(appContext)
  return (
    <div className={`ml-5 flex flex-wrap ${!activeMenu && 'flex-row'}`}>
      <div className='flex flex-col flex-warp'>
        <div className='flex flex-wrap'>
          { 
            cards.map((card,index)=>
            <div key={index} className='w-52 h-28 p-4 rounded-lg bg-white dark:bg-secondary-dark-bg m-4 drop-shadow-sm flex items-center gap-4'>
              <div className='bg-main-bg dark:bg-[#201A23]/75 rounded-2xl p-2 text-primry-color dark:text-white w-12 h-12 mt-2 '>
                {card.icon}
              </div>
              <div className='flex flex-col text-primry-color dark:text-white'>
                  <span className='font-extrabold mt-2'>{card.text}</span>
                  <span className='font-extrabold '>+ {card.valeu}</span>
                  <span className={`flex items-center ${card.up ? "text-secondary-color" : "text-tertiary-color"}`}>{card.up ? upIcon : downIcon}<span className='ml-1'>{card.stat}%</span></span>
              </div>
            </div>
            )
          }
        </div>
      <div className='flex w-64'>
          <AnalyticsComponent />
          <div className='bg-white dark:bg-secondary-dark-bg drop-shadow-md rounded-2xl w-full mx-7 p-4 '>
            <span className="text-primry-color dark:text-white font-bold text-lg">Patient Visit By City</span>
            <Doughnut id="chart-pie" data={pieChartData} legendVisiblity  />        
          </div>
        </div>
        <div className='flex mt-1'>
          <ToDayPatients />
          <EventsComponent />
        </div>
      </div>
      
      <div className={`flex   ${!activeMenu ?  'flex-col gap-y-2 mt-4' : 'gap-x-7 m-5'}`}>
        <EarningChart />
        <ToDoList />
        <PatientsComments />
      </div>
    </div>
  )
}

export default Home


