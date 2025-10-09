// --- Step 1: Configuration ---
// This section sets up the basic information we need to talk to the Gemini API.

// IMPORTANT: You need to replace 'YOUR_API_KEY_HERE' with your actual Gemini API key.
// Think of this key as a password that gives you access to the Gemini AI.
// You can get a key for free from Google AI Studio: https://aistudio.google.com/
const GEMINI_API_KEY = 'YOUR_API_KEY';

// We're telling the API which specific AI model we want to use.
// 'gemini-flash-lite-latest' is a fast and efficient model.
const MODEL_ID = 'gemini-flash-lite-latest';

// This is the full web address (URL) for the Gemini API.
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${GEMINI_API_KEY}`;

// --- Step 2: Getting Our HTML Elements ---
// We need references to the HTML elements to make our chatbot interactive.
const chatMessagesEl = document.getElementById('chat-messages');
const userInputEl = document.getElementById('user-input');
const sendButtonEl = document.getElementById('send-button');

// --- Step 3: Functions for Chat ---

/**
 * Adds a message to the chat window.
 * @param {string} message - The text of the message to add.
 * @param {string} sender - Who sent the message ('user' or 'bot').
 * @param {boolean} [isLoading=false] - Optional: If true, adds a loading class for styling.
 * @returns {HTMLElement} - The message element that was just created.
 */
const addMessage = (message, sender, isLoading = false) => {
  // Create a new 'div' element for the message.
  const messageEl = document.createElement('div');
  // Add the base 'message' class for styling.
  messageEl.classList.add('message');
  // Add a specific class for the sender ('user-message' or 'bot-message').
  messageEl.classList.add(`${sender}-message`);
  // If the message is a loading indicator, add the 'loading' class.
  if (isLoading) {
    messageEl.classList.add('loading');
  }
  // Set the text content of the message element.
  messageEl.textContent = message;
  // Add the new message element to the chat window.
  chatMessagesEl.appendChild(messageEl);
  // Automatically scroll to the bottom to see the latest message.
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  // Return the element in case we need to update it later (like for the loading message).
  return messageEl;
};

/**
 * Sends a message to the Gemini API and gets the chatbot's response.
 * @param {string} userMessage - The message typed by the user.
 */
const getBotResponse = async (userMessage) => {
  // Add a temporary "thinking..." message to show the bot is working.
  const loadingMessageEl = addMessage('Thinking...', 'bot', true);

  try {
    // This is the data we will send to the Gemini API.
    const requestData = {
      // The 'contents' array holds the conversation history.
      contents: [
        {
          role: 'user',
          parts: [
            {
              // This is a special instruction to the AI to set its personality.
              // It tells the AI to act as a friendly and encouraging mentor for
              // beginner JavaScript developers.
              text: `You are a friendly and encouraging mentor for an absolute beginner JavaScript developer. 
                     Your goal is to help them with their questions about JavaScript and career growth. 
                     Keep your answers simple, clear, and positive. Avoid overly technical jargon.`,
            },
          ],
        },
        {
          role: 'model', // The 'model' is the AI.
          parts: [
            {
              text: 'Got it! I am ready to help. What is your question?',
            },
          ],
        },
        {
          role: 'user',
          parts: [
            {
              // Here we include the actual message from the user.
              text: userMessage,
            },
          ],
        },
      ],
    };

    // Use the `fetch` function to send our request to the API URL.
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response from the API.
    const responseData = await response.json();
    // Extract the bot's message from the response data.
    const botMessage = responseData.candidates[0].content.parts[0].text;

    // Update the "Thinking..." message with the actual response from the bot.
    loadingMessageEl.textContent = botMessage;
    // Remove the loading class now that we have the real answer.
    loadingMessageEl.classList.remove('loading');
  } catch (error) {
    // If something went wrong, log the error and show a message to the user.
    console.error('Error getting bot response:', error);
    loadingMessageEl.textContent =
      'Sorry, something went wrong. Please check your API key and try again.';
    loadingMessageEl.classList.remove('loading');
  }
};

/**
 * Handles the process of sending a user's message.
 */
const handleSendMessage = () => {
  // Get the text from the input field and remove any extra whitespace.
  const userMessage = userInputEl.value.trim();

  // If the message is empty, do nothing.
  if (userMessage === '') {
    return;
  }

  // Add the user's message to the chat window.
  addMessage(userMessage, 'user');
  // Clear the input field for the next message.
  userInputEl.value = '';

  // Get the bot's response to the user's message.
  getBotResponse(userMessage);
};

// --- Step 4: Event Listeners ---
// We need to make our input field and button work.

// Add an event listener to the 'Send' button to call `handleSendMessage` when clicked.
sendButtonEl.addEventListener('click', handleSendMessage);

// Add an event listener to the input field to allow sending by pressing the 'Enter' key.
userInputEl.addEventListener('keydown', (event) => {
  // Check if the key pressed was 'Enter'.
  if (event.key === 'Enter') {
    handleSendMessage();
  }
});

// --- Step 5: Initial Greeting ---
// Let's make the bot say hello when the page first loads.
window.addEventListener('load', () => {
  addMessage("Hello! I'm your JS Mentor. How can I help you today?", 'bot');
});
