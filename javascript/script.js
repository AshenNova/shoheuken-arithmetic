const displayProblem = document.querySelector(".display-problems")
const helpMe = document.querySelector(".help-me-text")
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
const mainContainer= document.querySelector('.main-container');
const secondUnitMeasurement= document.querySelector('.secondUnitMeasurement');
const inputBox = document.querySelector('.input.box');
const resetButton = document.getElementById('reset');
const backButton = document.querySelectorAll(".back-button");
const instructions = document.querySelector('.instructions');
const hardcoreMode = document.querySelector('.hardcore-mode')
const easyMode = document.querySelector('.easy-mode')

const imageG = document.createElement('img');
const imageS = document.createElement('img');
const imageB = document.createElement('img');
const imageNMP = document.createElement('img');
const imageFailed = document.createElement('img');
const imageCompleted = document.createElement('img');
imageG.src = 'images/endgame/gold.jpeg'
imageS.src = 'images/endgame/silver.jpeg'
imageB.src = 'images/endgame/bronze.jpeg'
imageNMP.src = 'images/endgame/needmorepractice.jpeg'
imageFailed.src = 'images/endgame/failed.jpeg'
imageCompleted.src = 'images/endgame/complete.jpeg'

const levelSetting = document.querySelector('.level-setting');
const levelLabel = document.querySelector('.level-label');
const mainBox = document.querySelector('.main-box');

const mistakesCountCl = document.querySelector('.mistakesCount');
const settingButton = document.querySelectorAll('.settingButton');
const toMultiplesBtn = document.querySelector('.toMultiples');

const highScoreName = document.querySelector('.highScoreName');
const highScoreTime = document.querySelector('.highScoreTime');
const highScoreMistakes = document.querySelector('.highScoreMistakes');

const fractionChoice = document.querySelector(".fraction-choice")
const wholeNumberContainer = document.querySelector(".whole-numbers-container")
const fractionsContainer = document.querySelector(".fractions-container")
const numeratorOne = document.querySelector(".numeratorOne")
const numeratorTwo = document.querySelector(".numeratorTwo")
const denominatorOne = document.querySelector(".denominatorOne")
const denominatorTwo = document.querySelector(".denominatorTwo")

const fractionsContainerTwo = document.querySelector(".fractions-container-two")
const twoWholeNumber = document.querySelector(".two-whole-number")
const twoNumerator = document.querySelector(".two-numerator")
const twoDenominator = document.querySelector(".two-denominator")
const threeWholeNumber = document.querySelector(".three-whole-number")
const threeNumerator = document.querySelector(".three-numerator")
const threeDenominator = document.querySelector(".three-denominator")
const equalSymbol = document.querySelector(".equal-symbol")

const firstCanvas = document.querySelector(".first-canvas");
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const mouse = {
  x: undefined,
  y: undefined
}

function angles(x1, y1, x2, y2){
  let dy = y2-y1
  let dx = x2-x1
  let theta = Math.atan2(dy, dx);
  theta *= 180/Math.PI
  return theta
}

canvas.addEventListener('click', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
})

let level = 0;
let player = 1;
let levelArr = [];
let arr = [];
let arr2 = [];
let arr3 = [];
let gold = 0;
let silver = 0;
let bronze = 0;
let hardcore = 0;
let easy = 0;
const commonMultipleArr = [];
const commonMultipleArrTwo = [];
let cutoff = 600;

function HighScore(name, date, time, mistake) {
  this.name = name
  this.date = date
  this.time = time
  this.mistake = mistake
}

const highScore1DotZero = new HighScore("Jayden Cheong", "16 October 2021", 140, 1)
const levelBtn1Zero = document.querySelector(".btn-level-one")
let levelBtn1ZeroCount = 0;

const highScore1DotZero1 = new HighScore("Jayden Cheong", "16 October 2021", 823, 12)
const highScore1DotZero2 = new HighScore("Nil", "16 October 2021", 0, 0)
const highScore1DotZero3 = new HighScore("Aixl Lim", "26 March 2022", 124, 0)
const highScore1DotZero4 = new HighScore("Jayden Cheong", "19 March 2022", 133, 0)
const highScore1DotZero5 = new HighScore("Reila", "28 mar 2022", 141, 0)
const highScore1DotZero6 = new HighScore("Nadya", "13 March 2022", 436, 4)
const highScore1DotZero7 = new HighScore("Nadya", "27 March 2022", 121, 0)
const highScore2DotZero = new HighScore("Nil", "16 October 2021", 0, 0)
const highScore2DotZero1 = new HighScore("JingKai Ng", "16 October 2021", 823, 24)
const highScore2DotZero2 = new HighScore("Reila", "28 March 2022", 152, 1)
const highScore2DotZero3 = new HighScore("Jayden Cheong", "19 March 2022", 623, 1)
const highScore2DotZero5 = new HighScore("Adam Poon", "26 March 2022", 343, 2)
const highScore2DotZero7 = new HighScore("Reila", "28 mar 2022", 107, 0)
const highScore2DotZero8 = new HighScore("Nil", "Nil", 0, 0)
const highScore2DotZero9 = new HighScore("Nil", "Nil", 0, 0)

const highScore3DotZero = new HighScore("Shanice Lee", "30 October 2021", 614, 7)
const highScore3DotZero1 = new HighScore("Shanice Lee", "30 October 2021", 162, 5)
const highScore3DotZero2 = new HighScore("Javen Chen", "12 March 2022", 230, 2)
const highScore3DotZero3 = new HighScore("Shanice Lee", "6 November 2021", 662, 4)
const highScore3DotZero4 = new HighScore("Amanda Poon", "12 March 2022", 229, 0)
const highScore3DotZero5 = new HighScore("Nil", "Nil", 0, 0)
const highScore3DotZero6 = new HighScore("Yuki Chin", "20 mar 2022", 299, 3)
const highScore3DotZero7 = new HighScore("Sheyanne Cheong", "12 March 2022", 80, 0)
const highScore3DotZero8 = new HighScore("Nil", "Nil", 0, 0)
const highScore3DotZero9 = new HighScore("Maegan Lim", "20 March 2022", 1676, 3)
const highScore3DotZero10 = new HighScore("Nil", "Nil", 0, 0)
const highScore3DotZero11 = new HighScore("Shanice Lee", "22 March 2022", 478, 2)
const highScore3DotZero12 = new HighScore("Jayden Goo", "16 march 2022", 72, 0)
const highScore3DotZero13 = new HighScore("Jadee Wong", "14 March 2022", 310, 1)
const highScore3DotZero14 = new HighScore("Sheyanne Cheong", "19 March 2022", 240, 0)
const highScore3DotZero15 = new HighScore("Sheyanne Cheong", "25 March 2022", 251, 0)
const highScore3DotZero16 = new HighScore("Nil", "Nil", 0, 0)
const highScore3DotZero17 = new HighScore("Yuki Chin", "27 March 2022", 165, 2)
const highScore3DotZero18 = new HighScore("Adam Poon", "26 March 2022", 196, 4)

const highScore4DotZero = new HighScore("Javen Chen", "27 March 2022", 140, 0)
const highScore4DotZero1 = new HighScore("Adam Poon", "12 March 2022", 229, 0)
const highScore4DotZero3 = new HighScore("Javen Chen", "12 March 2022", 264, 2)
const highScore4DotZero4 = new HighScore("Jadee Wong", "11 March 2022", 758, 8)
const highScore4DotZero5 = new HighScore("Nadya", "27 March 2022", 225, 1)
const highScore4DotZero6 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero7 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero8 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero9 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero10 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero11 = new HighScore("Nadya", "13 March 2022", 215, 0)
const highScore4DotZero12 = new HighScore("Nadya", "13 March 2022", 134, 0)
const highScore4DotZero13 = new HighScore("Javen Chen", "12 March 2022", 297, 3)
const highScore4DotZero14 = new HighScore("Sheyanne Cheong", "12 March 2022", 49, 0)
const highScore4DotZero15 = new HighScore("Jayden Goo", "16 mar 2022", 91, 2)
const highScore4DotZero16 = new HighScore("Emma Leo", "30 March 2022", 393, 2)
const highScore4DotZero17 = new HighScore("Emma Leo", "30 March 2022", 224, 2)
const highScore4DotZero18 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero19 = new HighScore("Nil", "Nil", 0, 0)

const highScore5DotZero = new HighScore("Sheyanne Cheong", "19 March 2022", 453, 5)
const highScore5DotZero1 = new HighScore("Emma Leo", "28 Feb 2022", 273, 0)
const highScore5DotZero2 = new HighScore("Emma Leo", "21 March 2022", 167, 0)
const highScore5DotZero3 = new HighScore("Jayden Goo", "23 Mar 2022", 88, 0)
const highScore5DotZero4 = new HighScore("Nil", "Nil", 0, 0)
const highScore5DotZero5 = new HighScore("Emma Leo", "30 March 2022", 251, 1)
const highScore5DotZero6 = new HighScore("Nil", "Nil", 0, 0)
const highScore5DotZero7 = new HighScore("Nil", "Nil", 0, 0)
const highScore5DotZero8 = new HighScore("Nil", "Nil", 0, 0)
const highScore6DotZero = new HighScore("Jayden Goo", "16 March 2022", 143, 0)
const highScore6Dot3 = new HighScore("Yixin", "29 September 2021", 366, 8)



// Storing of question
let state = {
  score: 0,
  mistake: 0,
  scoreNeeded: 0,
  numSix: 0
}

function clickStart(){
  buttonLevel = this.innerHTML
  console.log("start button clicked");
  startBox.classList.add('hidden');
  multiplesSettingCl.classList.add('hidden');
  countDownTimer.classList.remove('hidden');
  if (levelArr.length != 0){
    buttonLevelSetting();
    levelLabel.innerHTML = `You are attempting Level ${level}`
    console.log(buttonLevel);
  }
    
  // Timer1 countdown
  let time = 3;
  const countDownOne = setInterval(function(){
    timerD.innerHTML = time;
    time--;
  
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

if (easy == 1){
  cutoff = 99999
} else {
  cutoff = 600;
}

if (state.score >= scoreNeeded || time == cutoff){
  clearInterval(countDownTwo);
  document.getElementById('timer').innerHTML = time;
  starto.classList.remove('hidden');
  if (time == cutoff){
    finalText.innerHTML = `You scored ${state.score}`;
  } else {
    finalText.innerHTML = `You took ${time} seconds`;
  }
 
  finalBox.classList.remove('hidden');

  if (easy != 1){
    if (time < gold){
        document.querySelector('.trophy').appendChild(imageG);
        console.log("Gold image")
      } else if (time < silver){
        document.querySelector('.trophy').appendChild(imageS);
        console.log("Silver image")
      } else if (time < bronze){
        document.querySelector('.trophy').appendChild(imageB);
        console.log("Bronze image")
      } else if (time < cutoff) {
        document.querySelector('.trophy').appendChild(imageNMP);
        console.log("Practice image")
      } else {
        document.querySelector('.trophy').appendChild(imageFailed);
        console.log("Failed")
      }
  } else {
    document.querySelector('.trophy').appendChild(imageCompleted);
      console.log("Completed image")
  }

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

const resetStuff = function (){
  fractionsContainer.classList.add('hidden');
  fractionsContainerTwo.classList.add('hidden');
  wholeNumberContainer.classList.remove('hidden');
  multiplesSettingCl.classList.add('hidden');
  firstCanvas.classList.add('hidden');

  secondUnitMeasurement.textContent = ""
  instructions.innerHTML = ""
  document.querySelector("#user-input").setAttribute("type","number");
  document.querySelector("#user-input").setAttribute("step","1");
  displayProblem.style.fontSize = "50px";
  userInput.style.width = "175px";
  document.querySelector("#user-input").style.marginTop = "0";
  document.querySelector("#user-input").setAttribute("max","99999")
  displayProblem.style.margin = "30px 0";
  threeNumerator.classList.add('line');
  equalSymbol.innerHTML = "=";
  fractionsContainerTwo.style.margin = "0 25px 15px"
  helpMe.textContent = ""

  gold = 0;
  silver = 0;
  bronze = 0;
  if (document.querySelector('.trophy').childNodes.length > 0){
  // document.querySelector('.trophy').removeChild(imageG)
  // document.querySelector('.trophy').removeChild(imageS)
  // document.querySelector('.trophy').removeChild(imageB)
  // document.querySelector('.trophy').removeChild(imageNMP)
  imageG.remove();
  imageS.remove();
  imageB.remove();
  imageNMP.remove();
  imageFailed.remove();
  imageCompleted.remove();
  arr.length = 0;
  arr2.length = 0;
  }

  ctx.clearRect(0, 0, 400, 275);
  
  console.log("reset button activated")
  
}

resetButton.addEventListener('click', function(){
  levelSetting.classList.remove('hidden');
  finalBox.classList.add('hidden');
  state.score = 0;
  currentScore.textContent = state.score
  state.mistake = 0;
  currentMistake.textContent = state.mistake
  player = 1;
  document.getElementById('timer').innerHTML = 0;
  timerD.innerHTML = 4;

  resetStuff()
})

for (let x = 0; x < backButton.length; x++){
  backButton[x].addEventListener('click', function(){
    levelSetting.classList.remove('hidden');
    startBox.classList.add('hidden');

    resetStuff()
  })
}


//////////////////// DISPLAY PROBLEMS ////////////////////

// Step 3: Updating, storing and then displaying the problem
// 1. generate new problem and store the question in state object
// 2. Also to visual update the HTML
function updateProblems(){
  state.currentProblem = genProblems()
  state.drawProblem = genProblems()

  const p = state.currentProblem

  // generating display -> Turn this into a function!
  if (level == 1 || level == 3){
    if (p.numOne >= p.numTwo){
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`  
    } else {
      displayProblem.innerHTML = `${p.numTwo} ${p.operator} ${p.numOne}`
    }
  }
  if (level == 1.02){
    if (p.numOne <= 9) p.operator = "+"
    if (p.numOne > 9) p.operator = "-"
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}` 
  }

  if (level == 1.03){
    if (p.operator == "x" ) {
      displayProblem.innerHTML = `${p.numThree} ${p.operator} ${p.numFour}`;
    } else if (p.operator == "÷"){
       displayProblem.innerHTML = `${p.numThree*p.numFour} ${p.operator} ${p.numThree}`;
    } else if (p.numOne <= 9) {
      p.operator = "+";
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
    } else if (p.numOne > 9) {
      p.operator = "-";
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
    }  
  }

  if (level == 1.04 ){
    if (p.option == "c"){
      if (p.operator == "+" && p.numTwo>p.numThree){
        [p.numThree, p.numTwo] = [p.numTwo, p.numThree]
      }
      if (p.optionTwo == "1"){
      displayProblem.innerHTML = `___ ${p.operator} ${p.numTwo} = ${p.numThree}`
      }
      if (p.optionTwo == "2"){
      displayProblem.innerHTML = `${p.numThree} = ___ ${p.operator} ${p.numTwo}` 
      }
    }
    if (p.option == "d"){
      console.log(p.numOne, p.numThree)
      if (p.operator == "-" && p.numThree>p.numOne){
        [p.numOne, p.numThree] = [p.numThree, p.numOne]
      }
      if (p.operator == "+" && p.numOne>p.numThree){
        [p.numOne, p.numThree] = [p.numThree, p.numOne]
      }
      if (p.optionTwo == "1"){
        displayProblem.innerHTML = `${p.numOne} ${p.operator} ___ = ${p.numThree}`
      }
      if (p.optionTwo == "2"){
        displayProblem.innerHTML = `${p.numThree} = ${p.numOne} ${p.operator} ___`
      }
    }
    if (p.option == "r"){
      if (p.operator == "-" && p.numThree>p.numOne){
        [p.numOne, p.numThree] = [p.numThree, p.numOne]
      }
      if (p.optionTwo == "1"){
        displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numThree} = ___`
      }
      if (p.optionTwo == "2"){
        displayProblem.innerHTML = `___ = ${p.numOne} ${p.operator} ${p.numThree}`
      }
    }
  }

  if (level == 1.05 ){
    if (p.option == "c"){
      if (p.optionTwo == "1"){
      displayProblem.innerHTML = `${p.numTwo} ${p.optionThree} than _____ is ${p.numThree}.`
      }
      if (p.optionTwo == "2"){
      displayProblem.innerHTML = `${p.numThree} is ${p.numTwo} ${p.optionThree} than _____.` 
      }
    }
    if (p.option == "d"){
      console.log("difference")
      if (p.optionTwo == "1"){
        displayProblem.innerHTML = `${p.numThree} is _____ ${p.optionThree} than ${p.numTwo}.`
      }
      if (p.optionTwo == "2"){
        displayProblem.innerHTML = `${p.numThree} is _____ ${p.optionThree} than ${p.numTwo}.`
      }
    }
    if (p.option == "r"){
      console.log("result")
      if (p.optionTwo == "1"){
        displayProblem.innerHTML = `${p.numTwo} ${p.optionThree} than ${p.numOne} is _____.	`
      }
      if (p.optionTwo == "2"){
        displayProblem.innerHTML = `${p.numTwo} ${p.optionThree} than ${p.numOne} is _____.`
      }
    }
  }

  if ( level == 1.06) {
    if (p.optionFinal == "1"){
    arr = [p.numOne, p.numTwo];
    if (p.numTwo > p.numOne){
      [p.numTwo, p.numOne] = arr
    }
      p.numTotal = p.numOne+p.numTwo
      p.numDiff = p.numOne-p.numTwo
      if (p.operator == "+" && p.numTotal > p.numThree){
        p.operatorTwo = "+"
      }
      if (p.operator == "+" && p.numTotal < p.numThree){
        p.operatorTwo = "-"
      }
      if (p.operator == "-" && p.numDiff < p.numThree){
        p.operatorTwo = "-"
      }
      if (p.operator == "-" && p.numDiff > p.numThree){
        p.operatorTwo = "+"
      }
     displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo} = ${p.numThree} ${p.operatorTwo} ___`
    }
    if (p.optionFinal == "2"){
      arr = [p.numOne, p.numTwo];
      if (p.numTwo > p.numOne){
        [p.numTwo, p.numOne] = arr
      }
      p.numTotal = p.numOne+p.numTwo
      p.numDiff = p.numOne-p.numTwo
      if (p.operator == "+" && p.numTotal > p.numFour){
        p.operatorTwo = "+"
      }
      if (p.operator == "+" && p.numTotal < p.numFour){
        p.operatorTwo = "-"
      }
      if (p.operator == "-" && p.numDiff < p.numFour){
        p.operatorTwo = "-"
      }
      if (p.operator == "-" && p.numDiff > p.numFour){
        p.operatorTwo = "+"
      }
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo} = ___ ${p.operatorTwo} ${p.numFour}`
    }
    if (p.optionFinal == "3"){
      arr = [p.numThree, p.numFour];
      if (p.numFour > p.numThree){
        [p.numFour, p.numThree] = arr
      }
      p.numTotal = p.numThree+p.numFour
      p.numDiff = p.numThree-p.numFour
      if (p.operatorTwo == "+" && p.numTotal > p.numOne){
        p.operator = "+"
      }
      if (p.operatorTwo == "+" && p.numTotal < p.numOne){
        p.operator = "-"
      }
      if (p.operatorTwo == "-" && p.numDiff < p.numOne){
        p.operator = "-"
      }
      if (p.operatorTwo == "-" && p.numDiff > p.numOne){
        p.operator = "+"
      }
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ___ = ${p.numThree} ${p.operatorTwo} ${p.numFour}`
    }
    if (p.optionFinal == "4"){
      arr = [p.numThree, p.numFour];
      if (p.numFour > p.numThree){
        [p.numFour, p.numThree] = arr
      }
      p.numTotal = p.numThree+p.numFour
      p.numDiff = p.numThree-p.numFour
      if (p.operatorTwo == "+" && p.numTotal > p.numTwo){
        p.operator = "+"
      }
      if (p.operatorTwo == "+" && p.numTotal < p.numTwo){
        p.operator = "-"
      }
      if (p.operatorTwo == "-" && p.numDiff < p.numTwo){
        p.operator = "-"
      }
      if (p.operatorTwo == "-" && p.numDiff > p.numTwo){
        p.operator = "+"
      }
      displayProblem.innerHTML = `___ ${p.operator} ${p.numTwo} = ${p.numThree} ${p.operatorTwo} ${p.numFour}`
    }
  }

  if ( level == 1.07){
    if (p.numOne == p.numThree){
      p.numOne += 1;
    }
    console.log(p.numOne, p.numThree);
    if (p.numOne > p.numThree){
      if (p.numThree == 1){
        if (p.option == "1"){
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} = ${p.numTwo} + ${p.numTwo} x ___
          `
        }
        if (p.option == "2"){
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} = ${p.numTwo} x ___ + ${p.numTwo}
          `
        }
      } else {
        if (p.option == "1"){
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} = ${p.numTwo} x ${p.numThree} + ${p.numTwo} x ___
          `
        }
        if (p.option == "2"){
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} = ${p.numTwo} x ___ + ${p.numTwo} x ${p.numThree}
          `
        }
      }
    }

    if (p.numOne < p.numThree){
      if (p.option == "1"){
        if (p.numThree == 1){
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} =  ${p.numThree} - ____ x ${p.numTwo}
          `
        } else {
        displayProblem.textContent = `
        ${p.numOne} x ${p.numTwo} = ${p.numThree} x ${p.numTwo} - ____ x ${p.numTwo}
        `
        }
      }
      if (p.option == "2"){
        if (p.numThree == 1){
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} =  ____ x ${p.numTwo} - ${p.numThree}
          `
        } else {
        displayProblem.textContent = `
        ${p.numOne} x ${p.numTwo} = ____ x ${p.numTwo} - ${p.numThree} x ${p.numTwo}
        `
        }
      }
    }
  } 

  if (level == 1.01 || level == 2.01 || level == 3.01 ){
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
  if (level == 2.02 ){
    if (digit < 3){
      digit = 3
    }
    if (digit > 7){
     digit = 7 
    }
    for (let i = 0; i < digit; i++){
      const chosenNumber = arr[genNumbers(arr.length-1)]
      arr2.push(chosenNumber)
      const index = arr.indexOf(chosenNumber)
      arr.splice(index,1)
    }
  p.place = ["ones","tens","hundreds","thousands","ten thousands", "hundred thousands", "millions"][genNumbers(arr2.length)]
  
     if (arr2[0] == 0){
       [arr2[0], arr2[1]] = [arr2[1], arr2[0]]
     }
    let b = 1
    for ( let a = 0; a < arr2.length; a++){
      p.holdingNumber = arr2[a]*b
      b = b*10
      p.totalNumber += p.holdingNumber
    }

    displayProblem.innerHTML = 
    `
    Which digit is in the</br>
    <u>${p.place}</u> place? <br>
    ${p.totalNumber.toLocaleString('en-US')}
    `
  }

  if ( level == 2.05 ){
    if (digit < 3){
      digit = 3
    }
    if (digit > 7){
     digit = 7 
    }

    // counting odd or even in array
    let oddEvenCount = [0, 0];
    for (let i = arr2.length; arr2.length < digit; i++){
      const chosenNumber =  arr[genNumbers(arr.length-1)];
      arr2.push(chosenNumber)
      const index = arr.indexOf(chosenNumber)
      arr.splice(index, 1);
      console.log(arr, arr2)
    }
    console.log(oddEvenCount[0], oddEvenCount[1])

    // checking if all are odd or even
    for (let b = 0; b < arr2.length; b++){
      if (arr2[b]%2 == 0){
        oddEvenCount[1]++
      } else {
        oddEvenCount[0]++
      }
    }

    let changeFirstArray = 0;
    if (p.evenOrOdd == "odd" && oddEvenCount[0] == 0){
      console.log("choice 1")
      changeFirstArray = arr2[0]+1
      arr2.shift()
      console.log(arr2)
      arr2.push(changeFirstArray)
      console.log(arr2)
    }
    if (p.evenOrOdd == "even" && oddEvenCount[1] == 0){
      console.log("choice 2")
      changeFirstArray = arr2[0]+1
      arr2.shift()
      console.log(arr2)
      arr2.push(changeFirstArray)
      console.log(arr2)
    }

    displayProblem.innerHTML = 
    `
    Form the <u>${p.choice}</u> ${p.evenOrOdd} number using</br>
    ${arr2}
    `
    if (p.choice == "smallest"){
      arr2.sort(function(a, b){return a-b});
      if ( arr2[0] == 0) {
       [arr2[1], arr2[0]] = [arr2[0], arr2[1]]
      }
    }
    if (p.choice == "greatest"){
      arr2.sort(function(a, b){return b-a});
    }
    console.log(arr2, p.evenOrOdd)
    p.landingNumber = arr2.join('');

    let a = 1
    if (p.evenOrOdd == "even") {
      if (p.landingNumber%2 == 0){
        p.finalNumber = p.landingNumber
      } else {
          // do until true
          while ((arr2[arr2.length-a])%2 != 0){
            a++
          }
          const lastDigit = arr2[arr2.length-a]
          arr2.push(arr2.splice(arr2.indexOf(lastDigit),1))
        } 
    }
    if (p.evenOrOdd == "odd") {
      if (p.landingNumber%2 != 0){
        p.finalNumber = p.landingNumber
      } else {
          // do until true
          while ((arr2[arr2.length-a])%2 == 0){
            a++
          }
          const lastDigit = arr2[arr2.length-a]
          arr2.push(arr2.splice(arr2.indexOf(lastDigit),1))
        } 
    }
    if (arr2[0] == 0){
      console.log("first digit still Zero");
      [arr2[0], arr2[1]] = [arr2[1], arr2[0]]
    }

    p.finalNumber = arr2.join('');
    console.log(p.finalNumber)
  }

  if (level == 2.07){
    if (p.bigOrSmall == "1"){
      fractionChoice.innerHTML = "Smaller"
    } else {
      fractionChoice.innerHTML = "Larger"  
    }

    if (p.numFive == p.numSix){
      p.numSix = p.numSix + 1;
    }
    if (p.numThree == p.numFour){
      p.numFour = p.numFour + 1;
    }

    if (p.option == "1"){
      numeratorOne.innerHTML = `${p.numOne}`
      numeratorTwo.innerHTML = `${p.numOne}`
      denominatorOne.innerHTML = `${p.numThree}`
      denominatorTwo.innerHTML = `${p.numFour}`
    } 
    if (p.option == "2"){
      numeratorOne.innerHTML = `${p.numFive}`
      numeratorTwo.innerHTML = `${p.numSix}`
      denominatorOne.innerHTML = `${p.numTwo}`
      denominatorTwo.innerHTML = `${p.numTwo}`
    }
  }

  if ( level == 2.08){
    if (p.operator == "-"){
      if (p.numOne < p.numThree) {
        [p.numOne, p.numThree] = [p.numThree, p.numOne]
      }
      if (p.numOne == p.numThree && p.numTwo < p.numFour){
        [p.numTwo, p.numFour] = [p.numFour, p.numTwo]
      }
    }
    helpMe.textContent = ""
    if (p.operator == "-" && (p.numTwo < p.numFour) && state.score < 11){
      helpMe.textContent = "Borrowed,final answer"
    }
    if (p.operator == "+" && (p.numTwo + p.numFour)>=60 && state.score < 11){
      helpMe.textContent = "Overflow=final answer"
    }
   
    if (p.minHours == "mins"){
     p.minSeconds = "secs"
    } else {
      p.minSeconds = "mins"
    }
    displayProblem.innerHTML = `${p.numOne} ${p.minHours} ${p.numTwo} ${p.minSeconds} ${p.operator} ${p.numThree} ${p.minHours} ${p.numFour} ${p.minSeconds} =`
  }

  if ( level == 2.09){
    ctx.save()

      if (p.timeHours > 12){
        p.timeHours -= 12
        p.amOrPm = "pm"
      } else {
        p.amOrPm = "am"
      }

      ctx.save()
        const xStart = -150
        const yStart = 0
        const xEnd = 160
        const yEnd = 0
        ctx.font = ("1.2em serif")
        ctx.translate(200, 137.5)
        // horizontal line
        ctx.lineWidth = 2;
        ctx.beginPath()
        ctx.moveTo(xStart, yStart)
        ctx.lineTo(xEnd, yEnd)
        ctx.stroke();
        // arrowhead
        ctx.beginPath()
        ctx.moveTo(160, 0)
        ctx.lineTo(150, -10)
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(160, 0)
        ctx.lineTo(150, 10)
        ctx.stroke();

        // start label
        ctx.beginPath()
        ctx.moveTo(-150,15)
        ctx.lineTo(-150, -15)
        ctx.stroke()
        if (p.situation == "later"){
          if (p.timeMinutes < 10){
            ctx.fillText(`${p.timeHours}.0${p.timeMinutes} ${p.amOrPm}`, -163, -17)
          } else {
          ctx.fillText(`${p.timeHours}.${p.timeMinutes} ${p.amOrPm}`, -163, -17)
          }
        ctx.fillText(`?`, 135, -20)
        }

        if (p.situation == "before"){
          if (p.timeMinutes < 10){
            ctx.fillText(`${p.timeHours}.0${p.timeMinutes} ${p.amOrPm}`, 118, -17)
          } else {
          ctx.fillText(`${p.timeHours}.${p.timeMinutes} ${p.amOrPm}`, 118, -17)
          }
        ctx.fillText(`?`, -155, -20)
        }

        // end label
        ctx.beginPath()
        ctx.moveTo(140,15)
        ctx.lineTo(140, -15)
        ctx.stroke()
        if (p.situation == "later"){
          if (p.roll == "mins"){
            ctx.fillText(`${p.changeMinutes}mins ${p.situation}`, -50, -10)
          }
          if (p.roll == "hours")
            ctx.fillText(`${p.changeHours}hours ${p.situation}`, -50, -10)
         }
        if (p.situation == "before"){
          if (p.roll == "mins"){
            ctx.fillText(`${p.changeMinutes}mins ${p.situation}`, -50, -10)
          }
          if (p.roll == "hours"){
            ctx.fillText(`${p.changeHours}hours ${p.situation}`, -50, -10)
          }
        }

       if (state.score < 11 || state.mistake > 5){
         ctx.fillText("am: 1 2 3 4 5 6 7 8 9 10 11 12", -115, -100) 
         ctx.fillText("pm: 12 11 10 9 8 7 6 5 4 3 2 1", -115, -80)
       }

       if (state.mistake > 10  && p.situation == "later" && p.roll == "mins" && p.timeMinutes+p.changeMinutes >= 60 && state.score < 11){
        ctx.fillText("Overflow", -55, -60)
       }
       if (state.mistake > 10 && p.situation == "before" && p.roll == "mins" && p.timeMinutes-p.changeMinutes < 0 && state.score < 11){
        ctx.fillText("Insufficient", -55, -60)
       }
      ctx.restore()

    ctx.restore()
  }

  if (level == 2.03 || level == 3.03 || level == 4.04 || level == 6.3){
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
  if ( level == 3.02 ){
    if (p.option == "1"){
      displayProblem.textContent = `${p.numOne} x ${p.numMulti*p.numMultiTwo} = `
    }
    if (p.option == "2"){
      displayProblem.textContent = `${p.numOne*p.numMultiTwo} ${p.numPlace} = `
    }
    if (p.option == "3"){
      displayProblem.textContent = `${p.numOne*p.numMulti*p.numMultiTwo} ÷ ${p.numMulti} = `
    }
    if (p.option == "4"){
      if (p.numPlace == "tens"){
      displayProblem.textContent = `${p.numOne*10*p.numMultiTwo} = _____ ${p.numPlace}`
      }
      if (p.numPlace == "hundreds"){
        displayProblem.textContent = `${p.numOne*100*p.numMultiTwo} = _____ ${p.numPlace}`
      }
      if (p.numPlace == "thousands"){
        displayProblem.textContent = `${p.numOne*1000*p.numMultiTwo} = _____ ${p.numPlace}`
      }
    }
  }

  if (level == 3.04){
    console.log(p.unitMeasurement);
    p.numTwo = 1000;
    if (p.unitMeasurement == "min"){
      p.numTwo = 60;
      p.secondUnitMeasurement = "secs";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`
    }
    if (p.unitMeasurement == "$"){
      p.numTwo = 100;
      p.secondUnitMeasurement = "¢";
      displayProblem.innerHTML = `${p.unitMeasurement}${p.numOne} =`
    }
    if (p.unitMeasurement == "m"){
      p.numTwo = 100;
      p.secondUnitMeasurement = "cm";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`
    }
    if (p.unitMeasurement == "km"){
      p.secondUnitMeasurement = "m";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`
    }
    if (p.unitMeasurement == "ℓ") {
      p.secondUnitMeasurement = "mℓ";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`
    }
    if (p.unitMeasurement == "kg" ){
      p.secondUnitMeasurement = "g";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`
    }
    secondUnitMeasurement.textContent = p.secondUnitMeasurement;
  }

  if (level == 3.05){
    p.numTwo = 1000;
    if (p.unitMeasurement == "$"){
      p.numTwo = 100;
      p.secondUnitMeasurement = "¢";
      p.numFive = Math.round((p.numOne+p.numThree/100)*100)/100;
      console.log(p.numThree);
      if (p.numThree%10 == 0 && p.numThree != 100 ){
        displayProblem.innerHTML = `${p.unitMeasurement}${p.numFive}0`;
      } else {
      displayProblem.innerHTML = `${p.unitMeasurement}${p.numFive}`;
      }
    } else if (p.unitMeasurement == "m"){
      p.numTwo = 100;
      p.secondUnitMeasurement = "cm";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numThree} ${p.secondUnitMeasurement} =`
    } else if (p.unitMeasurement == "min"){
      p.secondUnitMeasurement = "secs";
      p.numTwo = 60;
      p.numThree = p.numFive;
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numThree} ${p.secondUnitMeasurement} =`
    } else {
      if (p.option == "2"){
        p.numFour = p.numThree
      }
      if (p.unitMeasurement == "km"){
        p.secondUnitMeasurement = "m";
      }
      if (p.unitMeasurement == "ℓ") {
        p.secondUnitMeasurement = "mℓ";
      }
      if (p.unitMeasurement == "kg" ){
        p.secondUnitMeasurement = "g";
      }
    displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numFour} ${p.secondUnitMeasurement} =`
    } 
    secondUnitMeasurement.textContent = p.secondUnitMeasurement;
  }

  if (level == 3.06){
    p.numTwo = 1000;
    if (p.unitMeasurement == "$"){
      p.numTwo = 100;
      p.secondUnitMeasurement = "¢";
      p.numOne = p.numOne*p.numTwo+p.numThree
      displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
    } else if (p.unitMeasurement == "m"){
      p.numTwo = 100;
      p.secondUnitMeasurement = "cm";
      p.numOne = p.numOne*p.numTwo+p.numThree
      displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
    } else if (p.unitMeasurement == "min") {
      p.numTwo = 60;
      p.secondUnitMeasurement = "s";
      p.numOne = p.numOne*p.numTwo+p.numFive;
      displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
    } else {
      if (p.option == "2"){
        p.numFour = p.numThree
      }
      p.numOne = p.numOne*1000+p.numFour
      if (p.unitMeasurement == "km"){
        p.secondUnitMeasurement = "m";
      }
      if (p.unitMeasurement == "ℓ") {
        p.secondUnitMeasurement = "mℓ";
      }
      if (p.unitMeasurement == "kg" ){
        p.secondUnitMeasurement = "g";
      }
    displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`
    }
    //displaying second unit of measurement
    if (p.unitMeasurement == "$"){
      secondUnitMeasurement.textContent = `${p.unitMeasurement}`
    } else {
        if (p.unitMeasurement == "ℓ"){
          p.unitMeasurement = "L"
          p.secondUnitMeasurement = "ml"
        }
        secondUnitMeasurement.textContent = `${p.unitMeasurement}, ${p.secondUnitMeasurement}`
        }
  }

  if (level == 3.07){
    if (p.numOne == p.numTwo && p.numTwo == p.numThree) {
      p.numOne = p.numOne+1;
    }
    arr.push(p.numOne, p.numTwo, p.numThree);
    displayProblem.innerHTML = `${p.numOne} , ${p.numTwo} , ${p.numThree}`
  }

  if ( level == 3.08){

    if (p.hoursOne > p.hoursTwo){
      [p.hoursOne, p.hoursTwo] = [p.hoursTwo, p.hoursOne]
    }
    if (p.amOrPmOne < 12){
      p.amOrPmOne = "am"
    }
    if (p.amOrPmTwo < 12){
      p.amOrPmTwo = "am"
    }
    if (p.hoursOne > 12){
      p.hoursOne -= 12
    }
    if (p.hoursTwo > 12){
      p.hoursTwo -= 12
    }
    if (p.hoursOne > p.hoursTwo){
      [p.hoursOne, p.hoursTwo] = [p.hoursTwo, p.hoursOne]
    }
    // swap mins if hours same
    if (p.hoursOne == p.hoursTwo && p.minsOne > p.minsTwo){
      [p.minsOne, p.minsTwo] = [p.minsTwo, p.minsOne]
    }

    ctx.save()
      ctx.save()
        ctx.font = ("1em serif")
        if (p.minsOne < 10 && p.minsTwo < 10){
          if (p.minsOne == 0 && p.minsTwo == 0){
            ctx.fillText(`What is the duration between ${p.hoursOne} ${p.amOrPmOne} and ${p.hoursTwo} ${p.amOrPmTwo}`, 20, 20)
          } else {
            ctx.fillText(`What is the duration between ${p.hoursOne}.0${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo}.0${p.minsTwo} ${p.amOrPmTwo}`, 20, 20)
          }
        } else if (p.minsOne < 10){
          if (p.minsOne == 0){
            ctx.fillText(`What is the duration between ${p.hoursOne} ${p.amOrPmOne} and ${p.hoursTwo}.${p.minsTwo} ${p.amOrPmTwo}`, 20, 20)
          } else {
          ctx.fillText(`What is the duration between ${p.hoursOne}.0${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo}.${p.minsTwo} ${p.amOrPmTwo}`, 20, 20)
          }
        } else if (p.minsTwo < 10){
            if (p.minsTwo == 0){
              ctx.fillText(`What is the duration between ${p.hoursOne}.${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo} ${p.amOrPmTwo}`, 20, 20)
            } else {
            ctx.fillText(`What is the duration between ${p.hoursOne}.${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo}.0${p.minsTwo} ${p.amOrPmTwo}`, 20, 20)
            }
        } else {
          ctx.fillText(`What is the duration between ${p.hoursOne}.${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo}.${p.minsTwo} ${p.amOrPmTwo}`, 20, 20)
        }
      ctx.restore()
      
      ctx.save()
        const xStart = -150
        const yStart = 0
        const xEnd = 160
        const yEnd = 0
        ctx.font = ("1.2em serif")
        ctx.translate(200, 137.5)
        // horizontal line
        ctx.lineWidth = 2;
        ctx.beginPath()
        ctx.moveTo(xStart, yStart)
        ctx.lineTo(xEnd, yEnd)
        ctx.stroke();
        // arrowhead
        ctx.beginPath()
        ctx.moveTo(160, 0)
        ctx.lineTo(150, -10)
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(160, 0)
        ctx.lineTo(150, 10)
        ctx.stroke();

        // start label
        ctx.beginPath()
        ctx.moveTo(-150,15)
        ctx.lineTo(-150, -15)
        ctx.stroke()
        if (p.minsOne < 10){
          ctx.fillText(`${p.hoursOne}.0${p.minsOne} ${p.amOrPmOne}`, -163, -17)
        } else {
        ctx.fillText(`${p.hoursOne}.${p.minsOne} ${p.amOrPmOne}`, -163, -17)
        }

        // end label
        ctx.beginPath()
        ctx.moveTo(140,15)
        ctx.lineTo(140, -15)
        ctx.stroke()
        if (p.minsTwo < 10){
          ctx.fillText(`${p.hoursTwo}.0${p.minsTwo} ${p.amOrPmTwo}`, 120, -17)
        } else {
        ctx.fillText(`${p.hoursTwo}.${p.minsTwo} ${p.amOrPmTwo}`, 120, -17)
        }

        ctx.save()
        ctx.strokeStyle = "red";
          if (p.minsTwo > p.minsOne){
            const totalTime = (p.hoursTwo-p.hoursOne)*60+(p.minsTwo-p.minsOne)
            const perPixel = totalTime/290
            const xHelp = perPixel*(p.minsTwo-p.minsOne)
            
            ctx.beginPath()
            ctx.moveTo(xStart+xHelp ,10)
            ctx.lineTo(xStart+xHelp ,-10)
            ctx.stroke();
          }
          if (p.minsTwo < p.minsOne){

            const totalTime = (p.hoursTwo-p.hoursOne-1)*60+(60-p.minsOne)+p.minsTwo
            const perPixel = totalTime/290
            const xHelp = perPixel*(60-p.minsOne)
            
            ctx.beginPath()
            ctx.moveTo(xStart+xHelp ,10)
            ctx.lineTo(xStart+xHelp ,-10)
            ctx.stroke();

            const xHelp2 = perPixel*(totalTime-p.minsTwo)
            ctx.beginPath()
            ctx.moveTo(xStart+xHelp2 ,10)
            ctx.lineTo(xStart+xHelp2 ,-10)
            ctx.stroke();
          }
        ctx.restore()

      ctx.restore();  

    ctx.restore()
  }
  
  if ( level == 3.09 ){
    threeWholeNumber.textContent = ""
    threeNumerator.textContent = "?"
    threeDenominator.textContent = "?"
    if (p.numOne >= p.numTwo){
      p.numOne = p.numOne - 1 - ( p.numOne - p.numTwo);
    }
    twoWholeNumber.textContent = ""
    twoNumerator.textContent = p.numOne*p.numMulti
    twoDenominator.textContent = p.numTwo*p.numMulti
    p.numLargest = p.numTwo*p.numMulti
  }

  if ( level == 3.10){
    if (p.numOne >= p.numTwo){
      p.numOne = p.numOne - 1 - (p.numOne - p.numTwo);
    }
    for (let i = p.numTwo; i > 1; i--){
      if (p.numOne%i == 0 && p.numTwo%i == 0){
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    threeWholeNumber.textContent = ""
    twoWholeNumber.textContent = ""
    twoNumerator.textContent = p.numOne
    twoDenominator.textContent = p.numTwo

    if (p.option == "1"){
      threeNumerator.textContent = p.numOne*p.numMulti
      threeDenominator.textContent = "?"
    } else {
      threeNumerator.textContent = "?"
      threeDenominator.textContent = p.numTwo*p.numMulti
    }
  }
  if ( level == 3.11){
    // Level 3.10
    if (p.optionFinal == "1"){
      threeWholeNumber.textContent = ""
      threeNumerator.textContent = "?"
      threeDenominator.textContent = "?"
      if (p.numOne >= p.numTwo){
        p.numOne = p.numOne - 1 - ( p.numOne - p.numTwo);
      }
      twoWholeNumber.textContent = ""
      twoNumerator.textContent = p.numOne*p.numMulti
      twoDenominator.textContent = p.numTwo*p.numMulti
      p.numLargest = p.numTwo*p.numMulti
    }
    // Level 3.11
    if (p.optionFinal == "2"){
      if (p.numOne >= p.numTwo){
        p.numOne = p.numOne - 1 - (p.numOne - p.numTwo);
      }
      for (let i = p.numTwo; i > 1; i--){
        if (p.numOne%i == 0 && p.numTwo%i == 0){
          p.numOne /= i;
          p.numTwo /= i;
        }
      }
      threeWholeNumber.textContent = ""
      twoWholeNumber.textContent = ""
      twoNumerator.textContent = p.numOne
      twoDenominator.textContent = p.numTwo
  
      if (p.option == "1"){
        threeNumerator.textContent = p.numOne*p.numMulti
        threeDenominator.textContent = "?"
      } else {
        threeNumerator.textContent = "?"
        threeDenominator.textContent = p.numTwo*p.numMulti
      }
    }
  }

  if ( level == 3.12 ){
    displayProblem.innerHTML = `
    Pattern 1: 1</br>
    Pattern 2: 3</br>
    Pattern 3: 6</br>
    Pattern 4: 10</br>
    ...</br>
    Pattern ${p.numOne}: ?
    `
  }

  if ( level == 3.13 ){
    displayProblem.innerHTML = `
    Pattern 1: ${p.numTwo}</br>
    Pattern 2: ${p.numTwo+p.numThree}</br>
    Pattern 3: ${p.numTwo+p.numThree*2}</br>
    ...</br>
    Pattern ${p.numFour}: ?
    `
  }

  if ( level == 3.14 ){
    displayProblem.innerHTML = `
    Pattern 1: 1</br>
    Pattern 2: 4</br>
    Pattern 3: 9</br>
    ...</br>
    Pattern ${p.numFive}: ?</br>
    Pattern ?: ${(p.numFive+p.numSix)*(p.numFive+p.numSix)}
    `
  }

  if ( level == 3.15){
// level 3.12
    if (p.optionFinal == 1){
      displayProblem.innerHTML = `
      Pattern 1: 1</br>
      Pattern 2: 3</br>
      Pattern 3: 6</br>
      Pattern 4: 10</br>
      ...</br>
      Pattern ${p.numOne}: ?
      `
    }
// level 3.13
    if (p.optionFinal == 2){
      displayProblem.innerHTML = `
      Pattern 1: ${p.numTwo}</br>
      Pattern 2: ${p.numTwo+p.numThree}</br>
      Pattern 3: ${p.numTwo+p.numThree*2}</br>
      ...</br>
      Pattern ${p.numFour}: ?
      `
    }
// level 3.14
    if (p.optionFinal == 3){
      displayProblem.innerHTML = `
      Pattern 1: 1</br>
      Pattern 2: 4</br>
      Pattern 3: 9</br>
      ...</br>
      Pattern ${p.numFive}: ?</br>
      Pattern ?: ${(p.numFive+p.numSix)*(p.numFive+p.numSix)}
      `
    }
  }

  if ( level == 3.16) {
    ctx.save()
    ctx.font = '1em serif'
    arcAngleRad = p.arcAngle*Math.PI/180
    ctx.fillText(`Which angle is ${p.acuteOrObtuse}?`, 30, 20)
    ctx.translate(200, 187.5)

    // Draw baseline
    ctx.strokeStyle ="black",
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-100, 0)
    ctx.lineTo(100, 0)
    ctx.stroke();
   
    // Draw arc1
    ctx.strokeStyle ="yellow",
    ctx.beginPath();
    ctx.arc(0, 0, 75, 1*Math.PI, (1+(p.arcAngle/180))*Math.PI);
    ctx.stroke();

    ctx.fillText("a", -90, -10)
    ctx.fillText("b", 75, -10)
    
    // Draw arc1
    ctx.strokeStyle ="orange",
    ctx.beginPath();
    ctx.arc(0, 0, 70, (1+(p.arcAngle/180))*Math.PI, 2*Math.PI);
    ctx.stroke();

    ctx.rotate(arcAngleRad)
    ctx.beginPath();
    ctx.strokeStyle ="black",
    ctx.lineWidth = 3;
    ctx.moveTo(0, 0)
    ctx.lineTo(-100, 0)
    ctx.stroke();
    ctx.restore();

  }

  if ( level == 3.17 ){
    ctx.font = '1em serif'
    ctx.save()

    if (p.parallelorPerpendicular == "parallel"){
      if ( p.roll == 1){
        ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`, 0, 15)
      } else {
        ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`, 0, 15)
      }
    } else {
      if ( p.roll == 1){
        ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`, 0, 15)
      } else {
      ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`, 0, 15)
      }
    }

    ctx.translate(200, 137.5);
    ctx.font = '20px serif'
      // First Line
    ctx.translate(p.translateX, p.translateY);
    ctx.rotate(p.rotation1 * Math.PI / 180)
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, p.pointY1);
    ctx.stroke();
    ctx.fillText(p.labelABC, -5, 0);
    ctx.fillText(p.labelDEF, -5, p.pointY1+10);

    ctx.save()
      // Second Line (parallel line)
      console.log(p.translateX2, p.translateY2)
      if (p.translateX2 < 10 && p.translateX2 > -10){
        p.translateX2 = ["-","+"][genNumbers(2)]+20
      }
      if (p.translateY2 < 10 && p.translateY2 > -10){
        p.translateY2 = ["-","+"][genNumbers(2)]+20
      }
      console.log(p.translateX2, p.translateY2)

    ctx.translate(p.translateX2, p.translateY2);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, p.pointY2);
    ctx.stroke();

    ctx.fillStyle = "red"
    ctx.fillText(p.labelGHI, -5, -5);
    ctx.fillText(p.labelJKL, -5, p.pointY2+20);

    ctx.restore();
      // Third Line (perpendicular)
    ctx.translate(p.translateX3, p.translateY3);
    ctx.rotate(p.rotation2 * Math.PI / 180);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, p.pointY3);
    ctx.stroke();

    ctx.fillStyle = "red"
    ctx.fillText(p.labelMNO, -5, -5);
    ctx.fillText(p.labelPQR, -5, p.pointY3+20);

    ctx.restore()
  }

  if ( level == 3.18) {
    ctx.font = "1em serif"
    ctx.save()
    ctx.fillText(`Find the ${p.areaOrPerimeter} of the ${p.shapeChoice}.`, 20, 40)   
    ctx.translate(200, 137.5);
    ctx.fillStyle = "orange"
    ctx.strokeStyle = "grey"
    ctx.lineWidth = 5;

    if (p.shapeChoice == "square"){
      ctx.beginPath();
      ctx.rect(-p.squareCoord,-p.squareCoord,p.squareCoord*2,p.squareCoord*2);
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = "black"
      ctx.fillText(`${p.squareSide} ${p.unitMeasurement}`, -15, -p.squareCoord-10)
    }

    if (p.shapeChoice == "rectangle"){
      p.rectLength = p.rectLengthCoord/10
      p.rectBreadth = p.rectBreadthCoord/10
      ctx.beginPath();
      ctx.rect(-p.rectLengthCoord,-p.rectBreadthCoord,p.rectLengthCoord*2,p.rectBreadthCoord*2);
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = "black"
      ctx.fillText(`${p.rectBreadth} ${p.unitMeasurement}`, p.rectLengthCoord+5, 0+2)
      ctx.fillText(`${p.rectLength} ${p.unitMeasurement}`, -15, -p.rectBreadthCoord-10)
    }

    ctx.restore();

  }

  if ( level == 4.0) {
    while (p.numOne == 17 || p.numOne == 19 || p.numOne == 23 || p.numOne == 29 || p.numOne == 31 || p.numOne == 37 || p.numOne == 41 || p.numOne == 43 || p.numOne == 47 || p.numOne == 53 || p.numOne == 59){
      console.log("while loop")
      p.numOne = genNumbers(60)+1
    }

    displayProblem.innerHTML = 
    `List the factors of</br> 
    ${p.numOne}
    `
  }

  if ( level == 4.01 ){
    if (p.value == "thousands" && p.numOne > 1000){
      p.numOne = p.numOne + 1000;
    }
    if (p.value == "ten thousands" && p.numOne > 10000){
      p.numOne = p.numOne + 10000;
    }
    displayProblem.innerHTML = `${p.numOne} ≈ `
    helpMe.textContent = `${p.placeValue}`
  }

  if (level == 4.02 ){
    for (let i = 0; i < 7; i++){
      const chosenNumber = arr[genNumbers(arr.length-1)]
      arr2.push(chosenNumber)
      const index = arr.indexOf(chosenNumber)
      arr.splice(index,1)
    }
    console.log(arr, arr2)
    if (arr2[arr2.length-1] == 0){
       [arr2[arr2.length-1], arr2[1]] = [arr2[1], arr2[arr2.length-1]]
     }

    let b = 0.001
    for ( let a = 0; a < arr2.length; a++){
      p.holdingNumber = arr2[a]*b
      b = b*10
      p.totalNumber += p.holdingNumber
    }

    displayProblem.innerHTML = 
    `
    Which digit is in the</br>
    <u>${p.placeValue}</u> place? <br>
    ${p.totalNumber.toLocaleString('en-US')}
    `
  }

  if ( level == 4.03){
    if (p.numOne%10 == 0){
      p.numOne += 1
    }
    if (p.placeValue == "Whole Number"){
      p.numTwo = [10,100,1000][genNumbers(3)];
    }
    if (p.placeValue == "1 decimal place"){
      p.numTwo = [100,1000][genNumbers(2)];
    }
    if (p.placeValue == "2 decimal places"){
      p.numTwo = 1000
    }
    p.numFinal = p.numOne/p.numTwo
    while (p.numFinal > 1000){
      p.numFinal -= 1000;
    }
    console.log(p.numOne,p.numTwo, p.numFinal)
    helpMe.textContent = `${p.placeValue}`
    displayProblem.textContent = `${p.numFinal} ≈ `
  }

  if ( level == 4.04 ){
    if (p.numOne%10 == 0){
      p.numOne += p.numOne + 1;
    }
    displayProblem.textContent = `${p.numOne/p.numTwo} =`
  }


  if (level == 4.05){
    if (p.numOne == 1000){
      p.numThree = 10
    }
    if (p.numOne/p.numTwo <= 10){
      p.numThree = 10
    }

    if (p.numTwo == 1 || (p.numOne/p.numTwo)%1 == 0){
      p.operator = "÷"
    }
    displayProblem.innerHTML = `${p.numOne/p.numTwo} ${p.operator} ${p.numThree}`;
  }

  if ( level == 4.06){
    if ((p.unitMeasurement == "m" || p.unitMeasurement == "$") && (p.option == "2")){
      p.numOne = p.numSix
    }
    if (p.unitMeasurement == "m"){
      p.secondUnitMeasurement = "cm";
      displayProblem.innerHTML = `${p.numOne+(p.numThree/100)} ${p.unitMeasurement}`
    }
    if (p.unitMeasurement == "$"){
      p.secondUnitMeasurement = "¢";
      if (p.numThree%10 == 0){
        displayProblem.innerHTML = ` ${p.unitMeasurement}${p.numOne+(p.numThree/100)}0`
      } else {
        displayProblem.innerHTML = ` ${p.unitMeasurement}${p.numOne+(p.numThree/100)}`
      }
    }


    if ((p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" || p.unitMeasurement == "kg") && (p.option == "2")){
      p.numTwo = p.numSix
    }
    if (p.unitMeasurement == "ℓ"){
      p.secondUnitMeasurement = "ml";
      displayProblem.innerHTML =  `${p.numOne+Math.floor((p.numTwo/1000)*1000)/1000} ${p.unitMeasurement}`
    }
    if (p.unitMeasurement == "km"){
      p.secondUnitMeasurement = "m";
      displayProblem.innerHTML =  `${p.numOne+Math.floor((p.numTwo/1000)*1000)/1000} ${p.unitMeasurement}`
    }
    if (p.unitMeasurement == "kg"){
      p.secondUnitMeasurement = "g";
      displayProblem.innerHTML =  `${p.numOne+Math.floor((p.numTwo/1000)*1000)/1000} ${p.unitMeasurement}`
    }
    secondUnitMeasurement.textContent = `${p.secondUnitMeasurement}`  
  }

  if ( level == 4.07){
    if ((p.unitMeasurement == "m" || p.unitMeasurement == "$") && (p.option == "2")){
      p.numOne = p.numFive
    }
    if ((p.unitMeasurement == "m" || p.unitMeasurement == "$") && (p.optionTwo == "2")){
      p.numThree = p.numFour
    }
    if (p.unitMeasurement == "m"){
      p.secondUnitMeasurement = "cm";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numThree} ${p.secondUnitMeasurement}`
    }
    if (p.unitMeasurement == "$"){
      p.secondUnitMeasurement = "¢";
      displayProblem.innerHTML = `${p.numOne*100+p.numThree}${p.secondUnitMeasurement}`
    }

    if ((p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" || p.unitMeasurement == "kg") && (p.option == "2")){
      p.numTwo = p.numSix
    }
    if ((p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" || p.unitMeasurement == "kg") && (p.optionTwo == "2")){
      p.numOne = p.numFive
    }
    if (p.unitMeasurement == "ℓ"){
      p.secondUnitMeasurement = "ml";
      displayProblem.innerHTML =  `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`
    }
    if (p.unitMeasurement == "km"){
      p.secondUnitMeasurement = "m";
      displayProblem.innerHTML =  `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`
    }
    if (p.unitMeasurement == "kg"){
      p.secondUnitMeasurement = "g";
      displayProblem.innerHTML =  `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`
    }
    secondUnitMeasurement.textContent = `${p.unitMeasurement}`  
  }

  if ( level == 4.08){
    // level 4.06
    if (p.optionFinal == "1"){
      if ((p.unitMeasurement == "m" || p.unitMeasurement == "$") && (p.option == "2")){
        p.numOne = p.numSix
      }
      if (p.unitMeasurement == "m"){
        p.secondUnitMeasurement = "cm";
        displayProblem.innerHTML = `${p.numOne+(p.numThree/100)} ${p.unitMeasurement}`
      }
      if (p.unitMeasurement == "$"){
        p.secondUnitMeasurement = "¢";
        if (p.numThree%10 == 0){
          displayProblem.innerHTML = ` ${p.unitMeasurement}${p.numOne+(p.numThree/100)}0`
        } else {
          displayProblem.innerHTML = ` ${p.unitMeasurement}${p.numOne+(p.numThree/100)}`
        }
      }
  
  
      if ((p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" || p.unitMeasurement == "kg") && (p.option == "2")){
        p.numTwo = p.numSix
      }
      if (p.unitMeasurement == "ℓ"){
        p.secondUnitMeasurement = "ml";
        displayProblem.innerHTML =  `${p.numOne+Math.floor((p.numTwo/1000)*1000)/1000} ${p.unitMeasurement}`
      }
      if (p.unitMeasurement == "km"){
        p.secondUnitMeasurement = "m";
        displayProblem.innerHTML =  `${p.numOne+Math.floor((p.numTwo/1000)*1000)/1000} ${p.unitMeasurement}`
      }
      if (p.unitMeasurement == "kg"){
        p.secondUnitMeasurement = "g";
        displayProblem.innerHTML =  `${p.numOne+Math.floor((p.numTwo/1000)*1000)/1000} ${p.unitMeasurement}`
      }
      secondUnitMeasurement.textContent = `${p.secondUnitMeasurement}`  
    }
    // level 4.07
    if (p.optionFinal == "2"){
      if ((p.unitMeasurement == "m" || p.unitMeasurement == "$") && (p.option == "2")){
        p.numOne = p.numFive
      }
      if ((p.unitMeasurement == "m" || p.unitMeasurement == "$") && (p.optionTwo == "2")){
        p.numThree = p.numFour
      }
      if (p.unitMeasurement == "m"){
        p.secondUnitMeasurement = "cm";
        displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numThree} ${p.secondUnitMeasurement}`
      }
      if (p.unitMeasurement == "$"){
        p.secondUnitMeasurement = "¢";
        displayProblem.innerHTML = `${p.numOne*100+p.numThree}${p.secondUnitMeasurement}`
      }
  
      if ((p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" || p.unitMeasurement == "kg") && (p.option == "2")){
        p.numTwo = p.numSix
      }
      if ((p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" || p.unitMeasurement == "kg") && (p.optionTwo == "2")){
        p.numOne = p.numFive
      }
      if (p.unitMeasurement == "ℓ"){
        p.secondUnitMeasurement = "ml";
        displayProblem.innerHTML =  `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`
      }
      if (p.unitMeasurement == "km"){
        p.secondUnitMeasurement = "m";
        displayProblem.innerHTML =  `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`
      }
      if (p.unitMeasurement == "kg"){
        p.secondUnitMeasurement = "g";
        displayProblem.innerHTML =  `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`
      }
      secondUnitMeasurement.textContent = `${p.unitMeasurement}`  
    }
  }


  if (level == 4.09) {
    threeWholeNumber.textContent = ""
    threeNumerator.textContent = "?"
    threeDenominator.textContent = "?"
    if (p.numTwo >= p.numThree){
      p.numTwo = p.numTwo - 1 - (p.numTwo-p.numThree);
    }
    twoWholeNumber.textContent = p.numOne
    twoNumerator.textContent = p.numTwo
    twoDenominator.textContent = p.numThree
  }

  if ( level == 4.10){
    threeWholeNumber.textContent = "?"
    threeNumerator.textContent = "?"
    threeDenominator.textContent = "?"
    if (p.numTwo >= p.numThree){
      p.numTwo = p.numTwo - 1 - (p.numTwo-p.numThree);
    }
    twoWholeNumber.textContent = "";
    p.numTwo = p.numOne*p.numThree+p.numTwo;
    twoNumerator.textContent = p.numTwo;
    twoDenominator.textContent = p.numThree
  }

  if ( level == 4.11 ){
    // level 4.09
    if (p.optionFinal == "1"){
      threeWholeNumber.textContent = ""
      threeNumerator.textContent = "?"
      threeDenominator.textContent = "?"
      if (p.numTwo >= p.numThree){
        p.numTwo = p.numTwo - 1 - (p.numTwo-p.numThree);
      }
      twoWholeNumber.textContent = p.numOne
      twoNumerator.textContent = p.numTwo
      twoDenominator.textContent = p.numThree
    }
    // level 4.11
    if (p.optionFinal == "2"){
      threeWholeNumber.textContent = "?"
      threeNumerator.textContent = "?"
      threeDenominator.textContent = "?"
      if (p.numTwo >= p.numThree){
        p.numTwo = p.numTwo - 1 - (p.numTwo-p.numThree);
      }
      twoWholeNumber.textContent = "";
      p.numTwo = p.numOne*p.numThree+p.numTwo;
      twoNumerator.textContent = p.numTwo;
      twoDenominator.textContent = p.numThree
    }
  }

  if ( level == 4.12){
    if (p.numOne == p.numTwo){
      p.numOne += 1;
    }
    if (p.numOne > p.numTwo) {
      [p.numOne, p.numTwo] = [p.numTwo, p.numOne]
    }
    for (let i = p.numTwo; i > 1; i--){
      if (p.numOne%i == 0 && p.numTwo%i == 0){
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    displayProblem.innerHTML = `${p.numOne}/${p.numTwo} of a number is ${p.numOne*p.numMulti}.<br>
    What is the number?`
  }

  if ( level == 4.13 ){
    if (p.numOne == p.numTwo){
      p.numOne += 1
    }
    if (p.numOne > p.numTwo){
      [p.numOne , p.numTwo] = [p.numTwo, p.numOne]
    }
    for (let i = p.numTwo; i > 1; i--){
      if (p.numOne%i == 0 && p.numTwo%i == 0){
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    displayProblem.innerHTML = 
    `
    A has ${p.numTwo*p.numMulti} of something.</br>
    A used ${p.numOne}/${p.numTwo} of it.</br>
    How much did A ${p.options}?
    `
  }
  if ( level == 4.14){
    if (p.numTwo == p.numThree){
      p.numTwo += 1
    }
    if (p.numTwo > p.numThree){
      [p.numThree , p.numTwo] = [p.numTwo, p.numThree]
    }
    for (let i = p.numThree; i > 1; i--){
      if (p.numTwo%i == 0 && p.numThree%i == 0){
        p.numThree /= i;
        p.numTwo /= i;
      }
    }

    if (p.option == "v"){
      console.log(p.option)
      if (p.optionTwo == 1){
        equalSymbol.innerHTML = ""
      }
      if (p.optionTwo == 2){
        equalSymbol.innerHTML = p.unitMeasurement
      }
      twoNumerator.classList.remove("line");
      twoWholeNumber.textContent = p.numFour
      twoNumerator.textContent = ""
      twoDenominator.textContent = ""
      fractionsContainerTwo.style.margin = "50px"
    }

    if (p.option == "r"){
      fractionsContainerTwo.style.margin = "0 25px 15px"
      twoNumerator.classList.add("line");
      if (p.numOne == 0){
        twoWholeNumber.textContent = ""
      } else {
        twoWholeNumber.textContent = p.numOne
      }
      twoNumerator.textContent = p.numTwo
      twoDenominator.textContent = p.numThree
      equalSymbol.innerHTML = ""
    }
    if (p.option == "f"){
      fractionsContainerTwo.style.margin = "0 25px 15px"
      twoNumerator.classList.add("line");
      if (p.numOne == 0){
        twoWholeNumber.textContent = ""
      } else {
        twoWholeNumber.textContent = p.numOne
      }
      twoNumerator.textContent = p.numTwo
      twoDenominator.textContent = p.numThree
      equalSymbol.innerHTML = p.unitMeasurement
    }
  }

  if ( level == 4.15){
    // fake - fake
    if (p.numOne == p.numTwo){
      p.numTwo += 1
    }
    if (p.numOne > p.numTwo ){
      [p.numOne, p.numTwo] = [p.numTwo, p.numOne]
    }
    if (p.numThree == p.numFour){
      p.numThree += 1
    }
    if (p.numThree > p.numFour ){
      [p.numThree, p.numFour] = [p.numFour, p.numThree]
    }
    for (let i = p.numTwo; i > 1; i--){
      if (p.numOne%i == 0 && p.numTwo%i == 0){
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    for (let i = p.numFour; i > 1; i--){
      if (p.numThree%i == 0 && p.numFour%i == 0){
        p.numThree /= i;
        p.numFour /= i;
      }
    }
    if (p.option == "1"){
      displayProblem.innerHTML = 
      `B bought ${p.numOne}/${p.numTwo} ${p.unitMeasurement} of something.</br>
      B used ${p.numThree}/${p.numFour} ${p.unitMeasurement} of it.</br>
      How many ${p.unitMeasurement} of it does B have left?`
    }
    // real - real
    if (p.option == "2"){
      displayProblem.innerHTML = 
      `B ate ${p.numOne}/${p.numTwo} of something.</br>
      B ate another ${p.numThree}/${p.numFour} of it.</br>
      How much did B eat?`
    }
      // V x Real
    if (p.option == "3"){
      displayProblem.innerHTML = 
      `B bought ${p.numFive} of something.</br>
      B used ${p.numThree}/${p.numFour} of it.</br>
      How many of it does B have left?`  
    }
    // fake x real
    if (p.option == "4"){
      displayProblem.innerHTML = 
      `B bought ${p.numOne}/${p.numTwo} ${p.unitMeasurement} of something.</br>
      B used ${p.numThree}/${p.numFour} of it.</br>
      How many ${p.unitMeasurement} of it does B have left?`
    }
    // fake x V
    if (p.option == "5"){
      if (p.unitMeasurement == "km"){
        p.unitMeasurement = "kg"
      }
      displayProblem.innerHTML = 
      `B bought ${p.numOne}/${p.numTwo} ${p.unitMeasurement} of something.</br>
      B bought ${p.numSix} more of it.</br>
      How many ${p.unitMeasurement} of it does B have?`
    }
  }

  if ( level == 4.16 ){
    if (p.placeValue == "tens" && p.numOne < 100){
       while (p.numOne > 100){
         p.numOne += 10;
       }
    }
    if (p.placeValue == "hundreds" && p.numOne < 1000){
      while (p.numOne > 1000){
        p.numOne += 100;
      }
   }
   if (p.placeValue == "thousands" && p.numOne < 10000){
    while (p.numOne > 10000){
      p.numOne += 1000;
    }
   }  

    if (p.placeValue == "tens"){
      p.numOne = Math.round(p.numOne/10)*10
    }
    if (p.placeValue == "hundreds"){
      p.numOne = Math.round(p.numOne/100)*100
    }
    if (p.placeValue == "thousands"){
      p.numOne = Math.round(p.numOne/1000)*1000
    }
 
    displayProblem.innerHTML = `
    <u>${p.choice}</u> value before rounding off to the</br> 
    <u>${p.placeValue}</u> place?</br>
    <br>
    _______ ≈ ${p.numOne}`

    if (p.choice == "Smallest"){
      if (p.placeValue == "tens"){
        p.numOne = p.numOne-10+5
      }
      if (p.placeValue == "hundreds"){
        p.numOne = p.numOne-100+50
      }
      if (p.placeValue == "thousands"){
        p.numOne = p.numOne-1000+500
      }
    }
    if (p.choice == "Largest"){
      if (p.placeValue == "tens"){
        p.numOne = p.numOne+4
      }
      if (p.placeValue == "hundreds"){
        p.numOne = p.numOne+49
      }
      if (p.placeValue == "thousands"){
        p.numOne = p.numOne+499
      }
    }
  }

  if ( level == 4.17) {
    const gridX = 380;
    const gridY = 210;
    ctx.save()
    // vertical grid
    for (let i = 0; i < gridX; i+=30){
      ctx.setLineDash([1,1]);
      ctx.beginPath();
      ctx.moveTo(20+i, 30)
      ctx.lineTo(20+i, gridY)
      ctx.stroke();
    }
  // horizontal grid
    for (let i = 0; i < gridY; i+=30){
      ctx.setLineDash([1,1]);
      ctx.beginPath();  
      ctx.moveTo(20, 30+i)
      ctx.lineTo(gridX, 30+i)
      ctx.stroke();
    }
   
    while (arr.length > 0){
      const chosenAlp = arr[genNumbers(arr.length-1)]
      const index = arr.indexOf(chosenAlp)
      arr2.push(chosenAlp)
      arr.splice(index, 1)
      console.log(arr, arr2)
    }

    ctx.font = "1em serif"

    arr3.push(arr2[1])
    arr3.push(arr2[2])
    arr3.push(arr2[5])
    arr3.push(arr2[8])
    arr3.push(arr2[7])
    arr3.push(arr2[6])
    arr3.push(arr2[3])
    arr3.push(arr2[0])
    console.log(arr3);

    if ( p.roll == 1){
      ctx.fillText(`_____ is ${p.compass} of ${arr2[4]}` ,20, 20)
    } else {
      let a = 0;
      for (let i = 0; i < arr3.length; i++){
        if (p.compass == compassArr[a]){
          p.choice = arr3[a]
        }
        a++
      }
      ctx.fillText(`${p.choice} is ${p.compass} of _____`, 20, 20)
    }
    
    ctx.save()

    ctx.translate(200, 137.5)
    // fill in text
    ctx.font = "1.5em serif"
    let a = 0;
    ctx.fillStyle = "red"
    const alignmentX = -7
    const alignmentY = -11
    for (let i = -60 ; i <= 60; i += 60 ) {
      ctx.fillText(`${arr2[a]}`, i+alignmentX, -60+alignmentY)
      ctx.fillText(`${arr2[3+a]}`, i+alignmentX, 0+alignmentY)
      ctx.fillText(`${arr2[6+a]}`, i+alignmentX, 60+alignmentY)
      a++
    }

    ctx.restore();

    ctx.restore();
  }

  if ( level == 4.18 ){

    const gridX = 380;
    const gridY = 210;
    ctx.font = "1em serif"
    if (p.roll == 1){
      if (p.angleTurn == 180 || p.angleTurn == 360){
        ctx.fillText(`From point O facing ${p.choice}, turn ${p.angleTurn}°.`, 20, 20)
      } else {
      ctx.fillText(`From point O facing ${p.choice}, turn ${p.angleTurn}° ${p.direction}.`, 20, 20)
       }
      ctx.fillText(`Now facing ___?`, 20, 40)
    } else {
      if (p.angleTurn == 180 || p.angleTurn == 360){
        ctx.fillText(`After turning ${p.angleTurn}°, point O is facing ${p.choice}`, 20 ,20)
      } else {
        ctx.fillText(`After turning ${p.angleTurn}° ${p.direction}, point O is facing ${p.choice}`, 20 ,20)
      }
      ctx.fillText(`Facing Point ___ at first?`, 20, 40)
    }

    ctx.save()
      ctx.translate(200, 137.5)

        ctx.save()
          // horizontal
          ctx.setLineDash([1,1]);
          ctx.beginPath();
          ctx.moveTo(-60, 0)
          ctx.lineTo(60, 0)
          ctx.stroke();

          // vertical
          ctx.setLineDash([1,1]);
          ctx.beginPath();  
          ctx.moveTo(0, -60)
          ctx.lineTo(0, 60)
          ctx.stroke();

          // diagonal from left
          ctx.setLineDash([1,1]);
          ctx.beginPath();  
          ctx.moveTo(-60, -60)
          ctx.lineTo(60, 60)
          ctx.stroke();

          // diagonal from right
          ctx.setLineDash([1,1]);
          ctx.beginPath();  
          ctx.moveTo(60, -60)
          ctx.lineTo(-60, 60)
          ctx.stroke();

        ctx.restore();
    
      ctx.save()
      
        // fill in text
        ctx.font = "1.5em serif"
        let a = 0;
        ctx.fillStyle = "red"
        const alignmentX = -8
        const alignmentY = 7
        for (let i = -60 ; i <= 60; i += 60 ) {
          ctx.fillText(`${arr[a]}`, i+alignmentX, -60+alignmentY)
          ctx.fillText(`${arr[3+a]}`, i+alignmentX, 0+alignmentY)
          ctx.fillText(`${arr[6+a]}`, i+alignmentX, 60+alignmentY)
          a++
        }

      ctx.restore();

    ctx.restore()
  }

  if ( level == 4.19 ){
    ctx.font = "1em serif"
    ctx.save()
      // square
    if (p.shapeRoll == "Square"){

      if (p.squareRoll == 1 || p.squareRoll == 2){
        ctx.fillText(`What is ∠a.`, 20, 20)
      } else {
        ctx.fillText(`What is the total angle of the Square?`, 20, 20)
      }
        ctx.translate(200, 137.5)
        const squareCoord2 = p.coordSquare/2
        ctx.beginPath()
        ctx.rect(-squareCoord2, -squareCoord2,squareCoord2*2, squareCoord2*2)
        ctx.stroke();
        
      if (p.squareRoll == 1){
        ctx.beginPath()
        ctx.moveTo(-squareCoord2, squareCoord2)
        ctx.lineTo(squareCoord2, -squareCoord2)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(-squareCoord2, squareCoord2, 20, 315*Math.PI/180, 2*Math.PI)
        ctx.stroke();

        ctx.font = "1em serif"
        ctx.fillText(`a`,-squareCoord2+20, squareCoord2-5)
      }

      if (p.squareRoll == 2){
        ctx.beginPath()
        ctx.rect(-squareCoord2, squareCoord2-10, 10, 10)
        ctx.stroke()
        ctx.font = "1em serif"
        ctx.fillText(`a`,-squareCoord2+15, squareCoord2-5)
      }
    }
      
    if (p.shapeRoll == "Rectangle"){
        
      if (p.rectRoll == 1){
        ctx.fillText(`What is ∠b.`, 20, 20)
      }
      if (p.rectRoll == 2){
        ctx.fillText(`Find ∠b.`, 20, 20)
      }
      if (p.rectRoll == 3){
        ctx.fillText(`What is the total angle of the Rectangle?`, 20, 20)
      }
        
        let rectLength = genNumbers(50)+50
        let rectBreadth = rectLength*(((genNumbers(15)+7)*10)/100)
        let rectHypo = Math.sqrt(rectLength*rectLength+rectBreadth*rectBreadth)
        p.angle = Math.asin(rectBreadth/rectHypo)
        p.angleDegrees = Math.round(p.angle*180/Math.PI)
      
        console.log(rectLength, rectBreadth, rectHypo, p.angle, p.angleDegrees)
        ctx.translate(200, 137.5)
        ctx.beginPath()
        ctx.rect(-p.coordRect1/2, p.coordRect2/2, rectLength, -rectBreadth)
        ctx.stroke();

        if (p.rectRoll == 1){
          ctx.beginPath()
          ctx.rect(-p.coordRect1/2, p.coordRect2/2, 10, -10)
          ctx.stroke();

          ctx.fillText(`b`,(-p.coordRect1/2)+15, p.coordRect2/2-5)
        }

        if (p.rectRoll == 2){
          ctx.beginPath()
          ctx.moveTo(-p.coordRect1/2, p.coordRect2/2)
          ctx.lineTo(-p.coordRect1/2+rectLength, p.coordRect2/2-rectBreadth)
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(-p.coordRect1/2, p.coordRect2/2, 10, (360-p.angleDegrees)*Math.PI/180, 2*Math.PI)
          ctx.stroke()

          ctx.font = "1em serif"
          ctx.fillText(`${p.angleDegrees}°`, -p.coordRect1/2+15, p.coordRect2/2-5)

          ctx.save()
            ctx.fillStyle = "red"
            ctx.beginPath()
            ctx.arc(-p.coordRect1/2, p.coordRect2/2, 8, 1.5*Math.PI, (360-p.angleDegrees)*Math.PI/180)
            ctx.fill()
          ctx.restore()

          ctx.fillText(`b`, -p.coordRect1/2, p.coordRect2/2-15)
        }  
    }
    if (p.shapeRoll == "straight"){
      ctx.save()
        ctx.translate(200, 137.5)
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
      ctx.restore();
      if (p.straightRoll == 1){
        ctx.fillText(`What is the angle on a straight line?`, 20, 20)
      }
      if (p.straightRoll == 2){
        ctx.fillText(`Find ∠c`, 20, 20)
      }

      ctx.translate(200, 137.5)

      ctx.beginPath()
      ctx.moveTo(-150, 0)
      ctx.lineTo(150, 0)
      ctx.stroke();

      if (p.straightRoll == 2){
        ctx.save()
          ctx.rotate(-p.angleStraight*Math.PI/180);
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(100, 0)
          ctx.stroke()
        ctx.restore()

        ctx.arc(0, 0, 10, (360-p.angleStraight)*Math.PI/180, 2*Math.PI)
        ctx.stroke()
        if (p.angleStraight < 20 ){
          ctx.fillText(`${p.angleStraight}`, 90, -1)
        } else {
        ctx.fillText(`${p.angleStraight}`, 10, -5)
        }

        ctx.arc(0, 0, 15, 1*Math.PI, (360-p.angleStraight)*Math.PI/180)
        ctx.stroke()
        ctx.fillText(`c`, -30, -1)
      }
    }

    if (p.shapeRoll == "circle"){
      ctx.save()
        ctx.translate(200, 137.5)
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
      ctx.restore();
      if (p.circleRoll == 1){
        ctx.fillText(`What is the angle of a full circle?`, 20, 20)
      }
      if (p.circleRoll == 2){
        ctx.fillText(`Find ∠d`, 20, 20)
      }

      ctx.save()
      ctx.translate(200,137.5)
      if (p.circleRoll == "1"){
        ctx.beginPath()
        ctx.arc(0, 0, 110, 0, 2*Math.PI)
        ctx.stroke()
      }
      if (p.circleRoll == "2"){
        ctx.beginPath()
        ctx.arc(0, 0, 20, p.angleCircle*Math.PI/180, 2*Math.PI)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(120, 0)
        ctx.stroke()

        ctx.save()
          ctx.rotate(p.angleCircle*Math.PI/180)
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(120, 0)
          ctx.stroke()
        ctx.restore()

        ctx.beginPath()
        ctx.arc(0, 0, 15, 0, p.angleCircle*Math.PI/180)
        ctx.stroke()

        ctx.fillText(`${p.angleCircle}`, 25, 12)
        if (p.angleCircle > 340){
          ctx.fillText(`d`, 100, -1)
        } else {
          ctx.fillText(`d`, 25, -3)
        }
      }
      ctx.restore()
    }
    ctx.restore()
  }

  if ( level == 5.0 ){
    
    let alignXText = 15;
    ctx.font = '1em serif'
    ctx.save()

    if ( p.sidesBH == "base"){
      ctx.fillText(`The ${p.sidesBH} = ${p.labelABC}${p.labelDEF}, find the height.`, alignXText, 20)
     } else if (p.sidesBH == "height") {
      ctx.fillText(`The ${p.sidesBH} = ${p.labelABC}${p.labelGHI}, find the base.`, alignXText, 20)
     } else if (p.sidesBH == "base2") {
      ctx.fillText(`The base = ${p.labelDEF}${p.labelGHI}, find the height.`, alignXText, 20)
     } else {
      ctx.fillText(`The height = ${p.labelABC}${p.labelJKL}, find the base.`, alignXText, 20)
     }
     ctx.fillText(`${p.labelABC}${p.labelDEF}, ${p.labelABC}${p.labelGHI}, ${p.labelABC}${p.labelJKL} or ${p.labelDEF}${p.labelGHI}`, alignXText, 40)

    ctx.translate(p.translateX, p.translateY);
    ctx.rotate(p.rotation * Math.PI / 180);
    // label
    ctx.fillStyle = "black";
    ctx.fillText(p.labelABC, -10, 0)
    ctx.fillText(p.labelDEF, -10, p.pointY1+10)
    ctx.fillText(p.labelGHI, p.pointX1, 0)
  
      // triangle
    ctx.fillStyle = 'orange';
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, p.pointY1);
    ctx.lineTo(p.pointX1, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save()
    ctx.translate(p.translateX, p.translateY);
    ctx.rotate(p.rotation * Math.PI / 180);
    let areaOfTriangle = p.pointX1*p.pointY1*1/2
    let hypotenuse = Math.sqrt(p.pointX1*p.pointX1+p.pointY1*p.pointY1)
    let otherHeight = areaOfTriangle*2/hypotenuse
    let otherAngle = Math.acos(p.pointY1/hypotenuse);

    ctx.rotate(otherAngle);
    console.log(areaOfTriangle, hypotenuse, otherHeight, otherAngle);
    ctx.strokeStyle = 'grey';
    ctx.setLineDash([1,1]);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(otherHeight, 0);
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.fillText(p.labelJKL, otherHeight+3, 3)

    ctx.restore()
  
  }

  if ( level == 5.01){
    for (let i = p.numTwo; i > 1; i--){
      if (p.numOne%i == 0 && p.numTwo%i == 0){
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    for (let i = p.numFour; i > 1; i--){
      if (p.numThree%i == 0 && p.numFour%i == 0){
        p.numThree /= i;
        p.numFour /= i;
      }
    }
    for (let i = p.numSix; i > 1; i--){
      if (p.numFive%i == 0 && p.numSix%i == 0){
        p.numFive /= i;
        p.numSix /= i;
      }
    }
    displayProblem.innerHTML = 
    `A is ${p.numOne}/${p.numTwo} of ${p.letterBTotal}.</br>
    ${p.numThree}/${p.numFour} of A was removed.</br>
    ${p.numFive}/${p.numSix} of B was removed.</br>
    What fraction of the total was ${p.letterAB} ${p.letterLeftRemoved}?`
  }

  if ( level == 5.02){
    if (p.numThree == p.numFour){
      p.numFour = p.numThree+[1, 2][genNumbers(2)]
      }
    if (p.numOne == p.numTwo){
    p.numTwo = p.numOne+[1, 2][genNumbers(2)]
    }
    if (p.numOne == p.numThree){
      p.numOne += 1;
    }
    if (p.numOne > p.numThree){
      [p.numOne , p.numThree] = [p.numThree, p.numOne];
    }

    arr.push(p.numOne, p.numThree);
    arr.sort(function(a, b){return b-a});
    let i = 1;
      while (arr[0]%arr[arr.length-1] != 0){
        console.log(arr, i)
        i++;
        arr.unshift(p.numThree*i)
      }
    displayProblem.innerHTML = 
    `
    ${p.numOne}/${p.numTwo} of A ${p.sentenceChoice} ${p.numThree}/${p.numFour} of B.
    `
  }

  if ( level == 5.03){
    if (p.letterChange == "of" && p.letterChangeTwo != "of"){
      displayProblem.innerHTML =
      `A is ${p.numOne}% of A and B.</br>
      ${p.numTwo}% of A was removed.</br>
      B ${p.letterChangeTwo} by ${p.numThree}%.</br>
      What percentage of the total is ${p.letterAB} in the end?`
    }
    else if (p.letterChange != "of" && p.letterChangeTwo == "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}% of A and B.</br>
      A ${p.letterChange} by ${p.numTwo}%.</br>
      ${p.numThree}% of B was removed.</br>
      What percentage of the total is ${p.letterAB} in the end?`
    } 
    else if (p.letterChange == "of" && p.letterChangeTwo == "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}% of A and B.</br>
      ${p.numTwo}% of A was removed.</br>
      ${p.numThree}% of B was removed.</br>
      What percentage of the total is ${p.letterAB} in the end?`
    } else {
      displayProblem.innerHTML = 
      `A is ${p.numOne}% of A and B.</br>
      A ${p.letterChange} by ${p.numTwo}%.</br>
      B ${p.letterChangeTwo} by ${p.numThree}%.</br>
      What percentage of the total is ${p.letterAB} in the end?`
      }
  }
  if ( level == 5.04){
    for (let i = p.numTwo; i > 1; i--){
      if(p.numOne%i == 0 && p.numTwo%i == 0){
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    if (p.letterChange == "of" && p.letterChangeTwo == "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}${p.option}${p.numTwo} of ${p.letterBTotal}.</br>
      ${p.numThree}% ${p.letterChange} A was removed.</br>
      ${p.numFour}% ${p.letterChangeTwo} B was removed.</br>
      What is ${p.letterAB} in the end?`
    }
    if (p.letterChange == "of" && p.letterChangeTwo != "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}${p.option}${p.numTwo} of ${p.letterBTotal}.</br>
      ${p.numThree}% ${p.letterChange} A was removed.</br>
      B ${p.letterChangeTwo} by ${p.numFour}%.</br>
      What is ${p.letterAB} in the end?`
    }
    if (p.letterChange != "of" && p.letterChangeTwo == "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}${p.option}${p.numTwo} of ${p.letterBTotal}.</br>
      A ${p.letterChange} by ${p.numThree}%.</br>
      ${p.numFour}% ${p.letterChangeTwo} B was removed.</br>
      What is ${p.letterAB} in the end?`
    }
    if (p.letterChange != "of" && p.letterChangeTwo != "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}${p.option}${p.numTwo} of ${p.letterBTotal}.</br>
      A ${p.letterChange} by ${p.numThree}%.</br>
      B ${p.letterChangeTwo} by ${p.numFour}%.</br>
      What is ${p.letterAB} in the end?`
    }
  }
  if ( level == 5.05 ){

    ctx.save()
    ctx.font = "1em serif"

    if (p.question == "base"){
      ctx.fillText(`The ${p.question} of the triangle is ${p.labelABC}${p.labelJKL}. What is its height?`, 20, 40)
    } else if (p.question == "height") {
      ctx.fillText(`The ${p.question} of the triangle is ${p.labelDEF}${p.labelGHI}. What is its base?`, 20, 40)
    } else if ( p.question == "base2") {
      ctx.fillText(`The base of the triangle is ${p.labelDEF}${p.labelGHI}. What is its height?`, 20, 40)
    } else if ( p.question == "height2") {
      ctx.fillText(`The height of the triangle is ${p.labelABC}${p.labelJKL}. What is its base?`, 20, 40)
    } else if ( p.question == "base3"){
      ctx.fillText(`The base of the triangle is ${p.labelGHI}${p.labelJKL}. What is its height?`, 20, 40)
    } else {
      ctx.fillText(`The height of the triangle is ${p.labelABC}${p.labelMNO}. What is its base?`, 20, 40)
    }

    ctx.fillText(`${p.labelABC}${p.labelDEF}, ${p.labelGHI}${p.labelJKL}, ${p.labelABC}${p.labelJKL}, ${p.labelDEF}${p.labelGHI}, ${p.labelABC}${p.labelGHI}, ${p.labelABC}${p.labelMNO}, ${p.labelGHI}${p.labelJKL}`, 20, 60)
    ctx.translate(200, 137.5)
    ctx.rotate(p.rotation*Math.PI/180)
    // triangle A
    p.triA2y = p.triA1y+genNumbers(20)+10
    p.triA3y = p.triA2y
    ctx.setLineDash([2, 2]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, p.triA1y)
    ctx.lineTo(0, p.triA2y)
    ctx.lineTo(p.triA3x, p.triA3y)
    ctx.closePath()
    ctx.stroke();
    
    const lengthHypo = Math.sqrt(p.triA2y*p.triA2y+p.triA3x*p.triA3x)
    const angleB = Math.acos(p.triA2y/lengthHypo)
    const otherLine = Math.sin(angleB)*p.triA1y
    const otherRotation = (90*Math.PI/180)-angleB+(180*Math.PI/180)
    console.log(otherLine);

    ctx.save()
    ctx.setLineDash([2, 2]);
    ctx.translate(0, p.triA1y);
    ctx.rotate(otherRotation);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, otherLine)
    ctx.stroke()
    ctx.fillStyle = "red"
    ctx.fillText(`${p.labelMNO}`, 0-5, otherLine+15)
    ctx.restore()

    // triangle B
    ctx.fillStyle = 'orange'
    ctx.setLineDash([]);
    p.triB2y = p.triA1y
    p.triB3x = p.triA3x
    p.triB3y = p.triA3y
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, p.triA1y)
    ctx.lineTo(p.triB3x, p.triB3y)
    ctx.closePath()
    // ctx.fill()
    ctx.stroke()

    ctx.fillStyle = "red"
    ctx.fillText(p.labelABC, 0-13, p.triA1y);
    ctx.fillText(p.labelDEF, 0-13, p.triA2y+10);
    ctx.fillText(p.labelGHI, p.triA3x+5, p.triA3y+10);
    ctx.fillText(p.labelJKL, 0-10, -3)

    ctx.restore()
  }

  if ( level == 5.06){
    ctx.save()
    ctx.font = "1em serif"
    if (p.roll == 1){
                            // right angle triangle
        if (-p.rightAngleTriX1 == p.rightAngleTriX2) {
          p.rightAngleTriX1 -= 10
        ctx.fillText(`Below is a Right-Angled Triangle`, 20, 20)
        ctx.fillText(`Find ∠a`, 40, 20)
        }
        ctx.translate(200, 137.5)
        ctx.beginPath()
        ctx.moveTo(p.rightAngleTriX1, 0)
        ctx.lineTo(p.rightAngleTriX2, 0)
        let base = p.rightAngleTriX2-p.rightAngleTriX1
        let height = -p.rightAngleTriY;
        let hypo = Math.sqrt(height*height+base*base)
        let angle = Math.atan(height/base)
        p.angleLabel = Math.round(angle*180/Math.PI)

        // right angle on the left
        if (p.rightAngleRoll == 1){
          ctx.lineTo(p.rightAngleTriX1, p.rightAngleTriY)
          ctx.closePath()
          ctx.stroke()

          ctx.beginPath()
          ctx.rect(p.rightAngleTriX1, 0, 7, -7)
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(p.rightAngleTriX2, 0, 15, 1*Math.PI, angle+1*Math.PI)
          ctx.stroke()
          ctx.fillText(`${p.angleLabel}°`, p.rightAngleTriX2-35, -1)

          ctx.beginPath()
          ctx.arc(p.rightAngleTriX1, p.rightAngleTriY, 10, angle, 0.5*Math.PI)
          ctx.stroke()
          ctx.fillText("a", p.rightAngleTriX1+3, p.rightAngleTriY+20)
        }
        // right angle on the right
        if (p.rightAngleRoll == 2){
          ctx.lineTo(p.rightAngleTriX2, p.rightAngleTriY)
          ctx.closePath()
          ctx.stroke()

          ctx.beginPath()
          ctx.rect(p.rightAngleTriX2, 0, -7, -7)
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(p.rightAngleTriX1, 0, 15, 0, (2-angle/Math.PI)*Math.PI, true)
          ctx.stroke()
          ctx.fillText(`${p.angleLabel}°`, p.rightAngleTriX1+15, -1)

          ctx.beginPath()
          ctx.arc(p.rightAngleTriX2, p.rightAngleTriY, 10, 0.5*Math.PI, 1*Math.PI-angle)
          ctx.stroke()
          ctx.fillText("a", p.rightAngleTriX2-10, p.rightAngleTriY+20)
        }   
    }
    if (p.roll == 2){
      ctx.fillText("Below is a Equilateral Triangle.", 20, 20)
      ctx.fillText("What is ∠e?",20, 40)

      ctx.translate(200,137.5)
      ctx.translate(0, 20)
      ctx.beginPath()
      ctx.moveTo(-p.equiAngleTriX, 0)
      ctx.lineTo(p.equiAngleTriX, 0)
      let equiMid = p.equiAngleTriX
      let equiAngle = 60*Math.PI/180
      let equiHeight = Math.tan(equiAngle)*equiMid
      console.log(equiMid, equiAngle, equiHeight)
      ctx.lineTo(0, -equiHeight)
      ctx.closePath()
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(-p.equiAngleTriX, 0, 15, 2*Math.PI-equiAngle, 2*Math.PI)
      ctx.stroke()

      ctx.save()
        ctx.rotate(90*Math.PI/180)
        ctx.beginPath()
        ctx.moveTo(-5, 0)
        ctx.lineTo (5, 0)
        ctx.stroke()
      ctx.restore()

      ctx.save()
        ctx.translate(-p.equiAngleTriX/2, -equiHeight/2)
        ctx.rotate(30*Math.PI/180)
        ctx.beginPath()
        ctx.moveTo(-5,0)
        ctx.lineTo (5,0)
        ctx.stroke()
      ctx.restore()

      ctx.save()
        ctx.translate(p.equiAngleTriX/2, -equiHeight/2)
        ctx.rotate(330*Math.PI/180)
        ctx.beginPath()
        ctx.moveTo(-5,0)
        ctx.lineTo (5,0)
        ctx.stroke()
      ctx.restore()
    }

    if (p.roll == 3){
      ctx.fillText("Below is a Isosceles Triangle.", 20, 20)
      ctx.fillText("What is ∠i?",20, 40)

      ctx.translate(200,137.5)
      ctx.translate(0, 40)
      ctx.beginPath()
      ctx.moveTo(-p.isosTriX, 0)
      ctx.lineTo(p.isosTriX, 0)
      if (p.isosAngle == 45){
        p.isosAngle += 5
      }
      let isosMid = p.isosTriX
      // convert to rad
      let isosAngle = p.isosAngle*Math.PI/180
      let isosHeight = Math.tan(isosAngle)*isosMid
      console.log(isosMid, isosAngle, isosHeight, isosAngle*Math.PI/180)
      ctx.lineTo(0, -isosHeight)
      ctx.closePath()
      ctx.stroke()

      let isosAngle2R = (0.5*Math.PI-isosAngle)*2
      let isosAngle2D = isosAngle2R*180/Math.PI
      p.isosAngle2Label = Math.floor(isosAngle2D);

      ctx.save()
        ctx.translate(-p.isosTriX/2, -isosHeight/2)
        ctx.rotate(0.5*Math.PI-isosAngle)
        ctx.beginPath()
        ctx.moveTo(-5, 0)
        ctx.lineTo (5, 0)
        ctx.stroke()
      ctx.restore()

      ctx.save()
        ctx.translate(p.isosTriX/2, -isosHeight/2)
        ctx.rotate(-(0.5*Math.PI-isosAngle))
        ctx.beginPath()
        ctx.moveTo(-5, 0)
        ctx.lineTo (5, 0)
        ctx.stroke()
      ctx.restore()

      if (p.isosRoll == 1){
        // angle at top find bottom left
        console.log("choice 1")
        ctx.beginPath()
        ctx.arc(-p.isosTriX, 0, 15, 2*Math.PI-isosAngle, 2*Math.PI)
        ctx.stroke()
        ctx.fillText("i", -1, -isosHeight+30)

        ctx.beginPath()
        ctx.arc(0, -isosHeight, 15, isosAngle, 1*Math.PI-isosAngle*2+isosAngle)
        ctx.stroke()
        ctx.fillText(`${p.isosAngle}°`, -p.isosTriX+20, -2)
      }

      if (p.isosRoll == 2){
         // angle at bottom find top
        console.log("choice 2")
        ctx.beginPath()
        ctx.arc(0, -isosHeight, 15, isosAngle, (1*Math.PI-isosAngle*2)+isosAngle)
        ctx.stroke()
        ctx.fillText("i", -p.isosTriX+20, 0-2)

        ctx.beginPath()
        ctx.arc(-p.isosTriX, 0, 15, 2*Math.PI-isosAngle, 2*Math.PI)
        ctx.stroke()
        ctx.fillText(`${p.isosAngle2Label}°`, -5, -isosHeight+30)

      }
    }
    if (p.roll == 4){
      ctx.fillText(`Find ∠b`, 20, 20)
      ctx.translate(200, 137.5)
      ctx.translate(0, 40)
      let triHeight = p.triCy

        // right angled triangle
      if (p.triRoll == 1){
        ctx.beginPath()
        ctx.moveTo(-p.triAx, 0)
        ctx.lineTo(p.triBx, 0)
        p.triCx = genNumbers(p.triAx+p.triAx)-p.triAx
        ctx.lineTo(p.triCx, -p.triCy)
        ctx.closePath()
        ctx.stroke()

        let triLeftAdj = undefined
        if (p.triCx < 0){
           triLeftAdj = p.triAx-(-p.triCx)
        } else {
          triLeftAdj = p.triAx+p.triCx
        }
        let triLeftAngleR = Math.atan(triHeight/triLeftAdj)
        p.triLeftAngleD = Math.floor(triLeftAngleR*180/Math.PI)
        console.log(p.triCx, triHeight, triLeftAngleR, p.triLeftAngleD)

        // left arc
        ctx.beginPath()
        ctx.arc(-p.triAx, 0, 15, (2*Math.PI)-triLeftAngleR , 2*Math.PI)
        ctx.stroke()
        ctx.fillText(`${p.triLeftAngleD}°`, -p.triAx+20, 0-3)

        // left arc
        let triRightAdj = p.triAx+p.triBx-triLeftAdj
        let triRightAngleR = Math.atan(triHeight/triRightAdj)
        p.triRightAngleD = Math.floor(triRightAngleR*180/Math.PI)

        ctx.beginPath()
        ctx.arc(p.triBx, 0, 15, (1*Math.PI), 1*Math.PI+triRightAngleR)
        ctx.stroke()
        ctx.fillText(`${p.triRightAngleD}°`, p.triBx-35, 0-3)

        // answer arc
        ctx.beginPath()
        ctx.arc(p.triCx, -p.triCy, 15, triRightAngleR, 1*Math.PI-triLeftAngleR)
        ctx.stroke()
        ctx.fillText(`b`, p.triCx, -p.triCy+25)
      }
      if (p.triRoll == 2){
        ctx.beginPath()
        ctx.moveTo(-p.triAx, 0)
        ctx.lineTo(p.triBx, 0)
        ctx.lineTo(-p.triAx-p.triDx, -p.triCy)
        ctx.closePath()
        ctx.stroke()


        // left arc
        let tri2LeftAdj = p.triDx
        let tri2LeftAngleR = 1*Math.PI-Math.atan(triHeight/tri2LeftAdj)
        p.tri2LeftAngleD = Math.floor(tri2LeftAngleR*180/Math.PI)

        ctx.beginPath()
        ctx.arc(-p.triAx, 0, 15, 2*Math.PI-tri2LeftAngleR, 2*Math.PI)
        ctx.stroke()
        ctx.fillText(`${p.tri2LeftAngleD}°`, -p.triAx+20, 0-3)

        // right arc
        let tri2RightAdj = p.triAx+p.triDx+p.triBx
        let tri2RightAngleR = Math.atan(triHeight/tri2RightAdj)
        p.tri2RightAngleD = Math.floor(tri2RightAngleR*180/Math.PI)

        ctx.beginPath()
        ctx.arc(p.triBx, 0, 15, 1*Math.PI, 1*Math.PI+tri2RightAngleR)
        ctx.stroke()
        ctx.fillText(`${p.tri2RightAngleD}°`, p.triBx-35, 0-3)

        // answer arc
        ctx.beginPath()
        ctx.arc(-p.triAx-p.triDx, -p.triCy,15, tri2RightAngleR, 1*Math.PI-tri2LeftAngleR)
        ctx.stroke()
        ctx.fillText(`b`, -p.triAx-p.triDx+20, -p.triCy+20)

      }

      if (p.triRoll == 3){
        ctx.beginPath()
        ctx.moveTo(-p.triAx, 0)
        ctx.lineTo(p.triBx, 0)
        ctx.lineTo(p.triBx+p.triDx, -p.triCy)
        ctx.closePath()
        ctx.stroke()

        // right arc
        let tri3RightAdj = p.triDx
        let tri3RightAngleR = 1*Math.PI-Math.atan(triHeight/tri3RightAdj)
        p.tri3RightAngleD = Math.floor(tri3RightAngleR*180/Math.PI)

        ctx.beginPath()
        ctx.arc(p.triBx, 0, 15, 1*Math.PI, 1*Math.PI+tri3RightAngleR)
        ctx.stroke()
        ctx.fillText(`${p.tri3RightAngleD}°`, p.triBx-40, 0-3)

        // left arc
        let tri3LeftAdj = p.triAx+p.triDx+p.triBx
        let tri3LeftAngleR = Math.atan(triHeight/tri3LeftAdj)
        p.tri3LeftAngleD = Math.floor(tri3LeftAngleR*180/Math.PI)

        ctx.beginPath()
        ctx.arc(-p.triAx, 0, 15, 2*Math.PI-tri3LeftAngleR, 2*Math.PI)
        ctx.stroke()
        ctx.fillText(`${p.tri3LeftAngleD}°`, -p.triAx+25, 0-3)

        // answer arc
        ctx.beginPath()
        ctx.arc(p.triBx+p.triDx, -p.triCy,15, tri3RightAngleR, 1*Math.PI-tri3LeftAngleR)
        ctx.stroke()
        ctx.fillText(`b`, p.triBx+p.triDx-20, -p.triCy+20)


      }
    }
    ctx.restore()
  }
  
  if ( level == 5.07 ){
    ctx.save()
    ctx.font = "1em serif"
    if (p.roll == "opposite"){
      ctx.fillText("What is ∠a?", 20, 20)
    }
    if (p.roll == "corresponding"){
      ctx.fillText("What is ∠c?", 20, 20)
    }

    ctx.translate(200, 137.5)

      if (p.roll == "opposite"){
        ctx.save()
        
          ctx.rotate(p.finalRotation*Math.PI/180)
            ctx.beginPath()
            ctx.moveTo(-150, 0)
            ctx.lineTo(150, 0)
            ctx.stroke()
        
          ctx.save()
            ctx.rotate(p.oppositeRotation*Math.PI/180)
            ctx.beginPath()
            ctx.moveTo(-150, 0)
            ctx.lineTo(150, 0)
            ctx.stroke()
          ctx.restore()

          ctx.save()
            ctx.beginPath()
            ctx.arc(0, 0, 15, 0, p.oppositeRotation*Math.PI/180)
            ctx.stroke()
            ctx.rotate(p.oppositeRotation/2*Math.PI/180)
            ctx.fillText(`${p.oppositeRotation}°`, 25, 5)
          ctx.restore()

          ctx.save()
            ctx.beginPath()
            ctx.arc(0, 0, 15, 1*Math.PI, 1*Math.PI+p.oppositeRotation*Math.PI/180)
            ctx.stroke()
            ctx.rotate(p.oppositeRotation/2*Math.PI/180)
            ctx.fillText("a", -26, 0)
          ctx.restore()
        ctx.restore()
      }

      if (p.roll == "corresponding"){
        ctx.save
        ctx.rotate(p.finalRotation*Math.PI/180)
        // first horizontal line
          ctx.translate(0, 50)
          ctx.beginPath()
          ctx.moveTo(-150, 0)
          ctx.lineTo(150, 0)
          ctx.stroke()

        // second horizontal line
          ctx.save()
            ctx.translate(0, -60)
            ctx.beginPath()
            ctx.moveTo(-150, 0)
            ctx.lineTo(150, 0)
            ctx.stroke()

          ctx.restore()

        // Intersect
          let linePointX = genNumbers(200)-100
          let adjustX = genNumbers(60)-30;
        
          ctx.beginPath()
          ctx.moveTo(linePointX+adjustX, 0)
          ctx.lineTo(linePointX-adjustX, -60)
          ctx.stroke()

          let parallelAdjust = genNumbers(10)+25
          ctx.beginPath()
          ctx.moveTo(linePointX+adjustX-10-parallelAdjust, -10)
          ctx.lineTo(linePointX+adjustX-parallelAdjust, 0)
          ctx.lineTo(linePointX+adjustX-10-parallelAdjust, 10)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(linePointX-adjustX-10-parallelAdjust, -70)
          ctx.lineTo(linePointX-adjustX-parallelAdjust, -60)
          ctx.lineTo(linePointX-adjustX-10-parallelAdjust, -50)
          ctx.stroke()

          let corrAngle = angles(linePointX+adjustX, 0, linePointX-adjustX, -60)
          console.log(corrAngle)
          ctx.beginPath()
          ctx.arc(linePointX+adjustX, 0, 15, 2*Math.PI+corrAngle*Math.PI/180, 2*Math.PI)
          ctx.stroke()

          p.corrAngleDisplay = Math.abs(Math.floor(corrAngle))
          ctx.fillText(`${p.corrAngleDisplay}°`, linePointX+adjustX+20, -1)

          if (p.corrRoll == 1){
            ctx.beginPath()
            ctx.arc(linePointX-adjustX, -60, 15, 1*Math.PI+corrAngle*Math.PI/180, 1*Math.PI)
            ctx.stroke()
            ctx.fillText(`c`, linePointX-adjustX-28, -60+9)
          }
          if (p.corrRoll == 2){
            ctx.beginPath()
            ctx.arc(linePointX-adjustX, -60, 15, 0, 1*Math.PI+corrAngle*Math.PI/180)
            ctx.stroke()
            ctx.fillText(`c`, linePointX-adjustX+21, -60+9)
          }           



        ctx.restore()

      }

    ctx.restore()
  }

  if ( level == 5.08 ){
    console.log(p.roll, p.rollChange)
    if (p.roll == "discount"){
      if (p.rollChange == 1){
        displayProblem.innerHTML = `
        The discount of $${p.change} was given to an item that cost $${p.totalAmount}.</br>
        What percentage discount is given?
        `
      }
      if (p.rollChange == 2){
        displayProblem.innerHTML = `
        An item cost $${p.totalAmount-p.change} after a $${p.change} discount was given.</br>
        What percentage discount is given?
        `
      }
    }
    if (p.roll == "increase"){
      if (p.rollChange == 1){
        displayProblem.innerHTML = `
       Something ${p.roll} by ${p.change} and was ${p.totalAmount} at first.</br>
       What is the percentage ${p.roll}?
        `
      }
      if (p.rollChange == 2){
        displayProblem.innerHTML = `
       Something ${p.roll} by ${p.change} and became ${p.totalAmount+p.change}.</br>
       What is the percentage ${p.roll}?
        `
      }
    }
    if (p.roll == "decrease"){
      if (p.rollChange == 1){
        displayProblem.innerHTML = `
       Something ${p.roll} by ${p.change} and was ${p.totalAmount} at first.</br>
       What is the percentage ${p.roll}?
        `
      }
      if (p.rollChange == 2){
        displayProblem.innerHTML = `
        Something ${p.roll} by ${p.change} and became ${p.totalAmount-p.change}.</br>
        What is the percentage ${p.roll}?
         `
      }
    }
  }

  if ( level == 6.0){
    if (p.numOne == p.denoOne || p.numTwo == p.denoTwo || p.numThree == p.denoThree){
      p.denoOne += 1
      p.denoTwo += 1
      p.denoThree += 1
    }
    if (p.numOne > p.denoOne){
      [p.numOne, p.denoOne] = [p.denoOne, p.numOne]
    }
    if (p.numTwo > p.denoTwo){
      [p.numTwo, p.denoTwo] = [p.denoTwo, p.numTwo]
    }
    if (p.numThree > p.denoThree){
      [p.numThree, p.denoThree] = [p.denoThree, p.numThree]
    }

    for ( let a = p.denoOne; a > 1 ;a--){
      if (p.numOne%a == 0 && p.denoOne%a == 0){
        p.numOne /= a;
        p.denoOne /= a;
      }
    }
    for ( let b = p.denoTwo; b > 1 ;b--){
      if (p.numOne%b == 0 && p.denoOne%b == 0){
        p.numOne /= b;
        p.denoOne /= b;
      }
    }
    for ( let c = p.denoThree; c > 1 ;c--){
      if (p.numThree%c == 0 && p.denoThree%c == 0){
        p.numThree /= c;
        p.denoThree /= c;
      }
    }

    if (p.choiceOne == "percentage"){
      p.sentenceA = `B ${p.situationA} ${p.percentageOne}%.`
    }
    if (p.choiceOne == "fraction"){
      p.sentenceA = `B ${p.situationA} ${p.numOne}/${p.denoOne}.`
    }
    if (p.choiceTwo == "percentage"){
      p.sentenceB = `C ${p.situationB} ${p.percentageTwo}%.`
    }
    if (p.choiceTwo == "fraction"){
      p.sentenceB = `C ${p.situationB} ${p.numTwo}/${p.denoTwo}.`
    }
    if (p.choiceThree == "ratio"){
      p.sentenceC = `The ratio of B to C is now, ${p.numThree}:${p.denoThree}.`
    }
    if (p.choiceThree == "fraction"){
      p.sentenceC = `B is ${p.numThree}/${p.denoThree} of C in the end.`
    }
    p.sentenceD = `What is ${p.choiceBC} at first?`
    displayProblem.innerHTML = 
    `
    ${p.sentenceA}</br>
    ${p.sentenceB}</br>
    ${p.sentenceC}</br>
    ${p.sentenceD}
    `
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

      if (level == 1.02){
        if (p.operator == "+") {
          correctAnswer = p.numOne + p.numTwo
        };
        if (p.operator == "-") {
          correctAnswer = p.numOne - p.numTwo
        };
      }

      if (level == 1.01 || level == 2.01 || level == 3.01){
        if (p.operator == "x") correctAnswer = p.numThree * p.numFour
        if (p.operator == "÷") correctAnswer = (p.numThree*p.numFour)/p.numThree
      }

      if (level == 1.03){
        if (p.operator == "+") {
          correctAnswer = p.numOne + p.numTwo
        };
        if (p.operator == "-") {
          correctAnswer = p.numOne - p.numTwo
        };
        if (p.operator == "x") correctAnswer = p.numThree * p.numFour
        if (p.operator == "÷") correctAnswer = (p.numThree*p.numFour)/p.numThree
      }


      if ( level == 1.04){
        if (p.option == "c" && p.operator == "+"){
          correctAnswer = "c-"
        }
        if (p.option == "c" && p.operator == "-"){
          correctAnswer = "c+"
        }
        if (p.option == "d"){
          correctAnswer = "d-"
        }
        if (p.option == "r" && p.operator == "+"){
          correctAnswer = "r+"
        }
        if (p.option == "r" && p.operator == "-"){
          correctAnswer = "r-"
        }
      }

      if ( level == 1.05){
        if (p.option == "c" && p.optionThree == "more"){
          correctAnswer = "c-"
        }
        if (p.option == "c" && p.optionThree == "less"){
          correctAnswer = "c+"
        }
        if (p.option == "d"){
          correctAnswer = "d-"
        }
        if (p.option == "r" && p.optionThree == "more"){
          correctAnswer = "r+"
        }
        if (p.option == "r" && p.optionThree == "less"){
          correctAnswer = "r-"
        }
      }

      if (level == 1.06){
        if (p.optionFinal == "1"){
          if (p.operator == "+" && p.operatorTwo == "+"){
            correctAnswer = p.numOne+p.numTwo-p.numThree
          }
          if (p.operator == "+" && p.operatorTwo == "-"){
            correctAnswer = p.numOne+p.numTwo-p.numThree
          }
          if (p.operator == "-" && p.operatorTwo == "+"){
            correctAnswer = p.numOne-p.numTwo-p.numThree
          }
          if (p.operator == "-" && p.operatorTwo == "-"){
            correctAnswer = p.numOne-p.numTwo-p.numThree
          }
          if (correctAnswer < 0){
            correctAnswer = correctAnswer*-1
          }
        }
        if (p.optionFinal == "2"){
          if (p.operator == "+" && p.operatorTwo == "+"){
            correctAnswer = p.numOne+p.numTwo-p.numFour
          }
          if (p.operator == "+" && p.operatorTwo == "-"){
            correctAnswer = p.numOne+p.numTwo+p.numFour
          }
          if (p.operator == "-" && p.operatorTwo == "+"){
            correctAnswer = p.numOne-p.numTwo-p.numFour
          }
          if (p.operator == "-" && p.operatorTwo == "-"){
            correctAnswer = p.numOne-p.numTwo+p.numFour
          }
          if (correctAnswer < 0){
            correctAnswer = correctAnswer*-1
          }
        }
        if (p.optionFinal == "3"){
          if (p.operator == "+" && p.operatorTwo == "+"){
            correctAnswer = p.numThree+p.numFour-p.numOne
          }
          if (p.operator == "+" && p.operatorTwo == "-"){
            correctAnswer = p.numThree-p.numFour-p.numOne
          }
          if (p.operator == "-" && p.operatorTwo == "+"){
            correctAnswer = p.numThree+p.numFour-p.numOne
          }
          if (p.operator == "-" && p.operatorTwo == "-"){
            correctAnswer = p.numThree-p.numFour-p.numOne
          }
          if (correctAnswer < 0){
            correctAnswer = correctAnswer*-1
          }
        }
        if (p.optionFinal == "4"){
          if (p.operator == "+" && p.operatorTwo == "+"){
            correctAnswer = p.numThree+p.numFour-p.numTwo
          }
          if (p.operator == "+" && p.operatorTwo == "-"){
            correctAnswer = p.numThree-p.numFour-p.numTwo
          }
          if (p.operator == "-" && p.operatorTwo == "+"){
            correctAnswer = p.numThree+p.numFour+p.numTwo
          }
          if (p.operator == "-" && p.operatorTwo == "-"){
            correctAnswer = p.numThree-p.numFour+p.numTwo
          }
          if (correctAnswer < 0){
            correctAnswer = correctAnswer*-1
          }
        }
      }

      if ( level == 1.07){
        if (p.numOne > p.numThree){
          correctAnswer = p.numOne - p.numThree
        } else if (p.numThree > p.numOne && p.option == "2") {
          correctAnswer = p.numThree + p.numOne
        } else {
          correctAnswer = p.numThree - p.numOne;
        }

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

      if ( level == 2.02){
        if (p.place == "ones") correctAnswer = arr2[0]
        if (p.place == "tens") correctAnswer = arr2[1]
        if (p.place == "hundreds") correctAnswer = arr2[2]
        if (p.place == "thousands") correctAnswer = arr2[3]
        if (p.place == "ten thousands") correctAnswer = arr2[4]
        if (p.place == "hundred thousands") correctAnswer = arr2[5]
        if (p.place == "millions") correctAnswer = arr2[6]
      }

      if ( level == 2.05) {
          if (p.evenOrOdd == "even") {
            if (p.landingNumber%2 == 0){
            console.log("Choice 1")
            correctAnswer = p.finalNumber
            } else {
            console.log("Choice 2")
            correctAnswer = `${p.landingNumber} ${p.finalNumber}`
            }
          }

          if (p.evenOrOdd == "odd") {
            if (p.landingNumber%2 != 0){
            console.log("Choice 3")
            correctAnswer = p.finalNumber
            } else {
            console.log("Choice 4")
            correctAnswer = `${p.landingNumber} ${p.finalNumber}`
            }
          }
        }
      
      if (level == 2.07){
        if (p.option == "1") {
          a = p.numOne/p.numThree
          b = p.numOne/p.numFour
          if (p.bigOrSmall == "1"){
            if (a > b){
              correctAnswer = "2"
            } else {
              correctAnswer = "1"
            }
          }
          if (p.bigOrSmall == "2"){
            if (a > b){
              correctAnswer = "1"
            } else {
              correctAnswer = "2"
            }
          }
        }
        if (p.option == "2") {
          a = p.numFive/p.numTwo
          b = p.numSix/p.numTwo
          if (p.bigOrSmall == "1"){
            if (a > b){
              correctAnswer = "2"
            } else {
              correctAnswer = "1"
            }
          }
          if (p.bigOrSmall == "2"){
            if (a > b){
              correctAnswer = "1"
            } else {
              correctAnswer = "2"
            }
          }
        }  
      }

      if ( level == 2.08){
        if (p.operator == "+"){
          if (p.numTwo + p.numFour >= 60){
            correctAnswer = `${p.numOne+p.numThree}${p.minHours}${p.numTwo+p.numFour}${p.minSeconds}=${p.numOne+p.numThree+1}${p.minHours}${p.numTwo+p.numFour-60}${p.minSeconds}`
          } else {
            correctAnswer = `${p.numOne+p.numThree}${p.minHours}${p.numTwo+p.numFour}${p.minSeconds}`
          }
          if (p.numOne == p.numThree && p.numOne == 0){
            correctAnswer =`${p.numTwo+p.numFour}${p.minSeconds}`
          } 
        }  
        if (p.operator == "-"){
          if (p.numTwo - p.numFour < 0){
            correctAnswer = `${p.numOne-1}${p.minHours}${p.numTwo+60}${p.minSeconds},${p.numOne-p.numThree-1}${p.minHours}${p.numTwo+60-p.numFour}${p.minSeconds}`
          } else {
            correctAnswer = `${p.numOne-p.numThree}${p.minHours}${p.numTwo-p.numFour}${p.minSeconds}`
          }
          if (p.numOne == p.numThree){
            correctAnswer = `${p.numTwo-p.numFour}${p.minSeconds}`
          }
        }
      }

      if ( level == 2.09){
        let finalHours = p.timeHours
        if (p.amOrPm == "pm" && p.timeHours < 12){
          finalHours += 12
        }
        if (p.amOrPm == "am" && p.timeHours == 12){
          finalHours -= 12
        }
        let totalMinutes = finalHours*60+p.timeMinutes
        console.log(`Total minutes: ${totalMinutes}`)
        // total minutes = 24x60=1440
        // am range = 11x60+59=719
        // pm range = 780 to 1439
        let amOrPm2 = undefined
      if (p.situation == "later"){
          if (p.roll == "mins"){
            let finalMinutes = totalMinutes+p.changeMinutes
            console.log(`Final Minutes: ${finalMinutes}`)
            let hours = Math.floor(finalMinutes/60)
            if (hours > 12 && hours < 25){
              hours -= 12
            }
            if (hours >= 25){
              hours -= 24
            }
            if (finalMinutes <= 719 || finalMinutes >= 1440){
              amOrPm2 = "am"
            } else {
              amOrPm2 = "pm"
            }
            
            if (p.timeMinutes+p.changeMinutes == 0){
              correctAnswer = `${hours}${amOrPm2}`
            } else if (p.timeMinutes+p.changeMinutes == 60 ){
              correctAnswer = `${p.timeHours}.60=${hours}${amOrPm2}`
            } else if (p.timeMinutes+p.changeMinutes >= 60 && (p.timeMinutes+p.changeMinutes-60)<10){
              correctAnswer = `${p.timeHours}.${p.timeMinutes+p.changeMinutes}=${hours}.0${finalMinutes%60}${amOrPm2}`
            } else if (p.timeMinutes+p.changeMinutes >= 60){
              correctAnswer = `${p.timeHours}.${p.timeMinutes+p.changeMinutes}=${hours}.${finalMinutes%60}${amOrPm2}`
            } else if (finalMinutes%60 < 10){
              correctAnswer = `${hours}.0${finalMinutes%60}${amOrPm2}`
            } else {
              correctAnswer = `${hours}.${finalMinutes%60}${amOrPm2}`
            }
          }
          if (p.roll == "hours"){
            let finalMinutes = totalMinutes+p.changeHours*60
            console.log(`Final Minutes: ${finalMinutes}`)
            let hours = Math.floor(finalMinutes/60)
            if (hours > 12 && hours < 25){
              hours -= 12
            }
            if (hours >= 25){
              hours -= 24
            }
            if (finalMinutes <= 719 || finalMinutes >= 1440){
              amOrPm2 = "am"
            } else {
              amOrPm2 = "pm"
            }
            
            if (finalMinutes%60 == 0){
              correctAnswer = `${hours}${amOrPm2}`
            } else if ( finalMinutes%60 < 10){
              correctAnswer = `${hours}.0${finalMinutes%60}${amOrPm2}`
            } else {
            correctAnswer = `${hours}.${finalMinutes%60}${amOrPm2}`
            }
          } 
      }
      if (p.situation == "before"){
          if (p.roll == "mins"){
            let finalMinutes = totalMinutes-p.changeMinutes
            if (finalMinutes <= 0){
              finalMinutes += 1440
            }
            console.log(`Final Minutes: ${finalMinutes}`)
            let hours = Math.floor(finalMinutes/60)
            if (hours > 12 && hours < 25){
              hours -= 12
            }
            if (hours >= 25){
              hours -= 24
            }
            if (finalMinutes <= 719 || finalMinutes >= 1440){
              amOrPm2 = "am"
            } else {
              amOrPm2 = "pm"
            }
            
            if (p.timeMinutes-p.changeMinutes == 0){
              correctAnswer = `${hours}${amOrPm2}`
            } else if (p.timeMinutes-p.changeMinutes < 0){
              correctAnswer = `${hours}.${p.timeMinutes+60},${hours}.${finalMinutes%60}${amOrPm2}`
            } else if (finalMinutes%60 < 10){
              correctAnswer = `${hours}.0${finalMinutes%60}${amOrPm2}`
            } else {
            correctAnswer = `${hours}.${finalMinutes%60}${amOrPm2}`
            }
          }

          if (p.roll == "hours"){
            let finalMinutes = totalMinutes-p.changeHours*60
            if (finalMinutes <= 0){
              finalMinutes += 1440
            }
            console.log(`Final Minutes: ${finalMinutes}`)
            let hours = Math.floor(finalMinutes/60)
            if (hours > 12 && hours < 25){
              hours -= 12
            }
            if (hours >= 25){
              hours -= 24
            }
            if (finalMinutes <= 719 || finalMinutes >= 1440){
              amOrPm2 = "am"
            } else {
              amOrPm2 = "pm"
            }
            if (hours == 0){
              hours = 12
            }
            
            if (finalMinutes%60 == 0){
              correctAnswer = `${hours}${amOrPm2}`
            } else if ( finalMinutes%60 < 10){
              correctAnswer = `${hours}.0${finalMinutes%60}${amOrPm2}`
            } else {
            correctAnswer = `${hours}.${finalMinutes%60}${amOrPm2}`
            }
          }
        }
    }

  
      if ( level == 3.02 ){
        if (p.option == "1"){
         correctAnswer = p.numOne*p.numMultiTwo*p.numMulti
        }
        if (p.option == "2"){
          if (p.numPlace == "tens"){
            correctAnswer = p.numOne*10*p.numMultiTwo
          }
          if (p.numPlace == "hundreds"){
            correctAnswer = p.numOne*100*p.numMultiTwo
          }
          if (p.numPlace == "thousands"){
            correctAnswer = p.numOne*1000*p.numMultiTwo
          }
        }
        if (p.option == "3" || p.option == "4"){
          correctAnswer = p.numOne*p.numMultiTwo
        }
      }

      if (level == 3.03 || level == 2.03 || level == 4.04 || level == 6.3){
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

      if ( level == 3.04){
        correctAnswer = p.numOne * p.numTwo
      }

      if ( level == 3.05){
        if ( p.unitMeasurement == "kg" || p.unitMeasurement == "ℓ" || p.unitMeasurement == "km"){
          correctAnswer = (p.numOne*p.numTwo)+p.numFour
        } else {
          correctAnswer = (p.numOne*p.numTwo)+p.numThree
        }
      }

      if (level == 3.06){
        console.log(p.numOne, p.numTwo);
        p.remainder = p.numOne%p.numTwo
        if (p.unitMeasurement == "$"){
          if (p.numOne%10 == 0){
            console.log(p.numTwo);
            correctAnswer = p.unitMeasurement + p.numOne/100 + 0
          } else {
          correctAnswer = p.unitMeasurement + p.numOne/100
          }
        } else if (p.unitMeasurement == "m"){
          correctAnswer = Math.floor(p.numOne/100) + p.unitMeasurement + p.remainder + p.secondUnitMeasurement;
        } else if (p.unitMeasurement == "min") {
          correctAnswer = Math.floor(p.numOne/60) + p.unitMeasurement + p.remainder + p.secondUnitMeasurement;
        } else { 
          if (p.unitMeasurement == "ℓ"){ 
            correctAnswer = Math.floor(p.numOne/p.numTwo) + "L" + p.remainder + "ml"
          } else {
            correctAnswer = Math.floor(p.numOne/p.numTwo) + p.unitMeasurement + p.remainder + p.secondUnitMeasurement
            console.log(`The correct answer is ${correctAnswer}`);
            }
        }
      }

      if ( level == 3.07){
        arr.sort(function(a, b){return b-a});
        let i = 0;
        let a = 0;
        commonMultipleArr.push(arr[0]);
          while ((commonMultipleArr[i]%arr[1]) != 0){
            const something = arr[0]*(i+2)
            commonMultipleArr.push(something)
            i++
          }
        commonMultipleArrTwo.push(commonMultipleArr[commonMultipleArr.length-1])
          while ((commonMultipleArrTwo[a]%arr[2]) != 0){
            const somethingTwo = commonMultipleArrTwo[0]*(a+2)
            commonMultipleArrTwo.push(somethingTwo)
            a++
          }
        if (commonMultipleArrTwo.length > 1){
          if (commonMultipleArrTwo[0] == commonMultipleArrTwo[1]){
            correctAnswer = commonMultipleArrTwo[0]
          } else {
            correctAnswer = commonMultipleArrTwo[0] + "," + commonMultipleArrTwo[commonMultipleArrTwo.length-1];
          }
        } else {
          correctAnswer = commonMultipleArrTwo[0];
        }
        
        console.log(commonMultipleArrTwo);
      }
      
      if ( level == 3.08 ){
        if (p.amOrPmOne == "pm"){
          p.hoursOne += 12
        }
        if (p.amOrPmTwo == "pm"){
          p.hoursTwo += 12
        }
        if (p.minsTwo > p.minsOne){
          if (p.hoursOne == p.hoursTwo){
            correctAnswer = `${p.minsTwo-p.minsOne}mins`
          } else if (p.minsTwo == 0) {
            correctAnswer = `${60-p.minsOne}+${p.hoursTwo-p.hoursOne-1}`
          } else {
          correctAnswer = `${p.minsTwo-p.minsOne}mins+${p.hoursTwo-p.hoursOne}h`
          }
        }
        if (p.minsTwo < p.minsOne){
          if (p.hoursTwo-p.hoursOne == 1){
            correctAnswer = `${60-p.minsOne}mins+${p.minsTwo}mins`
          } else {
           correctAnswer = `${60-p.minsOne}mins+${p.hoursTwo-p.hoursOne-1}h+${p.minsTwo}mins`
          }    
        }
        if (p.minsTwo == p.minsOne){
          correctAnswer = `${p.hoursTwo-p.hoursOne}h`
        }
      }

      if ( level == 3.09){
        for (let i = p.numLargest; i > 1; i--){
          if ((p.numOne % i == 0) && (p.numTwo % i == 0)){
            p.numOne /= i;
            p.numTwo /= i;
            correctAnswer = p.numOne + "/" + p.numTwo;
          }
        }  
         if ( p.numOne == 1){
          correctAnswer = p.numOne + "/" + p.numTwo;
         } else {
          correctAnswer = p.numOne + "/" + p.numTwo;
         }
      }

      if ( level == 3.10){
        if (p.option == "1"){
          correctAnswer = p.numTwo*p.numMulti
        } else {
          correctAnswer = p.numOne*p.numMulti
        }
      }

      if ( level == 3.11){
        // level 3.09
        if (p.optionFinal == "1"){
          for (let i = p.numLargest; i > 1; i--){
            if ((p.numOne % i == 0) && (p.numTwo % i == 0)){
              p.numOne /= i;
              p.numTwo /= i;
              correctAnswer = p.numOne + "/" + p.numTwo;
            }
          }  
           if ( p.numOne == 1){
            correctAnswer = p.numOne + "/" + p.numTwo;
           } else {
            correctAnswer = p.numOne + "/" + p.numTwo;
           }
        }
        // level 3.10
        if (p.optionFinal == "2"){
          if (p.option == "1"){
            correctAnswer = p.numTwo*p.numMulti
          } else {
            correctAnswer = p.numOne*p.numMulti
          }
        }
      }

      if ( level == 3.12 ){
        correctAnswer = p.numOne+1 + "x" + (p.numOne) + "/2"
      }

      if ( level == 3.13 ){
        if (p.numThree > p.numTwo) {
          correctAnswer = `${p.numThree}n-${p.numThree-p.numTwo} ${p.numThree*p.numFour+(p.numTwo-p.numThree)}`
        } else if (p.numThree == p.numTwo){
          correctAnswer = `${p.numThree}n ${p.numThree*p.numFour}`
        } else  {
          correctAnswer = `${p.numThree}n+${p.numTwo-p.numThree} ${p.numThree*p.numFour+(p.numTwo-p.numThree)}`
        }
      }

      if ( level == 3.14){
        correctAnswer = p.numFive + "x" + p.numFive + "=" + p.numFive*p.numFive + " " + (p.numFive+p.numSix)
      }

      if ( level == 3.15){
        // level 3.12
        if (p.optionFinal == 1){
          correctAnswer = p.numOne+1 + "x" + (p.numOne) + "/2"
        }
        // level 3.13
        if (p.optionFinal == 2){
          if (p.numThree > p.numTwo) {
            correctAnswer = `${p.numThree}n-${p.numThree-p.numTwo} ${p.numThree*p.numFour+(p.numTwo-p.numThree)}`
          } else if (p.numThree == p.numTwo){
            correctAnswer = `${p.numThree}n ${p.numThree*p.numFour}`
          } else  {
            correctAnswer = `${p.numThree}n+${p.numTwo-p.numThree} ${p.numThree*p.numFour+(p.numTwo-p.numThree)}`
          }
        }
        // level 3.14
        if (p.optionFinal == 3){
          correctAnswer = p.numFive + "x" + p.numFive + "=" + p.numFive*p.numFive + " " + (p.numFive+p.numSix)
        }
      }
      if ( level == 3.16 ) {
        if (p.arcAngle > 80 && p.arcAngle < 100) {
          if (p.arcAngle > 90 ){
            p.arcAngle += +20;
          } else {
          p.arcAngle -= 20;
          }
        }
        if (p.acuteOrObtuse == "acute"){
          if (p.arcAngle < 90 ){
            correctAnswer = "a"
          } else {
            correctAnswer = "b"
          }
        }
        if (p.acuteOrObtuse == "obtuse") {
          if (p.arcAngle < 90){
            correctAnswer = "b"
          } else {
            correctAnswer = "a"
          }
        }
      }

      if ( level == 3.17 ){
        if (p.parallelOrPerpendicular == "parallel"){
          correctAnswer = p.labelGHI + p.labelJKL
        } else {
          correctAnswer = p.labelMNO + p.labelPQR
        }
      }

      if ( level == 3.18){
        if (p.shapeChoice == "square"){
          if (p.areaOrPerimeter == "area"){
            correctAnswer = p.squareSide*p.squareSide
          }
          if (p.areaOrPerimeter == "perimeter"){
            correctAnswer = p.squareSide*4
          }
        }
        if (p.shapeChoice == "rectangle"){
          if (p.areaOrPerimeter == "area"){
            correctAnswer = p.rectLength*p.rectBreadth
          }
          if (p.areaOrPerimeter == "perimeter"){
            correctAnswer = (p.rectLength+p.rectBreadth)*2
          }
        }
      }


      if ( level == 4.0){

        for (let i = 1; i <= p.numOne/i; i++){
          if (p.numOne%i == 0){
            arr.push(`${i}x${p.numOne/i}`);
            // arr.push(p.numOne/i);
          }
        }
        console.log(arr)
        correctAnswer = arr.toString()
      }


      if ( level == 4.01){
        if (p.placeValue == "tens"){
          correctAnswer = Math.round(p.numOne/10)*10
        }
        if (p.placeValue == "hundreds"){
          correctAnswer = Math.round(p.numOne/100)*100
        }
        if (p.placeValue == "thousands"){
          correctAnswer = Math.round(p.numOne/1000)*1000
        }
        if (p.placeValue == "ten thousands"){
          correctAnswer = Math.round(p.numOne/10000)*10000
        }
      }
      
      if ( level == 4.02){
        if (p.placeValue == "thousandths") correctAnswer = arr2[0]
        if (p.placeValue == "hundredths") correctAnswer = arr2[1]
        if (p.placeValue == "tenths") correctAnswer = arr2[2]
        if (p.placeValue == "ones") correctAnswer = arr2[3]
        if (p.placeValue == "tens") correctAnswer = arr2[4]
        if (p.placeValue == "hundreds") correctAnswer = arr2[5]
        if (p.placeValue == "thousands") correctAnswer = arr2[6]
      }

      if ( level == 4.03){
        if (p.placeValue == "Whole Number"){
          correctAnswer = Math.round(p.numFinal)
        }
        if (p.placeValue == "1 decimal place"){
          p.ansFinal = Math.round(p.numFinal*10)/10
          if ((p.ansFinal*10)%10 == 0){
            correctAnswer = p.ansFinal + ".0"
          } else {
          correctAnswer = p.ansFinal
          }
        }
        if (p.placeValue == "2 decimal places"){
          p.ansFinal = Math.round(p.numFinal*100)/100
          console.log(p.ansFinal)
          if ((p.ansFinal*100)%100 == 0){
            correctAnswer = p.ansFinal + ".00"
          } else if ((p.ansFinal*100)%10 == 0){
            correctAnswer = p.ansFinal + "0"
          } else {
          correctAnswer = p.ansFinal
          }
        }
      }

      if ( level == 4.04){
        if (p.numOne/p.numTwo < 1){ 
          correctAnswer = `${p.numOne}/${p.numTwo}`
        } else {
          correctAnswer = Math.floor(p.numOne/p.numTwo) + " " +  p.numOne%p.numTwo + "/" + p.numTwo
        }
      }

      if ( level == 4.05 ){
        if (p.operator == "x"){
          correctAnswer = Math.round(p.numOne/p.numTwo*p.numThree*10000)/10000
        } else {
          correctAnswer = Math.round(p.numOne/p.numTwo/p.numThree*10000)/10000
        }
      }

      if ( level == 4.06 ){
        if (p.unitMeasurement == "m" || p.unitMeasurement == "$"){
          correctAnswer = Math.round(p.numOne*100+p.numThree)
        }
        if (p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" ||  p.unitMeasurement == "km" ){
          correctAnswer = Math.round(p.numOne*1000+p.numTwo)
        }
      }

      if ( level == 4.07 ){
        if (p.unitMeasurement == "m"){
          correctAnswer = Math.round((p.numOne+p.numThree/100)*100)/100;
        }
        if (p.unitMeasurement == "$"){
          if (p.numThree%10 == 0){
            correctAnswer = p.numOne+p.numThree/100+"0"
          } else {
            correctAnswer = Math.round((p.numOne+p.numThree/100)*100)/100
          }
        }
        if (p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" ||  p.unitMeasurement == "km" ){
          correctAnswer = Math.round((p.numOne+p.numTwo/1000)*1000)/1000
        }
      }
      if ( level == 4.08){
        // level 4.06
        if (p.optionFinal == "1"){
          if (p.unitMeasurement == "m" || p.unitMeasurement == "$"){
            correctAnswer = Math.round(p.numOne*100+p.numThree)
          }
          if (p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" ||  p.unitMeasurement == "km" ){
            correctAnswer = Math.round(p.numOne*1000+p.numTwo)
          }
        }
        // level 4.07
        if (p.optionFinal == "2"){
          if (p.unitMeasurement == "m"){
            correctAnswer = Math.round((p.numOne+p.numThree/100)*100)/100;
          }
          if (p.unitMeasurement == "$"){
            if (p.numThree%10 == 0){
              correctAnswer = p.numOne+p.numThree/100+"0"
            } else {
              correctAnswer = Math.round((p.numOne+p.numThree/100)*100)/100
            }
          }
          if (p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" ||  p.unitMeasurement == "km" ){
            correctAnswer = Math.round((p.numOne+p.numTwo/1000)*1000)/1000
          }
        }
      }
      if (level == 4.09){
        for (let i = p.numThree; i > 1; i--){
          if ((p.numTwo % i == 0 ) && (p.numThree % i == 0)){
            p.numTwo /= i;
            p.numThree /= i;
          }
        }
        if (p.numTwo == 1){
          p.numFour = p.numOne*p.numThree+p.numTwo
          correctAnswer = p.numFour + "/" + p.numThree
        } else {
        p.numFour = p.numOne*p.numThree+p.numTwo
        correctAnswer = p.numFour + "/" + p.numThree
        }
      }

      if ( level == 4.10 ){
        for (let i = p.numTwo; i > 1; i--){
          if ((p.numTwo % i == 0 ) && (p.numThree % i == 0)){
            p.numTwo /= i;
            p.numThree /= i;
          }
        }
        correctAnswer = p.numOne + " " + p.numTwo%p.numThree + "/" + p.numThree
      }

      if ( level == 4.11){
        // level 4.09
        if (p.optionFinal == "1"){
          for (let i = p.numThree; i > 1; i--){
            if ((p.numTwo % i == 0 ) && (p.numThree % i == 0)){
              p.numTwo /= i;
              p.numThree /= i;
            }
          }
          if (p.numTwo == 1){
            p.numFour = p.numOne*p.numThree+p.numTwo
            correctAnswer = p.numFour + "/" + p.numThree
          } else {
          p.numFour = p.numOne*p.numThree+p.numTwo
          correctAnswer = p.numFour + "/" + p.numThree
          }
        }
        if (p.optionFinal == "2"){
          // level 4.10
          for (let i = p.numTwo; i > 1; i--){
            if ((p.numTwo % i == 0 ) && (p.numThree % i == 0)){
              p.numTwo /= i;
              p.numThree /= i;
            }
          }
          correctAnswer = p.numOne + " " + p.numTwo%p.numThree + "/" + p.numThree
        }
      }
      if (level == 4.12){
        correctAnswer = `${p.numMulti*p.numTwo}`
      }

      if ( level == 4.13){
        if (p.options == "use"){
          correctAnswer = `${p.numTwo*p.numMulti}x${p.numOne}/${p.numTwo}`
        }
        if (p.options == "have left"){
          correctAnswer = `${p.numTwo*p.numMulti}x${p.numTwo-p.numOne}/${p.numTwo}`
        }
      }

      if ( level == 4.14){
        if (p.option == "r") {
          correctAnswer = "r"
        }
        if (p.option == "v") {
          correctAnswer = "v"
        }
        if (p.option == "f") {
          correctAnswer = "f"
        }
      }

      if ( level == 4.15 ){
        if (p.option == "1"){
          correctAnswer = `f-f`
        }
        if (p.option == "2"){
          correctAnswer = `r+r`
        }
        if (p.option == "3"){
          correctAnswer = `vxr`
        }
        if (p.option == "4"){
          correctAnswer = `fxr`
        }
        if (p.option == "5"){
          correctAnswer = `fxv`
        }
      }

      if ( level == 4.16){
        correctAnswer = p.numOne;
      }

      if ( level == 4.17){
        if (p.roll == 1 ){
          if (p.compass == "north-west"){
            correctAnswer =  arr2[0]
          }
          if (p.compass == "north"){
            correctAnswer = arr2[1] 
          }
          if (p.compass == "north-east"){
            correctAnswer = arr2[2] 
          }
          if (p.compass == "east"){
            correctAnswer = arr2[5] 
          }
          if (p.compass == "south-east"){
            correctAnswer = arr2[8] 
          }
          if (p.compass == "south"){
            correctAnswer = arr2[7] 
          }
          if (p.compass == "south-west"){
            correctAnswer = arr2[6] 
          }
          if (p.compass == "west"){
            correctAnswer = arr2[3] 
          }
        } else {
          correctAnswer = arr2[4];
        }
      }

      if ( level == 4.18 ){
        const index = arr2.indexOf(p.choice)
       
        if (p.roll == 1){
          if (p.direction == "counter-clockwise"){
            p.angleTurn = 360-p.angleTurn 
          }
          const intervalsTurned = p.angleTurn/45
          let finalIndex = index+intervalsTurned
          if (finalIndex == 8){
            finalIndex = 0
          }  
          if (finalIndex > 8) {
              finalIndex -= 8
            }
          correctAnswer = arr2[finalIndex]
        } else {
          if (p.direction == "counter-clockwise"){
            p.angleTurn = 360-p.angleTurn
          }
          const intervalsTurned = p.angleTurn/45
          let finalIndex = index-intervalsTurned
          if (finalIndex == 8){
            finalIndex = 0
          }  
          if (finalIndex < 0) {
              finalIndex += 8
            }
          correctAnswer = arr2[finalIndex];
          console.log(p.direction, intervalsTurned, index, finalIndex, arr2[finalIndex])
        }
      }

      if ( level == 4.19 ){
        if (p.shapeRoll == "Square"){
          if (p.squareRoll == 1){
            correctAnswer = 45
          }
          if (p.squareRoll == 2){
            correctAnswer = 90
          }
          if (p.squareRoll == 3){
            correctAnswer = 360
          }
        }
        if (p.shapeRoll == "Rectangle"){
      
          if (p.rectRoll == 1){
            correctAnswer = 90
          }
          if (p.rectRoll == 2){
            correctAnswer = `90-${p.angleDegrees}`
          }
          if (p.rectRoll == 3){
            correctAnswer = 360
          }
        }
        if (p.shapeRoll == "straight"){
          if (p.straightRoll == 1) {
            correctAnswer = 180
          }
          if (p.straightRoll == 2){
            correctAnswer = `180-${p.angleStraight}`
          }
        }

        if (p.shapeRoll == "circle"){
          if (p.circleRoll == 1){
            correctAnswer = 360
          }
          if (p.circleRoll == 2){
            correctAnswer = `360-${p.angleCircle}`
          }
        }
      }

      if ( level == 5.0) {
        if (p.sidesBH == "base"){
          correctAnswer = `${p.labelABC}${p.labelGHI}`
        } else if (p.sidesBH == "height") {
          correctAnswer = `${p.labelABC}${p.labelDEF}`
        } else if (p.sidesBH == "base2"){
          correctAnswer = `${p.labelABC}${p.labelJKL}`
        } else {
          correctAnswer = `${p.labelDEF}${p.labelGHI}`
        }
      }

      if ( level == 5.01 ){
        p.varA = p.numOne
        p.varB = p.numTwo
        p.varTotal = p.numOne+p.numTwo

        if (p.letterBTotal == "A and B"){
          p.varB = p.numTwo - p.numOne
          p.varTotal = p.numTwo
        }

        if (p.letterAB == "A" && p.letterLeftRemoved == "left"){
          correctAnswer = (p.varA) + "/" + p.varTotal + "x" + (p.numFour-p.numThree) + "/" + p.numFour
        }
        if (p.letterAB == "A" && p.letterLeftRemoved == "removed"){
          correctAnswer =  (p.varA) + "/" + p.varTotal + "x" + p.numThree + "/" + p.numFour
        }
        if (p.letterAB == "B" && p.letterLeftRemoved == "left"){
          correctAnswer = (p.varB) + "/" + p.varTotal + "x" + (p.numSix-p.numFive) + "/" + p.numSix
        }
        if (p.letterAB == "B" && p.letterLeftRemoved == "removed"){
          correctAnswer = (p.varB) + "/" + p.varTotal + "x" + p.numFive + "/" + p.numSix
        }
      }

      if ( level == 5.02) {
        correctAnswer = `${arr[0]}/${arr[0]/p.numOne*p.numTwo}A=${arr[0]}/${arr[0]/p.numThree*p.numFour}B`
      }


      if ( level == 5.03 ){
        p.varA = p.numOne
        p.varB = 100-p.numOne
        if ( p.letterAB == "A" && p.letterChange == "increase"){
          correctAnswer = p.varA + "/100x" + (100+p.numTwo)
        }
        if ( p.letterAB == "A" && p.letterChange == "decrease"){
          correctAnswer = p.varA + "/100x" + (100-p.numTwo)
        }
        if ( p.letterAB == "A" && p.letterChange == "of"){
          correctAnswer = p.varA + "/100x" + (100-p.numTwo)
        }
        if ( p.letterAB == "B" && p.letterChangeTwo == "increase"){
          correctAnswer = p.varB + "/100x" + (100+p.numThree)
        }
        if ( p.letterAB == "B" && p.letterChangeTwo == "decrease"){
          correctAnswer = p.varB + "/100x" + (100-p.numThree)
        }
        if ( p.letterAB == "B" && p.letterChangeTwo == "of"){
          correctAnswer = p.varB + "/100x" + (100-p.numThree)
        }
      }
      if ( level == 5.04 ){
        p.varA = p.numOne
        p.varB = p.numTwo
        if (p.letterBTotal == "A and B"){
          p.varB = p.numTwo-p.numOne
        }
        if (p.letterAB == "A"){
          if (p.letterChange == "increase"){
            correctAnswer = `${p.varA}/100x${100+p.numThree}`
          }
          if (p.letterChange == "decrease" || p.letterChange == "of"){
            correctAnswer = `${p.varA}/100x${100-p.numThree}`
          }
        }
        if (p.letterAB == "B"){
          if (p.letterChangeTwo == "increase"){
            correctAnswer = `${p.varB}/100x${100+p.numFour}`
          }
          if (p.letterChangeTwo == "decrease" || p.letterChangeTwo == "of"){
            correctAnswer = `${p.varB}/100x${100-p.numFour}`
          }
        }
      }

      if ( level == 5.05 ){
        if (p.question == "base"){
          correctAnswer = `${p.labelDEF}${p.labelGHI}`
        }
        if (p.question == "height"){
          correctAnswer = `${p.labelABC}${p.labelJKL}`
        }
        if (p.question == "base2"){
          correctAnswer = `${p.labelABC}${p.labelJKL}`
        }
        if (p.question == "height2"){
          correctAnswer = `${p.labelDEF}${p.labelGHI}`
        }
        if (p.question == "base3"){
          correctAnswer = `${p.labelABC}${p.labelMNO}`
        }
        if (p.question == "height3"){
          correctAnswer = `${p.labelGHI}${p.labelJKL}`
        }

      }

      if ( level == 5.06){
        if (p.roll == 1){
          if (p.rightAngleRoll == 1){
            correctAnswer = `90-${p.angleLabel}`
          }
          if (p.rightAngleRoll == 2){
            correctAnswer = `90-${p.angleLabel}`
          }
        }
        if (p.roll == 2){
          correctAnswer = 60;
        }
        if (p.roll == 3){
          if (p.isosRoll == 1){
            correctAnswer = `180-${p.isosAngle}x2`
          }
          if (p.isosRoll == 2){
            correctAnswer = `(180-${p.isosAngle2Label})/2`
          }
        }
       if (p.roll == 4){
         if (p.triRoll == 1){
           correctAnswer = `180-${p.triLeftAngleD}-${p.triRightAngleD}`
         }
         if (p.triRoll == 2){
           correctAnswer = `180-${p.tri2LeftAngleD}-${p.tri2RightAngleD}`
         }
         if (p.triRoll == 3){
           correctAnswer = `180-${p.tri3LeftAngleD}-${p.tri3RightAngleD}`
         }
       }
      }

      if ( level == 5.07 ){
        if (p.roll == "opposite"){
          correctAnswer = p.oppositeRotation
        }
        if (p.roll == "corresponding"){
          if (p.corrRoll == "1"){
            correctAnswer = p.corrAngleDisplay
          }
          if (p.corrRoll == "2"){
            correctAnswer = `180-${p.corrAngleDisplay}`
          }
        }
      }

      if ( level == 5.08 ){
          correctAnswer = `${p.change}/${p.totalAmount}x100`
      }

      
      if ( level == 6.0){
        if (p.choiceBC == "B" && p.choiceOne == "percentage"){
          if (p.situationA == "increased by") {
            correctAnswer = `${p.numThree}/${100+p.percentageOne}x100` 
          } else {
           correctAnswer = `${p.numThree}/${100-p.percentageOne}x100`
          }
        }
        if (p.choiceBC == "B" && p.choiceOne == "fraction"){
          if (p.situationA == "increased by"){
            correctAnswer = `${p.numThree}/${p.denoOne+p.numOne}x${p.denoOne}`            
          } else {
           correctAnswer = `${p.numThree}/${p.denoOne-p.numOne}x${p.denoOne}`
          }
        }
        if (p.choiceBC == "C" && p.choiceTwo == "percentage"){
          if (p.situationB == "increased by"){
            correctAnswer = `${p.denoThree}/${100+p.percentageTwo}x100`
          } else {
            correctAnswer = `${p.denoThree}/${100-p.percentageTwo}x100`
          }
        }
        if (p.choiceBC == "C" && p.choiceTwo == "fraction"){
          if (p.situationB == "increased by"){
            correctAnswer = `${p.denoThree}/${p.denoTwo+p.numTwo}x${p.denoTwo}`
          } else {
            correctAnswer = `${p.denoThree}/${p.denoTwo-p.numTwo}x${p.denoTwo}`
        }
        }
      }


      if (level == 7){
        if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
        if (p.operator == "-") correctAnswer = p.numOne - p.numTwo
      }

      if (mulLevel == "multiples"){
        correctAnswer = p.numFive * state.numSix
      }

    console.log(correctAnswer, userInput.value)
      if (userInput.value == correctAnswer){
        console.log("correct")
        state.score++
        currentScore.textContent = state.score
        currentScore.classList.add("animate-right")
        setTimeout(() => currentScore.classList.remove("animate-right"), 331)
        state.numSix++
        arr.length = 0;
        commonMultipleArr.length = 0;
        commonMultipleArrTwo.length = 0;
        console.log(arr, commonMultipleArr, commonMultipleArrTwo);
        ctx.clearRect(0, 0, 400, 275);
        if ( level == 2.02 || level == 2.05 || level == 4.02 ){
          arr = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9];
          arr2.length = 0;
          console.log("Array reset", arr, arr2)
        }
        if ( level == 4.17) {
          arr = ["A","B","C","D","E","F","G","H","I"]
          arr2.length = 0;
          arr3.length = 0;
        }
        if ( level == 4.18){
          arr = ["A","B","C","D","O","F","G","H","I"]
        }
        
        console.log("new questions generated")
        updateProblems()
        
      } else {
        console.log("incorrect")

          state.mistake++
          if ( hardcore == 1){
            state.score = 0;
          } else if ( easy == 1 ) {
            console.log("Easy Mode");
          } else {
          if (state.score > 0 && state.score < 11){
            state.score = state.score - 1;
          }
          if (state.score >= 11 && state.score < 21){
            state.score = state.score - 2;
          }
          if (state.score >= 21 && state.score < 30){
            state.score = state.score - 3;
          }
          if (state.score >= 31 && state.score < 40){
            state.score = state.score - 4;
          }
          if (state.score >= 41 && state.score < 50){
            state.score = state.score - 5;
          }
        }
        currentScore.textContent = state.score
        currentMistake.textContent = state.mistake
        currentMistake.classList.add("animate-wrong")
        setTimeout(() => currentMistake.classList.remove("animate-wrong"), 331)
        mainContainer.classList.add("animate-wrong-container")
        setTimeout(() => mainContainer.classList.remove("animate-wrong-container"), 331)
         if ( level != 2.09 && level != 2.05 && level != 3.12 && level != 3.13 && level != 3.14 && level != 3.15 && level != 4.0){
          console.log("DO NOT CLEAR")
          userInput.value = ""
         }
         if ( level == 4.0 ){
           arr.length = 0;
         }



        //  help me!
        if ( level == 2.09){
          if (state.mistake > 5){
            ctx.fillText("am: 1 2 3 4 5 6 7 8 9 10 11 12", -115, -100) 
            ctx.fillText("pm: 12 11 10 9 8 7 6 5 4 3 2 1", -115, -80)
          }   
          if (state.mistake > 5 && p.situation == "later" && p.roll == "mins" && p.timeMinutes+p.changeMinutes >= 60 && state.score < 11){
            ctx.fillText("Overflow", -55, -60)
           }
           if (state.mistake > 5 && p.situation == "before" && p.roll == "mins" && p.timeMinutes-p.changeMinutes < 0 && state.score < 11){
            ctx.fillText("Insufficient", -55, -60)
           }
        }
      }
    
  }
}

// Step 1: generate number
function genNumbers(max){
  return Math.floor(Math.random()*max)
}
//////////////////////////// SET VALUES //////////////////////////////
// Step 2: Generate Problem
function genProblems(){

  if (level == 1.0){
    return {
      numOne: genNumbers(5),
      numTwo: genNumbers(5),
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 1.01){
    return {
      numThree: genNumbers(5)+1,
      numFour: genNumbers(4)+1,
      operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 1.02){
    return {
      numOne: genNumbers(10)+5,
      numTwo: genNumbers(4)+5,
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 1.03){
    return {
      numOne: genNumbers(10)+5,
      numTwo: genNumbers(4)+5,
      numThree: genNumbers(5)+1,
      numFour: genNumbers(4)+1,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 1.04){
    return {
      numOne: genNumbers(99)+1,
      numTwo: genNumbers(99)+1,
      numThree: genNumbers(99)+1,
      option: ["c","d","r"][genNumbers(3)],
      optionTwo: ["1","2"][genNumbers(2)],
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 1.05){
    return {
      numOne: genNumbers(99)+1,
      numTwo: genNumbers(99)+1,
      numThree: genNumbers(99)+1,
      option: ["c","d","r"][genNumbers(3)],
      optionTwo: ["1","2"][genNumbers(2)],
      optionThree: ["more","less"][genNumbers(2)]
    }
  }

  if (level == 1.06){
    return {
      numOne: genNumbers(9)+1,
      numTwo: genNumbers(9)+1,
      numThree: genNumbers(9)+1,
      numFour: genNumbers(9)+1,
      numTotal: 0,
      numDiff: 0,
      operator: ["+","-"][genNumbers(2)],
      operatorTwo: ["+","-"][genNumbers(2)],
      optionFinal: ["4","3","2","1"][genNumbers(4)]
    }
  }

  if ( level == 1.07 ){
    return {
      numOne: genNumbers(9)+1,
      numTwo: genNumbers(98)+1,
      numThree: genNumbers(9)+1,
      option: ["1","2"][genNumbers(2)]
    }
  }

  if (level == 2.0){
    return {
      numOne: genNumbers(40)+10,
      numTwo: genNumbers(40)+10,
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 2.01){
    return {
      numThree: genNumbers(5)+1,
      numFour: genNumbers(5)+5,
      operator: ["x","÷"][genNumbers(2)]
    }
  }

  if ( level == 2.02){
    return {
      totalNumber: 0,
      holdingNumber: undefined,
      place: undefined
    }
  }

  if (level == 2.03){
    return {
      numOne: genNumbers(40)+10,
      numTwo: genNumbers(40)+10,
      numThree: genNumbers(5)+1,
      numFour: genNumbers(5)+5,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if ( level == 2.05){
    return {
      choice: ["smallest","greatest"][genNumbers(2)],
      landingNumber: undefined,
      finalNumber: undefined,
      evenOrOdd: ["even", "odd"][genNumbers(2)]
    }
  }

  if (level == 2.07){
    return {
      numOne: genNumbers(5)+1,
      numThree: genNumbers(4)+5,
      numFour: genNumbers(4)+5,
      numTwo: genNumbers(10)+6,
      numFive: genNumbers(5)+1,
      numSix: genNumbers(5)+1,
      option: ["1","2"][genNumbers(2)],
      bigOrSmall: ["1","2"][genNumbers(2)]
    }
  }

  if (level == 2.08){
    return {
      operator: ["-","+"][genNumbers(2)],
      minHours: ["mins","h"][genNumbers(2)],
      minSeconds: undefined,
      numOne: genNumbers(10),
      numTwo: genNumbers(60)+1,
      numThree: genNumbers(10),
      numFour: genNumbers(60)+1
    }
  }

  if (level == 2.09){
    return {
      timeHours: genNumbers(24)+1,
      timeMinutes: genNumbers(60),
      changeHours: genNumbers(6)+1,
      changeMinutes: genNumbers(60),
      roll: ["hours","mins"][genNumbers(2)],
      situation: ["later","before"][genNumbers(2)],
      amOrPm: undefined
    }
  }

  if (level == 3.0){
    return {
      numOne: genNumbers(150)+100,
      numTwo: genNumbers(150)+100,
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 3.01){
    return {
      numThree: genNumbers(6)+5,
      numFour: genNumbers(6)+5,
      operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 3.02){
    return {
      numOne: genNumbers(97)+2,
      numMulti: [10, 100, 100][genNumbers(3)],
      numMultiTwo: [1,10][genNumbers(2)],
      numPlace: ["tens","hundreds","thousands"][genNumbers(3)],
      operator: ["x","÷"][genNumbers(2)],
      option: ["1","2","3","4"][genNumbers(4)]
    }
  }

  if (level == 3.03){
    return {
      numOne: genNumbers(150)+100,
      numTwo: genNumbers(150)+100,
      numThree: genNumbers(6)+5,
      numFour: genNumbers(6)+5,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 3.04){
    return {
      numOne: genNumbers(10)+1,
      numTwo: 1000,
      unitMeasurement: ["min","$","m","kg","km","ℓ"][genNumbers(6)],
      secondUnitMeasurement: 0
    }
  }

  if (level == 3.05){
    return {
      numOne: genNumbers(10)+1,
      numTwo: 1000,
      numThree: genNumbers(99)+1,
      numFour: genNumbers(1000)+1,
      numFive: genNumbers(58)+1,
      unitMeasurement: ["min","$","m","kg","km","ℓ"][genNumbers(6)],
      option: ["1","2"][genNumbers(2)],
      secondUnitMeasurement: 0
    }
  }

  if (level == 3.06){
    return {
      numOne: genNumbers(10)+1,
      numTwo: 1000,
      numThree: genNumbers(99)+1,
      numFour: genNumbers(1000)+1,
      numFive:  genNumbers(58)+1,
      unitMeasurement: ["min","kg","km","ℓ","$","m"][genNumbers(6)],
      option: ["1","2"][genNumbers(2)],
      secondUnitMeasurement: 0,
      remainder: 0
    }
  }

  if (level == 3.07){
    return {
      numOne: genNumbers(5)+1,
      numTwo: genNumbers(4)+2,
      numThree: genNumbers(5)+1,
    }
  }

  if (level == 3.08){
    return {
      hoursOne: genNumbers(24)+1,
      minsOne: genNumbers(60),
      hoursTwo: genNumbers(24)+1,
      minsTwo: genNumbers(60),
      amOrPmOne: "pm",
      amOrPmTwo: "pm"
    }
  }
  
  if (level == 3.09){
    return {
      numOne: genNumbers(9)+1,
      numTwo: genNumbers(9)+2,
      numMulti: genNumbers(6)+2,
      numLargest: 0
    }
  }

  if (level == 3.10 ){
    return {
      numOne: genNumbers(9)+1,
      numTwo: genNumbers(9)+2,
      numMulti: genNumbers(6)+2,
      numLargest: 0,
      option: ["1","2"][genNumbers(2)]
    }
  }

  if (level == 3.11 ){
    return {
      numOne: genNumbers(9)+1,
      numTwo: genNumbers(9)+2,
      numMulti: genNumbers(6)+2,
      numLargest: 0,
      option: ["1","2"][genNumbers(2)],
      optionFinal: ["1","2"][genNumbers(2)]
    }
  }

  if (level == 3.12){
    return {
      numOne: genNumbers(94)+5
    }
  }

  if (level == 3.13){
    return {
      numTwo: genNumbers(10)+1,
      numThree: genNumbers(5)+2,
      numFour: genNumbers(5)+5
    }
  }

  if ( level == 3.14){
    return {
      numFive: genNumbers(8)+5,
      numSix: [-1,1,2][genNumbers(3)]
    }
  }

  if ( level == 3.15){
    return {
      numOne: genNumbers(94)+5,

      numTwo: genNumbers(10)+1,
      numThree: genNumbers(5)+2,

      numFour: genNumbers(5)+5,
      numFive: genNumbers(8)+5,
      numSix: [-1,1,2][genNumbers(3)],

      optionFinal: [1,2,3][genNumbers(3)]
    }
  }

  if ( level == 3.16 ){
    return {
      arcAngle: genNumbers(140)+20,
      acuteOrObtuse: ["acute","obtuse"][genNumbers(2)],
      roll: [1,2][genNumbers(2)]
    }
  
  }

  if ( level == 3.17 ){
    return {
      // pointX1: genNumbers(70)+30,
      pointY1: genNumbers(80)+20,

      // pointX2: genNumbers(3),
      pointY2: genNumbers(80)+20,

      pointY3: genNumbers(80)+20,

      rotation1: genNumbers(360),
      rotation2: [90, 270][genNumbers(2)],
      translateX: genNumbers(100)-50,
      translateY: genNumbers(100)-50,

      translateX2: genNumbers(100)-50,
      translateY2: genNumbers(100)-50,

      translateX3: genNumbers(100)-50,
      translateY3: genNumbers(100)-50,
      
      labelABC: ["A","B","C"][genNumbers(3)],
      labelDEF: ["D","E","F"][genNumbers(3)],
      labelGHI: ["G","H","I"][genNumbers(3)],
      labelJKL: ["J","K","L"][genNumbers(3)],
      labelMNO: ["M","N","O"][genNumbers(3)],
      labelPQR: ["P","Q","R"][genNumbers(3)],

      roll: [1,2][genNumbers(3)],

      parallelOrPerpendicular: ["parallel","perpendicular"][genNumbers(2)]
    } 
  }

  if ( level == 3.18 ){
    return {
    shapeChoice: ["rectangle", "square"][genNumbers(2)],
    squareCoord: genNumbers(50)+30,

    rectLengthCoord: genNumbers(5)*10+50,
    rectBreadthCoord: genNumbers(5)*10+10,

    squareSide: genNumbers(12)+2,
    rectLength: undefined,
    rectBreadth: undefined,

    unitMeasurement: ["cm","m","km"][genNumbers(3)],
    areaOrPerimeter: ["area", "perimeter"][genNumbers(2)]
    }
  }

  if ( level == 4.0){
    return{
      numOne: genNumbers(59)+3
    }
  }

  if (level == 4.01){
    return {
    numOne: genNumbers(99998)+100,
    placeValue: ["tens","hundreds","thousands","ten thousands"][genNumbers(4)]
    }
  }

  if (level == 4.02){
    return {
    holdingNumber: 0,
    finalNumber: 0,
    totalNumber: 0,
    placeValue: ["ones", "tens","hundreds","thousands","tenths","hundredths","thousandths"][genNumbers(6)]
    }
  }

  if ( level == 4.03){
    return {
      numOne: genNumbers(99999)+1,
      numTwo: 0,
      placeValue: ["1 decimal place","2 decimal places","Whole Number"][genNumbers(3)],
      numFinal: 0
    }
  }

  if (level == 4.04){
    return {
    numOne: genNumbers(999)+1,
    numTwo: [10,100,1000][genNumbers(3)]
    }
  }

  if (level == 4.05){
    return {
    numOne: genNumbers(999)+1,
    numTwo: [1,10,100][genNumbers(3)],
    numThree: [10,100,1000][genNumbers(3)],
    operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 4.06){
    return {
    numOne: genNumbers(98)+1,
    numTwo: genNumbers(998)+1,
    numThree: genNumbers(98)+1,
    numFour:  genNumbers(58)+1,
    numMulti: 1000,
    numSix: genNumbers(98)+1,
    option: ["1","2"][genNumbers(2)],
    unitMeasurement: ["ℓ","kg","km","$","m"][genNumbers(5)],
    secondUnitMeasurement: 0
    }
  }

  if (level == 4.07){
    return {
    numOne: genNumbers(98)+1,
    numTwo: genNumbers(998)+1,
    numThree: genNumbers(98)+1,
    numFour:  genNumbers(8)+1,
    numFive: genNumbers(8)+1,
    numSix: genNumbers(98)+1,
    option: ["1","2"][genNumbers(2)],
    optionTwo: ["1","2"][genNumbers(2)],
    unitMeasurement: ["m","$","ℓ","km","kg"][genNumbers(5)],
    secondUnitMeasurement: 0
    }
  }

  if (level == 4.08){
    return {
    numOne: genNumbers(98)+1,
    numTwo: genNumbers(998)+1,
    numThree: genNumbers(98)+1,
    numFour:  genNumbers(8)+1,
    numFive: genNumbers(8)+1,
    numSix: genNumbers(98)+1,
    option: ["1","2"][genNumbers(2)],
    optionTwo: ["1","2"][genNumbers(2)],
    optionFinal:  ["1","2"][genNumbers(2)],
    unitMeasurement: ["m","$","ℓ","km","kg"][genNumbers(5)],
    secondUnitMeasurement: 0
    }
  }

  if (level == 4.09){
    return {
    numOne: genNumbers(9)+1,
    numTwo: genNumbers(9)+2,
    numThree: genNumbers(10)+2,
    numFour: 0
    }
  }

  if (level == 4.10){
    return {
    numOne: genNumbers(9)+1,
    numTwo: genNumbers(9)+2,
    numThree: genNumbers(10)+2,
    numFour: 0
    }
  }

  if (level == 4.11){
    return {
    numOne: genNumbers(9)+1,
    numTwo: genNumbers(9)+2,
    numThree: genNumbers(10)+2,
    numFour: 0,
    optionFinal: ["1","2"][genNumbers(2)]
    }
  }

  if (level == 4.12){
    return {
    numOne: genNumbers(8)+1,
    numTwo: genNumbers(8)+2,
    numMulti: genNumbers(8)+2,
    }
  }

  if (level == 4.13){
    return {
    numOne: genNumbers(8)+2,
    numTwo: genNumbers(8)+2,
    numMulti: genNumbers(99)+2,
    options: ["have left", "use"][genNumbers(2)]
    }
  }

  if (level == 4.14){
    return {
    numOne: genNumbers(8),
    numTwo: genNumbers(8)+1,
    numThree: genNumbers(8)+1,
    numFour: genNumbers(999999)+1,
    unitMeasurement: ["m","ℓ","km","kg"][genNumbers(4)],
    option: ["r","f","v"][genNumbers(3)],
    optionTwo: genNumbers(2)+1
    }
  }

  if (level == 4.15){
    return {
    numOne: genNumbers(8)+1,
    numTwo: genNumbers(8)+1,
    numThree: genNumbers(10)+2,
    numFour: genNumbers(10)+2,
    numFive: genNumbers(9999)+100,
    numSix: genNumbers(7)+2,
    unitMeasurement: ["m","ℓ","km","kg"][genNumbers(4)],
    option: ["1","2","3","4","5"][genNumbers(5)]
    }
  }

  if ( level == 4.16){
    return {
      placeValue: ["tens","hundreds","thousands"][genNumbers(3)],
      numOne: genNumbers(99999)+1,
      choice: ["Smallest","Largest"][genNumbers(2)]
    }
  }

  if ( level == 4.17){
    return {
      choice: ["A","B","C","D", "E", "F","G","H","I"][genNumbers(9)],
      compass: ["north","north-east","east","south-east","south","south-west","west","north-west"][genNumbers(8)],
      roll: [1, 2][genNumbers(2)],
     

    }
  }

  if ( level == 4.18){
    return {
      choice: ["A","B","C","D","F","G","H","I"][genNumbers(8)],
      roll: [2, 1][genNumbers(2)],
      angleTurn: (genNumbers(8)+1)*45,
      direction: ["clockwise","counter-clockwise"][genNumbers(2)],
    }
  }

  if ( level == 4.19 ){
    return {
      // square
      coordSquare: genNumbers(70)+70,
      squareRoll: [1, 2, 3][genNumbers(3)],

      coordRect1: genNumbers(70)+70,
      coordRect2: genNumbers(50)+80,
      rectRoll:  [1, 2, 3][genNumbers(3)],
      angle: undefined,
      angleDegrees: undefined,

      angleStraight: genNumbers(160)+10,
      straightRoll: [1, 2][genNumbers(2)],

      angleCircle: genNumbers(360)+10,
      circleRoll: [2, 1][genNumbers(2)],

      shapeRoll: ["circle","straight","Rectangle","Square"][genNumbers(4)]
    
    }
  }

  if ( level == 5.0 ){
    return {
      pointX1: genNumbers(70)+50,
      pointY1: genNumbers(40)+40,
      // pointX2: genNumbers(3),
      // pointY2: genNumbers(4),
      rotation: genNumbers(360),
      translateX: genNumbers(200)+100,
      translateY: genNumbers(40)+137.5,
      labelABC: ["A","B","C"][genNumbers(3)],
      labelDEF: ["D","E","F"][genNumbers(3)],
      labelGHI: ["G","H","I"][genNumbers(3)],
      labelJKL: ["J","K","L"][genNumbers(3)],
      sidesBH: ["base","height", "base2", "height2"][genNumbers(4)]
    } 
  }

  if (level == 5.01){
    return {
    numOne: genNumbers(5)+1,
    numTwo: genNumbers(5)+6,
    numThree: genNumbers(5)+1,
    numFour: genNumbers(5)+6,
    numFive: genNumbers(5)+1,
    numSix: genNumbers(5)+6,
    varA: 0,
    varB: 0,
    varTotal: 0,
    letterBTotal: ["B","A and B"][genNumbers(2)],
    letterAB: ["A","B"][genNumbers(2)],
    letterLeftRemoved: ["left", "removed"][genNumbers(2)]
    }
  }

  if (level == 5.02) {
    return {
      numOne: genNumbers(5)+1,
      numTwo: genNumbers(5)+1,
      numThree: genNumbers(5)+1,
      numFour: genNumbers(5)+1,
      sentenceChoice: ["is equal to","the same as","="][genNumbers(3)]
    }
  }

  if (level == 5.03){
    return {
    numOne: (genNumbers(10)+1)*5,
    numTwo: (genNumbers(18)+1)*5,
    numThree: (genNumbers(18)+1)*5,
    varA: 0,
    varB: 0,
    letterChange: ["increase", "decrease", "of"][genNumbers(3)],
    letterChangeTwo: ["increase", "decrease", "of"][genNumbers(3)],
    letterAB: ["A","B"][genNumbers(2)]
    }
  }

  if (level == 5.04){
    return {
      numOne: genNumbers(5)+1,
      numTwo: genNumbers(5)+6,
      numThree: (genNumbers(18)+1)*5,
      numFour: (genNumbers(18)+1)*5,
      varA: 0,
      varB: 0,
      letterBTotal: ["B","A and B"][genNumbers(2)],
      letterChange: ["increase", "decrease", "of"][genNumbers(3)],
      letterChangeTwo: ["increase", "decrease", "of"][genNumbers(3)],
      letterAB: ["A","B"][genNumbers(2)],
      option: [":","/"][genNumbers(2)]
    }
  }

  if ( level == 5.05 ){
    return {

      // triangle A
      triA1y: genNumbers(40)+40,

      triA2y: undefined,

      triA3x: genNumbers(40)+40,
      triA3y: undefined,

      // triangle B

      triB2y: undefined,
      triB3x: undefined,
      triB3y: undefined,

      labelABC: ["A","B","C"][genNumbers(3)],
      labelDEF: ["D","E","F"][genNumbers(3)],
      labelGHI: ["G","H","I"][genNumbers(3)],
      labelJKL: ["J","K","L"][genNumbers(3)],
      labelMNO: ["M","N","O"][genNumbers(3)],

      question: ["base", "height", "base2", "height2", "base3", "height3"][genNumbers(6)],

      rotation : genNumbers(360)
    } 
  }

  if ( level == 5.06){
    return {
    roll: [3, 2, 1][genNumbers(1)],

    rightAngleTriX1 : -(genNumbers(4)+3)*15,
    rightAngleTriX2 : (genNumbers(4)+3)*20,
    rightAngleTriY : -(genNumbers(5)+2)*20,
    rightAngleRoll : [1, 2][genNumbers(2)],
    angleLabel: undefined,

    equiAngleTriX: (genNumbers(4)+3)*15,

    isosTriX: (genNumbers(4)+4)*15,
    isosAngle: ((genNumbers(5)+3)*9),
    isosRoll: [2, 1][genNumbers(2)],
    isosAngle2Label: undefined,

    triRoll: [3, 2, 1][genNumbers(3)],
    triAx : (genNumbers(4)+3)*20,
    triBx : (genNumbers(4)+3)*20,
    triCx : (genNumbers(14)-7)*15,
    triCy : (genNumbers(4)+4)*15,
    triLeftAngleD : undefined,
    triRightAngleD : undefined,

    triDx : (genNumbers(5)+1)*5,
    tri2LeftAngleD: undefined,
    tri2RightAndleD: undefined,
    tri3LeftAngleD: undefined,
    tri3RightAndleD: undefined
   }
  }

  if ( level == 5.07) {
    return {
      roll: ["corresponding","opposite"][genNumbers(1)],
      oppositeRotation: [genNumbers(120)+30],
      finalRotation: [genNumbers(180)-90],

      corrRoll: [2, 1][genNumbers(2)],
      correspondingTranslateY: (genNumbers(12)+8)*5,
      corrAngleDisplay: undefined
    }
  }

  if ( level == 5.08 ){
    return {
      roll: ["discount","increase","decrease"][genNumbers(3)],
      rollChange: [1, 2][genNumbers(2)],
      change: (genNumbers(10)+1),
      totalAmount: genNumbers(10)+10
    }
  }

  if ( level == 6.0){
    return {
      percentageOne: (genNumbers(18)+1)*5,
      percentageTwo: (genNumbers(18)+1)*5,
      percentageThree: (genNumbers(18)+1)*5,
      ratioOne: (genNumbers(10)+1),
      ratioTwo: (genNumbers(10)+1),
      ratioThree: (genNumbers(10)+1),
      numOne: (genNumbers(10)+1),
      denoOne: (genNumbers(10)+1),
      numTwo: (genNumbers(10)+1),
      denoTwo: (genNumbers(10)+1),
      numThree: (genNumbers(10)+1),
      denoThree: (genNumbers(10)+1),
      choiceOne: ['percentage','fraction'][genNumbers(2)],
      choiceTwo: ['percentage','fraction'][genNumbers(2)],
      choiceThree: ['ratio','fraction'][genNumbers(2)],
      choiceBC: ["B","C"][genNumbers(2)],
      sentenceA: 0,
      sentenceB: 0,
      sentenceC: 0,
      sentenceD: 0,
      situationA: ["used","increased by"][genNumbers(2)],
      situationB: ["used","increased by"][genNumbers(2)]
    }
  }

  if (level == 6.3){
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

function levelBox(){
    scoreNeededCl.textContent = scoreNeeded;
    console.log(`Level ${level} selected`)
    levelSetting.classList.add('hidden')
    multiplesSettingCl.classList.add('hidden');
    startBox.classList.remove('hidden')
    levelLabel.innerHTML = `You are attempting Level ${level}`
}

// function draw(){
  // state.currentDrawing = genProblems();
  // const p = state.currentDrawing

  // const canvas = document.getElementById("canvas1");
  // const ctx = canvas.getContext("2d");

  // ctx.translate(p.translateX, p.translateY);
  // ctx.rotate(p.rotation * Math.PI / 180);

  // // label
  // ctx.font = '1em serif'
  // ctx.fillStyle = "red";
  // ctx.fillText(p.labelABC, 0, 10)
  // ctx.fillText(p.labelDEF, 0, p.pointY1+10)
  // ctx.fillText(p.labelGHI, p.pointX1+3, 11)


  //   // triangle
  // ctx.fillStyle = 'black';
  // ctx.lineWidth = 1;
  // ctx.beginPath();
  // ctx.moveTo(13, 10);
  // ctx.lineTo(13, p.pointY1);
  // ctx.lineTo(p.pointX1, 10);
  // ctx.closePath();
  // ctx.stroke();
// }

//////////////////////////// SET CLICK ///////////////////////////////

for (let i = 0; i <  settingButton.length; i++){

  settingButton[i].addEventListener("dblclick", function(){
    buttonLevel = this.innerHTML
    mulLevel = "nil"

    buttonLevelSetting();
    levelBox();
    });
  }

  hardcoreMode.addEventListener('click', function(){
    if (hardcore == 0 ){
      hardcore = 1;
      easy = 0;
      mainBox.style.borderColor = "red"
      levelSetting.style.borderColor = "red"
      // cutoff = 600;
    } else {
      hardcore = 0;
      mainBox.style.borderColor = "black"
      levelSetting.style.borderColor = "black"
      // cutoff = 600;
    }
    console.log(hardcore)
  })

  easyMode.addEventListener('click', function(){
    if ( easy == 0 ){
      easy = 1;
      hardcore = 0;
      mainBox.style.borderColor = "#39FF14"
      levelSetting.style.borderColor = "#39FF14"
      // cutoff = 99999;
    } else {
      easy = 0;
      mainBox.style.borderColor = "black"
      levelSetting.style.borderColor = "black"
      // cutoff = 600;
    }
    console.log(hardcore)
  })


  // SINGLE CLICK
  // for (let i = 0; i <  settingButton.length; i++){
  //   settingButton[i].addEventListener("click", function(){
  //     buttonLevel = this.innerHTML

  //     switch(buttonLevel){ 
  //       case "Level 1.0":
  //         level = 1.0
  //         levelBtn1Zero.classList.toggle("btn-select")
  //         if (levelBtn1ZeroCount == 0){
  //           levelBtn1ZeroCount = 1
  //         } else {
  //           levelBtn1ZeroCount = 0
  //         }
  //       break

  //       case "Level 1.01":
  //         level = 1.01;

  //       break;

  //       case "Level 1.02":
  //         level = 1.02;

  //       break;
  //     }
      
  //     let indexLevel = levelArr.indexOf(level)
  //     console.log(indexLevel)

  //     if (indexLevel >= 0){
  //       levelArr.splice(indexLevel, 1);
  //     } else {
  //       levelArr.push(level);
  //     }
      
  //     console.log(levelArr);
  //     console.log("single click detected")
  //   })
  // }

  // LEVEL SETTINGS
  function buttonLevelSetting(){
    // if (levelArr.length != 0){
    //   buttonLevel = `Level ${levelArr[0]}`
    // }
    switch (buttonLevel) {
      case "Level 1.0":
        level = 1.0;
        scoreNeeded = 50;
        gold = highScore1DotZero.time
        silver = highScore1DotZero.time+((cutoff-highScore1DotZero.time)/3)
        bronze = highScore1DotZero.time+((cutoff-highScore1DotZero.time)/3)*2
        highScoreName.innerHTML = highScore1DotZero.name
        highScoreTime.innerHTML = highScore1DotZero.time
        highScoreMistakes.innerHTML = highScore1DotZero.mistake
      break;
  
      case "Level 1.01":
        level = 1.01;
        scoreNeeded = 50;
        gold = highScore1DotZero1.time
        silver = highScore1DotZero1.time+((cutoff-highScore1DotZero1.time)/3)
        bronze = highScore1DotZero1.time+((cutoff-highScore1DotZero1.time)/3)*2
        highScoreName.innerHTML = highScore1DotZero1.name
        highScoreTime.innerHTML = highScore1DotZero1.time
        highScoreMistakes.innerHTML = highScore1DotZero1.mistake
        break;
  
      case "Level 1.02":
        level = 1.02;
        scoreNeeded = 50;
        highScoreName.innerHTML = highScore1DotZero2.name
        highScoreTime.innerHTML = highScore1DotZero2.time
        highScoreMistakes.innerHTML = highScore1DotZero2.mistake
        break;
  
      case "Level 1.03":
        level = 1.03;
        scoreNeeded = 50;
        gold = highScore1DotZero3.time
        silver = highScore1DotZero3.time+((cutoff-highScore1DotZero.time3)/3)
        bronze = highScore1DotZero3.time+((cutoff-highScore1DotZero.time3)/3)*2
        highScoreName.innerHTML = highScore1DotZero3.name
        highScoreTime.innerHTML = highScore1DotZero3.time
        highScoreMistakes.innerHTML = highScore1DotZero3.mistake
        break;
      
      case "Level 1.04":
        level = 1.04;
        scoreNeeded = 30;
        gold = highScore1DotZero4.time
        highScoreName.innerHTML = highScore1DotZero4.name
        highScoreTime.innerHTML = highScore1DotZero4.time
        highScoreMistakes.innerHTML = highScore1DotZero5.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.innerHTML = `
        1 + 2 = 3</br>
        c ± d = r </br>
        Use: 'c+', 'c-', 'd-', 'r+' or 'r-' `
        break;
  
      case "Level 1.05":
        level = 1.05;
        scoreNeeded = 30;
        gold = highScore1DotZero5.time
        silver = highScore1DotZero5.time+((cutoff-highScore1DotZero5.time)/3)
        bronze = highScore1DotZero5.time+((cutoff-highScore1DotZero5.time)/3)*2
        highScoreName.innerHTML = highScore1DotZero5.name
        highScoreTime.innerHTML = highScore1DotZero5.time
        highScoreMistakes.innerHTML = highScore1DotZero5.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.innerHTML = "Answer using</br> 'c+', 'c-', 'd-', 'r+' or 'r-' "
        break;
  
      case "Level 1.06":
        level = 1.06;
        scoreNeeded = 30;
        gold = 436;
        highScoreName.innerHTML = highScore1DotZero6.name
        highScoreTime.innerHTML = highScore1DotZero6.time
        highScoreMistakes.innerHTML = highScore1DotZero5.mistake
        instructions.textContent = ""
        break;
  
      case "Level 1.07":
        level = 1.07;
        scoreNeeded = 30;
        gold = highScore1DotZero7.time
        silver = highScore1DotZero7.time+((cutoff-highScore1DotZero7.time)/3)
        bronze = highScore1DotZero7.time+((cutoff-highScore1DotZero7.time)/3)*2
        highScoreName.innerHTML = highScore1DotZero7.name
        highScoreTime.innerHTML = highScore1DotZero7.time
        highScoreMistakes.innerHTML = highScore1DotZero7.mistake
        displayProblem.style.fontSize = "25px";
        document.querySelector("#user-input").style.marginTop = "100px";
      break  
  
      case "Level 2.0":
        level = 2.0;
        scoreNeeded = 50;
        highScoreName.innerHTML = highScore2DotZero.name
        highScoreTime.innerHTML = highScore2DotZero.time
        highScoreMistakes.innerHTML = highScore2DotZero.mistake
      break;
  
      case "Level 2.01":
        level = 2.01;
        scoreNeeded = 50;
        highScoreName.innerHTML = highScore2DotZero1.name
        highScoreTime.innerHTML = highScore2DotZero1.time
        highScoreMistakes.innerHTML = highScore2DotZero1.mistake
      break;
  
      case "Level 2.02":
        level = 2.02;
        scoreNeeded = 30;
        gold = highScore2DotZero2.time
        silver = highScore2DotZero2.time+((cutoff-highScore2DotZero2.time)/3)
        bronze = highScore2DotZero2.time+((cutoff-highScore2DotZero2.time)/3)*2
        highScoreName.innerHTML = highScore2DotZero2.name
        highScoreTime.innerHTML = highScore2DotZero2.time
        highScoreMistakes.innerHTML = highScore2DotZero2.mistake
        displayProblem.style.fontSize = "25px";
        digit = prompt("How many digits? (3-7 only)")
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      break;
  
      case "Level 2.03":
        level = 2.03;
        scoreNeeded = 50;
        gold = highScore2DotZero3.time;
        highScoreName.innerHTML = highScore2DotZero3.name
        highScoreTime.innerHTML = highScore2DotZero3.time
        highScoreMistakes.innerHTML = highScore2DotZero3.mistake
      break;
  
      case "Level 2.05":
        level = 2.05;
        scoreNeeded = 20;
        gold = highScore2DotZero5.time
        silver = highScore2DotZero5.time+((cutoff-highScore2DotZero5.time)/3)
        bronze = highScore2DotZero5.time+((cutoff-highScore2DotZero5.time)/3)*2
        digit = prompt("How many digits? (3-7 only)")
        arr = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9]
        highScoreName.innerHTML = highScore2DotZero5.name
        highScoreTime.innerHTML = highScore2DotZero5.time
        highScoreMistakes.innerHTML = highScore2DotZero5.mistake
        instructions.textContent = "Form the Number"
        displayProblem.style.fontSize = "25px";
        document.querySelector("#user-input").setAttribute("type","text");
      break;
  
      case "Level 2.07":
        level = 2.07;
        scoreNeeded = 50;
        gold = highScore2DotZero7.time
        silver = highScore2DotZero7.time+((cutoff-highScore2DotZero7.time)/3)
        bronze = highScore2DotZero7.time+((cutoff-highScore2DotZero7.time)/3)*2
        highScoreName.innerHTML = highScore2DotZero7.name
        highScoreTime.innerHTML = highScore2DotZero7.time
        highScoreMistakes.innerHTML = highScore2DotZero7.mistake
        wholeNumberContainer.classList.add('hidden');
        fractionsContainer.classList.remove('hidden');
        instructions.textContent = "Answer using '1' or '2' only"
      break;

      case "Level 2.08":
        level = 2.08;
        scoreNeeded = 20;
        gold = highScore2DotZero8.time;
        highScoreName.innerHTML = highScore2DotZero8.name
        highScoreTime.innerHTML = highScore2DotZero8.time
        highScoreMistakes.innerHTML = highScore2DotZero8.mistake
        displayProblem.style.fontSize = "25px";
        document.querySelector("#user-input").setAttribute("type","text");
        document.querySelector("#user-input").style.width = "300px"
      break;  

      case "Level 2.09":
        level = 2.09;
        scoreNeeded = 30;
        gold = highScore2DotZero9.time
        silver = highScore2DotZero9.time+((cutoff-highScore2DotZero9.time)/3)
        bronze = highScore2DotZero9.time+((cutoff-highScore2DotZero9.time)/3)*2
        highScoreName.innerHTML = highScore2DotZero9.name
        highScoreTime.innerHTML = highScore2DotZero9.time
        highScoreMistakes.innerHTML = highScore2DotZero9.mistake
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
        document.querySelector("#user-input").style.width = "300px"
      break;  
  
      case "Level 3.0":
        level = 3.0;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore3DotZero.name
        highScoreTime.innerHTML = highScore3DotZero.time
        highScoreMistakes.innerHTML = highScore3DotZero.mistake
        break;
  
      case "Level 3.01":
        level = 3.01;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore3DotZero1.name
        highScoreTime.innerHTML = highScore3DotZero1.time
        highScoreMistakes.innerHTML = highScore3DotZero1.mistake
        break;
      
      case "Level 3.02":
        level = 3.02;
        scoreNeeded = 30;
        gold = 141
        silver = 230;
        highScoreName.innerHTML = highScore3DotZero2.name
        highScoreTime.innerHTML = highScore3DotZero2.time
        highScoreMistakes.innerHTML = highScore3DotZero2.mistake
        document.querySelector("#user-input").setAttribute("max","9999999")
        break;
          
      case "Level 3.03":
        level = 3.03;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore3DotZero3.name
        highScoreTime.innerHTML = highScore3DotZero3.time
        highScoreMistakes.innerHTML = highScore3DotZero3.mistake
        break;
  
      case "Level 3.04":
        level = 3.04;
        scoreNeeded = 30;
        gold = 284
        silver = 521;
        highScoreName.innerHTML = highScore3DotZero4.name
        highScoreTime.innerHTML = highScore3DotZero4.time
        highScoreMistakes.innerHTML = highScore3DotZero4.mistake
        break;
  
      case "Level 3.05":
        level = 3.05;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore3DotZero5.name
        highScoreTime.innerHTML = highScore3DotZero5.time
        highScoreMistakes.innerHTML = highScore3DotZero5.mistake
        break;
  
      case "Level 3.06":
        level = 3.06;
        scoreNeeded = 30;
        gold = highScore3DotZero6.time
        highScoreName.innerHTML = highScore3DotZero6.name
        highScoreTime.innerHTML = highScore3DotZero6.time
        highScoreMistakes.innerHTML = highScore3DotZero6.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.innerHTML = 
        `Do not leave any spaces.</br>
        Answer using capital 'L' and 'ml' for volume`
        helpMe.textContent = `Include units`
        break;
  
      case "Level 3.07":
        level = 3.07;
        scoreNeeded = 30;
        gold = highScore3DotZero7.time
        highScoreName.innerHTML = highScore3DotZero7.name
        highScoreTime.innerHTML = highScore3DotZero7.time
        highScoreMistakes.innerHTML = highScore3DotZero7.mistake
        instructions.textContent = "Find the Lowest Common Multiple of the 3 numbers"
        document.querySelector("#user-input").setAttribute("type","text");
        break;

      case "Level 3.08":
        level = 3.08;
        scoreNeeded = 20;
        gold = highScore3DotZero8.time;
        highScoreName.innerHTML = highScore3DotZero8.name
        highScoreTime.innerHTML = highScore3DotZero8.time
        highScoreMistakes.innerHTML = highScore3DotZero8.mistake
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
      break;  
    
      case "Level 3.09":
        level = 3.09;
        scoreNeeded = 30;
        gold = highScore3DotZero9.time;
        highScoreName.innerHTML = highScore3DotZero9.name
        highScoreTime.innerHTML = highScore3DotZero9.time
        highScoreMistakes.innerHTML = highScore3DotZero9.mistake
        wholeNumberContainer.classList.add('hidden');
        fractionsContainerTwo.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.textContent = "Formate: 2/3"
        break;
  
      case "Level 3.10":
          level = 3.10;
          scoreNeeded = 30;
          highScoreName.innerHTML = highScore3DotZero10.name
          highScoreTime.innerHTML = highScore3DotZero10.time
          highScoreMistakes.innerHTML = highScore3DotZero10.mistake
          wholeNumberContainer.classList.add('hidden');
          fractionsContainerTwo.classList.remove('hidden');
          document.querySelector("#user-input").setAttribute("type","text");
          instructions.textContent = ""
          break;
      
      case "Level 3.11":
        level = 3.11;
        scoreNeeded = 30;
        gold = highScore3DotZero11.time
        silver = highScore3DotZero11.time+((cutoff-highScore3DotZero11.time)/3)
        bronze = highScore3DotZero11.time+((cutoff-highScore3DotZero11.time)/3)*2
        highScoreName.innerHTML = highScore3DotZero11.name
        highScoreTime.innerHTML = highScore3DotZero11.time
        highScoreMistakes.innerHTML = highScore3DotZero11.mistake
        wholeNumberContainer.classList.add('hidden');
        fractionsContainerTwo.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.textContent = ""
        break;   
      
      case "Level 3.12":
        level = 3.12;
        scoreNeeded = 20;
        gold = 72;
        highScoreName.innerHTML = highScore3DotZero12.name
        highScoreTime.innerHTML = highScore3DotZero12.time
        highScoreMistakes.innerHTML = highScore3DotZero12.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        displayProblem.style.marginTop = "0";
        instructions.textContent = "Form an Equation from the pattern"
      break;      
  
      case "Level 3.13":
        level = 3.13;
        scoreNeeded = 20;
        gold = 471;
        highScoreName.innerHTML = highScore3DotZero13.name
        highScoreTime.innerHTML = highScore3DotZero13.time
        highScoreMistakes.innerHTML = highScore3DotZero13.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        displayProblem.style.marginTop = "0";
        instructions.textContent = "Form an Equation using 'n' from the pattern and provide an answer"
      break;
  
      case "Level 3.14":
        level = 3.14;
        scoreNeeded = 20;
        gold = highScore3DotZero14.time;
        highScoreName.innerHTML = highScore3DotZero14.name
        highScoreTime.innerHTML = highScore3DotZero14.time
        highScoreMistakes.innerHTML = highScore3DotZero14.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        displayProblem.style.marginTop = "0";
        instructions.textContent = "Form an Equation from the pattern and provide an answer"
      break;
  
      case "Level 3.15":
        level = 3.15;
        scoreNeeded = 20;
        gold = highScore3DotZero15.time;
        silver = highScore3DotZero15.time+((cutoff-highScore3DotZero15.time)/3)
        bronze = highScore3DotZero15.time+((cutoff-highScore3DotZero15.time)/3)*2
        highScoreName.innerHTML = highScore3DotZero15.name
        highScoreTime.innerHTML = highScore3DotZero15.time
        highScoreMistakes.innerHTML = highScore3DotZero15.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        displayProblem.style.marginTop = "0";
        instructions.textContent = "Form an Equation using 'n' from the pattern and provide an answer"
      break;
  
      case "Level 3.16":
        level = 3.16;
        scoreNeeded = 20;
        gold = highScore3DotZero16.time;
        highScoreName.innerHTML = highScore3DotZero16.name
        highScoreTime.innerHTML = highScore3DotZero16.time
        highScoreMistakes.innerHTML = highScore3DotZero16.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;
  
      case "Level 3.17":
        level = 3.17;
        scoreNeeded = 20;
        gold = highScore3DotZero17.time
        silver = highScore3DotZero17.time+((cutoff-highScore3DotZero17.time)/3)
        bronze = highScore3DotZero17.time+((cutoff-highScore3DotZero17.time)/3)*2
        highScoreName.innerHTML = highScore3DotZero17.name
        highScoreTime.innerHTML = highScore3DotZero17.time
        highScoreMistakes.innerHTML = highScore3DotZero17.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;
  
      case "Level 3.18":
        level = 3.18;
        scoreNeeded = 20;
        gold = highScore3DotZero18.time
        silver = highScore3DotZero18.time+((cutoff-highScore3DotZero18.time)/3)
        bronze = highScore3DotZero18.time+((cutoff-highScore3DotZero18.time)/3)*2
        highScoreName.innerHTML = highScore3DotZero18.name
        highScoreTime.innerHTML = highScore3DotZero18.time
        highScoreMistakes.innerHTML = highScore3DotZero18.mistake
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;
  
      case "Level 4.0":
        level = 4.0;
        scoreNeeded = 10;
        gold = highScore4DotZero.time
        silver = highScore4DotZero.time+((cutoff-highScore4DotZero.time)/3)
        bronze = highScore4DotZero.time+((cutoff-highScore4DotZero.time)/3)*2
        highScoreName.innerHTML = highScore4DotZero.name
        highScoreTime.innerHTML = highScore4DotZero.time
        highScoreMistakes.innerHTML = highScore4DotZero.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        instructions.innerHTML = 
        `List the factors in pairs</br>
        in ascending order.
        `
      break;
  
      case "Level 4.01":
        level = "4.01";
        scoreNeeded = 30;
        gold = 229;
        highScoreName.innerHTML = highScore4DotZero1.name
        highScoreTime.innerHTML = highScore4DotZero1.time
        highScoreMistakes.innerHTML = highScore4DotZero1.mistake
        document.querySelector("#user-input").setAttribute("max","100000")
        break; 
        
      case "Level 4.02":
        level = "4.02";
        scoreNeeded = 30;
        gold = highScore4DotZero1.time;
        highScoreName.innerHTML = highScore4DotZero1.name
        highScoreTime.innerHTML = highScore4DotZero1.time
        highScoreMistakes.innerHTML = highScore4DotZero1.mistake
        displayProblem.style.fontSize = "25px";
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      break;    
      
      case "Level 4.03":
        level = "4.03";
        scoreNeeded = 30;
        gold = 264;
        highScoreName.innerHTML = highScore4DotZero3.name
        highScoreTime.innerHTML = highScore4DotZero3.time
        highScoreMistakes.innerHTML = highScore4DotZero3.mistake
        document.querySelector("#user-input").setAttribute("step","0.000001")
      break;
  
      case "Level 4.04":
        level = 4.04;
        scoreNeeded = 30;
        gold = 310
        highScoreName.innerHTML = highScore4DotZero4.name
        highScoreTime.innerHTML = highScore4DotZero4.time
        highScoreMistakes.innerHTML = highScore4DotZero4.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        break;
  
      case "Level 4.05":
        level = 4.05;
        scoreNeeded = 30;
        gold = highScore4DotZero5.time
        silver = highScore4DotZero5.time+((cutoff-highScore4DotZero5.time)/3)
        bronze = highScore4DotZero5.time+((cutoff-highScore4DotZero5.time)/3)*2
        highScoreName.innerHTML = highScore4DotZero5.name
        highScoreTime.innerHTML = highScore4DotZero5.time
        highScoreMistakes.innerHTML = highScore4DotZero5.mistake
        document.querySelector("#user-input").setAttribute("step","0.000001")
        break;  
  
      case "Level 4.06":
        level = 4.06;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore4DotZero6.name
        highScoreTime.innerHTML = highScore4DotZero6.time
        highScoreMistakes.innerHTML = highScore4DotZero6.mistake
        document.querySelector("#user-input").setAttribute("step","0.000001")
        break;
       
      case "Level 4.07":
        level = 4.07;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore4DotZero7.name
        highScoreTime.innerHTML = highScore4DotZero7.time
        highScoreMistakes.innerHTML = highScore4DotZero7.mistake
        document.querySelector("#user-input").setAttribute("step","0.000001")
        break;
  
      case "Level 4.08":
        level = 4.08;
        scoreNeeded = 30;
        gold = 207;
        highScoreName.innerHTML = highScore4DotZero8.name
        highScoreTime.innerHTML = highScore4DotZero8.time
        highScoreMistakes.innerHTML = highScore4DotZero8.mistake
        document.querySelector("#user-input").setAttribute("step","0.000001")
        break;  
  
      case "Level 4.09":
        level = 4.09;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore4DotZero9.name
        highScoreTime.innerHTML = highScore4DotZero9.time
        highScoreMistakes.innerHTML = highScore4DotZero9.mistake
        wholeNumberContainer.classList.add('hidden');
        fractionsContainerTwo.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.innerHTML = `
        Mixed to Improper Fraction</br>
        Format: 9/2`
        break;
  
      case "Level 4.10":
        level = 4.10;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore4DotZero10.name
        highScoreTime.innerHTML = highScore4DotZero10.time
        highScoreMistakes.innerHTML = highScore4DotZero10.mistake
        wholeNumberContainer.classList.add('hidden');
        fractionsContainerTwo.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.innerHTML = `
        Improper to Mixed Fractions </br>
        Format: 2 4/5`
        break;
  
      case "Level 4.11":
        level = 4.11;
        scoreNeeded = 30;
        gold = 215;
        highScoreName.innerHTML = highScore4DotZero11.name
        highScoreTime.innerHTML = highScore4DotZero11.time
        highScoreMistakes.innerHTML = highScore4DotZero11.mistake
        wholeNumberContainer.classList.add('hidden');
        fractionsContainerTwo.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.textContent = ""
        break;
  
      
      case "Level 4.12":
        level = 4.12;
        scoreNeeded = 30;
        gold = 134;
        silver = 153;
        highScoreName.innerHTML = highScore4DotZero12.name
        highScoreTime.innerHTML = highScore4DotZero12.time
        highScoreMistakes.innerHTML = highScore4DotZero12.mistake
        instructions.textContent = ""
        displayProblem.style.fontSize = "25px";
        displayProblem.style.marginBottom = "150px";
        break;
  
        case "Level 4.13":
          level = 4.13;
          scoreNeeded = 30;
          gold = 297
          silver = 376;
          highScoreName.innerHTML = highScore4DotZero13.name
          highScoreTime.innerHTML = highScore4DotZero13.time
          highScoreMistakes.innerHTML = highScore4DotZero13.mistake
          instructions.textContent = ""
          displayProblem.style.fontSize = "25px";
          document.querySelector("#user-input").setAttribute("type","text");
          break;
  
      case "Level 4.14":
          level = 4.14;
          scoreNeeded = 30;
          gold = 49;
          highScoreName.innerHTML = highScore4DotZero14.name
          highScoreTime.innerHTML = highScore4DotZero14.time
          highScoreMistakes.innerHTML = highScore4DotZero14.mistake
          document.querySelector("#user-input").setAttribute("type","text");
          wholeNumberContainer.classList.add('hidden');
          fractionsContainerTwo.classList.remove('hidden');
          equalSymbol.innerHTML = ""
          instructions.innerHTML =
          `Answer using</br>
          r, f, v
          `
          threeWholeNumber.textContent = ""
          threeNumerator.textContent = ""
          threeDenominator.textContent = ""
          threeNumerator.classList.remove('line');
      break;
  
      case "Level 4.15":
        level = 4.15;
        scoreNeeded = 20;
        gold = 91;
        highScoreName.innerHTML = highScore4DotZero15.name
        highScoreTime.innerHTML = highScore4DotZero15.time
        highScoreMistakes.innerHTML = highScore4DotZero15.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        document.querySelector("#user-input").style.width = "250px"
        displayProblem.style.fontSize = "25px";
        instructions.innerHTML = 
        `Answer using:</br>
        f-f , r+r , vxr</br>
        fxr , fxv</br>
        `
      break;

      case "Level 4.16":
        level = 4.16;
        scoreNeeded = 20;
        gold = highScore4DotZero16.time
        silver = highScore4DotZero16.time+((cutoff-highScore4DotZero16.time)/3)
        bronze = highScore4DotZero16.time+((cutoff-highScore4DotZero16.time)/3)*2
        highScoreName.innerHTML = highScore4DotZero16.name
        highScoreTime.innerHTML = highScore4DotZero16.time
        highScoreMistakes.innerHTML = highScore4DotZero16.mistake
        displayProblem.style.fontSize = "25px";
      break;
  
      case "Level 4.17":
        level = 4.17;
        scoreNeeded = 20;
        gold = highScore4DotZero17.time
        silver = highScore4DotZero17.time+((cutoff-highScore4DotZero17.time)/3)
        bronze = highScore4DotZero17.time+((cutoff-highScore4DotZero17.time)/3)*2
        highScoreName.innerHTML = highScore4DotZero17.name
        highScoreTime.innerHTML = highScore4DotZero17.time
        highScoreMistakes.innerHTML = highScore4DotZero17.mistake
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
        arr = ["A","B","C","D","E","F","G","H","I"]
        compassArr= ["north","north-east","east","south-east","south","south-west","west","north-west"]
        document.querySelector("#user-input").setAttribute("type","text");
      break;
  
      case "Level 4.18":
        level = 4.18;
        scoreNeeded = 20;
        gold = highScore4DotZero18.time;
        highScoreName.innerHTML = highScore4DotZero18.name
        highScoreTime.innerHTML = highScore4DotZero18.time
        highScoreMistakes.innerHTML = highScore4DotZero18.mistake
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
        arr = ["A","B","C","D","O","F","G","H","I"]
        arr2 = ["B","C","F","I","H","G","D","A"]
        document.querySelector("#user-input").setAttribute("type","text");
      break;

      case "Level 4.19":
        level = 4.19;
        scoreNeeded = 20;
        gold = highScore4DotZero19.time
        silver = highScore4DotZero19.time+((cutoff-highScore4DotZero19.time)/3)
        bronze = highScore4DotZero.time+((cutoff-highScore4DotZero19.time)/3)*2
        highScoreName.innerHTML = highScore4DotZero19.name
        highScoreTime.innerHTML = highScore4DotZero19.time
        highScoreMistakes.innerHTML = highScore4DotZero19.mistake
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
      break;
  
      case "Level 5.0":
        level = 5.0;
        scoreNeeded = 20;
        gold = highScore5DotZero.time;
        highScoreName.innerHTML = highScore5DotZero.name
        highScoreTime.innerHTML = highScore5DotZero.time
        highScoreMistakes.innerHTML = highScore5DotZero.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;
  
      case "Level 5.01":
        level = 5.01;
        scoreNeeded = 10;
        gold = 80;
        highScoreName.innerHTML = highScore5DotZero1.name
        highScoreTime.innerHTML = highScore5DotZero1.time
        highScoreMistakes.innerHTML = highScore5DotZero1.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        instructions.innerHTML = "Form an equation using</br> multiplication of fraction </br> RC = from x want"
        break;
  
      case "Level 5.02":
        level = 5.02;
        scoreNeeded = 10;
        gold = highScore5DotZero2.time;
        highScoreName.innerHTML = highScore5DotZero2.name
        highScoreTime.innerHTML = highScore5DotZero2.time
        highScoreMistakes.innerHTML = highScore5DotZero2.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        instructions.innerHTML = "Form an equation using in fraction"
      break;
      
      case "Level 5.03":
        level = 5.03;
        scoreNeeded = 10;
        gold = highScore5DotZero3.time;
        silver = highScore5DotZero3.time+((cutoff-highScore5DotZero3.time)/3)
        bronze = highScore5DotZero3.time+((cutoff-highScore5DotZero3.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero3.name
        highScoreTime.innerHTML = highScore5DotZero3.time
        highScoreMistakes.innerHTML = highScore5DotZero3.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        instructions.innerHTML = "Form an equation using</br> multiplication of percentage </br> from/100 x end"
        userInput.style.width = "200px";
        break;    
      
      case "Level 5.04":
        level = 5.04;
        scoreNeeded = 10;
        gold = 79;
        highScoreName.innerHTML = highScore5DotZero4.name
        highScoreTime.innerHTML = highScore5DotZero4.time
        highScoreMistakes.innerHTML = highScore5DotZero4.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        break;
      
      case "Level 5.05":
        level = 5.05;
        scoreNeeded = 20;
        gold = highScore5DotZero5.time;
        silver = highScore5DotZero5.time+((cutoff-highScore5DotZero5.time)/3)
        bronze = highScore5DotZero5.time+((cutoff-highScore5DotZero5.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero5.name
        highScoreTime.innerHTML = highScore5DotZero5.time
        highScoreMistakes.innerHTML = highScore5DotZero5.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;

      case "Level 5.06":
        level = 5.06;
        scoreNeeded = 20;
        gold = highScore5DotZero6.time;
        silver = highScore5DotZero6.time+((cutoff-highScore5DotZero6.time)/3)
        bronze = highScore5DotZero6.time+((cutoff-highScore5DotZero6.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero6.name
        highScoreTime.innerHTML = highScore5DotZero6.time
        highScoreMistakes.innerHTML = highScore5DotZero6.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;

      case "Level 5.07":
        level = 5.07;
        scoreNeeded = 20;
        gold = highScore5DotZero7.time;
        silver = highScore5DotZero7.time+((cutoff-highScore5DotZero7.time)/3)
        bronze = highScore5DotZero7.time+((cutoff-highScore5DotZero7.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero7.name
        highScoreTime.innerHTML = highScore5DotZero7.time
        highScoreMistakes.innerHTML = highScore5DotZero7.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;
  
      case "Level 5.08":
        level = 5.08;
        scoreNeeded = 20;
        gold = highScore5DotZero8.time
        silver = highScore5DotZero8.time+((cutoff-highScore5DotZero8.time)/3)
        bronze = highScore5DotZero8.time+((cutoff-highScore5DotZero8.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero8.name
        highScoreTime.innerHTML = highScore5DotZero8.time
        highScoreMistakes.innerHTML = highScore5DotZero8.mistake
        instructions.innerHTML = 
        `
        discount/original x 100
        increase/original x 100
        decrease/original x 100
        `
        displayProblem.style.fontSize = "25px";
        document.querySelector("#user-input").setAttribute("type","text");
      break;

      case "Level 6.0":
        level = 6.0;
        scoreNeeded = 10;
        gold = 143
        highScoreName.innerHTML = highScore6DotZero.name
        highScoreTime.innerHTML = highScore6DotZero.time
        highScoreMistakes.innerHTML = highScore6DotZero.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
      break;
  
      case "Level 6.3":
        level = 6.3;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore6Dot3.name
        highScoreTime.innerHTML = highScore6Dot3.time
        highScoreMistakes.innerHTML = highScore6Dot3.mistake
        break;
      
      case "Level 7":
        level = 7;
        scoreNeeded = 30;
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
    
    if ( hardcore == 1 ){
      scoreNeeded /= 2
    }  
    // if (levelArr.length != 0){
    //   buttonStart.innerHTML =`Level ${levelArr[0]}`
    // }
  }