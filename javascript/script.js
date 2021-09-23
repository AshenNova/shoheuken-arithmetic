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
const finalBox = document.querySelector('.finalBox');
const finalText = document.getElementById('finalText');

const levelSetting = document.querySelector('.level-setting');
const levelLabel = document.querySelector('.level-label');
const level1 = document.querySelector('.level1');
const level1dot1 = document.querySelector('.level1Dot1');
const level1dot2 = document.querySelector('.level1Dot2');
const level2 = document.querySelector('.level2');
const level2dot1 = document.querySelector('.level2Dot1');

const level3 = document.querySelector('.level3');
const level4 = document.querySelector('.level4');
const level5 = document.querySelector('.level5');
const level6 = document.querySelector('.level6');
const level7 = document.querySelector('.level7');

let level = 0;

// Storing of question
let state = {
  score: 0,
  mistake: 0
}

function clickStart(){
  console.log("start button clicked");
  startBox.classList.add('hidden');
  countDownTimer.classList.remove('hidden');
    
  // Timer1 countdown
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
    starto.classList.remove('hidden');
    finalText.innerHTML = time;
    finalBox.classList.remove('hidden');
  }

  }, 1000);
}


buttonStart.addEventListener('click', clickStart)


// 1. generate new problem and store the question in state object
// 2. Also to visual update the HTML
function updateProblems(){
  state.currentProblem = genProblems()
  const p = state.currentProblem

  // generating display -> Turn this into a function!
  if (level == 1){
    if (p.numOne >= p.numTwo){
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`  
    } else {
      displayProblem.innerHTML = `${p.numTwo} ${p.operator} ${p.numOne}`
    }
  }
  if (level == 1.1 || level == 2.1 ){
    if (p.operator == "x" ) displayProblem.innerHTML = `${p.numThree} ${p.operator} ${p.numFour}`
    if (p.operator == "÷") displayProblem.innerHTML = `${p.numThree*p.numFour} ${p.operator} ${p.numThree}` 
  }
  if (level == 2){
    if (p.numOne >= p.numTwo){
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`  
    } else {
      displayProblem.innerHTML = `${p.numTwo} ${p.operator} ${p.numOne}`
    }
  }

  if (level == 1.2 || level == 3){
    console.log(p.operator);
    if (p.operator == "x" ) displayProblem.innerHTML = `${p.numThree} ${p.operator} ${p.numFour}` 
    if (p.operator == "+") displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`
    if (p.operator == "-") {
      if (p.numOne >= p.numTwo){
        displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`  
      } else {
        displayProblem.innerHTML = `${p.numTwo} ${p.operator} ${p.numOne}`
      }
    }
    if (p.operator == "÷") displayProblem.innerHTML = `${p.numThree*p.numFour} ${p.operator} ${p.numThree}` 
  }

  if (level == 7){
    displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`
  }

  userInput.value = ""
  userInput.focus()
}

// updateProblems()

ourForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
  e.preventDefault()
  if (userInput.value == "") alert("Please input a value")
  let correctAnswer
  // let divAnswer
  const p = state.currentProblem
  
  // Determining answer -> Turn this into a function!
    if (level == 1){
      if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
      if (p.operator == "-") {
        if (p.numOne >= p.numTwo) {
          correctAnswer = p.numOne - p.numTwo
        } else {
          correctAnswer = p.numTwo - p.numOne
        }
      }        
    }

    if (level == 1.1 || level == 2.1 ){
      if (p.operator == "x") correctAnswer = p.numThree * p.numFour
      if (p.operator == "÷") correctAnswer = (p.numThree*p.numFour)/p.numThree
    }

    if (level == 1.2){
      if (p.operator == "x") correctAnswer = p.numThree * p.numFour
      if (p.operator == "÷") correctAnswer = (p.numThree*p.numFour)/p.numThree
    }

    if (level == 2){
      if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
      if (p.operator == "-") {
        if (p.numOne >= p.numTwo) {
          correctAnswer = p.numOne - p.numTwo
        } else {
          correctAnswer = p.numTwo - p.numOne
        }
      }        
    }

    if (level == 3 || level == 1.3 ){
      if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
      if (p.operator == "-") {
        if (p.numOne >= p.numTwo) {
          correctAnswer = p.numOne - p.numTwo
        } else {
          correctAnswer = p.numTwo - p.numOne
        }
      } 
      if (p.operator == "x") correctAnswer = p.numThree * p.numFour
      if (p.operator == "÷") correctAnswer = (p.numThree*p.numFour)/p.numThree
    }

    if (level == 7){
      if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
      if (p.operator == "-") correctAnswer = p.numOne - p.numTwo
    }

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
  console.log(level);

  if (level == 1){
    return {
      numOne: genNumbers(5),
      numTwo: genNumbers(5),
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 1.1){
    return {
      numThree: genNumbers(5)+1,
      numFour: genNumbers(4)+1,
      operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 1.2){
    return {
      numOne: genNumbers(5),
      numTwo: genNumbers(5),
      numThree: genNumbers(5)+1,
      numFour: genNumbers(4)+1,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 2){
    return {
      numOne: genNumbers(40)+10,
      numTwo: genNumbers(40)+10,
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 2.1){
    return {
      numThree: genNumbers(4)+7,
      numFour: genNumbers(4)+7,
      operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 3){
    return {
      numOne: genNumbers(50),
      numTwo: genNumbers(50)+10,
      numThree: genNumbers(10)+1,
      numFour: genNumbers(10)+1,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }
  if (level == 7){
    return {
      numOne: genNumbers(10)-4,
      numTwo: genNumbers(11),
      operator: ["+","-"][genNumbers(2)]
    }  
  }
}

// function genAnswer(){
//   if (level == 7){
//     if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
//     if (p.operator == "-") correctAnswer = p.numOne - p.numTwo
//   }
//   if (level == 1){
//     if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
//     if (p.operator == "-") {
//       if (p.numOne >= p.numTwo) {
//         correctAnswer = p.numOne - p.numTwo
//       } else {
//         correctAnswer = p.numTwo - p.numOne
//       }
//     }        
//   }
// }

level1.addEventListener('click', function(){
  level = 1
  console.log('Level 1 selected')
  levelSetting.classList.add('hidden')
  startBox.classList.remove('hidden')
  levelLabel.innerHTML = `You are attempting Level ${level}`
})

level1dot1.addEventListener('click', function(){
  level = 1.1
  console.log('Level 1.1 selected')
  levelSetting.classList.add('hidden')
  startBox.classList.remove('hidden')
  levelLabel.innerHTML = `You are attempting Level ${level}`
})

level1dot2.addEventListener('click', function(){
  level = 1.2
  console.log('Level 1.2 selected')
  levelSetting.classList.add('hidden')
  startBox.classList.remove('hidden')
  levelLabel.innerHTML = `You are attempting Level ${level}`
})

level2.addEventListener('click', function(){
  level = 2
  console.log('Level 2 selected')
  levelSetting.classList.add('hidden')
  startBox.classList.remove('hidden')
  levelLabel.innerHTML = `You are attempting Level ${level}`
})

level2dot1.addEventListener('click', function(){
  level = 2.1
  console.log('Level 2.1 selected')
  levelSetting.classList.add('hidden')
  startBox.classList.remove('hidden')
  levelLabel.innerHTML = `You are attempting Level ${level}`
})

level3.addEventListener('click', function(){
  level = 3
  console.log('Level 3 selected')
  levelSetting.classList.add('hidden')
  startBox.classList.remove('hidden')
  levelLabel.innerHTML = `You are attempting Level ${level}`
})

level7.addEventListener('click', function(){
  level = 7
  console.log('Level 7 selected')
  levelSetting.classList.add('hidden')
  startBox.classList.remove('hidden')
  levelLabel.innerHTML = `You are attempting Level ${level}`
})