import React, { useState } from "react";
import Header from "./Header";
import ChatBody from "./ChatBody";
import MessageSender from "./MessageSender";
import SuggestionsBox from "./SuggestionsBox";
import { Message } from "../../../services/models";
import { suggestions, testSampleMessages } from "../../../services/default";

interface ChatWindowProps {
  setHideChat: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  setHideChat,
}: ChatWindowProps) => {
  const [sampleMessages, setSampleMessages] =
    useState<Message[]>(testSampleMessages);
  const [message, setMessages] = useState<string>("");

  const onChangeMessage = (event: any) => {
    setMessages(event.target.value);
  };

  const onClickSuggestion = (suggestion: string) => {
    const newMessage: Message = {
      name: "Gowtham",
      message: suggestion,
      date: new Date(),
      isUser: true,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
    setSampleMessages([...sampleMessages, newMessage]);
  };

  const onSend = () => {
    console.log(message);
    if (message === "") return;
    const newMessage: Message = {
      name: "Gowtham",
      message: message,
      date: new Date(),
      isUser: true,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
    setSampleMessages([...sampleMessages, newMessage]);
    setMessages("");
  };

  return (
    <div className="absolute lg:bottom-8 lg:right-8">
      <div className="h-screen w-screen lg:h-[50vh] lg:w-[20vw] flex flex-col border lg:rounded-xl overflow-hidden">
        <Header
          userName="Bonnie Green"
          userAvatar="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          setHideChat={setHideChat}
        />
        <ChatBody messages={sampleMessages} />
        <SuggestionsBox
          suggestions={suggestions}
          onSuggestionClick={onClickSuggestion}
        />
        <MessageSender
          message={message}
          onChangeMessage={onChangeMessage}
          placeholder="Type a message..."
          onSend={onSend}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
