import { products, Product } from '@/entities/product/model'; // Updated path

// Helper function to find relevant products based on keywords
const findRelevantProducts = (message: string): Product[] => {
  const lowerCaseMessage = message.toLowerCase();
  // Prioritize finding by specific name first
  const foundByName = products.filter((product) =>
    lowerCaseMessage.includes(product.name.toLowerCase()),
  );
  if (foundByName.length > 0) {
    return foundByName;
  }

  // If no specific name, look for keywords in tags or description
  const keywords = lowerCaseMessage.split(' ').filter((kw) => kw.length > 2); // Basic keyword extraction
  return products.filter((product) =>
    keywords.some(
      (keyword) =>
        product.name.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword) ||
        product.tags.some((tag) => tag.toLowerCase().includes(keyword)) ||
        product.category.toLowerCase().includes(keyword),
    ),
  );
};

class ActionProvider {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createChatBotMessage: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState: any;
  // Keep stateRef if needed by react-chatbot-kit internally, otherwise remove

  // stateRef: any; // Assuming unused for now

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createChatBotMessage: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setStateFunc: any,

    // stateRef?: any, // Assuming unused for now
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    // this.stateRef = stateRef;
  }

  // --- Main Message Handler (Simulates AI call) ---
  async handleUserMessage(message: string) {
    const lowerCaseMessage = message.toLowerCase();

    // Simple greeting handler (can remain rule-based)
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      this.greet();
      return;
    }

    // --- Simulate RAG (Retrieval-Augmented Generation) ---
    // 1. Retrieval: Find relevant info from our data
    const relevantProducts = findRelevantProducts(lowerCaseMessage);

    // 2. Generation (Simulated): Formulate response based on retrieved info
    let responseText = '';
    if (relevantProducts.length > 0) {
      if (relevantProducts.length === 1) {
        const product = relevantProducts[0];
        // Check if user specifically asked for price
        if (
          lowerCaseMessage.includes('price') ||
          lowerCaseMessage.includes('cost') ||
          lowerCaseMessage.includes('how much')
        ) {
          responseText = `The price for ${product.name} is ${product.price}.`;
        } else {
          // Default to description if price not asked
          responseText = `${product.name}: ${product.description} It costs ${product.price}.`;
        }
      } else {
        // List multiple relevant products
        const productNames = relevantProducts.map((p) => p.name).join(', ');
        responseText = `I found a few relevant items: ${productNames}. Which one are you interested in?`;
      }
    } else {
      // No relevant products found, simulate generic AI fallback
      responseText =
        "Sorry, I couldn't find specific information about that in our product list. I can tell you about our plants and supplies.";
    }

    // TODO: Replace the above simulation logic with a real API call

    const botMessage = this.createChatBotMessage(responseText);
    this.addMessageToState(botMessage);
  }

  // --- Simple Greeting Action ---
  greet() {
    const greetingMessage = this.createChatBotMessage(
      'Hi there! How can I help you with our products today?',
    );
    this.addMessageToState(greetingMessage);
  }

  handleUnknown() {
    const message = this.createChatBotMessage(
      "Sorry, I didn't understand that. I can help with product information, prices, and categories. Try asking about a specific plant like 'Monstera' or a category like 'indoor plants'.",
    );
    this.addMessageToState(message);
  }

  // --- Product Specific Actions ---
  handleProductPriceQuery(product: Product) {
    const message = this.createChatBotMessage(`The price for ${product.name} is ${product.price}.`);
    this.addMessageToState(message);
  }

  handleProductInfoQuery(product: Product) {
    const message = this.createChatBotMessage(`${product.name}: ${product.description}`);
    this.addMessageToState(message);
  }

  // --- General/Category Actions ---
  handleGeneralProductQuery() {
    const productNames = products.map((p) => p.name).join(', ');
    const message = this.createChatBotMessage(
      `We offer the following products: ${productNames}. Ask me about a specific one!`,
    );
    this.addMessageToState(message);
  }

  handleCategoryQuery(category: string) {
    const categoryProducts = products.filter((p) => p.category === category);
    if (categoryProducts.length > 0) {
      const productNames = categoryProducts.map((p) => p.name).join(', ');
      const message = this.createChatBotMessage(
        `In the ${category} category, we have: ${productNames}. Let me know if you want details on any of them.`,
      );
      this.addMessageToState(message);
    } else {
      // This case shouldn't happen with current logic but is good practice
      const message = this.createChatBotMessage(
        `Sorry, I couldn't find any products in the ${category} category.`,
      );
      this.addMessageToState(message);
    }
  }

  // --- Helper Function ---
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addMessageToState(message: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
