import * as React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  HiloSeries,
  Category,
  Tooltip,
  Zoom,
  Crosshair,
} from "@syncfusion/ej2-react-charts";

import Header from "../../../Components/Header/Header";

import "./Finance.css";
import { useTheme } from "../../../Context/themeContext";

const Finance = () => {
  const chartData = [
    { x: "Jan", low: 87, high: 200 },
    { x: "Feb", low: 45, high: 135 },
    { x: "Mar", low: 19, high: 85 },
    { x: "Apr", low: 31, high: 108 },
    { x: "May", low: 27, high: 80 },
    { x: "June", low: 84, high: 130 },
    { x: "July", low: 77, high: 150 },
    { x: "Aug", low: 54, high: 125 },
    { x: "Sep", low: 60, high: 155 },
    { x: "Oct", low: 60, high: 180 },
    { x: "Nov", low: 88, high: 180 },
    { x: "Dec", low: 84, high: 230 },
  ];
  const primaryxAxis = { valueType: "Category", title: "Months" };
  const primaryyAxis = {
    labelFormat: "{value}mm",
    edgeLabelPlacement: "Shift",
    title: "Rainfall",
  };
  const style = { textAlign: "center" };
  const { displayMode } = useTheme();
  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Chart" title="Area" />
      <ChartComponent
        id="charts"
        style={style}
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        legendSettings={{
          visible: true,
          position: "Top",
        }}
        height="480px"
        tooltip={{ enable: true }}
        title="Maximum and Minimum Rainfall"
      >
        <Inject
          services={[HiloSeries, Legend, Tooltip, Category, Crosshair, Zoom]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={chartData}
            xName="x"
            yName="low"
            name="India"
            type="Hilo"
            low="low"
            high="high"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
export default Finance;
