// Hangman game logic

const words = ["javascript", "programming", "hangman", "developer", "computer"];
let selectedWord, guessedWord, incorrectGuesses, maxGuesses, incorrectLetters;

const wordDisplay = document.getElementById('word');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const hangmanImg = document.getElementById('hangman-img');
const guessesLeft = document.getElementById('guesses-left');
const incorrectLettersDisplay = document.getElementById('incorrect-letters');
const restartButton = document.getElementById('restart-button');

// Initialize game
function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(selectedWord.length).fill('_');
    incorrectGuesses = 0;
    maxGuesses = 6;
    incorrectLetters = [];

    // Update UI
    wordDisplay.textContent = guessedWord.join(' ');
    guessesLeft.textContent = maxGuesses;
    incorrectLettersDisplay.textContent = incorrectLetters.join(', ');
    hangmanImg.src = `images/hangman-${incorrectGuesses}.png`;

    // Reset input and button
    guessInput.value = '';
    guessInput.focus();
    guessButton.disabled = false;
    restartButton.classList.add('hidden');
}

// Handle guess
function handleGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess && !incorrectLetters.includes(guess) && !guessedWord.includes(guess)) {
        if (selectedWord.includes(guess)) {
            // Correct guess
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === guess) {
                    guessedWord[i] = guess;
                }
            }
            wordDisplay.textContent = guessedWord.join(' ');
        } else {
            // Incorrect guess
            incorrectGuesses++;
            incorrectLetters.push(guess);
            incorrectLettersDisplay.textContent = incorrectLetters.join(', ');
            hangmanImg.src = `images/hangman-${incorrectGuesses}.png`;
            guessesLeft.textContent = maxGuesses - incorrectGuesses;
        }
    }

    // Check game over condition
    if (incorrectGuesses === maxGuesses) {
        endGame(false);
    } else if (!guessedWord.includes('_')) {
        endGame(true);
    }

    // Reset input
    guessInput.value = '';
    guessInput.focus();
}

// End the game (win/lose)
function endGame(isWin) {
    guessButton.disabled = true;
    if (isWin) {
        alert("Congratulations! You've won!");
    } else {
        alert(`Game Over! The word was: ${selectedWord}`);
    }
    restartButton.classList.remove('hidden');
}

// Restart the game
function restartGame() {
    startGame();
}

// Event listeners
guessButton.addEventListener('click', handleGuess);
restartButton.addEventListener('click', restartGame);

// Start the game on load
startGame();
