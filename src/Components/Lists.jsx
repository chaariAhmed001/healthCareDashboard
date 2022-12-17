import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useContext } from "react";
import { appContext } from "../Context/appContext.js";
import { arrowRigth } from "../Data/data";

const Lists = ({ patient }) => {
  const {
    activeMenu,
    setPatientDetails,
    setShowPatientDetails,
    patientDetails,
    screenSize,
  } = useContext(appContext);
  const showPatient = (patient) => {
    patient && setPatientDetails(patient);
    screenSize >= 1024
      ? setShowPatientDetails(false)
      : setShowPatientDetails(true);
  };
  return (
    <div className="flex justify-between items-center px-2 py-4 mb-1 hover:rounded-md h-16 w-full hover:bg-white dark:hover:bg-secondary-dark-bg hover:cursor-pointer">
      <div className="flex w-[200px]">
        <img
          className="w-12 h-12 rounded-lg object-fill"
          src={patient?.image}
        />
        <div className="flex flex-col justify-center ml-2 text-sm">
          <span className="font-extrabold">{patient?.name}</span>
          <span className="text-gray-400 font-light">{patient?.disease}</span>
        </div>
      </div>
      <div
        className={`hidden sm:flex ${
          activeMenu ? "lg:hidden" : "lg:flex "
        } flex-col justify-center w-[100px]`}
      >
        <span className="text-sm text-secondary-color font-bold">
          {patient?.created}
        </span>
        <span
          className={`font-medium ${
            patient?.type === "Chronic" && "text-red-300"
          } ${patient?.type === "Acute" && "text-green-300"} ${
            patient?.type === "Remitting" && "text-orange-300"
          }`}
        >
          {patient?.type}
        </span>
      </div>
      <TooltipComponent
        content="Show Patient Details"
        position="BottomCenter"
        onClick={() => {
          showPatient(patient);
        }}
      >
        <div className="font-extrabold hover:cursor-pointer">{arrowRigth}</div>
      </TooltipComponent>
    </div>
  );
};

export default Lists;
