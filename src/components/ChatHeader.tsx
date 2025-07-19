import CloseIcon from '@/assets/icons/close.svg';

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
      <h3 className="font-semibold text-lg">Live Support</h3>
      <button
        className="text-white hover:text-blue-200 focus:outline-none p-1"
        onClick={onClose}
        aria-label="Close chat"
      >
        <CloseIcon className="h-6 w-6" width={24} height={24} />
      </button>
    </div>
  );
};
