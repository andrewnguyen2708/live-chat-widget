import ChatIcon from '@/assets/icons/chat.svg';

interface LauncherButtonProps {
  onClick: () => void;
}

export const LauncherButton = ({ onClick }: LauncherButtonProps) => {
  return (
    <button
      className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all transform hover:scale-110"
      onClick={onClick}
      aria-label="Open chat"
    >
      <ChatIcon className="h-8 w-8" width={32} height={32} />
    </button>
  );
};
