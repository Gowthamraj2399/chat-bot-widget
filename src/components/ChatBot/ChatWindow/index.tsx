import React from "react";
import Header from "./Header";

interface ChatWindowProps {
  setHideChat: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
  return (
    <div className="absolute w-1/4 h-1/2 bottom-8 right-8 border rounded-xl overflow-hidden shadow-xl">
      <Header setHideChat={props.setHideChat} />
    </div>
  );
};

export default ChatWindow;
