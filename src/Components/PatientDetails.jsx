import React, { useContext, useEffect } from "react";
import { appContext } from "../Context/appContext.js";
import {
  activityIcon,
  hospitalIcon,
  linePatientCustomSeries,
  links,
  statisticsIcon,
  userIcon,
} from "../Data/data.js";
import PatientProfil from "./PatientProfil.jsx";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import PatientInfo from "./PatientInfo.jsx";
import {
  Category,
  ChartComponent,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { SplineAreaSeries } from "@syncfusion/ej2/charts.js";

const Header = ({ title, icon }) => {
  return (
    <div className="flex gap-2 w-full ">
      <span className="text-secondary-color">{icon}</span>
      <h4 className="font-bold text-primry-color dark:text-white mt-1">
        {title}
      </h4>
    </div>
  );
};
const Button = ({ icon, text, bgColor }) => {
  return (
    <div
      className={`h-8 xl:h-10  ${bgColor} rounded-full md:rounded-md lg:rounded-full xl:rounded-md xl: p-1 xl:p-2 bg-opacity-80 hover:bg-opacity-100 hover:cursor-pointer text-white`}
    >
      <TooltipComponent position="BottomCenter" content={text}>
        <div className="flex items-center gap-1">
          <div>{icon?.icon}</div>
          <span className="hidden md:block lg:hidden xl:block">{text}</span>
        </div>
      </TooltipComponent>
    </div>
  );
};

const PatientDetails = () => {
  const { patientDetails, darkthem, activeMenu } = useContext(appContext);

  return (
    <div className="flex flex-warp flex-col w-full ml-0 md:ml-2">
      {/* patient Info */}
      <div className="flex justify-between w-full lg:w-[98%] xl:w-full mx-2 xl:mx-0">
        <PatientProfil
          image={patientDetails?.image}
          name={patientDetails?.name}
          disease={patientDetails?.disease}
        />
        {/* profil header Button */}
        <div className="flex gap-2 xl:gap-5 mx-3 xl:mx-4 mt-2">
          <Button
            icon={links?.[2]}
            text={`Chat with ${patientDetails?.name}`}
            bgColor="bg-secondary-color"
          />
          <Button
            icon={links?.[1]}
            text={`Schedule an appointment`}
            bgColor="bg-tertiary-color"
          />
        </div>
      </div>

      {/* patient Info details */}
      <div className={`flex  flex-wrap  gap-4 ml-1 md:ml-2 w-full lg:w-[98%] `}>
        {/* patient Details */}
        <div
          className={`${
            activeMenu
              ? "lg:w-[97%] xl:w-[49%]"
              : "w-[92%] sm:w-[95%] lg:w-[98%] xl:w-[49%]"
          } flex flex-col p-4 bg-white dark:bg-secondary-dark-bg rounded-lg drop-shadow-sm `}
        >
          <Header title="Patient Details" icon={userIcon} />
          <PatientInfo
            age={patientDetails?.age}
            Genre={patientDetails?.genre}
            weight={patientDetails?.weight}
            height={patientDetails?.height}
            address={patientDetails?.address}
            email={patientDetails?.email}
            added={patientDetails?.created}
          />
        </div>
        {/* patient Recent Activity */}
        <div
          className={`${
            activeMenu
              ? "lg:w-[97%] xl:w-[48%]"
              : "w-[92%] sm:w-[95%] lg:w-[98%] xl:w-[48%] "
          } flex flex-col p-4 bg-white dark:bg-secondary-dark-bg rounded-lg drop-shadow-sm`}
        >
          <Header title="Patient Recent Activity" icon={activityIcon} />
          <div className="flex gap-2 flex-wrap mt-2 max-h-52 overflow-hidden hover:overflow-scroll">
            {patientDetails?.recent_activity?.map((activity, index) => (
              <div
                key={index}
                className="flex flex-row p-2 rounded-md hover:bg-main-bg dark:hover:bg-secondary-dark-bg/75 hover:cursor-pointer w-full"
              >
                <div className="flex flex-row items-center text-sm gap-4">
                  <span className="text-tertiary-color">{activity?.icon}</span>
                  <div>
                    <h4 className="text-primry-color dark:text-white font-bold">
                      {activity?.type}
                    </h4>
                    <span className="text-gray-400 font-ligth">
                      {activity?.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* patient Weigth Statistics */}
      <div
        className={` ${
          activeMenu ? "w-[92%] sm:w-[95%] xl:w-[97%]" : "lg:w-[96%] xl:w-[97%]"
        } ml-1 md:ml-2 bg-white p-4 my-4 sm:mb-4 dark:bg-secondary-dark-bg rounded-lg drop-shadow-sm`}
      >
        <Header title="Weigth Statistics" icon={statisticsIcon} />
        <ChartComponent
          id="line-chart"
          primaryXAxis={{ valueType: "Category" }}
          primaryYAxis={{ minimum: 10, maximum: 90 }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          height="240px"
          width="95%"
          background={darkthem ? "#2E2532" : "white"}
          style={{ borderRadius: "1rem", padding: "1rem" }}
          palettes={["#3F8EFC"]}
          legendSettings={{ visible: false }}
        >
          <Inject services={[SplineAreaSeries, Tooltip, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              {...linePatientCustomSeries}
              dataSource={patientDetails?.weight_history}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default PatientDetails;
