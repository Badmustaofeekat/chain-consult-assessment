import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "100vh", display: "flex" }}>
      <ChatList userData={setUserData} />
      <ChatBox user={userData} />
    </div>
  );
}
// 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;

export default App;
