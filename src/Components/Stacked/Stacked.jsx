import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

const Stacked = ({ width, height }) => {
  const stackedCustomSeries = [
    {
      dataSource: [
        { x: "Jan", y: 10 },
        { x: "Feb", y: 20 },
        { x: "Mar", y: 30 },
        { x: "Apr", y: 40 },
        { x: "May", y: 50 },
        { x: "Jun", y: 60 },
        { x: "Jul", y: 70 },
        { x: "Aug", y: 80 },
        { x: "Sep", y: 90 },
        { x: "Oct", y: 100 },
        { x: "Nov", y: 110 },
        { x: "Dec", y: 120 },
      ],
      type: "StackingColumn",
      xName: "x",
      yName: "y",
      name: "Budget",
      background: "blue",
    },
    {
      dataSource: [
        { x: "Jan", y: 10 },
        { x: "Feb", y: 20 },
        { x: "Mar", y: 30 },
        { x: "Apr", y: 40 },
        { x: "May", y: 50 },
        { x: "Jun", y: 60 },
        { x: "Jul", y: 70 },
        { x: "Aug", y: 80 },
        { x: "Sep", y: 90 },
        { x: "Oct", y: 100 },
        { x: "Nov", y: 110 },
        { x: "Dec", y: 120 },
      ],
      type: "StackingColumn",
      xName: "x",
      yName: "y",
      name: "Expenses",
      background: "gray",
    },
  ];

  const primaryXAxis = {
    valueType: "Category",
    title: "Months",
  };

  const primaryYAxis = {
    title: "Values",
  };

  return (
    <div>
      <ChartComponent
        width={width}
        height={height}
        id="stack-chart"
        primaryXAxis={primaryXAxis}
        primaryYAxis={primaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;
