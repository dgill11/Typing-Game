const inputfield = document.getElementById('typingspot');
const timer = document.getElementById('timer');
const quotespot = document.getElementById('quote');
const scorespot = document.getElementById('highscore');
const mistakescounter = document.getElementById('errors');
var mistakes = 0;
mistakescounter.innerHTML = "Mistakes" + " " + mistakes;
var starttimervalue = 5;
var score = 0; 
var currentword = " ";
var currentarray = [];
var givenword = [];
const words = ["help", "socket", "snake", "python", "apple", "hello", "what", "they", "exquisite"];
console.log("alive");

const textfield = () => {
    const textfieldvalue = inputfield.value.toLowerCase();
    console.log("true");
    console.log(textfieldvalue);
    if (textfieldvalue === "start") {
        start();
        console.log("gamehasstarted");
        inputfield.removeEventListener('input', textfield);
        inputfield.addEventListener('input', main);
        inputfield.value = "";
        inputfield.placeholder = "Type the word!";
    }
    else {
        console.log("start hasn't been typed yet");
    }
}

const wordgeneration = () => {
    var randomword = words[Math.floor(Math.random()*words.length)];
    var givenword = randomword.split(' ');
    console.log(givenword);
}

currentword = wordgeneration();

const main = () => {
    quotespot.innerHTML = currentword;
    const usersword = inputfield.value.toLowerCase();
    if (usersword === currentword) {
        currentword = wordgeneration();
        quotespot.innerHTML = currentword;
        currentarray = currentword.split(' ');
        console.log(currentarray)
        score++;
        scorespot.innerHTML = "Score:" + score;
        inputfield.value = "";
        starttimervalue++;
    }
}

const mistakecheck = () => {
    console.log("checking for mistakes");
    console.log(currentarray);
    for (let i = 0; i < currentarray.length; i++) {
        if (givenword[i] != currentarray[i]) {
            mistakes++;
            mistakescounter.innerHTML = "Mistakes" + " " + mistakes;
            console.log("mistake");
        }
    }
}

inputfield.addEventListener('input',textfield);

window.onbeforeunload = () => {
    if (localStorage != null) {
        var storedhighscore = JSON.parse(localStorage.getItem('highscore'));
        document.getElementById('highscore').innerHTML = storedhighscore;
    }
}

function starttimer() {
    timer.innerHTML = starttimervalue;
    for (let i = 0; i < 1; i++) {
        setInterval(function () {
            starttimervalue--
            timer.innerHTML = starttimervalue;
        }, 1000)
    }
    if (starttimervalue == 0) {
        console.log("game has ended");
    } 
 }

 function start() {
    main();
    starttimer();
    inputfield.addEventListener('input', mistakecheck);
 }
