import { TooltipComponent } from "@syncfusion/ej2-react-popups/index.js";
import React, { useContext, useEffect } from "react";
import { appContext } from "../Context/appContext.js";
import { icon, navBarIcons, searchIcon } from "../Data/data";
import userImg from "../Data/man.png";
import {Chat,Notification,UserProfile} from "./index"



const NavBarButton = ({ name, icon }) => {
  const { darkthem, setDarkthem ,handleClick} = useContext(appContext);
  
  return (
    <TooltipComponent content={name} position="BottomCenter">
      <button
        type="button"
        className={`relative  p-2 rounded-full hover:bg-white hover:animate-bounce dark:hover:bg-secondary-dark-bg/75 ml-2 ${
          darkthem &&
          name === "darkMode" &&
          "bg-secondary-dark-bg mr-1 p-1 duration-500 rotate-[360deg]"
        }`}
        onClick={() => {
          name === "darkMode" && setDarkthem(!darkthem);
          name !== "darkMode" && handleClick(name,"open")
        }}
      >
        <span
          className={`${
            name !== "darkMode" &&
            " animate-ping absolute inline-flex rounded-full h-2 w-2 right-2 top-2 bg-tertiary-color"
          }`}
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const NavBar = () => {
  const { activeMenu, setActiveMenu, isClicked ,handleClick,screenSize,setScreenSize,setCloseMenu,} =useContext(appContext);
    useEffect(() => {
      //get width of the screen 
      const hanleScreenSize = () => setScreenSize(()=> window.innerWidth);
      //get width of the windo on evrey resize of the screnn
      window.addEventListener('resize',hanleScreenSize)
      hanleScreenSize()
    
      return () => {
        window.removeEventListener('resize',hanleScreenSize)
      }
    }, [screenSize])
    useEffect(() => {
      if (screenSize <= 800) {
        setActiveMenu(false)        
      } else {
        setActiveMenu(true) 
      }
    }, [screenSize])
  return (
    <div className="m-5">
      <div className="flex justify-between items-center">
        <div className=" flex  items-center justify-center">
          <div
            className="p-2 rounded-full hover:bg-white dark:hover:bg-secondary-dark-bg/75 cursor-pointer"
            onClick={() => {
              setActiveMenu(!activeMenu);
              setCloseMenu(true)
            }}
            style={{  display: screenSize<='600' && 'none' }}
          >
            {icon}
          </div>
          <div className="w-54 lg:w-60 h-8 ml-4 px-2 ring-offset-2 ring-2 bg-white rounded-lg hidden md:flex items-center text-sm text-primry-color shadow-sm dark:text-white dark:bg-secondary-dark-bg/75  ">
            {searchIcon}
            <input
              type="text"
              placeholder=" Quick search..."
              className="focus:outline-none dark:bg-secondary-dark-bg/75"
            />
          </div>
          <div className="block md:hidden">
            {searchIcon}
          </div>
        </div>

        <div className="flex flex-row items-center ">
          <>
            {navBarIcons.map((item, index) => (
              <NavBarButton key={index} name={item.name} icon={item.icon}  />
            ))}
          </>

          <div className="w-8 h-8 ml-2" onClick={ ()=> handleClick("userProfile","open") }>
            <img src={userImg} className='cursor-pointer'/>
          </div>
          {isClicked.notification && <Notification />}
          {isClicked.chat && <Chat />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
