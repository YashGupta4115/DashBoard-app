import React, { useState } from "react";
import "./Calendar.css";
import Header from "../../../Components/Header/Header.jsx";
import { useTheme } from "../../../Context/themeContext.jsx";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const CalendarApp = () => {
  const [myEvents, setMyEvents] = useState([]);
  const localizer = momentLocalizer(moment);
  const { displayMode } = useTheme();
  const handleSelectSlot = ({ start, end }) => {
    console.log(start);
    let title = window.prompt("New Event name");
    if (title) {
      setMyEvents((prev) => [
        ...prev,
        { StartTime: start, EndTime: end, Subject: title },
      ]);
    }
  };
  const handleSelectEvent = (e) => {
    window.alert(e.Subject);
  };

  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="App" title="Calendar" />
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="StartTime"
        endAccessor="EndTime"
        titleAccessor="Subject"
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        style={{
          background: displayMode === "light" ? "papayawhip" : "#20232A",
          color: displayMode === "light" ? "black" : "papayawhip",
          height: "400px",
          width: "90%",
          cursor: "pointer",
          zIndex: "1",
        }}
      />
    </div>
  );
};

export default CalendarApp;
