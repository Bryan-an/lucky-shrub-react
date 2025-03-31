// MessageParser.ts
// import { products, Product } from '@/entities/product/model'; // Updated commented path

class MessageParser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actionProvider: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    actionProvider: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    state: any,
  ) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: string) {
    // Simply pass the message to the action provider's main handler
    // The action provider will handle greetings, product queries, etc.
    this.actionProvider.handleUserMessage(message);

    // Remove old logic:
    // console.log('Parsing message:', message); // Placeholder
    // const lowerCaseMessage = message.toLowerCase();
    // if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    //   this.actionProvider.greet();
    // } else {
    //   this.actionProvider.handleUnknown();
    // }
  }
}

export default MessageParser;
