import React, { useContext } from "react";
import "./Notification.css";
import { parseISO, format } from "date-fns";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SideBarContext } from "../../../Context/contextProvider";
import { UserContext } from "../../../Context/UserContext";

export const FormatDate = (isoString) => {
  const date = parseISO(isoString);
  return format(date, "MMMM d, yyyy h:mm a");
};

const Notifications = () => {
  const { handleClick } = useContext(SideBarContext);
  const { userDoc } = useContext(UserContext);

  return (
    <div className="notification-container">
      <div className="navPopUp-title">
        <div>
          Notifications{" "}
          {userDoc.notifications ? (
            <span>{`(${userDoc.notifications.length})`}</span>
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
      {userDoc.notifications.map((notification, index) => {
        return (
          <div key={index} className="notification-box">
            <div></div>
            <div className="notification-typeAndData">
              <span className="notification-data">{notification}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
