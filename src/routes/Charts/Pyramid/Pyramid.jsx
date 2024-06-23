import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  Tooltip,
  PyramidSeries,
  Legend,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";

const Pyramid = () => {
  const data = [
    { x: "Food", y: 120, text: "Food: 120" },
    { x: "Clothing", y: 80, text: "Clothing: 80" },
    { x: "Electronics", y: 70, text: "Electronics: 70" },
    { x: "Furniture", y: 50, text: "Furniture: 50" },
    { x: "Toys", y: 40, text: "Toys: 40" },
  ];

  const { displayMode } = useTheme();

  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Chart" title="Pyramid" />
      <AccumulationChartComponent id="pyramid-chart" height="480px">
        <Inject
          services={[PyramidSeries, Tooltip, Legend, AccumulationDataLabel]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={data}
            xName="x"
            yName="y"
            type="Pyramid"
            dataLabel={{
              visible: true,
              position: "Outside",
              name: "text",
              font: {
                fontWeight: "600",
                color: "#000000",
              },
            }}
            tooltip={{
              enable: true,
              format: `${"point.x"}: ${"point.y"}`,
            }}
            legendSettings={{
              visible: true,
              position: "Top",
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
