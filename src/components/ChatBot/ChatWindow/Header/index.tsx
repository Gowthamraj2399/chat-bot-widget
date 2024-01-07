import React from "react";
import { IoClose } from "react-icons/io5";
import Avatar from "../Avatar";

interface HeaderProps {
  userName: string;
  userAvatar: string;
  setHideChat: () => void;
  textColor?: string;
  headerColor?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      className={`bg-primary p-3 flex items-center justify-between`}
      style={{ backgroundColor: props.headerColor }}
    >
      {/* Profile section */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full">
          <Avatar userAvatar={props.userAvatar} />
        </div>
        <p
          className="text-xl font-semibold text-white"
          style={{ color: props.textColor }}
        >
          {props.userName}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <IoClose
          className="text-white cursor-pointer"
          onClick={props.setHideChat}
          size={24}
        />
      </div>
    </div>
  );
};

export default Header;
