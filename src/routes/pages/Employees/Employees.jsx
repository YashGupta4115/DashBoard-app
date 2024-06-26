import React from "react";
import "./Employees.css";
import { employeesData, employeesGrid } from "../../../Assests/data/dummy";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";
import Table from "../../../Components/Table/tableHeader";

const Employees = () => {
  const { displayMode } = useTheme();
  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Page" title="Employees" />
      <Table tableData={employeesData} tableGrid={employeesGrid} />
    </div>
  );
};

export default Employees;
