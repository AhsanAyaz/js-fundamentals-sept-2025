// --- Step 1: Configuration ---
// This section sets up the basic information we need to talk to the Gemini API.

// IMPORTANT: You need to replace 'YOUR_API_KEY_HERE' with your actual Gemini API key.
// Think of this key as a password that gives you access to the Gemini AI.
// You can get a key for free from Google AI Studio: https://aistudio.google.com/
const GEMINI_API_KEY = 'YOUR_API_KEY';

// We're telling the API which specific AI model we want to use.
// 'gemini-flash-lite-latest' is a fast and efficient model.
const MODEL_ID = 'gemini-flash-latest';

// This is the full web address (URL) for the Gemini API.
// We use a template literal (the backticks ``) to easily include our API key.
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${GEMINI_API_KEY}`;

// --- Step 2: Getting Our HTML Elements ---
// We need to get references to the HTML elements we want to interact with.
// This is how our JavaScript can change what's displayed on the webpage.

// Get the paragraph element where the joke will be displayed.
const jokeTextEl = document.getElementById('joke-text');
// Get the button element that the user clicks to get a new joke.
const reloadButtonEl = document.getElementById('reload-button');

// --- Step 3: The Main Function to Get a Joke ---

/**
 * Fetches a random dad joke from the Gemini API and updates the webpage.
 * We use the `async` keyword because this function needs to wait for the API response.
 */
const getDadJoke = async () => {
  // First, let's show the user that we're working on getting a joke.
  // We add the 'loading' class to the button, which makes the SVG icon spin (see style.css).
  reloadButtonEl.classList.add('loading');
  // We also update the text to let the user know what's happening.
  jokeTextEl.textContent = 'Thinking of a good one...';

  // The `try...catch...finally` block is for error handling.
  // The code in `try` is what we attempt to do.
  // If an error happens, the `catch` block will run.
  // The `finally` block will run at the end, no matter what.
  try {
    // This is the data we will send to the Gemini API.
    // It tells the AI what we want it to do.
    const requestData = {
      contents: [
        {
          role: 'user', // We are the 'user' asking a question.
          parts: [
            {
              text: 'Tell me a random dad joke. Make it up if you have to', // This is our instruction to the AI.
            },
          ],
        },
      ],
      // This part of the configuration tells the AI how to format its response.
      generationConfig: {
        responseMimeType: 'application/json', // We want the response in JSON format.
        responseSchema: {
          type: 'object',
          properties: {
            joke: {
              type: 'string', // We expect an object with a "joke" property that is a string.
            },
          },
          required: ['joke'], // The "joke" property is required.
        },
      },
    };

    // The `fetch` function is how we send a request to a server over the internet.
    // We `await` the response, which means our code will pause here until the server replies.
    const response = await fetch(API_URL, {
      method: 'POST', // We use 'POST' because we are sending data to the server.
      headers: {
        'Content-Type': 'application/json', // We tell the server we're sending JSON data.
      },
      body: JSON.stringify(requestData), // We convert our JavaScript object into a JSON string.
    });

    // It's good practice to check if the server responded successfully.
    // If `response.ok` is false, it means there was an error (like a wrong API key).
    if (!response.ok) {
      // If there's an error, we create a new Error object to be caught by our `catch` block.
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // The server's response is also in JSON format, so we need to parse it.
    // The `.json()` method also returns a Promise, so we `await` it.
    const responseData = await response.json();

    // The actual joke is nested deep inside the response data.
    // We navigate through the object to get the text.
    const jokeJsonString = responseData.candidates[0].content.parts[0].text;

    // The joke itself is a JSON string, so we need to parse it one more time.
    const parsedJoke = JSON.parse(jokeJsonString);

    // Now we can finally update our paragraph element with the joke!
    jokeTextEl.textContent = parsedJoke.joke;
  } catch (error) {
    // If any error occurred in the `try` block, this code will run.
    console.error('Error fetching dad joke:', error); // Log the error for the developer.
    // Display a user-friendly error message on the page.
    jokeTextEl.textContent =
      'Oops! I couldn’t fetch a joke. Please check your API key and try again.';
  } finally {
    // This code will run whether the request was successful or not.
    // It's the perfect place to clean up our UI.
    // We remove the 'loading' class to stop the button's spinning animation.
    reloadButtonEl.classList.remove('loading');
  }
};

// --- Step 4: Event Listeners ---
// We need to tell the button to do something when it's clicked.
// `addEventListener` listens for a specific event (in this case, a 'click').
// When the button is clicked, it will call our `getDadJoke` function.
reloadButtonEl.addEventListener('click', getDadJoke);

// --- Step 5: Initial Load ---
// We want to show a joke as soon as the page loads, without waiting for a click.
// So, we call the function once right at the start.
getDadJoke();
