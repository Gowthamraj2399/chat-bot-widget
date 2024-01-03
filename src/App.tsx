import React, { useState } from "react";
import ChatBot from "./components/ChatBot";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const setShowChat = () => {
    setOpen(true);
  };
  const setHideChat = () => {
    setOpen(false);
  };

  return (
    <ChatBot
      showChat={open}
      setShowChat={setShowChat}
      setHideChat={setHideChat}
    />
  );
}

export default App;
