import React, { memo } from "react";

interface AvatarProps {
  userAvatar: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <img
      src={props.userAvatar}
      alt="User Avatar"
      className="h-full w-full object-cover rounded-full"
    />
  );
};

export default memo(Avatar);
