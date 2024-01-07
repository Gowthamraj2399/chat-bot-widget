import React from "react";
import { BsChatFill } from "react-icons/bs";

interface BubbleProps {
  setShowChat: () => void;
  bgColor?: string;
  iconSize?: number;
}

const Bubble: React.FC<BubbleProps> = (props) => {
  return (
    <div
      className="absolute bottom-4 right-4 p-4 lg:bottom-8 lg:right-8 lg:p-6 rounded-full bg-primary cursor-pointer"
      onClick={props.setShowChat}
      style={{ backgroundColor: props.bgColor }}
    >
      <BsChatFill className="text-white" size={props.iconSize || 24} />
    </div>
  );
};

export default Bubble;
