function checkGuess() {
    const guessInput = document.getElementById('guess').value;
    const message = document.getElementById('message');
  
    if (isNaN(guessInput) || guessInput < 1 || guessInput > 10) {
      message.textContent = "Invalid input: Please input a number between 1 - 10.";
      return;
    }
  
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    if (parseInt(guessInput) === randomNumber) {
      message.textContent = "Congratulations! You've guessed the correct number in 10 attempts.";
    } else if (parseInt(guessInput) < randomNumber) {
      message.textContent = "Too low. Try again.";
    } else {
      message.textContent = "Too high. Try again.";
    }
  }