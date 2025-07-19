import { useState, useEffect, useCallback } from 'react';
import { LauncherButton } from './components/LauncherButton';
import { ChatWindow } from './components/ChatWindow';
import { Message, PresaleFormData, ViewType, ChatSession } from './types';
import './styles/tailwind.css';

export const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('presale');
  const [chatSession, setChatSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [statusText, setStatusText] = useState('');
  const [clientKey, setClientKey] = useState('default-app-id');

  // Initialize widget with client key from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const keyFromUrl = urlParams.get('key');
    if (keyFromUrl) {
      setClientKey(keyFromUrl);
    }
    console.log(`Widget initialized for key: ${keyFromUrl || clientKey}`);
  }, [clientKey]);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (!isOpen && chatSession) {
      setCurrentView('chat');
    }
  }, [isOpen, chatSession]);

  const handlePresaleSubmit = useCallback(
    (data: PresaleFormData) => {
      setStatusText('Connecting...');
      setCurrentView('chat');

      // Simulate creating a chat session
      setTimeout(() => {
        const newSession: ChatSession = {
          id: `session_${Date.now()}`,
          clientKey,
          userName: data.name,
          userEmail: data.email,
          messages: [],
          isActive: true,
          createdAt: new Date(),
        };

        setChatSession(newSession);
        console.log(`Chat session created:`, newSession);

        // Load initial messages
        const initialMessages: Message[] = [
          {
            id: '1',
            text: 'Hello! Welcome to our support chat.',
            sender: 'agent',
            timestamp: new Date(),
          },
          {
            id: '2',
            text: 'My name is Jane. How can I assist you?',
            sender: 'agent',
            timestamp: new Date(),
          },
        ];

        setMessages(initialMessages);
        setStatusText('You are connected.');
      }, 1000);
    },
    [clientKey],
  );

  const handleSendMessage = useCallback(
    (text: string) => {
      if (!chatSession) return;

      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);

      // Simulate agent response
      setStatusText('Agent is typing...');
      setTimeout(() => {
        const agentMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thanks for your message! How can I help you today?',
          sender: 'agent',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, agentMessage]);
        setStatusText('You are connected.');
      }, 1500);
    },
    [chatSession],
  );

  return (
    <div className="fixed bottom-0 right-0 p-4 z-[9999]">
      {!isOpen && <LauncherButton onClick={toggleChat} />}
      <ChatWindow
        isOpen={isOpen}
        currentView={currentView}
        messages={messages}
        statusText={statusText}
        onClose={toggleChat}
        onPresaleSubmit={handlePresaleSubmit}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};
