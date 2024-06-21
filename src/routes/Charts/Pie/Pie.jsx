import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  Tooltip,
  PieSeries,
  Legend,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import * as React from "react";
import Header from "../../../Components/Header/Header";

const Pie = () => {
  const data1 = [
    { x: "United States", y: 45, text: "USA", fill: "#00226C" },
    { x: "Australia", y: 53, text: "AUS: 14%", fill: "#0450C2" },
    { x: "China", y: 56, text: "CHN", fill: "#0073DC" },
    { x: "India", y: 61, text: "IND", fill: "#0D98FF" },
    { x: "Japan", y: 40, text: "JPN", fill: "#9CD9FF" },
    { x: "United Kingdom", y: 20, text: "UK", fill: "#0450C2" },
  ];

  return (
    <div className="areaChart-container">
      <Header Category="Chart" title="Pie" />
      <AccumulationChartComponent id="charts">
        <Inject
          services={[PieSeries, Tooltip, Legend, AccumulationDataLabel]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={data1}
            xName="x"
            yName="y"
            type="Pie"
            dataLabel={{
              visible: true,
              name: "text",
              position: "Outside",
              font: {
                fontWeight: "600",
                color: "#000000",
              },
              connectorStyle: { length: "10%" },
              template: "<div>${point.text}: ${point.y}%</div>", // Custom label template
            }}
            tooltip={{ enable: true }}
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

export default Pie;
