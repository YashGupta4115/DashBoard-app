import React from "react";
import "./Orders.css";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import {
  ordersData,
  contextMenuItems,
  ordersGrid,
} from "../../../Assests/data/dummy";
import Header from "../../../Components/Header/Header";
import "./Orders.css"; // Ensure this is the path to your CSS file

const Orders = () => {
  return (
    <div className="orders-container">
      <Header Category="Page" title="Orders" />
      <GridComponent
        id="gridComp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        rowHeight={50} // Set the desired row height here
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            ContextMenu,
            Resize,
            Sort,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
