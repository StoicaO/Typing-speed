let savedWords = document.getElementById("savedWords");
let timerElement = document.getElementById("timer");
let inputElement = document.getElementById("word");
const overlay = document.querySelector('.overlay');
const modal = document.querySelector(".modal");
const btnCloseWindow = document.querySelector(".close-modal");
let countWords = 0;
let seconds = 60;
let interval = null;
let start = true;
let allowInput = false;
inputElement.disabled = true;

let text = "a soft and fluffy velveteen rabbit lived in a toybox in a boy is room" +
  " each day the boy opened the toybox and picked up velveteen rabbit and velveteen rabbit was happy.";
savedWords.textContent = text;
let arraySavedWords = text.split(" ");

function startTimer() {
    interval = setInterval(function () {
        --seconds;
        if (seconds === 0) {
            document.getElementById("reset").style.display = "block";
            clearInterval(interval);
            allowInput = false; 
            inputElement.disabled = true;
        }    
        timerElement.textContent = seconds;
    }, 1000);
}

function checkWord() {   
   if (!allowInput) { 
        let inputWords = inputElement.value.split(" ");
        let coloredWord = "";
        for (let i = 0; i < arraySavedWords.length; ++i) {
            if (i < inputWords.length) {
                if (inputWords[i] === arraySavedWords[i]) {
                    ++countWords;
                    coloredWord += `<span style="color: green;">${arraySavedWords[i]}</span>`;
                } else {
                    coloredWord += `<span style="color: red;">${arraySavedWords[i]}</span>`;
                }
            } else {
                coloredWord += arraySavedWords[i];
            }
            coloredWord += " ";
        }
        let newTextElement = document.getElementById("newText");
        newTextElement.innerHTML = coloredWord;
        newTextElement.style.display = "block"; 
        document.getElementById("numberWords").innerHTML = "You have wroted  "+ countWords + " words correctly, " +
        "so reset the game if you want to play again!";
    }
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

btnCloseWindow.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

function startWrite() {
    if (start) {
        startTimer();
        start = false;
        allowInput = true;
        inputElement.disabled = false; 
    }    
}

function reset() {
    location.reload();
}