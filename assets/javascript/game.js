
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
        guessedLetters.push(guess);
        console.log(guess);
        console.log(guessedLetters);
        console.log(wins);
        //re-printing every counter with every keystroke
        document.getElementById("guessedLetters").innerHTML += guess + " ";
        document.getElementById("wins-p").innerText = wins;
        document.getElementById("losses").innerText = losses;
        document.getElementById("guessesrem").innerText = " " + guessesLeft;

   
        document.getElementById("blanked-word").innerHTML = blankedWord.join(' ');
        function replaceFxn(guess) {
            var replace = computerGuess.indexOf(guess);
            blankedWord[replace] = guess;
            document.getElementById("blanked-word").innerHTML = blankedWord.join(' ');
        }

        // if (computerGuess.indexOf(guess) !== -1) {
        //     var splitUp = computerGuess.split(" ");
        //     console.log(computerGuess);
        //     // computerGuess.forEach(replaceFxn);
        // }
       
        if (computerGuess.indexOf(guess) !== -1) {
            var computerGuessArray = computerGuess.split();
            computerGuessArray.forEach(function() {
                    var replace = computerGuess.indexOf(guess);
                    blankedWord[replace] = guess;
                    document.getElementById("blanked-word").innerHTML = blankedWord.join(' ');
                    });
        }
       




    };



    // var replace = computerGuess.indexOf(guess);
    // blankedWord[replace] = guess;
    // document.getElementById("blanked-word").innerHTML = blankedWord.join(' ');
    