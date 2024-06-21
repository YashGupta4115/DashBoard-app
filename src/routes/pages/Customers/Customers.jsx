import React from "react";
import "./Customers.css";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Edit,
  Inject,
  Sort,
  Filter,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../../../Assests/data/dummy";
import Header from "../../../Components/Header/Header";

const Customers = () => {
  return (
    <div className="customers-container">
      <Header Category="Page" title="Customers" />
      <GridComponent
        className="gridComponent"
        id="gridComp"
        dataSource={customersData}
        allowPaging
        allowFiltering
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
        rowHeight={50} // Set the desired row height here
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Selection, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
