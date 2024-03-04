import React, { useState } from "react";
import {ChatBot} from "./components/ChatBot";

export const suggestions = [
  'What’s my account balance?',
  'What’s my refund status?',
  'Give me my account statement for last three months.',
];
const now = new Date();

const agentDetails = {
  name: 'Jane Doe',
  avatar:
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
const userDetails = {
  name: 'John Doe',
  avatar:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const emojis = {
  sad: '😢',
  happy: '😊',
  angry: '😡',
  love: '😍',
  like: '👍',
};

function App() {
  const [sampleMessages, setSampleMessages] = useState([
    {
      message:
        "That's awesome. I think our users will really appreciate the improvements. 1",
      date: now,
      isUser: false,
      emoji: 'happy',
    },
    {
      message:
        "That's awesome. I think our users will really appreciate the improvements. 2",
      date: now,
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState('');

  const onClickSuggestion = (suggestion: any) => {
    const newMessage = {
      message: suggestion,
      date: new Date(),
      isUser: true,
    };
    setSampleMessages([...sampleMessages, newMessage]);
  };

  const onSend = () => {
    console.log(inputText);
    if (inputText === '') return;
    const newMessage = {
      message: inputText,
      date: new Date(),
      isUser: true,
    };
    setSampleMessages([...sampleMessages, newMessage]);
    setInputText('');
  };

  const onSelectEmoji = (emoji: any, index: any) => {
    console.log(emoji, index);
    const newMessages = [...sampleMessages];
    newMessages[index].emoji = emoji;
    setSampleMessages(newMessages);
  };
  return (
    <ChatBot
      emojis={emojis}
      messages={sampleMessages}
      userDetails={userDetails}
      agentDetails={agentDetails}
      inputText={inputText}
      suggestions={suggestions}
      inputPlaceholder="Type a message..."
      onInputChange={event => setInputText(event.target.value)}
      onSelectEmoji={onSelectEmoji}
      onSend={onSend}
      onClickSuggestion={onClickSuggestion}
    />
  );
}

export default App;
