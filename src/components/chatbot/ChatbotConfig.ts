import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'LuckyBot';

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. How can I help you today?`, {})],
  // Add any custom components or widgets here
  // widgets: [],
};

export default config;
