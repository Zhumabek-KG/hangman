* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f3f4f6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.game-container {
    text-align: center;
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 400px;
}

h1 {
    color: #4caf50;
    font-size: 32px;
}

.hangman-image img {
    width: 200px;
}

.word-display {
    font-size: 28px;
    margin-top: 20px;
    letter-spacing: 5px;
}

.letters input {
    font-size: 20px;
    padding: 5px 10px;
    width: 40px;
    text-align: center;
}

.letters button {
    padding: 8px 15px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
}

.letters button:hover {
    background-color: #45a049;
}

.info {
    margin-top: 20px;
    font-size: 16px;
}

.hidden {
    display: none;
}

button:disabled {
    background-color: gray;
    cursor: not-allowed;
}
