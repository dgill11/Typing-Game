const inputfield = document.getElementById('typingspot');
const timer = document.getElementById('timer');
var starttimervalue = 60;

const words = ["help", "socket", "snake", "python", "apple", "hello", "what", "they", "exquisite"];

console.log("alive");

const textfield = () => {
    console.log("true");
    const textfieldvalue = inputfield.value.toLowerCase();
    console.log(textfieldvalue);
    if (textfieldvalue === "start") {
        start();
        console.log("gamehasstarted");
    }
    else {
        console.log("start hasn't been typed yet");
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
    starttimer();
 }
