import React from "react";
import { Message } from "../../../../services/models";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = (props) => {
  return (
    <div
      className={`flex items-start gap-2 ${
        props.message.isUser && "flex-row-reverse"
      }`}
    >
      <div className="p-5 rounded-full bg-red-200"></div>
      <div
        className={`flex flex-col w-full max-w-[300px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700 ${
          props.message.isUser ? "rounded-tr-none" : "rounded-tl-none"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {props.message.name}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {props.message.date.toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {props.message.message}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
