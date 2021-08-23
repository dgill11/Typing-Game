const inputfield = document.getElementById('inputspot');
const timer = document.getElementById('')

const words = ["help", "socket", "snake", "python", "apple", "hello", "what", "they", "exquisite"];
var starttimervalue  = 60;

console.log("alive");

const textfield = () => {
    console.log("true");
    const textfieldvalue = inputfield.value.toLowerCase();
    if (textfieldvalue === "start") {
        start();
        console.log("gamehasstarted");
    }
}

window.onbeforeunload = () => {
    if (localStorage != null) {
        var storedhighscore = JSON.parse(localStorage.getItem('highscore'));
        document.getElementById('highscore').innerHTML = storedhighscore;
    }
}

// Note: It is important to eventually encrypt thsis value in the future, so people won't be able to
// Create a false highscore through the console and localStorage. 

function starttimer() {
    for (let i = 0; i < startimervalue; i++) {
        setTimeout(function () {
            starttimervalue - 1;
            timer.innerHTML = starttsimervalue;
        }, 1000)
    }
 }

 function start() {
    starttimer();
 }
