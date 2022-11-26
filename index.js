const num1 = Math.ceil(Math.random()*10); //Un numero random del 1 al 10
const num2 = Math.ceil(Math.random()*10);

// Aqui traigo la pregunta de html a js y la vuelvo interactiva con los numeros random.
const questionElement = document.getElementById("question");

const inputElement = document.getElementById("input");

const formElement = document.getElementById("form");

const scoreElement = document.getElementById("score");

questionElement.innerText = "What is " + num1 + " multiply by " + num2 +"?"; //'what is ${num1} multiply by ${num2}' esta forma funciona por las comillas simples.

let score = JSON.parse(localStorage.getItem("score"));


const correctAnswer = num1 * num2;
scoreElement.innerText = "score " + score;


// each time someone submit the form, we want to get the information.
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
    localStorage.setItem("score",JSON.stringify(score))
}






