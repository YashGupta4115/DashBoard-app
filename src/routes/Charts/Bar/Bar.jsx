import * as React from "react";
import Header from "../../../Components/Header/Header";
import "./Bar.css";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import { useTheme } from "../../../Context/themeContext";
const Bar = () => {
  const data = [
    { country: "USA", gold: 50, silver: 70, bronze: 45 },
    { country: "China", gold: 40, silver: 60, bronze: 55 },
    { country: "Japan", gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 },
    { country: "France", gold: 50, silver: 45, bronze: 35 },
    { country: "Germany", gold: 40, silver: 30, bronze: 22 },
    { country: "Italy", gold: 40, silver: 35, bronze: 37 },
    { country: "Sweden", gold: 30, silver: 25, bronze: 27 },
  ];
  const primaryxAxis = { valueType: "Category", title: "Countries" };
  const primaryyAxis = {
    minimum: 0,
    maximum: 80,
    interval: 20,
    title: "Medals",
  };
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Chart" title="Bar Chart" />
      <ChartComponent
        id="charts"
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        title="Olympic Medals"
        height="400px"
        tooltip={{ enable: true }}
        legendSettings={{
          visible: true,
          position: "Top",
        }}
      >
        <Inject
          services={[
            ColumnSeries,
            Legend,
            Tooltip,
            DataLabel,
            LineSeries,
            Category,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data}
            xName="country"
            yName="gold"
            type="Column"
            name="Gold"
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data}
            xName="country"
            yName="silver"
            type="Column"
            name="Silver"
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data}
            xName="country"
            yName="bronze"
            type="Column"
            name="Bronse"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
export default Bar;
