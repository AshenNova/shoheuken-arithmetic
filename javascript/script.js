const displayProblem = document.querySelector(".display-problems")
const ourForm = document.querySelector(".our-form")
const userInput = document.getElementById("user-input")
const currentScore = document.getElementById("current-score")
const currentMistake = document.getElementById("current-mistake")
const buttonStart = document.querySelector(".start-button")
const starto = document.querySelector('.starto');
const startBox = document.querySelector('.start-box');
const countDownTimer = document.querySelector('.countDownTimer');
const timerD = document.getElementById('timerD');

// Storing of question
let state = {
  score: 0,
  mistake: 0
}

function clickStart(){
  console.log("start button clicked");
  // starto.classList.add('hidden');
  startBox.classList.add('hidden');
  countDownTimer.classList.remove('hidden');
    
  // Timer1
    let time = 3;
    const countDownOne = setInterval(function(){
      
      console.log(time);
      time--;
      timerD.innerHTML = time;
    
      if (time < 0){
        clearInterval(countDownOne);
        timerD.innerHTML = time;
        starto.classList.add('hidden');
        countDownTimer.classList.add('hidden');
        userInput.focus()
        timer2()
        updateProblems()
      }
    }, 1000);
    
  }

    // Timer2
function timer2(){
    time = 0;
  const countDownTwo = setInterval(function(){

  time++;
  document.getElementById('timer').innerHTML = time;
  console.log(state.score);

  if (state.score >= 100){
    clearInterval(countDownTwo);
    document.getElementById('timer').innerHTML = time;
  }

  }, 1000);
}


buttonStart.addEventListener('click', clickStart)


// 1. generate new problem and store the question in state object
// 2. Also to visual update the HTML
function updateProblems(){
  state.currentProblem = genProblems()
  const p = state.currentProblem
  displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`
  userInput.value = ""
  userInput.focus()
}

// updateProblems()

ourForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
  e.preventDefault()
  if (userInput.value == "") alert("Please input a value")
  let correctAnswer
  const p = state.currentProblem
  if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
  if (p.operator == "-") correctAnswer = p.numOne - p.numTwo
  console.log(correctAnswer, userInput.value)
    if (parseInt(userInput.value,10) == correctAnswer){
      console.log("correct")
      state.score++
      currentScore.textContent = state.score
      currentScore.classList.add("animate-right")
      setTimeout(() => currentScore.classList.remove("animate-right"), 331)
      updateProblems()
      console.log("new questions generated")
    } else {
      console.log("incorrect")
      state.mistake++
      currentMistake.textContent = state.mistake
      currentMistake.classList.add("animate-wrong")
      setTimeout(() => currentMistake.classList.remove("animate-wrong"), 331)
      userInput.value = ""
    }
  
}

// generate number
function genNumbers(max){
  return Math.trunc(Math.random()*max)
}

// generate problem
function genProblems(){
  return{
    numOne: genNumbers(10)-4,
    numTwo: genNumbers(11),
    operator: ["+","-"][genNumbers(2)]
  }
}