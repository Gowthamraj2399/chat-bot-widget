import React, { useState } from 'react';
import Bubble from './Bubble';
import ChatWindow from './ChatWindow';
import { Message, UserProfile } from './model';

interface ChatBotProps {
  messages: Message[];
  inputText: string;
  userDetails: UserProfile;
  agentDetails: UserProfile;
  inputPlaceholder?: string;
  emojis?: any;
  suggestions?: string[];
  onInputChange: (event: any) => void;
  onSend: () => void;
  onSelectEmoji: (emoji: string, index: number) => void;
  onClickSuggestion?: (suggestion: string) => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({
  messages,
  inputText,
  userDetails,
  agentDetails,
  inputPlaceholder,
  suggestions,
  emojis,
  onInputChange,
  onSend,
  onSelectEmoji,
  onClickSuggestion,
}: ChatBotProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const setShowChat = () => {
    setOpen(true);
  };
  const setHideChat = () => {
    setOpen(false);
  };
  return open ? (
    <ChatWindow
      emojis={emojis}
      onSelectEmoji={onSelectEmoji}
      messages={messages}
      inputText={inputText}
      inputPlaceholder={inputPlaceholder}
      userDetails={userDetails}
      agentDetails={agentDetails}
      suggestions={suggestions}
      setHideChat={setHideChat}
      onClickSuggestion={onClickSuggestion}
      onInputChange={onInputChange}
      onSend={onSend}
    />
  ) : (
    <Bubble setShowChat={setShowChat} />
  );
};

ChatBot.defaultProps = {
  emojis: {
    sad: '😢',
    happy: '😊',
    angry: '😡',
    love: '😍',
    like: '👍',
  },
};
