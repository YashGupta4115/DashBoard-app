import React, { useContext } from "react";
import "./Notification.css";
import { parseISO, format } from "date-fns";
import notificationData from "../../../Assests/navBar.json";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SideBarContext } from "../../../Context/contextProvider";

export const FormatDate = (isoString) => {
  const date = parseISO(isoString);
  return format(date, "MMMM d, yyyy h:mm a");
};

const Notifications = () => {
  const { handleClick } = useContext(SideBarContext);
  return (
    <div className="notification-container">
      <div className="navPopUp-title">
        <div>
          Notifications{" "}
          {notificationData.notifications.length > 0 ? (
            <span>{`(${notificationData.notifications.length})`}</span>
          ) : (
            ""
          )}
        </div>
        <IoIosCloseCircleOutline
          className="navPopUp-toggleIcon"
          onClick={() => handleClick("notification")}
        />
      </div>
      <hr />
      {notificationData.notifications.map((notification) => {
        let time = notification.time;
        return (
          <div key={notification.id} className="notification-box">
            <div></div>
            <div className="notification-typeAndData">
              <span className="notification-type">{notification.type}</span>
              <span className="notification-data">{notification.message}</span>
            </div>
            <div className="notification-time">{FormatDate(time)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
