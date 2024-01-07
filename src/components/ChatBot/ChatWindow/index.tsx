import React from "react";
import Header from "./Header";
import ChatBody from "./ChatBody";
import MessageSender from "./MessageSender";
import SuggestionsBox from "./SuggestionsBox";

interface ChatWindowProps {
  setHideChat: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
  return (
    <div className="absolute bottom-8 right-8">
      <div className="h-[50vh] w-[20vw] flex flex-col border rounded-xl overflow-hidden">
        <Header
          userName="Jane Doe"
          headerColor="bg-primary"
          userAvatar="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          setHideChat={props.setHideChat}
        />
        <ChatBody />
        <SuggestionsBox />
        <MessageSender />
      </div>
    </div>
  );
};

export default ChatWindow;
