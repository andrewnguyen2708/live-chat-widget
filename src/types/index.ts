export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  clientKey: string;
  userName: string;
  userEmail: string;
  messages: Message[];
  isActive: boolean;
  createdAt: Date;
}

export interface PresaleFormData {
  name: string;
  email: string;
}

export type ViewType = 'presale' | 'chat';
