// first we create a random numbers
const num1 = Math.round(Math.random()*10)
const num2 = Math.round(Math.random()*10)

//Declare our elements to JS

const questionEl = document.getElementById("question");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score =0;
}

scoreEl.innerHTML = `score: ${score}`;

//With this we can manipulate output
questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;

const corectAnswer = num1 * num2;

// submit with callback function; to submit users answer
formEl.addEventListener("submit", ()=>{
    const userAnswer =+inputEl.value;
    if(userAnswer === corectAnswer){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

//to store score:
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}