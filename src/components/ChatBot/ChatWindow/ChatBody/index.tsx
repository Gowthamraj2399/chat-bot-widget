import React from "react";
import MessageBubble from "../MessageBubble";
import { Message } from "../../../../services/models";

interface ChatBodyProps {
  messages: Message[];
}

const ChatBody: React.FC<ChatBodyProps> = (props) => {
  return (
    <div className="p-2 overflow-y-scroll flex flex-grow w-full flex-col-reverse gap-3">
      {[...props.messages].reverse().map((message, index) => (
        <MessageBubble key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatBody;
