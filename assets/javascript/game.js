
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wordBank = ["test", "testing", "testified", "testimonious", "space", "frontier", "jupiter", "mars", "neptune", "uranus", "earth", "pluto", "venus", "saturn", "asteroid", "meteor"];
var blankedWord = [];
var guessedLetters = [];
var lettersRight = 0;

// guess = guess.toLowerCase();
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
document.getElementById("blanked-word").innerText = blankedWord.join(' ');



document.onkeydown = function (event) {
    console.log("Guessed Letters: " + guessedLetters);
    console.log("Losses: " + losses);
    console.log("Wind: " + wins);
    console.log("Guesses Left: " + guessesLeft);
    console.log("Letters Right: " + lettersRight);
    console.log("Blanked Word: " + blankedWord);
    console.log("Computer Guess: " + computerGuess);
    console.log("Computer Guess Length: " + computerGuessLength);

    var guess = event.key;
    guess = guess.toLowerCase();
    // audio if they guess a letter correctly
    var owenWow = document.createElement("audio");
    owenWow.setAttribute("src", "Assets/Audio/wowc.mp3");
    // for audio if they lose
    var lossAudio = document.createElement("audio");
    lossAudio.setAttribute("src", "Assets/Audio/HowardDean.mp3");
    // setting up the wins/losses <div> as a var to run the rotate jQuery plugin on
    var lossDiv = $("#lossDiv");
    var winsDiv = $("#winsDiv");
    // If the guessed letter is an index of the answer, a for loop looks
    // at each letter in the answer and replaces it if the guess is identical
    if (computerGuess.indexOf(guess) !== -1 && lettersRight <= computerGuess.length && guessesLeft !== -1) {
        owenWow.play();

        for (var i = 0; i < computerGuess.length; i++) {
            if (computerGuess[i] === guess) {
                blankedWord[i] = guess;
                lettersRight++;
                document.getElementById("blanked-word").innerText = blankedWord.join(' ');
            }
        };
    }
    // If the guess isn't in the word it subtracts a guess, 
    else if ((computerGuess.indexOf(guess)) === -1 && (guessedLetters.indexOf(guess) === -1) && (guessesLeft > 0)) {
        guessesLeft--;
        document.getElementById("guessesrem").innerText = " " + guessesLeft;
        // If the guess hasn't already been guessed it gets added to the "letters already guessed section"
        if (guessedLetters.indexOf(guess) === -1) {
            guessedLetters.push(guess);
            document.getElementById("guessedLetters").innerText += guess + " ";
        }
    }
    if (guessesLeft === 0) {
        guessesLeft++;
        lossAudio.play();
        losses++;
        document.getElementById("losses").innerText = losses;
        lossDiv.rotate({
            angle: 0,
            animateTo: 360
        })
        document.getElementById("reset").innerHTML = '<button type="button" class="btn btn-outline-light">Reset</button>';
    }
    if (lettersRight === computerGuess.length) {
        //letters right up so it doesn't equal computer guess any more
        lettersRight++
        wins++
        document.getElementById("wins-p").innerText = wins;
        winsDiv.rotate({
            angle: 0,
            animateTo: 360
        })
        document.getElementById("reset").innerHTML = '<button type="button" class="btn btn-outline-light">Reset</button>';
    }
};
var reset = $("#reset");
$("#reset").on("click", function () {
    guessedLetters = [];
    guessesLeft = 10;
    lettersRight = 0;
    blankedWord = [];
    computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    computerGuessLength = computerGuess.length;
    document.getElementById("guessesrem").innerText = " " + guessesLeft;
    for (var i = 0; i < computerGuess.length; i++) {
        blankedWord.push("_");
    }
    document.getElementById("blanked-word").innerText = blankedWord.join(' ');
    document.getElementById("reset").innerHTML = "";
});





