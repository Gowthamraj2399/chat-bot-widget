import React from "react";
import { IoSend } from "react-icons/io5";

interface MessageSenderProps {
  message?: string;
  onChangeMessage?: (event: any) => void;
  onSend?: () => void;
  placeholder?: string;
  buttonColor?: string;
}

const MessageSender: React.FC<MessageSenderProps> = (props) => {
  return (
    <div className="m-2">
      <div className="flex border-2 border-gray-300 rounded-md ">
        <input
          type="text"
          className="p-2 w-full m-1 focus:border-none focus:outline-none"
          placeholder={props.placeholder || "Type a message..."}
          value={props.message}
          onChange={props.onChangeMessage}
        />
        <button
          className="bg-primary text-white rounded-md px-4 py-2 m-1 hover:bg-primary/90 transition-all"
          style={{ backgroundColor: props.buttonColor }}
          onClick={props.onSend}
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default MessageSender;
