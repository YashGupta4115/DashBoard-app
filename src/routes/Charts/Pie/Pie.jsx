import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";
import "../../pages/Orders/Orders.css";
import { UseWindowDimensions } from "../Bar/Bar";

const data1 = [
  { name: "United States", value: 45, fill: "#00226C" },
  { name: "Australia", value: 53, fill: "#0450C2" },
  { name: "China", value: 56, fill: "#0073DC" },
  { name: "India", value: 61, fill: "#0D98FF" },
  { name: "Japan", value: 40, fill: "#9CD9FF" },
  { name: "United Kingdom", value: 20, fill: "#0450C2" },
];

const PieChartComponent = () => {
  const { displayMode } = useTheme();
  const wWidth = UseWindowDimensions().width;
  const wHeight = 400;

  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Chart" title="Pie" />
      <PieChart width={wWidth < 768 ? wWidth * 0.8 : 600} height={wHeight}>
        <Pie
          data={data1}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          label={({ name, value }) => `${name}: ${value}%`}
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
