
$(document).ready(function() {

var wins = 0;
var guessesLeft = 10;
var wordBank = ["test", "testing", "testified", "testimonious"];
var blankedWord = [];
var guessedLetters = [];
var guess;
//Picks a random word from the word bank and sets it as the variable computerGuess
var computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(computerGuess);


//turning the computer's guessed word into blanks by pushing "_"s to an emptry array
for (var i=0; i<computerGuess.length; i++) {
    blankedWord.push("_");
}
console.log(blankedWord);
document.getElementById("blanked-word").innerHTML = blankedWord;

document.onkeyup = function(event) {
    var guess = event.key;
    guess = guess.toLowerCase();
    guessedLetters.push(guess);
    console.log(guess);
    console.log(guessedLetters);
    

    // pretty sure i'm going to want to use a forEach function here
    // guessedLetters.forEach(function(drink) {
    //     return drink;
    // })
    // function printArray(wantPrinted) {
    //     for (var i = 0; i < wantPrinted.length; i++) {
    //         var print = wantPrinted[i] + " ";
    //         return print;
    //     }
    // }

    document.getElementById("guessedLetters").innerHTML += guess + " ";

    if (computerGuess.indexOf(guess) >= 0) {
        console.log("got a letter");
    }

   
    
}
});