import React from "react";

import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import "./Calendar.css";
import { scheduleData } from "../../../Assests/data/dummy.js";
import Header from "../../../Components/Header/Header.jsx";
import { useTheme } from "../../../Context/themeContext.jsx";

const Calendar = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
