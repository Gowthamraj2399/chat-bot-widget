import React from 'react';
import Header from './Header';
import ChatBody from './ChatBody';
import MessageSender from './MessageSender';
import SuggestionsBox from './SuggestionsBox';
import { Message, UserProfile } from '../model';

interface ChatWindowProps {
  messages: Message[];
  inputText: string;
  userDetails: UserProfile;
  agentDetails: UserProfile;
  emojis: any;
  inputPlaceholder?: string;
  suggestions?: string[];
  setHideChat: () => void;
  onInputChange: (event: any) => void;
  onSend: () => void;
  onSelectEmoji: (emoji: string, index: number) => void;
  onClickSuggestion?: (suggestion: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  inputText,
  inputPlaceholder,
  suggestions,
  userDetails,
  agentDetails,
  emojis,
  setHideChat,
  onClickSuggestion = () => {},
  onSend,
  onSelectEmoji,
  onInputChange,
}: ChatWindowProps) => {
  return (
    <div className="absolute lg:bottom-8 lg:right-8">
      <div className="h-screen w-screen lg:h-[60vh] lg:w-[24vw] flex flex-col border lg:rounded-xl overflow-hidden">
        <Header
          userName={agentDetails.name}
          userAvatar={agentDetails.avatar}
          setHideChat={setHideChat}
        />
        <ChatBody
          emojis={emojis}
          onSelectEmoji={onSelectEmoji}
          messages={messages}
          userDetails={userDetails}
          agentDetails={agentDetails}
        >
          {suggestions && suggestions.length > 0 && (
            <SuggestionsBox
              suggestions={suggestions}
              onSuggestionClick={onClickSuggestion}
            />
          )}
        </ChatBody>
        <MessageSender
          inputText={inputText}
          onInputChange={onInputChange}
          placeholder={inputPlaceholder}
          onSend={onSend}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
