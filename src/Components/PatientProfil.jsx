import React from "react";

const PatientProfil = ({ image, name, disease }) => {
  return (
    <div className="flex gap-3 ">
      {/* patient Profile Image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full">
        <img src={image} alt={name} />
      </div>
      {/* patientInfo geniral info */}
      <div className="w-full text-sm sm:text-base">
        <h4 className="font-bold text-primry-color  dark:text-white">{name}</h4>
        <span className="font-bold text-gray-400">{disease}</span>
      </div>
    </div>
  );
};

export default PatientProfil;
