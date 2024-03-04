import React, { useEffect } from 'react';
import { Message, UserProfile } from '../../model';
import Avatar from '../Avatar';
import { IoHappyOutline } from 'react-icons/io5';

interface MessageBubbleProps {
  message: Message;
  userDetails: UserProfile;
  agentDetails: UserProfile;
  messageIndex: number;
  emojis: any;
  onSelectEmoji: (emoji: string, index: number) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  userDetails,
  agentDetails,
  messageIndex,
  emojis,
  onSelectEmoji,
}: MessageBubbleProps) => {
  useEffect(() => {
    console.log('MessageBubble rendered');
  }, [message]);

  const [showEmoji, setShowEmoji] = React.useState(false);

  const toggleEmoji = () => {
    setShowEmoji(!showEmoji);
  };

  const hideEmoji = (selectedEmoji: string) => {
    setShowEmoji(false);
    onSelectEmoji(selectedEmoji, messageIndex);
  };

  return (
    <div
      className={`flex items-start gap-2 relative ${message.isUser &&
        'flex-row-reverse'}`}
    >
      <div className="flex">
        <div className="h-8 w-8 border border-black rounded-full">
          <Avatar
            userAvatar={
              message.isUser ? userDetails.avatar : agentDetails.avatar
            }
          />
        </div>
      </div>

      {/* Message display block */}
      <div
        className={`flex flex-col relative w-full max-w-[300px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700 ${
          message.isUser ? 'rounded-tr-none' : 'rounded-tl-none'
        }`}
      >
        {/* Select emoji dialog */}
        {!message.isUser && showEmoji && (
          <div className="bg-gray-200 flex gap-3 rounded-full p-2 absolute top-0 bottom-0 mt-auto mb-auto w-fit h-fit right-3 z-10">
            {Object.keys(emojis).map((emoji, i) => (
              <div
                key={i}
                className="cursor-pointer text-xl scale-90 hover:scale-100 transition-all"
                onClick={() => hideEmoji(emoji)}
              >
                {emojis[emoji]}
              </div>
            ))}
          </div>
        )}

        {/* Message content */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {message.isUser ? userDetails.name : agentDetails.name}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {message.date.toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {message.message}
        </p>

        {/* Reaction box when added */}
        {!message.isUser && (
          <div className="absolute p-0.5 rounded-xl bg-white -bottom-2 shadow-md">
            {message.emoji && emojis[message?.emoji]}
          </div>
        )}
      </div>

      {/* Emoji button */}
      {!message.isUser && (
        <div className="flex items-center justify-center h-full">
          <div
            className="cursor-pointer scale-90 hover:scale-100 "
            onClick={toggleEmoji}
          >
            <IoHappyOutline size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
