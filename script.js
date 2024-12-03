// Initialize game variables
let timeLeft = 60;
let timer;
let isTestStarted = false;
let typedText = "";
let correctWords = 0;
let totalWords = 0;
let correctChars = 0;
let totalChars = 0;

const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const timeLeftDisplay = document.getElementById('time-left');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const inputField = document.getElementById('input-field');
const passage = document.getElementById('passage');

// Sample passages for the game
const passages = [
    "This is a sample passage. Try to type it as fast as you can!",
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "Coding is like a puzzle, and every problem is a challenge to solve."
];

// Start test function
function startTest() {
    // Reset values
    typedText = "";
    correctWords = 0;
    totalWords = 0;
    correctChars = 0;
    totalChars = 0;
    inputField.disabled = false;
    inputField.value = '';
    inputField.focus();

    // Select a random passage from the list
    const selectedPassage = passages[Math.floor(Math.random() * passages.length)];
    passage.textContent = selectedPassage;

    // Start the timer
    timer = setInterval(updateTime, 1000);

    // Hide start button and show restart button
    startButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
}

// Update the timer and check if the time is over
function updateTime() {
    if (timeLeft === 0) {
        clearInterval(timer);
        endTest();
    } else {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
    }
}

// End test and calculate results
function endTest() {
    inputField.disabled = true;
    const typedWords = inputField.value.trim().split(" ").length;
    const correctWordsCount = typedText.split(" ").filter((word, index) => word === passage.textContent.split(" ")[index]).length;

    // Calculate Words per Minute (WPM)
    const wpm = Math.round((typedWords / 5) * (60 / (60 - timeLeft)));
    const accuracy = Math.round((correctWordsCount / typedWords) * 100);

    // Update stats
    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = accuracy;
}

// Handle typing input and track accuracy
inputField.addEventListener('input', (event) => {
    const inputText = event.target.value;
    typedText = inputText.trim();

    // Count correct and incorrect characters for accuracy
    let correctCharsCount = 0;
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === passage.textContent[i]) {
            correctCharsCount++;
        }
    }
    correctChars = correctCharsCount;
    totalChars = inputText.length;

    const accuracy = Math.round((correctChars / totalChars) * 100);
    accuracyDisplay.textContent = accuracy;
});

// Restart the test
function restartTest() {
    timeLeft = 60;
    timeLeftDisplay.textContent = timeLeft;
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = 0;
    startTest();
}

// Event listeners
startButton.addEventListener('click', startTest);
restartButton.addEventListener('click', restartTest);

