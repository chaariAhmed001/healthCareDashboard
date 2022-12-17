import React, { useContext } from "react";
import { appContext } from "../Context/appContext.js";
import { activityIcon, userIcon } from "../Data/data.js";

const Header = ({ title, icon }) => {
  return (
    <div className="flex gap-2 w-full">
      <span className="text-secondary-color">{icon}</span>
      <h4 className="font-bold text-primry-color">{title}</h4>
    </div>
  );
};

const PatientDetails = () => {
  const { patientDetails } = useContext(appContext);
  return (
    <div className="flex flex-warp flex-col w-[95%]">
      {/* patient Info */}
      <div className="bg-white rounded-lg p-4">
        <div className="flex gap-5 items-center">
          {/* patient Profile Image */}
          <div className="w-20 h-20 rounded-full flex items-center">
            <img src={patientDetails?.image} alt={patientDetails?.name} />
          </div>
          {/* patientInfo geniral info */}
          <div className="w-full">
            <h4 className="font-bold text-primry-color">
              {patientDetails?.name}
            </h4>
            <span className="font-bold text-gray-400">
              {patientDetails?.disease}
            </span>
          </div>
        </div>
        {/* patient Info details */}
        <div className="my-4">
          <Header title="Patient Details" icon={userIcon} />
          <div className="text-sm my-4">
            <div className="flex my-2">
              <p className="text-primry-color font-bold min-w-[150px]">
                <span className="text-gray-400 font-light">Age:</span>{" "}
                {patientDetails?.age}{" "}
              </p>
              <p className="text-primry-color font-bold">
                <span className="text-gray-400 font-light">Genre:</span> F{" "}
              </p>
            </div>
            <div className="flex my-2">
              <p className=" text-primry-color font-bold min-w-[150px]">
                <span className="text-gray-400 font-light">Weight:</span>{" "}
                {patientDetails?.weight}{" "}
              </p>
              <p className=" text-primry-color font-bold">
                <span className="text-gray-400 font-light">Height:</span>{" "}
                {patientDetails?.height}
              </p>
            </div>
            <p className="text-primry-color font-bold ">
              <span className="text-gray-400 font-light text-xs">
                Addresse:
              </span>{" "}
              {patientDetails?.address}{" "}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Header title="Patient Recent Activity" icon={activityIcon} />
          <div className="flex gap-5 flex-wrap">
            {patientDetails?.recent_activity.map((activity, index) => (
              <div
                key={index}
                className="flex flex-col my-4 p-4 bg-main-bg w-full sm:w-[30%] rounded-lg"
              >
                <h4 className="text-primry-color font-bold">
                  {activity?.type}
                </h4>
                <span className="text-gray-400 font-ligth">
                  {activity?.date}
                </span>
                <span className="font-light text-tertiary-color pt-4">
                  Another hospitol
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
