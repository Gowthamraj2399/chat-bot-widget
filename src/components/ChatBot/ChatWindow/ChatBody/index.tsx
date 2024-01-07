import React from "react";
import MessageBubble from "../MessageBubble";
import { Message } from "../../../../services/models";

const ChatBody = () => {
  const now = new Date();
  const sampleMessages: Message[] = [
    {
      name: "Bonnie Green",
      message:
        "That's awesome. I think our users will really appreciate the improvements. 1",
      date: now,
      isUser: false,
    },
    // {
    //   name: "Bonnie Green",
    //   message:
    //     "That's awesome. I think our users will really appreciate the improvements. 2",
    //   date: now,
    //   isUser: false,
    // },
    // {
    //   name: "Gowtham",
    //   message:
    //     "That's awesome. I think our users will really appreciate the improvements. 3",
    //   date: now,
    //   isUser: true,
    // },
    // {
    //   name: "Bonnie Green",
    //   message:
    //     "That's awesome. I think our users will really appreciate the improvements. 4",
    //   date: now,
    //   isUser: false,
    // },
    // {
    //   name: "Gowtham",
    //   message:
    //     "That's awesome. I think our users will really appreciate the improvements. 3",
    //   date: now,
    //   isUser: true,
    // },
    // {
    //   name: "Gowtham",
    //   message:
    //     "That's awesome. I think our users will really appreciate the improvements. 3",
    //   date: now,
    //   isUser: true,
    // },
  ];
  return (
    <div className="p-2 overflow-y-scroll flex flex-grow w-full flex-col-reverse gap-3">
      {[...sampleMessages].reverse().map((message, index) => (
        <MessageBubble key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatBody;
