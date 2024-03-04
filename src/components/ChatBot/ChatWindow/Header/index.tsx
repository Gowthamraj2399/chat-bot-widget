import React from "react";
import { IoClose } from "react-icons/io5";
import Avatar from "../Avatar";

interface HeaderProps {
  userName: string;
  userAvatar: string;
  textColor?: string;
  headerColor?: string;
  setHideChat: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userAvatar,
  userName,
  textColor,
  headerColor,
  setHideChat,
}: HeaderProps) => {
  return (
    <div
      className={`bg-primary p-3 flex items-center justify-between`}
      style={{ backgroundColor: headerColor }}
    >
      {/* Profile section */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full">
          <Avatar userAvatar={userAvatar} />
        </div>
        <p
          className="text-xl font-semibold text-white"
          style={{ color: textColor }}
        >
          {userName}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <IoClose
          className="text-white cursor-pointer"
          onClick={setHideChat}
          size={24}
        />
      </div>
    </div>
  );
};

export default Header;
