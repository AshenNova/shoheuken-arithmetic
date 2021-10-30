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
const scoreNeededCl = document.querySelector('.score-needed');
const multiplesSettingCl = document.querySelector('.multiples-setting');

const levelSetting = document.querySelector('.level-setting');
const levelLabel = document.querySelector('.level-label');
const level1 = document.querySelector('.level1');
const level1dot1 = document.querySelector('.level1Dot1');
const level1dot2 = document.querySelector('.level1Dot2');
const level2 = document.querySelector('.level2');
const level2dot1 = document.querySelector('.level2Dot1');
const level2dot2 = document.querySelector('.level2Dot2');
const level3 = document.querySelector('.level3');
const level3dot1 = document.querySelector('.level3Dot1');
const level3dot2 = document.querySelector('.level3Dot2');
const level4 = document.querySelector('.level4');
const level4dot2 = document.querySelector('.level4Dot2');
const level5dot2 = document.querySelector('.level5Dot2');
const level6dot2 = document.querySelector('.level6Dot2');
const level7 = document.querySelector('.level7');

const mistakesCountCl = document.querySelector('.mistakesCount');
const buttonSuccess = document.querySelectorAll('.btn-success');
const toMultiplesBtn = document.querySelector('.toMultiples');

const highScoreName = document.querySelector('.highScoreName');
const highScoreTime = document.querySelector('.highScoreTime');
const highScoreMistakes = document.querySelector('.highScoreMistakes');

let level = 0;
let player = 1;

function HighScore(name, date, time, mistake) {
  this.name = name
  this.date = date
  this.time = time
  this.mistake = mistake
}

const highScore1 = new HighScore("Jayden Cheong", "16 October 2021", 140, 1)
const highScore1dot1 = new HighScore("Jayden Cheong", "16 October 2021", 823, 12)
const highScore1dot2 = new HighScore("Nil", "16 October 2021", 0, 0)
const highScore2 = new HighScore("Nil", "16 October 2021", 0, 0)
const highScore2dot1 = new HighScore("JingKai Ng", "16 October 2021", 823, 24)
const highScore2dot2 = new HighScore("Shawn Low", "30 October 2021", 1236, 7)
const highScore3 = new HighScore("Shanice Lee", "30 October 2021", 614, 7)
const highScore3dot1 = new HighScore("Shanice Lee", "30 October 2021", 162, 5)
const highScore3dot2 = new HighScore("Shanice Lee", "30 October 2021", 740, 11)
const highScore4dot2 = new HighScore("Jadee Wong", "2 October 2021", 553, 2)
const highScore5dot2 = new HighScore("Jayden Goo", "20 October 2021", 364, 2)
const highScore6dot2 = new HighScore("Yixin", "29 September 2021", 366, 8)


// Storing of question
let state = {
  score: 0,
  mistake: 0,
  scoreNeeded: 0,
  numSix: 0
}

function clickStart(){
  console.log("start button clicked");
  startBox.classList.add('hidden');
  multiplesSettingCl.classList.add('hidden');
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

  if (state.score >= scoreNeeded){
    clearInterval(countDownTwo);
    document.getElementById('timer').innerHTML = time;
    starto.classList.remove('hidden');
    finalText.innerHTML = time;
    finalBox.classList.remove('hidden');
    mistakesCountCl.innerHTML = state.mistake;
    player = 0;
  }

  }, 1000);
}


buttonStart.addEventListener('click', clickStart)

toMultiplesBtn.addEventListener('click', function(){
  multiplesSettingCl.classList.remove('hidden');
  levelSetting.classList.add('hidden');
})


// 1. generate new problem and store the question in state object
// 2. Also to visual update the HTML
function updateProblems(){
  state.currentProblem = genProblems()
  const p = state.currentProblem

  // generating display -> Turn this into a function!
  if (level == 1 || level == 3){
    if (p.numOne >= p.numTwo){
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`  
    } else {
      displayProblem.innerHTML = `${p.numTwo} ${p.operator} ${p.numOne}`
    }
  }
  if (level == 1.1 || level == 2.1 || level == 3.1 ){
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

  if (level == 1.2 || level == 2.2 || level == 3.2 || level == 4.2 || level == 5.2 || level == 6.2){
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

  if (mulLevel == "multiples"){
    displayProblem.innerHTML = `${p.numFive} ${p.operator} ${state.numSix}`
  }

  userInput.value = ""
  userInput.focus()
}

// updateProblems()

ourForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
  e.preventDefault()
  if ( player == 1 ){
    if (userInput.value == "") alert("Please input a value")
    let correctAnswer
    // let divAnswer
    const p = state.currentProblem
    
    // Determining answer -> Turn this into a function!
      if (level == 1 || level == 3){
        if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
        if (p.operator == "-") {
          if (p.numOne >= p.numTwo) {
            correctAnswer = p.numOne - p.numTwo
          } else {
            correctAnswer = p.numTwo - p.numOne
          }
        }        
      }

      if (level == 1.1 || level == 2.1 || level == 3.1){
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

      if (level == 3.2 || level == 2.2 || level == 1.2 || level == 4.2 || level == 5.2 || level == 6.2){
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

      if (mulLevel == "multiples"){
        correctAnswer = p.numFive * state.numSix
      }

    console.log(correctAnswer, userInput.value)
      if (parseInt(userInput.value,10) == correctAnswer){
        console.log("correct")
        state.score++
        currentScore.textContent = state.score
        currentScore.classList.add("animate-right")
        setTimeout(() => currentScore.classList.remove("animate-right"), 331)
        state.numSix++
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
      numThree: genNumbers(6)+1,
      numFour: genNumbers(6)+5,
      operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 2.2){
    return {
      numOne: genNumbers(40)+10,
      numTwo: genNumbers(40)+10,
      numThree: genNumbers(6)+1,
      numFour: genNumbers(6)+5,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 3){
    return {
      numOne: genNumbers(150)+100,
      numTwo: genNumbers(150)+100,
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 3.1){
    return {
      numThree: genNumbers(6)+5,
      numFour: genNumbers(6)+5,
      operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 3.2){
    return {
      numOne: genNumbers(150)+100,
      numTwo: genNumbers(150)+100,
      numThree: genNumbers(6)+5,
      numFour: genNumbers(6)+5,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 4.2){
    return {
    numOne: genNumbers(150)+100,
    numTwo: genNumbers(150)+100,
    numThree: genNumbers(6)+5,
    numFour: genNumbers(6)+5,
    operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 5.2){
    return {
    numOne: genNumbers(500)+500,
    numTwo: genNumbers(500)+500,
    numThree: genNumbers(6)+5,
    numFour: genNumbers(6)+5,
    operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 6.2){
    return {
      numOne: genNumbers(500)+500,
      numTwo: genNumbers(500)+500,
      numThree: genNumbers(7)+6,
      numFour: genNumbers(7)+6,
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

  if (level == "1 times table"){
    return {
      numFive: 1,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "2 times table"){
    return {
      numFive: 2,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "3 times table"){
    return {
      numFive: 3,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "4 times table"){
    return {
      numFive: 4,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "5 times table"){
    return {
      numFive: 5,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "6 times table"){
    return {
      numFive: 6,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "7 times table"){
    return {
      numFive: 7,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "8 times table"){
    return {
      numFive: 8,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "9 times table"){
    return {
      numFive: 9,
      operator: ["x"][genNumbers(1)]
    }  
  }

  if (level == "10 times table"){
    return {
      numFive: 10,
      operator: ["x"][genNumbers(1)]
    }
  }

  if (level == "11 times table"){
    return {
      numFive: 11,
      operator: ["x"][genNumbers(1)]
    }
  }

  if (level == "12 times table"){
    return {
      numFive: 12,
      operator: ["x"][genNumbers(1)]
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

// level1.addEventListener('click', function(){
//     level = 1
//     scoreNeeded = 50;
//     scoreNeededCl.textContent = scoreNeeded;
//     levelBox();
// })

// level1dot1.addEventListener('click', function(){
//     level = 1.1
//     scoreNeeded = 50;
//     scoreNeededCl.textContent = scoreNeeded;
//     levelBox();
// })

// level1dot2.addEventListener('click', function(){
//     level = 1.2
//     levelBox();
//     scoreNeeded = 100;
//     scoreNeededCl.textContent = scoreNeeded;
// })

// level2.addEventListener('click', function(){
//     level = 2
//     levelBox();
//     scoreNeeded = 50;
//     scoreNeededCl.textContent = scoreNeeded;
// })

// level2dot2.addEventListener('click', function(){
//     level = 2.2
//     levelBox();
//     scoreNeeded = 100;
//     scoreNeededCl.textContent = scoreNeeded;
// })

// level2dot1.addEventListener('click', function(){
//     level = 2.1
//     levelBox();
//     scoreNeeded = 25;
//     scoreNeededCl.textContent = scoreNeeded;
// })

// level3.addEventListener('click', function(){
//     level = 3
//     levelBox();
//     scoreNeeded = 50;
//     scoreNeededCl.textContent = scoreNeeded;
// })

// level3dot2.addEventListener('click', function(){
//     level = 3.2
//     levelBox();
//     scoreNeeded = 100;
//     scoreNeededCl.textContent = scoreNeeded;
// })


// level4dot2.addEventListener('click', function(){
//     level = 4.2
//     levelBox();
//     scoreNeeded = 100;
//     scoreNeededCl.textContent = scoreNeeded;
// })

// level5dot2.addEventListener('click', function(){
//     level = 5.2
//     levelBox();
//     scoreNeeded = 100;
//     scoreNeededCl.textContent = scoreNeeded;
// })

// level6dot2.addEventListener('click', function(){
//     level = 6.2
//     levelBox();
//     scoreNeeded = 100;
//     scoreNeededCl.textContent = scoreNeeded;
// })

// level7.addEventListener('click', function(){
//     level = 7
//     scoreNeeded = 100;
//     scoreNeededCl.textContent = scoreNeeded;
//     levelBox();
// })

function levelBox(){
    scoreNeededCl.textContent = scoreNeeded;
    console.log(`Level ${level} selected`)
    levelSetting.classList.add('hidden')
    multiplesSettingCl.classList.add('hidden');
    startBox.classList.remove('hidden')
    levelLabel.innerHTML = `You are attempting Level ${level}`
}

for (let i = 0; i < buttonSuccess.length; i++){

  buttonSuccess[i].addEventListener("click", function(){
    buttonLevel = this.innerHTML
  
  switch (buttonLevel) {
    case "Level 1":
      level = 1;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore1.name
      highScoreTime.innerHTML = highScore1.time
      highScoreMistakes.innerHTML = highScore1.mistake
      break;

    case "Level 1.1":
      level = 1.1;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore1dot1.name
      highScoreTime.innerHTML = highScore1dot1.time
      highScoreMistakes.innerHTML = highScore1dot1.mistake
      break;

    case "Level 1.2":
      level = 1.2;
      scoreNeeded = 100;
      highScoreName.innerHTML = highScore1dot2.name
      highScoreTime.innerHTML = highScore1dot2.time
      highScoreMistakes.innerHTML = highScore1dot2.mistake
      break;

    case "Level 2":
      level = 2;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore2.name
      highScoreTime.innerHTML = highScore2.time
      highScoreMistakes.innerHTML = highScore2.mistake
      break;

    case "Level 2.1":
      level = 2.1;
      scoreNeeded = 25;
      highScoreName.innerHTML = highScore2dot1.name
      highScoreTime.innerHTML = highScore2dot1.time
      highScoreMistakes.innerHTML = highScore2dot1.mistake
      break;

    case "Level 2.2":
      level = 2.2;
      scoreNeeded = 100;
      highScoreName.innerHTML = highScore2dot2.name
      highScoreTime.innerHTML = highScore2dot2.time
      highScoreMistakes.innerHTML = highScore2dot2.mistake
      break;

    case "Level 3":
      level = 3;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore3.name
      highScoreTime.innerHTML = highScore3.time
      highScoreMistakes.innerHTML = highScore3.mistake
      break;

    case "Level 3.1":
      level = 3.1;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore3dot1.name
      highScoreTime.innerHTML = highScore3dot1.time
      highScoreMistakes.innerHTML = highScore3dot1.mistake
      break;

    case "Level 3.2":
      level = 3.2;
      scoreNeeded = 100;
      highScoreName.innerHTML = highScore3dot2.name
      highScoreTime.innerHTML = highScore3dot2.time
      highScoreMistakes.innerHTML = highScore3dot2.mistake
      break;

    case "Level 4.2":
      level = 4.2;
      scoreNeeded = 100;
      highScoreName.innerHTML = highScore4dot2.name
      highScoreTime.innerHTML = highScore4dot2.time
      highScoreMistakes.innerHTML = highScore4dot2.mistake
      break;

    case "Level 5.2":
      level = 5.2;
      scoreNeeded = 100;
      highScoreName.innerHTML = highScore5dot2.name
      highScoreTime.innerHTML = highScore5dot2.time
      highScoreMistakes.innerHTML = highScore5dot2.mistake
      break;

    case "Level 6.2":
      level = 6.2;
      scoreNeeded = 100;
      highScoreName.innerHTML = highScore6dot2.name
      highScoreTime.innerHTML = highScore6dot2.time
      highScoreMistakes.innerHTML = highScore6dot2.mistake
      break;
    
    case "Level 7":
      level = 7;
      scoreNeeded = 100;
      break;

    case "Multiples 1":
      level = "1 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;
     
    case "Multiples 2":
      level = "2 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;
      
    case "Multiples 3":
      level = "3 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;   

    case "Multiples 4":
      level = "4 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;   

    case "Multiples 5":
      level = "5 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;   
      case "Multiples 6":
      level = "6 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;
     
    case "Multiples 7":
      level = "7 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;
      
    case "Multiples 8":
      level = "8 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;   

    case "Multiples 9":
      level = "9 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;   

    case "Multiples 10":
      level = "10 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;

    case "Multiples 11":
      level = "11 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;

    case "Multiples 12":
      level = "12 times table";
      mulLevel = "multiples"
      scoreNeeded = 13;
      break;              

    default:
      console.log(this.innerHTML);
    }

    levelBox();
    });

}