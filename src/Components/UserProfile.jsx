import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../Context/appContext.js";
import { icon2, notificationData, userProfilData } from "../Data/data";
import avatar from "../Data/man.png";

const UserProfile = () => {
  const { handleClick } = useContext(appContext);

  return (
    <div
      className={`flex flex-col absolute top-16 right-4 md:rigth-16 rounded-lg w-80 bg-white dark:bg-secondary-dark-bg`}
      style={{ zIndex: "100000" }}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center pt-4 py-4 pb-2 border-b-2 w-[90%] m-auto">
          <span className="text-primry-color dark:text-white font-bold">
            Good morning, Ahmed
          </span>
          <TooltipComponent content="Close User Profil" position="BottomCenter">
            <button
              type="button"
              onClick={() => {
                handleClick("notification", "close");
              }}
              className="rounded-full hover:drop-shadow-lg hover:bg-main-bg dark:hover:bg-[#201A23]/75 p-1.5 m-auto "
            >
              {icon2}
            </button>
          </TooltipComponent>
        </div>
        <div className="flex gap-2 p-2 mt-2">
          <img
            src={avatar}
            alt=""
            srcset=""
            className="w-14 h-14 dark:text-white"
          />
          <div className="flex flex-col text-primry-color dark:text-white">
            <span className="font-bold mt-1">Chaari Ahmed</span>
            <span className="font-ligth">chaari@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="p-2 mx-2">
        {userProfilData.map((item, index) => (
          <div
            key={index}
            className="pl-4 flex items-center p-3 rounded-lg  cursor-pointer w-full hover:bg-main-bg dark:hover:bg-[#201A23]/75"
          >
            <div className="drop-shadow-sm mr-3 text-primry-color dark:text-white">
              {item.icon}
            </div>
            <div className="flex flex-col text-sm w-full  text-primry-color dark:text-white">
              <span className=" font-extrabold">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
