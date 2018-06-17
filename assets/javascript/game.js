
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wordBank = ["test", "testing", "testified", "testimonious"];
var blankedWord = [];
var guessedLetters = [];
var guess;
//*for before the game starts* printing the counter vars to their respective <p>
document.getElementById("wins-p").innerText = wins;
document.getElementById("losses").innerText = losses;
document.getElementById("guessesrem").innerText = " " + guessesLeft;
//Picks a random word from the word bank and sets it as the variable computerGuess
var computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
var computerGuessLength = computerGuess.length;
console.log(computerGuess);
// turning the computer's guessed word into blanks by pushing "_"s to an emptry array
for (var i = 0; i < computerGuess.length; i++) {
    blankedWord.push("_");
}
document.getElementById("blanked-word").innerHTML = blankedWord.join(' ');



document.onkeydown = function (event) {
    var guess = event.key;
    guess = guess.toLowerCase();
    // guessedLetters.push(guess);
    console.log(guess);
    console.log(guessedLetters);
    console.log(wins);
    //re-printing every counter with every keystroke
    document.getElementById("wins-p").innerText = wins;
    document.getElementById("losses").innerText = losses;
        
    console.log(computerGuess.indexOf(guess) + "does it show 2?")
    // If the guessed letter is an index of the answer, a for loop looks
    // at each letter in the answer and replaces it if the guess is identical
    if (computerGuess.indexOf(guess) !== -1) {
        var computerGuessArray = computerGuess.split('');
        console.log(computerGuessArray);
        for (var i = 0; i < computerGuessArray.length; i++) {
            if (computerGuessArray[i] === guess) {
                blankedWord[i] = guess;
                document.getElementById("blanked-word").innerHTML = blankedWord.join(' ');
            }
        };
    }
    // If the guess isn't in the word it subtracts a guess, 
    else if (computerGuess.indexOf(guess) === -1) {
        guessesLeft--
        document.getElementById("guessesrem").innerText = " " + guessesLeft;
        if (guessedLetters.indexOf(guess) === -1) {
            guessedLetters.push(guess);
            document.getElementById("guessedLetters").innerHTML += guess + " ";
        }  
    }
};


