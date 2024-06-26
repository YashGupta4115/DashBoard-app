import React from "react";
import "./Customers.css";

import { customersData, customersGrid } from "../../../Assests/data/dummy";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";
import Table from "../../../Components/Table/tableHeader";

const Customers = () => {
  const { displayMode } = useTheme();
  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Page" title="Customers" />
      <Table tableData={customersData} tableGrid={customersGrid} />
    </div>
  );
};

export default Customers;

// CustomerID: 1001,
// CustomerName: 'Nirav Joshi',
// CustomerEmail: 'nirav@gmail.com',
// CustomerImage:
//   avatar2,
// ProjectName: 'Hosting Press HTML',
// Status: 'Active',
// StatusBg: '#8BE78B',
// Weeks: '40',
// Budget: '$2.4k',
// Location: 'India',
