import React from 'react';
import MessageBubble from '../MessageBubble';
import { Message, UserProfile } from '../../model';

interface ChatBodyProps {
  messages: Message[];
  userDetails: UserProfile;
  agentDetails: UserProfile;
  emojis: any;
  children?: React.ReactNode;
  onSelectEmoji: (emoji: string, index: number) => void;
}

const ChatBody: React.FC<ChatBodyProps> = ({
  messages,
  userDetails,
  agentDetails,
  children,
  emojis,
  onSelectEmoji,
}: ChatBodyProps) => {
  // This is a custom hook that will scroll to the bottom of the chat window when a new message is added
  const scrollDiv = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (scrollDiv.current) {
      scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="p-2 overflow-y-scroll flex flex-grow w-full flex-col gap-3">
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          emojis={emojis}
          messageIndex={index}
          userDetails={userDetails}
          agentDetails={agentDetails}
          message={message}
          onSelectEmoji={onSelectEmoji}
        />
      ))}
      {children}
      <div ref={scrollDiv}></div>
    </div>
  );
};

export default ChatBody;
