import { Message } from "./models";

export const suggestions = [
  "What’s my account balance?",
  "What’s my refund status?",
  "Give me my account statement for last three months.",
];
const now = new Date();
export const testSampleMessages: Message[] = [
  {
    name: "Bonnie Green",
    message:
      "That's awesome. I think our users will really appreciate the improvements. 1",
    date: now,
    isUser: false,
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bonnie Green",
    message:
      "That's awesome. I think our users will really appreciate the improvements. 2",
    date: now,
    isUser: false,
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gowtham",
    message:
      "That's awesome. I think our users will really appreciate the improvements. 3",
    date: now,
    isUser: true,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bonnie Green",
    message:
      "That's awesome. I think our users will really appreciate the improvements. 4",
    date: now,
    isUser: false,
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gowtham",
    message:
      "That's awesome. I think our users will really appreciate the improvements. 3",
    date: now,
    isUser: true,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gowtham",
    message:
      "That's awesome. I think our users will really appreciate the improvements. 3",
    date: now,
    isUser: true,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
