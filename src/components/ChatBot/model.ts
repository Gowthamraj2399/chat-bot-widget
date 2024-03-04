export interface Reaction {
  emoji: string;
  count: number;
}

export interface UserProfile {
  name: string;
  avatar: string;
}

export interface DataResponse {
  userDetails: UserProfile;
  agentDetails: UserProfile;
  messages: Message[];
}

export interface Message {
  message: string;
  date: Date;
  isUser: boolean;
  emoji?: string;
}
