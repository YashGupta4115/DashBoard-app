import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
const Stacked = ({ width, height }) => {
  const dataSource = [
    { x: "Jan", expense: 100, budget: 150 },
    { x: "Feb", expense: 120, budget: 140 },
    { x: "Mar", expense: 130, budget: 35 },
    { x: "Apr", expense: 140, budget: 90 },
    { x: "May", expense: 150, budget: 100 },
    { x: "Jun", expense: 160, budget: 130 },
    { x: "Jul", expense: 170, budget: 200 },
    { x: "Aug", expense: 180, budget: 240 },
    { x: "Sep", expense: 100, budget: 200 },
    { x: "Oct", expense: 150, budget: 180 },
    { x: "Nov", expense: 180, budget: 280 },
    { x: "Dec", expense: 200, budget: 220 },
  ];
  return (
    <div>
      <BarChart
        width={width}
        height={height}
        data={dataSource}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="expense" stackId="a" fill="#404041" />
        <Bar dataKey="budget" stackId="a" fill="#00BDAE" />
      </BarChart>
    </div>
  );
};

export default Stacked;
