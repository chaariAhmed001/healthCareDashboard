import React, { useContext } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../Data/data";
import { appContext } from "../Context/appContext.js";

const EarningChart = () => {
  const { activeMenu, darkthem } = useContext(appContext);

  return (
    <div
      className={`bg-white dark:bg-secondary-dark-bg h-64 rounded-lg p-4 drop-shadow-md ${
        !activeMenu ? "w-60" : "w-72"
      }`}
    >
      <span className="text-primry-color dark:text-white font-bold text-lg">
        Earning by Year{" "}
      </span>
      <div className="w-full p-2">
        <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={darkthem ? " rgba(0, 0, 0, 0)" : "#fff"}
          height="200px"
          width={activeMenu ? "250px" : "200px"}
          palettes={["#3F8EFC"]}
        >
          <Inject services={[SplineAreaSeries, DateTime]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default EarningChart;
