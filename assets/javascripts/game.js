//variable for tracking
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessLetters = [];
var computerGuess = [];
//Array of possible letters to use
var keyBoardChoises = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = "";


function selectHiddenLetter() {

    computerGuess = keyBoardChoises[Math.floor(Math.random() * keyBoardChoises.length)];
    console.log(computerGuess)
}

function playGame() {
    setupGame()
    document.addEventListener("keyup", function (event) {
        userGuess = event.key;
        if (guessLetters.includes(userGuess)) {

        } else {
            guessLetters.push(userGuess);
            document.getElementById("unanswered").textContent = guessLetters;
            if (userGuess === computerGuess) {
                wins++;
                document.getElementById("correct").textContent = wins;
                setupGame()
            } else {
                guessesLeft--
               document.getElementById("guesses-left").textContent=guessesLeft;
            }
            if (guessesLeft===0) {
                losses++
                document.getElementById("wrong").textContent = losses;
                setupGame()
            }
        }

    });

}

function setupGame() {
    document.getElementById("unanswered").textContent = "";
    document.getElementById("guesses-left").textContent="";
    selectHiddenLetter()
}

playGame()