// Word list for the game
const words = ['javascript', 'hangman', 'programming', 'developer', 'coding'];
let selectedWord = '';
let guessedWord = [];
let incorrectGuesses = [];
let remainingAttempts = 6;

const wordDisplay = document.getElementById('wordDisplay');
const incorrectGuessesDisplay = document.getElementById('incorrectGuesses');
const remainingAttemptsDisplay = document.getElementById('remainingAttempts');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const playButton = document.getElementById('playButton');

// Initialize the game
function initializeGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(selectedWord.length).fill('_');
    incorrectGuesses = [];
    remainingAttempts = 6;

    updateDisplay();
    guessInput.disabled = false;
    guessButton.disabled = false;
    playButton.style.display = 'none';
}

// Update the game display
function updateDisplay() {
    wordDisplay.textContent = guessedWord.join(' ');
    incorrectGuessesDisplay.textContent = incorrectGuesses.join(', ');
    remainingAttemptsDisplay.textContent = remainingAttempts;
}

// Handle a guess
function makeGuess() {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';
    guessInput.focus();

    if (!guess || incorrectGuesses.includes(guess) || guessedWord.includes(guess)) {
        return;
    }

    let correctGuess = false;

    // Check if the guess is correct
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === guess) {
            guessedWord[i] = guess;
            correctGuess = true;
        }
    }

    // If the guess is incorrect, decrement the remaining attempts
    if (!correctGuess) {
        incorrectGuesses.push(guess);
        remainingAttempts--;
    }

    updateDisplay();

    // Check if the game is over
    if (remainingAttempts === 0) {
        endGame('You Lost! The word was: ' + selectedWord);
    } else if (!guessedWord.includes('_')) {
        endGame('You Won! Great job!');
    }
}

// End the game and disable further interaction
function endGame(message) {
    alert(message);
    guessInput.disabled = true;
    guessButton.disabled = true;
    playButton.style.display = 'inline-block';
}

// Start a new game when "Play" button is clicked
playButton.addEventListener('click', () => {
    initializeGame();
});

// Handle guess button click
guessButton.addEventListener('click', makeGuess);

// Initialize the game when the page loads
initializeGame();
