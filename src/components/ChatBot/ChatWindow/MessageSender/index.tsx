import React from "react";
import { IoSend } from "react-icons/io5";

const MessageSender = () => {
  return (
    <div className="m-2">
      <div className="flex border-2 border-gray-300 rounded-md ">
        <input
          type="text"
          className="p-2 w-full m-1 focus:border-none focus:outline-none"
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 m-1">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default MessageSender;
