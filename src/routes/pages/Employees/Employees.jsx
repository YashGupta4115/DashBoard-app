import React from "react";
import "./Employees.css";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../../../Assests/data/dummy";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";

const Employees = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Page" title="Employees" />
      <GridComponent
        id="gridComp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        rowHeight={50} // Set the desired row height here
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
