import React from "react";
import { IoClose } from "react-icons/io5";

interface HeaderProps {
  userName: string;
  userAvatar: string;
  headerColor: string;
  setHideChat: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      className={`${props.headerColor} p-3 flex items-center justify-between`}
    >
      {/* Profile section */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full">
          <img
            src={props.userAvatar}
            alt="User Avatar"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <p className="text-xl font-semibold text-white">{props.userName}</p>
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
