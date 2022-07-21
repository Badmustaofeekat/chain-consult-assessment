import React from "react";
import "./style.css";
import { friendData } from "../friendList";
const ChatList = ({ userData }) => {
  const header = {
    padding: "10px",
    fontSize: "30px",
    fontWeight: "500",
    color: "green",
  };

  const location = window.location.href;

  const handleOpenMessage = (data) => {
    userData(data);
    // window.location.replace(location + data.id);
  };

  return (
    <div className="container-chatlist">
      <div style={header}>Tao's Chat</div>
      {friendData.map((data) => (
        <div className="message-container" key={data.id} onClick={() => handleOpenMessage(data)}>
          <h4>{data.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
