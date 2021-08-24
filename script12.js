const inputfield = document.getElementById('typingspot');
const timer = document.getElementById('timer');
const quotespot = document.getElementById('quote');
var starttimervalue = 10;
var score = 0; 
var currentword = " ";

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
    }
    else {
        console.log("start hasn't been typed yet");
    }
}

const wordgeneration = () => {
    var randomword = words[Math.floor(Math.random()*words.length)];
    return randomword;
}

currentword = wordgeneration();

const main = () => {
    quotespot.innerHTML = currentword;
    const usersword = inputfield.value.toLowerCase();
    if (usersword === currentword) {
        currentword = wordgeneration();
        quotespot.innerHTML = currentword;
        score++;
        console.log("nice");
        inputfield.value = "";
        startimervalue++;
    }
}

inputfield.addEventListener('input', textfield);

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
 }

 function start() {
    main();
    starttimer();
    if (starttimervalue === 0) {
        end();
    }
 }
