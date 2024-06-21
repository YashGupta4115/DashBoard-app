import React from "react";

import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
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

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../../../Assests/data/dummy.js";
import Header from "../../../Components/Header/Header.jsx";

const Calendar = () => {
  return (
    <div className="calendar-container">
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
