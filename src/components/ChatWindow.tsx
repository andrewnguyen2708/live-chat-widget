import { ChatHeader } from './ChatHeader';
import { PresaleForm } from './PresaleForm';
import { ChatView } from './ChatView';
import { Message, PresaleFormData, ViewType } from '../types';

interface ChatWindowProps {
  isOpen: boolean;
  currentView: ViewType;
  messages: Message[];
  statusText: string;
  onClose: () => void;
  onPresaleSubmit: (data: PresaleFormData) => void;
  onSendMessage: (text: string) => void;
}

export const ChatWindow = ({
  isOpen,
  currentView,
  messages,
  statusText,
  onClose,
  onPresaleSubmit,
  onSendMessage,
}: ChatWindowProps) => {
  return (
    <div
      className={`w-80 h-[450px] bg-white rounded-lg shadow-2xl flex flex-col origin-bottom-right transition-all duration-300 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}
    >
      <ChatHeader onClose={onClose} />

      <div className="flex-1 p-4 overflow-y-auto">
        {currentView === 'presale' ? (
          <PresaleForm onSubmit={onPresaleSubmit} />
        ) : (
          <ChatView messages={messages} statusText={statusText} onSendMessage={onSendMessage} />
        )}
      </div>
    </div>
  );
};
