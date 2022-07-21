import React, { useState } from "react";
import "./style.js";
import {
  noObj,
  header,
  containerChatbox,
  headerProfile,
  chat,
  chatBox,
  btn,
  input,
  inputContainer,
} from "./style";

const ChatBox = ({ user }) => {
  const [msg, setMsg] = useState("");

  const handleSendMessage = () => {
    const data = {
      time: user.message + 1,
      message: msg,
    };
    user.message.push(data);
    setMsg("");
  };

  return (
    <div style={containerChatbox}>
      {Object.keys(user).length === 0 ? (
        <div style={noObj}>
          <h1>Tao's Chat</h1>
          <p>Welcome to my Chat App</p>
        </div>
      ) : (
        <>
          <div style={header}>
            <div style={headerProfile}>{user.name.charAt(0) || null}</div>
            <p>{user.name || null}</p>
          </div>
          <div style={chatBox}>
            {user.message.length === 0 ? (
              <p style={{ textAlign: "center" }}>You have not send any message</p>
            ) : (
              user.message.map((msg, i) => (
                <div key={i} style={chat}>
                  {msg.message}
                </div>
              ))
            )}
          </div>
          <div style={inputContainer}>
            <input type="text" style={input} value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button style={btn} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBox;
