import React, { useContext } from "react";
import "./Chat.css";
import chatData from "../../../Assests/navBar.json";
import { FormatDate } from "../Notifications/Notifications";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SideBarContext } from "../../../Context/contextProvider";

const Chat = () => {
  const { handleClick } = useContext(SideBarContext);

  return (
    <div className="chat-container">
      <div className="navPopUp-title">
        <div>
          Chats
          {chatData.messages.length > 0 ? (
            <span>{`(${chatData.messages.length})`}</span>
          ) : (
            ""
          )}
        </div>
        <IoIosCloseCircleOutline
          className="navPopUp-toggleIcon"
          onClick={() => handleClick("chat")}
        />
      </div>
      <hr />
      {chatData.messages.map((chat) => {
        let time = chat.receivedAt;
        return (
          <div key={chat.id} className="chat-box">
            <div></div>
            <div className="chat-typeAndData">
              <span className="chat-type">{chat.from}</span>
              <span className="chat-subject">{chat.subject}</span>
              <span className="chat-body">{chat.body}</span>
            </div>
            <div className="chat-time">{FormatDate(time)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
