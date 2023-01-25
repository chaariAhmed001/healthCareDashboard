import React, { useContext, useEffect } from "react";
import { Lists, PatientChat } from "../Components";
import { appContext } from "../Context/appContext.js";
import { patientChat, searchIcon } from "../Data/data";

const Chats = () => {
  const { screenSize, setShowConversation, activeMenu } =
    useContext(appContext);

  useEffect(() => {
    screenSize >= 1024 ? setShowConversation(true) : setShowConversation(false);
  }, [screenSize]);
  return (
    <div className="w-full min-h-screen ml-4 flex flex-wrap">
      <div
        className={` ${
          activeMenu ? "lg:w-[30%] xl:w-[25%]" : "w-[94%] sm:w-full lg:w-[40%]"
        }`}
      >
        {/* search Bar */}
        <div className=" m-2 bg-white dark:bg-secondary-dark-bg p-x-2 py-3 rounded-lg ml-4">
          <div className="ml-2 flex">
            <div className="text-secondary-color dark:text-white ">
              {searchIcon}
            </div>
            <input
              type="text"
              placeholder="Search ..."
              className="focus:outline-none bg-transparent text-gray-400 text-sm"
            />
          </div>
        </div>
        {/* Patient List  */}
        <div
          className={`${
            activeMenu
              ? "lg:h-[880px] xl:h-[620px]"
              : "w-[94%] sm:w-full lg:w-full lg:h-[880px] xl:h-[620px]"
          }   p-2 sm:p-4 text-primry-color dark:text-white overflow-hidden hover:overflow-scroll scroll-smooth`}
        >
          {patientChat.map((patient, index) => (
            <Lists
              key={index}
              data={patient}
              title={patient?.name}
              subtitle={patient?.discussion?.[0]?.message}
              img={patient?.image}
              time={patient?.discussion?.[0]?.time}
            />
          ))}
        </div>
      </div>
      <PatientChat />
    </div>
  );
};

export default Chats;
