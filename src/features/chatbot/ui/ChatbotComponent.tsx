import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '@/features/chatbot/config/ChatbotConfig';
import MessageParser from '@/features/chatbot/model/MessageParser';
import ActionProvider from '@/features/chatbot/model/ActionProvider';
// import './ChatbotStyles.css'; // Removed as requested

const ChatbotComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Chatbot Window - Positioned Fixed Bottom Right */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50 shadow-lg">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}

      {/* Toggle Button - Positioned Fixed Bottom Right */}
      <button
        onClick={toggleChatbot}
        className="bg-primary hover:bg-primary-dark fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-colors duration-300"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {/* Simple Chat Icon (can be replaced with an SVG icon) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            /> /* Close Icon */
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-3.04 8.41-7.27 9.394a.226.226 0 0 1-.279-.217V18.75a.75.75 0 0 0-.75-.75h-2.69a.75.75 0 0 0-.718.519A9.75 9.75 0 0 1 3 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75Z"
            /> /* Chat Bubble Icon */
          )}
        </svg>
      </button>
    </div>
  );
};

export default ChatbotComponent;
