import React, { useContext } from "react";
import { Lists, PatientDetails } from "../Components";
import { appContext } from "../Context/appContext.js";
import { addIcon, filterIcon, patientsList, searchIcon } from "../Data/data";

const Patients = () => {
  const { activeMenu, showPatientDetails, screenSize } = useContext(appContext);

  return (
    <div className="ml-4 mt-4 flex justifier-center flex-warp min-h-screen lg:h-[400px] w-[95%] ">
      {showPatientDetails ? (
        <PatientDetails />
      ) : (
        <div
          className={`${
            activeMenu
              ? "lg:w-[40%] xl:w-[30%]"
              : "w-[94%] lg:w-[45%] xl:w-[32%]"
          }`}
        >
          <div
            className={"flex flex-col justify-between mx-2 mb-2 lg:ml-5 w-full"}
          >
            {/* header */}
            <div className="flex justify-between">
              <h2 className="uppercase font-bold text-primry-color dark:text-white my-auto">
                Patients
              </h2>
              <div className="flex justify-center gap-2 mr-6 lg:mr-11 text-white">
                <span className="bg-secondary-color p-1 rounded-full hover:cursor-pointer drop-shadow-sm font-extrabold">
                  {addIcon}
                </span>
                <span className="bg-tertiary-color p-1 rounded-full hover:cursor-pointer drop-shadow-sm font-extrabold">
                  {filterIcon}
                </span>
              </div>
            </div>
            {/* Search Bar */}
            <div className="flex items-center mt-4">
              <div className="text-primry-color">{searchIcon}</div>
              <input
                type="text"
                placeholder="Search ..."
                className="focus:outline-none bg-transparent text-gray-400 text-sm"
              />
            </div>
          </div>
          <div
            className={`${
              activeMenu ? "lg:w-[100%]" : "w-[94%] lg:w-[45%] xl:w-[100%]"
            }  lg:h-[500px] p-2 sm:p-4 text-primry-color dark:text-white overflow-hidden hover:overflow-scroll scroll-smooth`}
          >
            {patientsList.map((patient, index) => (
              <Lists key={index} patient={patient} />
            ))}
          </div>
        </div>
      )}
      {!showPatientDetails && screenSize >= 800 && <PatientDetails />}
    </div>
  );
};

export default Patients;
