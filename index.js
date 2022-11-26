const num1 = Math.ceil(Math.random()*10); //Un numero random del 1 al 10
const num2 = Math.ceil(Math.random()*10);

// Aqui traigo la pregunta de html a js y la vuelvo interactiva con los numeros random.
const questionElement = document.getElementById("question");

const inputElement = document.getElementById("input");

const formElement = document.getElementById("form");

const scoreElement = document.getElementById("score");

// Aqui le doy a score el valor que trae desde la memoria del navegador.
let score = JSON.parse(localStorage.getItem("score"));
if (!score){
    score = 0;
}

questionElement.innerText = "What is " + num1 + " multiply by " + num2 +"?"; //'what is ${num1} multiply by ${num2}' esta forma funciona por las comillas simples.

const correctAnswer = num1 * num2;
scoreElement.innerText = "score: " + score;



// each time someone submit the form, we want to get the information from de console storage.
formElement.addEventListener("submit", () => {
    const userAnswer = +inputElement.value;
    if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
    } else {
        score --;
        updateLocalStorage();
    }
    
})

function updateLocalStorage () {
    localStorage.setItem("score",JSON.stringify(score));
}






