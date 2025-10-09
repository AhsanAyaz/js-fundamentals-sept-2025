// Function to fetch a random user from the API.
// It returns a Promise that will resolve with the server's response.
const getRandomUser = () => {
  // The fetch function starts a request and returns a Promise.
  return fetch('https://randomuser.me/api/');
};

// The main function that runs our application logic.
// We use the `async` keyword to allow the use of `await` inside it.
const main = async () => {
  // Get references to the HTML elements we will be interacting with.
  const loaderEl = document.getElementById('loader');
  const userInfoEl = document.getElementById('userInfo');
  const userNameHeadingEl = document.getElementById('userName');
  const userEmailEl = document.getElementById('userEmail');
  const userImageEl = document.getElementById('userImage');

  // --- Step 1: Show the loader ---
  // We add the 'show' class to make the loader visible while we fetch data.
  loaderEl.classList.add('show');

  try {
    // --- Step 2: Fetch the user data ---
    // We call our function to get the Promise for the user data.
    const userPromise = getRandomUser();

    // The `await` keyword pauses the function execution until the Promise is resolved.
    // `response` will be the Response object from the server.
    const response = await userPromise;

    // --- Step 3: Parse the JSON data ---
    // The .json() method also returns a Promise, so we `await` it as well.
    // `jsonData` will be the actual JavaScript object with the user data.
    const jsonData = await response.json();

    // Extract the first user from the results array.
    const user = jsonData.results[0];

    // --- Step 4: Update the UI with the fetched data ---
    // We extract the name, email, and picture from the user object.
    const firstName = user.name.first;
    const email = user.email;
    const imageUrl = user.picture.large;

    // Update the text content and image source of our HTML elements.
    userNameHeadingEl.textContent = firstName;
    userEmailEl.textContent = email;
    userImageEl.src = imageUrl;
  } catch (error) {
    // --- Error Handling ---
    // If anything goes wrong in the `try` block (e.g., network error),
    // the code inside the `catch` block will run.
    console.error('Error fetching user data:', error);
    userNameHeadingEl.textContent = 'Something went wrong!';
  } finally {
    // --- Step 5: Hide the loader and show the user info ---
    // The `finally` block runs whether the `try` block succeeded or failed.
    // This is a great place to do cleanup, like hiding the loader.
    loaderEl.classList.remove('show');
    userInfoEl.classList.add('show');
  }
};

// Start the application by calling the main function.
main();