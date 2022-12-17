import React, { useContext, useState } from "react";
import {
  Category,
  ChartComponent,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { down, lineCustomSeries, up } from "../Data/data";
import AnalyticsCard from "./AnalyticsCard";
import { appContext } from "../Context/appContext.js";

const AnalyticsComponent = () => {
  const [selected, setSelected] = useState("This Week");
  const { darkthem, screenSize, activeMenu } = useContext(appContext);
  return (
    <div
      className={`w-full ${
        activeMenu ? "lg:w-[95%] xl:w-[96%]" : "lg:w-[96%] xl:w-[71%]"
      }  flex justify-center flex-wrap  bg-white dark:bg-secondary-dark-bg m-1 md:ml-5 drop-shadow-md rounded-2xl text-primry-color dark:text-white`}
    >
      <div className="flex items-center justify-between mb-2 ml-2 pt-4 px-4 w-full">
        <span className="text-primry-color dark:text-white font-bold text-xl">
          Patients Analytics
        </span>
        {screenSize >= 500 && (
          <select
            id="countries"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="bg-main-bg mr-2 border hover:cursor-pointer text-primry-color font-light text-sm rounded-lg focus:ring-primry-color focus:border-primry-color block p-2 dark:bg-[#201A23]/75 dark:border-primry-color dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>This Week</option>
            <option value="By Mounth">By Mounth</option>
            <option value="By Year">By Year</option>
          </select>
        )}
      </div>
      <div className="flex w-full flex-col xl:flex-row">
        <div className="flex flex-wrap flex-col justify-center sm:flex-row xl:flex-col w-full">
          <AnalyticsCard
            title="New Patients"
            value="42"
            icon={up}
            stat="52"
            up={true}
          />
          <AnalyticsCard
            title="Old Patients"
            value="25"
            icon={down}
            stat="3"
            up={false}
          />
        </div>
        <div className="p-4 ">
          <ChartComponent
            id="line-chart"
            primaryXAxis={{ valueType: "Category" }}
            primaryYAxis={{ minimum: 10, maximum: 50 }}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={darkthem ? "#2E2532" : "white"}
            height="240px"
            width="full"
            style={{ borderRadius: "1rem" }}
            palettes={["#E08E45", "#3F8EFC"]}
          >
            <Inject services={[LineSeries, Tooltip, Category]} />
            <SeriesCollectionDirective>
              {lineCustomSeries.map((item, key) => (
                <SeriesDirective key={key} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
