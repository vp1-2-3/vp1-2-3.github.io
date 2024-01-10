// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Get the input and message elements
const userGuessInput = document.getElementById('userGuess');
const messageElement = document.getElementById('message');

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        if (userGuess === secretNumber) {
            messageElement.textContent = 'Congratulations! You guessed the correct number.';
        } else if (userGuess < secretNumber) {
            messageElement.textContent = 'Too low. Try again!';
        } else {
            messageElement.textContent = 'Too high. Try again!';
        }
    }
}
