import React from "react";
import { BsChatFill } from "react-icons/bs";

interface BubbleProps {
  setShowChat: () => void;
}

const Bubble: React.FC<BubbleProps> = (props) => {
  return (
    <div
      className="absolute bottom-8 right-8 p-6 rounded-full bg-red-500 cursor-pointer"
      onClick={props.setShowChat}
    >
      <BsChatFill className="text-white" size={34} />
    </div>
  );
};

export default Bubble;
