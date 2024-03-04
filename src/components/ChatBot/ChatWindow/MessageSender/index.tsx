import React from "react";
import { IoSend } from "react-icons/io5";

interface MessageSenderProps {
  inputText: string;
  onInputChange: (event: any) => void;
  onSend: () => void;
  placeholder?: string;
  buttonColor?: string;
}

const MessageSender: React.FC<MessageSenderProps> = ({
  inputText,
  placeholder = "Type a message...",
  buttonColor,
  onInputChange,
  onSend,
}: MessageSenderProps) => {
  return (
    <div className="m-2">
      <div className="flex border-2 border-gray-300 rounded-md ">
        <input
          type="text"
          className="p-2 w-full m-1 focus:border-none focus:outline-none"
          placeholder={placeholder}
          value={inputText}
          onChange={onInputChange}
        />
        <button
          className="bg-primary text-white rounded-md px-4 py-2 m-1 hover:bg-primary/90 transition-all"
          style={{ backgroundColor: buttonColor }}
          onClick={onSend}
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default MessageSender;
