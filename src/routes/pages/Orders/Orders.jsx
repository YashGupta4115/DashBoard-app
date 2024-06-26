import React from "react";
import "./Orders.css";

import { ordersData, ordersGrid } from "../../../Assests/data/dummy";
import Header from "../../../Components/Header/Header";
import "./Orders.css"; // Ensure this is the path to your CSS file
import { useTheme } from "../../../Context/themeContext";
import Table from "../../../Components/Table/tableHeader";

const Orders = () => {
  const { displayMode } = useTheme();
  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Page" title="Orders" />
      <Table tableGrid={ordersGrid} tableData={ordersData} />
    </div>
  );
};

export default Orders;
