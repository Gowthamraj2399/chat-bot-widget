import React from "react";
import { IoClose } from "react-icons/io5";

interface HeaderProps {
  setHideChat: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="bg-red-500 p-3 flex items-center justify-between">
      {/* Profile section */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-white"></div>
        <p className="text-2xl font-semibold text-white">Jane Doe</p>
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
