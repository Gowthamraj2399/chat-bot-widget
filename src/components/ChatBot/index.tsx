import React from "react";
import Bubble from "./Bubble";
import ChatWindow from "./ChatWindow";

interface ChatBotProps {
  showChat: boolean;
  setShowChat: () => void;
  setHideChat: () => void;
}

const ChatBot: React.FC<ChatBotProps> = (props) => {
  return props.showChat ? (
    <ChatWindow setHideChat={props.setHideChat} />
  ) : (
    <Bubble setShowChat={props.setShowChat} />
  );
};

export default ChatBot;
