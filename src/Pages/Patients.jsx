import React, { useContext, useEffect } from "react";
import { Lists, PatientDetails } from "../Components";
import { appContext } from "../Context/appContext.js";
import { addIcon, filterIcon, patientsList, searchIcon } from "../Data/data";

const Patients = () => {
  const {
    activeMenu,
    showPatientDetails,
    setShowPatientDetails,
    screenSize,
    patientDetails,
  } = useContext(appContext);
  useEffect(() => {
    if (screenSize >= 1024) setShowPatientDetails(false);
    else setShowPatientDetails(true);
  }, [screenSize]);
  return (
    <div className="ml-4 mt-4 flex justifier-center flex-warp min-h-screen w-[95%] lg:w-full ">
      {showPatientDetails ? (
        <PatientDetails />
      ) : (
        // patinet Lists
        <div
          className={` ${
            activeMenu
              ? "lg:w-[40%] xl:w-[30%]"
              : "w-[94%] sm:w-full lg:w-[40%]"
          }`}
        >
          <div
            className={"flex flex-col justify-between mx-2 mb-2 lg:ml-5 w-full "}
          >
            {/* header */}
            <div className="flex justify-between ">
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
              activeMenu
                ? "lg:h-[880px] xl:h-[620px]"
                : "w-[94%] sm:w-full lg:w-full lg:h-[880px] xl:h-[620px]"
            }   p-2 sm:p-4 text-primry-color dark:text-white overflow-hidden hover:overflow-scroll scroll-smooth`}
          >
            {patientsList.map((patient, index) => (
              <Lists
                key={index}
                data={patient}
                title={patient?.name}
                img={patient?.image}
                subtitle={patient?.disease}
                date={patient?.created}
                type={patient?.type}
              />
            ))}
          </div>
        </div>
      )}
      {!showPatientDetails && <PatientDetails />}
    </div>
  );
};

export default Patients;
