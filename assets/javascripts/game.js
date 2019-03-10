//variable for tracking
var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerGuess = [];
//Array of possible letters to use
var keyBoardChoises = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var computerGuess = keyBoardChoises[Math.floor(Math.random() * keyBoardChoises.length)];
console.log(keyBoardChoises[0]);