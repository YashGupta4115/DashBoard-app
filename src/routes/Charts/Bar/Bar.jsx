import React, { useEffect } from "react";
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useTheme } from "../../../Context/themeContext";
import Header from "../../../Components/Header/Header";
import "./Bar.css";

const data = [
  { month: "Jan", product1: 35, product2: 65 },
  { month: "Feb", product1: 28, product2: 48 },
  { month: "Mar", product1: 34, product2: 34 },
  { month: "Apr", product1: 32, product2: 12 },
  { month: "May", product1: 40, product2: 10 },
  { month: "Jun", product1: 32, product2: 32 },
  { month: "Jul", product1: 35, product2: 75 },
  { month: "Aug", product1: 55, product2: 35 },
  { month: "Sep", product1: 38, product2: 55 },
  { month: "Oct", product1: 30, product2: 90 },
  { month: "Nov", product1: 25, product2: 15 },
  { month: "Dec", product1: 32, product2: 72 },
];

export const UseWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handelResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);
  return windowDimensions;
};

const BarCharts = () => {
  const wWidth = UseWindowDimensions().width;
  const wHeight = 400;
  const { displayMode } = useTheme();
  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Charts" title="Bar Chart" />
      {/* <ResponsiveContainer width="100%" height="80%"> */}
      <BarChart
        width={wWidth < 768 ? wWidth * 0.8 : 600}
        height={wHeight}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="product1" stackId="a" fill="#8884d8" />
        <Bar dataKey="product2" stackId="a" fill="#82ca9d" />
      </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};
export default BarCharts;
