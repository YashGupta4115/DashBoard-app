import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "../../../Context/themeContext";

const data = [
  {
    name: "2000",
    sales: 1000,
    amt: 2400,
  },
  {
    name: "2004",
    sales: 1398,
    amt: 2210,
  },
  {
    name: "2008",
    sales: 2800,
    amt: 2290,
  },
  {
    name: "2012",
    sales: 3908,
    amt: 2000,
  },
  {
    name: "2016",
    sales: 4800,
    amt: 2181,
  },
  {
    name: "2020",
    sales: 4790,
    amt: 2500,
  },
  {
    name: "2024",
    sales: 5300,
    amt: 2100,
  },
];

const SparkLine = ({ width, height }) => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <LineChart
      width={width}
      height={height}
      data={data}
      majorGridLines="0"
      minorGridLines="0"
    >
      <XAxis dataKey="name" />
      <YAxis dataKey="sales" />
      <Tooltip />
      <Line type="monotone" dataKey="sales" stroke={theme} />
    </LineChart>
  );
};

export default SparkLine;
