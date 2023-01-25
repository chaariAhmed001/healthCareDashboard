import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useContext } from "react";
import { appContext } from "../Context/appContext.js";
import { arrowRigth } from "../Data/data";

const Lists = ({ data, title, img, subtitle, date, type, time }) => {
  const {
    activeMenu,
    setPatientDetails,
    setShowPatientDetails,
    patientDetails,
    screenSize,
  } = useContext(appContext);
  const showPatient = (data) => {
    data && setPatientDetails(data);
    screenSize >= 1024
      ? setShowPatientDetails(false)
      : setShowPatientDetails(true);
  };
  return (
    <div className="flex justify-between items-center px-2 py-4 mb-1 hover:rounded-md h-16 w-full hover:bg-white dark:hover:bg-secondary-dark-bg hover:cursor-pointer">
      <div className="flex w-full">
        <img className="w-12 h-12 rounded-lg object-fill" src={img} />
        <div className="flex flex-col justify-center ml-2 text-sm">
          <span className="font-extrabold">{title}</span>
          <span className="text-gray-400 font-light h-6 truncate w-28">
            {subtitle}
          </span>
        </div>
      </div>
      <div
        className={`${
          !activeMenu && "xl:flex"
        } hidden sm:flex lg:hidden flex-col justify-center w-[100px]`}
      >
        <span className="text-sm text-secondary-color font-bold">{date}</span>
        <span
          className={`font-medium ${type === "Chronic" && "text-red-300"} ${
            type === "Acute" && "text-green-300"
          } ${type === "Remitting" && "text-orange-300"}`}
        >
          {type}
        </span>
      </div>
      {time ? (
        <span className="text-secondary-color font-bold text-xs h-full flex items-center mt-4">
          {time}
        </span>
      ) : (
        <TooltipComponent
          content="Show Patient Details"
          position="BottomCenter"
          onClick={() => {
            showPatient(data);
          }}
        >
          <div className="font-extrabold hover:cursor-pointer">
            {arrowRigth}
          </div>
        </TooltipComponent>
      )}
    </div>
  );
};

export default Lists;
