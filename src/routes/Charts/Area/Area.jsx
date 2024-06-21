import * as React from "react";
import "./Area.css";
import Header from "../../../Components/Header/Header";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  AreaSeries,
} from "@syncfusion/ej2-react-charts";
const Area = () => {
  const areaData = [
    { x: 1900, y: 4 },
    { x: 1920, y: 3.0 },
    { x: 1940, y: 3.8 },
    { x: 1960, y: 3.4 },
    { x: 1980, y: 3.2 },
    { x: 2000, y: 3.9 },
  ];
  const areaDataB = [
    { x: 1900, y: 5 },
    { x: 1920, y: 4.0 },
    { x: 1940, y: 2.8 },
    { x: 1960, y: 3.6 },
    { x: 1980, y: 3.4 },
    { x: 2000, y: 4.0 },
  ];
  const primaryxAxis = {
    title: "Year",
    minimum: 1900,
    maximum: 2000,
    interval: 10,
    edgeLabelPlacement: "Shift",
  };
  const primaryyAxis = {
    minimum: 2,
    maximum: 5,
    interval: 0.5,
    title: "Sales Amount in Millions",
  };
  return (
    <div className="areaChart-container">
      <Header Category="Chart" title="Area" />
      <ChartComponent
        id="charts"
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        title="Average Sales Comparison"
        tooltip={{ enable: true }}
      >
        <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={areaData}
            xName="x"
            yName="y"
            name="Product A"
            width={2}
            border={{ width: 2 }}
            opacity={0.5}
            type="Area"
          ></SeriesDirective>
          <SeriesDirective
            dataSource={areaDataB}
            xName="x"
            yName="y"
            name="Product B"
            width={2}
            border={{ width: 2 }}
            opacity={0.5}
            type="Area"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
export default Area;
