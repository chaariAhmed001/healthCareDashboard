import React, { useContext } from "react";
import { appContext } from "../Context/appContext.js";

const Info = ({ title, description, style }) => {
  const { activeMenu } = useContext(appContext);

  return (
    <p
      className={`text-primry-color dark:text-white font-bold ${
        style &&
        (activeMenu
          ? "lg:min-w-[250px] xl:min-w-[220px]"
          : "min-w-[160px] sm:min-w-[45vw] xl:min-w-[220px] ")
      }`}
    >
      <span className="text-gray-400 font-light">{title}</span> {description}{" "}
    </p>
  );
};

const PatientInfo = ({ email, age, Genre, weight, height, address, added }) => {
  return (
    <div className="text-sm my-4 w-full">
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex my-2">
            <Info title="Age:" description={age} style={true} />
            <Info title="Genre:" description={Genre} />
          </div>
          <div className="flex my-2">
            <Info title="Phone:" description="22 222 222" style={true} />
            <Info title="Weight:" description={weight} />
          </div>
          <div className="flex my-2">
            <Info title="Added:" description={added} style={true} />
            <Info title="Height:" description={height} />
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <Info title="Email:" description={email} style={true} />
      </div>
      <div className=" mt-2 hidden sm:flex">
        <Info title="Email:" description={email} style={true} />
        <Info title="Height:" description={height} />
      </div>
      <div className="mt-3">
        <Info title="Addresse:" description={address} />
      </div>
    </div>
  );
};

export default PatientInfo;
