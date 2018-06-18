
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wordBank = ["test", "testing", "testified", "testimonious"];
var blankedWord = [];
var guessedLetters = [];
var lettersRight = 0;
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
    console.log(guess);
    console.log(guessedLetters);
    console.log(wins);

    // audio if they guess a letter correctly
    var owenWow = document.createElement("audio");
        owenWow.setAttribute("src", "Assets/24_Owen_Wilson_Wow_MP3s/wowc.mp3");
    // for audio if they lose
    var lossAudio = document.createElement("audio");
        lossAudio.setAttribute("src", "Assets/HowardDean.mp3");
    // setting up the wins/losses <div> as a var to run the rotate jQuery plugin on
    var lossDiv = $("#lossDiv");
    var winsDiv = $("#winsDiv");
    console.log(computerGuess.indexOf(guess) + "does it show 2?")
    // If the guessed letter is an index of the answer, a for loop looks
    // at each letter in the answer and replaces it if the guess is identical
    if (computerGuess.indexOf(guess) !== -1) {
        owenWow.play();
        var computerGuessArray = computerGuess.split('');
        console.log(computerGuessArray);
        for (var i = 0; i < computerGuessArray.length; i++) {
            if (computerGuessArray[i] === guess) {
                blankedWord[i] = guess;
                lettersRight++;
                document.getElementById("blanked-word").innerHTML = blankedWord.join(' ');
            }
        };
    }
    // If the guess isn't in the word it subtracts a guess, 
    else if ((computerGuess.indexOf(guess)) === -1 && (guessedLetters.indexOf(guess) === -1)) {
        guessesLeft--;
        document.getElementById("guessesrem").innerText = " " + guessesLeft;
    // If the guess hasn't already been guessed it gets added to the "letters already guessed section"
        if (guessedLetters.indexOf(guess) === -1) {
            guessedLetters.push(guess);
            document.getElementById("guessedLetters").innerHTML += guess + " ";
        }  
    }
    if (guessesLeft === 0) {
        lossAudio.play();
        losses++;
        document.getElementById("losses").innerText = losses;
        lossDiv.rotate({
            angle: 0,
            animateTo: 360})
        document.getElementById("reset").innerHTML ='<button type="button" class="btn btn-outline-light">Reset</button>';
    }
    if (lettersRight === computerGuess.length) {

        wins++
        document.getElementById("wins-p").innerText = wins;
        winsDiv.rotate({
            angle:0,
            animateTo: 360})
            document.getElementById("reset").innerHTML = '<button type="button" class="btn btn-outline-light">Reset</button>';
    }
};
var reset = $("#reset")



