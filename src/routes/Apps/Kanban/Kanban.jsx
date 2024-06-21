import React from "react";
import "./Kanban.css";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../../../Assests/data/dummy";
import Header from "../../../Components/Header/Header";

const Kanban = () => {
  return (
    <div className="kanban-container">
      <Header Category="Page" title="KanBan" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contextField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
