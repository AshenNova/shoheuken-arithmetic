const displayProblem = document.querySelector(".display-problems")
const helpMe = document.querySelector(".help-me-text")
const ourForm = document.querySelector(".our-form")
const ourForm2 = document.querySelector(".our-form2")
const userInput = document.getElementById("user-input")
const userInput2 = document.getElementById("user-input2")
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
const reviewAnswer = document.querySelector('.fa-hire-a-helper')
const inputBoxCl = document.querySelector(".input-box")

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
const heuristics = document.querySelectorAll('.heuristics');
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

let noAnswer = 0;
let reviewCount = 0;
let level = 0;
let player = 1;
let levelArr = [];
let arr = [];
let arr2 = [];
let arr3 = [];
let multiplesArr = [0]
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
const highScore1DotZero4 = new HighScore("Shanice Lee", "19 April 2022", 80, 0)
const highScore1DotZero5 = new HighScore("Reila", "28 mar 2022", 141, 0)
const highScore1DotZero6 = new HighScore("Amanda Poon", "16 April 2022", 206, 0)
const highScore1DotZero7 = new HighScore("Shanice Lee", "13 April 2022", 117, 1)
const highScore2DotZero = new HighScore("Nil", "16 October 2021", 0, 0)
const highScore2DotZero1 = new HighScore("Jayden Cheong", "9 April 2022", 278, 0)
const highScore2DotZero2 = new HighScore("Reila", "28 March 2022", 152, 1)
const highScore2DotZero3 = new HighScore("Jayden Cheong", "19 March 2022", 623, 1)
const highScore2DotZero4 = new HighScore("Shanice Lee", "19 April 2022", 48, 0)
const highScore2DotZero5 = new HighScore("Adam Poon", "26 March 2022", 343, 2)
const highScore2DotZero6 = new HighScore("Nil", "Nil", 0, 0)
const highScore2DotZero7 = new HighScore("Reila", "28 mar 2022", 107, 0)
const highScore2DotZero8 = new HighScore("Nil", "Nil", 0, 0)
const highScore2DotZero9 = new HighScore("Nil", "Nil", 0, 0)

const highScore3DotZero = new HighScore("Shanice Lee", "30 October 2021", 614, 7)
const highScore3DotZero1 = new HighScore("Shanice Lee", "30 October 2021", 162, 5)
const highScore3DotZero2 = new HighScore("Javen Chen", "12 March 2022", 230, 2)
const highScore3DotZero3 = new HighScore("Shanice Lee", "6 November 2021", 662, 4)
const highScore3DotZero4 = new HighScore("Amanda Poon", "12 March 2022", 229, 0)
const highScore3DotZero5 = new HighScore("Maegan Lim", "10 April 2022", 229, 0)
const highScore3DotZero6 = new HighScore("Yuki Chin", "20 mar 2022", 299, 3)
const highScore3DotZero7 = new HighScore("Sheyanne Cheong", "12 March 2022", 80, 0)
const highScore3DotZero8 = new HighScore("Nil", "Nil", 0, 0)
const highScore3DotZero9 = new HighScore("Nil", "Nil", 0, 0)
const highScore3DotZero10 = new HighScore("Maegan Lim", "10 April 2022", 223, 0)
const highScore3DotZero11 = new HighScore("Shanice Lee", "22 March 2022", 478, 2)
const highScore3DotZero12 = new HighScore("Jayden Goo", "16 march 2022", 72, 0)
const highScore3DotZero13 = new HighScore("Jadee Wong", "14 March 2022", 310, 1)
const highScore3DotZero14 = new HighScore("Sheyanne Cheong", "19 March 2022", 240, 0)
const highScore3DotZero15 = new HighScore("Emma Leo", "18 April 2022", 281, 1)
const highScore3DotZero16 = new HighScore("Jayden Goo", "20 April 2022", 141, 0)
const highScore3DotZero17 = new HighScore("Nil", "Nil", 0, 0)
const highScore3DotZero18 = new HighScore("Yuki Chin", "27 March 2022", 165, 2)
const highScore3DotZero19 = new HighScore("Javen Chen", "17 April 2022", 111, 0)

const highScore4DotZero = new HighScore("Javen Chen", "27 March 2022", 140, 0)
const highScore4DotZero1 = new HighScore("Adam Poon", "12 March 2022", 229, 0)
const highScore4DotZero3 = new HighScore("Javen Chen", "12 March 2022", 264, 2)
const highScore4DotZero4 = new HighScore("Jadee Wong", "11 March 2022", 758, 8)
const highScore4DotZero5 = new HighScore("Nadya", "27 March 2022", 225, 1)
const highScore4DotZero6 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero7 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero8 = new HighScore("Izekiel", "14 April 2022", 108, 0)
const highScore4DotZero9 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero10 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero11 = new HighScore("Nadya", "13 March 2022", 215, 0)
const highScore4DotZero12 = new HighScore("Nadya", "13 March 2022", 134, 0)
const highScore4DotZero13 = new HighScore("Javen Chen", "12 March 2022", 297, 3)
const highScore4DotZero14 = new HighScore("Sheyanne Cheong", "12 March 2022", 49, 0)
const highScore4DotZero15 = new HighScore("Jayden Goo", "16 mar 2022", 91, 2)
const highScore4DotZero16 = new HighScore("Emma Leo", "30 March 2022", 393, 2)
const highScore4DotZero17 = new HighScore("Jayden Goo", "20 April 2022", 213, 4)
const highScore4DotZero18 = new HighScore("Jayden Goo", "20 April 2022", 185, 0)
const highScore4DotZero19 = new HighScore("Nil", "Nil", 0, 0)
const highScore4Dot2Zero = new HighScore("Emma Leo", "14 April 202", 160, 0)
const highScore4Dot21 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero22 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero23 = new HighScore("Nil", "Nil", 0, 0)
const highScore4DotZero24 = new HighScore("Nil", "Nil", 0, 0)

const highScore5DotZero = new HighScore("Sheyanne Cheong", "9 April 2022", 176, 0)
const highScore5DotZero1 = new HighScore("Emma Leo", "28 Feb 2022", 273, 0)
const highScore5DotZero2 = new HighScore("Emma Leo", "21 March 2022", 167, 0)
const highScore5DotZero3 = new HighScore("Emma Leo", "20 April 2022", 354, 8)
const highScore5DotZero4 = new HighScore("Jayden Goo", "23 Mar 2022", 88, 0)
const highScore5DotZero5 = new HighScore("Nil", "Nil", 0, 0)
const highScore5DotZero6 = new HighScore("Emma Leo", "20 April 2022", 96, 0)
const highScore5DotZero7 = new HighScore("Sheyanne Cheong", "9 April 2022", 144, 0)
const highScore5DotZero8 = new HighScore("Jayden Goo", "20 April 2022", 49, 2)
const highScore5DotZero9 = new HighScore("Jayden Goo", "14 April 2022", 69, 0)
const highScore5DotZero10 = new HighScore("Jayden Goo", "14 April 2022", 99, 1)
const highScore5DotZero11 = new HighScore("Emma Leo", "20 April 2022", 143, 1)
const highScore5DotZero12 = new HighScore("Jayden Goo", "20 April 2022", 109, 1)
const highScore5DotZero13 = new HighScore("Jayden Goo", "13 April 2022", 108, 3)
const highScore5DotZero14 = new HighScore("Jayden Goo", "20 April 2022", 35, 1)
const highScore6DotZero = new HighScore("Jayden Goo", "20 April 2022", 79, 1)
const highScore6DotZero1 = new HighScore("Emma Leo", "18 April 2022", 240, 0)
const highScore6DotZero2 = new HighScore("Nil", "", 0, 0)
const highScore6DotZero3 = new HighScore("Nil", "", 0, 0)
const highScore6DotZero5 = new HighScore("Nil", "", 0, 0)
const highScore6DotZero6 = new HighScore("Nil", "", 0, 0)
const highScore6DotZero7 = new HighScore("Nil", "", 0, 0)

const heuOne = new HighScore("Nil", "", 0, 0)
const heuTwo = new HighScore("Nil", "", 0, 0)
const heuThree = new HighScore("Nil", "", 0, 0)
const heuFour = new HighScore("Nil", "", 0, 0)


// Storing of question
let state = {
  score: 0,
  mistake: 0,
  scoreNeeded: 0,
  correctAnswer: 0
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
      if (document.querySelector(".input-box").classList.contains('hidden')){
        userInput2.focus()
      } else {
        userInput.focus()
      }
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
    console.log(`Gold: ${gold}, silver: ${silver}, bronze: ${bronze}`)
    if ( gold == 0 && time == cutoff){
      document.querySelector('.trophy').appendChild(imageFailed);
      console.log("Failed")
    } else if (gold == 0 && time < cutoff){
      document.querySelector('.trophy').appendChild(imageB);
      console.log("Bronze image")
    } else if (time < gold){
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
   
  } 
    if ( easy == 1 ){
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
  displayProblem.style.textAlign = "center";
  threeNumerator.classList.add('line');
  equalSymbol.innerHTML = "=";
  fractionsContainerTwo.style.margin = "0 25px 15px"
  helpMe.textContent = ""
  helpMe.style.fontSize = "30px"
  inputBoxCl.classList.remove('hidden')
  ourForm2.classList.add('hidden')

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
  multiplesArr = [0]
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

function drawCuboid(a, b, c, d){
  // front
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(a, 0)
  ctx.lineTo(a, b)
  ctx.lineTo(0, b)
  ctx.closePath()
  ctx.stroke()
  
  // right
  ctx.beginPath()
  ctx.moveTo(a, 0)
  ctx.lineTo(a+c, 0+d)
  ctx.lineTo(a+c, b+d)
  ctx.lineTo(a, b)
  ctx.closePath()
  ctx.stroke()

  // top
  ctx.beginPath()
  ctx.moveTo(0, b)
  ctx.lineTo(a, b)
  ctx.lineTo(a+c, b+d)
  ctx.lineTo(0+c, b+d)
  ctx.closePath()
  ctx.stroke()

}

function drawHorizontalLine(x, y, right, adjust){
  ctx.save()

    // straight line
    ctx.translate(x ,y)

    ctx.beginPath()
    ctx.moveTo(0, adjust)
    ctx.lineTo(right, adjust)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(5, adjust-5)
    ctx.lineTo(0, adjust)
    ctx.lineTo(5, adjust+5)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(right-5, adjust-5)
    ctx.lineTo(right, adjust)
    ctx.lineTo(right-5, adjust+5)
    ctx.stroke()
  ctx.restore()
}

function drawVerticalLine(x, y, bottom, adjust){
  ctx.save()

    // straight line
    ctx.translate(x ,y)

    ctx.beginPath()
    ctx.moveTo(adjust, 0)
    ctx.lineTo(adjust, bottom)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(adjust+5, 5)
    ctx.lineTo(adjust+0, 0)
    ctx.lineTo(adjust-5, 5)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(adjust+5, bottom-5)
    ctx.lineTo(adjust+0, bottom)
    ctx.lineTo(adjust-5, bottom-5)
    ctx.stroke()
  ctx.restore()
}
//////////////////// DISPLAY PROBLEMS ////////////////////

// Step 3: Updating, storing and then displaying the problem
// 1. generate new problem and store the question in state object
// 2. Also to visual update the HTML
function updateProblems(){
  state.currentProblem = state.drawProblem = genProblems()
  // state.drawProblem = genProblems()

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
   if (state.score < 11) {
      console.log(`state score: ${state.score}`)
      helpMe.innerHTML = `
    01 02 03 04 05 06 07 08 09 10</br>
    11 12 13 14 15 16 17 18 19 20
    `
    } else {
      helpMe.innerHTML = ""
    }

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

  if ( level == 2.04 ){
    if (p.operator == "x"){
      p.repeat = 2
    }
    let value = p.numOne
    for (let i = 0; i < p.repeat; i++){
      arr.push(p.figure)
      arr.push(p.operator)
    }
    arr.pop()

    for (let i = 0; i < p.repeat-1; i++){
      if (p.operator == "x"){
        value *= p.numOne
      }
      if (p.operator == "+"){
        value += p.numOne
      }
    }

    displayProblem.innerHTML = `${arr.join(" ")} = ${value}`
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

  if ( level == 2.06) {
    arr.push(p.figure)
    while (arr[0] == p.figureTwo){
      p.figureTwo = ["🏀",'⚽️','🏈','🎾','🍎','🍏','🌭'][genNumbers(7)]
    }
    while (p.numTwo > p.numOne || p.numOne == p.numTwo){
      p.numTwo = (genNumbers(5)+1)
    }
    arr.push(p.figureTwo)
    let repeat = genNumbers(2)+2
    let repeatTwo = genNumbers(2)+2
    if (repeat = repeatTwo){
      repeat -= 1
    }
    for (let i = 0; i < repeat; i++){
      arr2.push(arr[0])
    } 
    for (let i = 0; i < repeatTwo; i++){
      arr2.push(arr[1])
    }
    let count = 0
    if ( repeat > repeatTwo){
      count = repeatTwo
    } else {
      count = repeat
    }
    console.log(p.numOne, count, p.numTwo)
     displayProblem.innerHTML = `
    ${arr2.join("+")} = ${p.numOne*count+p.numTwo}</br>
    ${arr[0]}+${arr[1]} = ${p.numOne}</br>
    ${arr[1]} = ?
    `

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
    if (p.rollType == "A"){
      for (let i = 0; i<p.rollTimes; i++){
        p.rollA = genNumbers(5)
        arr.push(p.rollA)
      }
    while (arr[2] == arr[1] && arr[2] == arr[0]){
      arr.pop(arr[3])
      arr.push(genNumbers(5))
    }

    }
    if (p.rollType == "B"){
      for (let i = 0; i<p.rollTimes; i++){
        p.rollB = ["A","B","C","D","E"][genNumbers(5)]
        arr.push(p.rollB)
      }
      while (arr[2] == arr[1] && arr[2] == arr[0]){
        arr.pop(arr[2])
        p.rollB = ["A","B","C","D","E"][genNumbers(5)]
        arr.push(p.rollB)
      }  
    }
    console.log(arr)
    for (let i = 0; arr2.length<13; i++){
      arr2.push(arr[i%(p.rollTimes)])
    }
    console.log(arr2)
    arr2.push("...")
    displayProblem.innerHTML = 
    `
    What is in position ${p.position}?</br>
    ${arr2.toString()}
    `
  }

  if ( level == 3.16){
// level 3.12
    if (p.optionFinal == 5){
displayProblem.innerHTML = `1 + 2 + 3 ... ... + ${p.numOne-2} + ${p.numOne-1} + ${p.numOne}</br> = ?`
    }
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
// level 3.15
    if (p.optionFinal == 4){
      if (p.rollType == "A"){
        for (let i = 0; i<p.rollTimes; i++){
          p.rollA = genNumbers(5)
          arr.push(p.rollA)
        }
      while (arr[2] == arr[1] && arr[2] == arr[0]){
        arr.pop(arr[3])
        arr.push(genNumbers(5))
      }
  
      }
      if (p.rollType == "B"){
        for (let i = 0; i<p.rollTimes; i++){
          p.rollB = ["A","B","C","D","E"][genNumbers(5)]
          arr.push(p.rollB)
        }
        while (arr[2] == arr[1] && arr[2] == arr[0]){
          arr.pop(arr[2])
          p.rollB = ["A","B","C","D","E"][genNumbers(5)]
          arr.push(p.rollB)
        }  
      }
      console.log(arr)
      for (let i = 0; arr2.length<13; i++){
        arr2.push(arr[i%(p.rollTimes)])
      }
      console.log(arr2)
      arr2.push("...")
      displayProblem.innerHTML = 
      `
      What is in position ${p.position}?</br>
      ${arr2.toString()}
      `
    }
    
  }

  if ( level == 3.17) {
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

  if ( level == 3.18 ){
    ctx.font = '1em serif'
    ctx.save()

    if (p.parallelorPerpendicular == "parallel"){
      if ( p.roll == 1){
        ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`, 20, 20)
      } else {
        ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`, 20, 20)
      }
    } else {
      if ( p.roll == 1){
        ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`, 20, 20)
      } else {
      ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`, 20, 20)
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

  if ( level == 3.19) {
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
    let arrayExclude = [3, 4, 5 , 7, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
    // while (p.numOne == 17 || p.numOne == 19 || p.numOne == 23 || p.numOne == 29 || p.numOne == 31 || p.numOne == 37 || p.numOne == 41 || p.numOne == 43 || p.numOne == 47 || p.numOne == 53 || p.numOne == 59){
    //   console.log("while loop")
     
    // }
    while (arrayExclude.includes(p.numOne)){
      console.log("reroll")
      p.numOne = genNumbers(60)+2
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
    p.numFinal = Math.floor(p.numOne/(p.numTwo*1)*p.numTwo)/p.numTwo
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
    arr.push(p.numThree);
  }

  if ( level == 4.10){
    threeWholeNumber.textContent = "?"
    threeNumerator.textContent = "?"
    threeDenominator.textContent = "?"
    if (p.numTwo >= p.numThree){
      p.numTwo = p.numTwo - 1 - (p.numTwo-p.numThree);
    }
    twoWholeNumber.textContent = "";
    arr.push(p.numTwo)
    p.numTwo = p.numOne*p.numThree+p.numTwo;
    twoNumerator.textContent = p.numTwo;
    twoDenominator.textContent = p.numThree
    arr.push(p.numThree)
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
      arr.push(p.numThree);
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
      arr.push(p.numTwo)
      p.numTwo = p.numOne*p.numThree+p.numTwo;
      twoNumerator.textContent = p.numTwo;
      twoDenominator.textContent = p.numThree
      arr.push(p.numThree)
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
      B ate another ${p.numThree}/${p.numFour} of something.</br>
      How much of something did B eat?`
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
        ctx.fillText(`Person O facing ${p.choice}, turn ${p.angleTurn}°.`, 20, 20)
      } else {
      ctx.fillText(`Person O facing ${p.choice}, turn ${p.angleTurn}° ${p.direction}.`, 20, 20)
       }
      ctx.fillText(`Now facing ___?`, 20, 40)
    } else {
      if (p.angleTurn == 180 || p.angleTurn == 360){
        ctx.fillText(`After turning ${p.angleTurn}°, person O is facing ${p.choice}`, 20 ,20)
      } else {
        ctx.fillText(`After turning ${p.angleTurn}° ${p.direction}, person O is facing ${p.choice}`, 20 ,20)
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

    const index = arr2.indexOf(p.choice)
       
    if (p.roll == 1){
      if (p.direction == "anti-clockwise"){
        p.angleTurn = 360-p.angleTurn 
      }
      const intervalsTurned = p.angleTurn/45
      p.finalIndex = index+intervalsTurned
      if (p.finalIndex == 8){
        p.finalIndex = 0
      }  
      if (p.finalIndex > 8) {
        p.finalIndex -= 8
      }
    
    } else {
      if (p.direction == "anti-clockwise"){
        p.angleTurn = 360-p.angleTurn
      }
      const intervalsTurned = p.angleTurn/45
      p.finalIndex = index-intervalsTurned
      if (p.finalIndex == 8){
        p.finalIndex = 0
      }  
      if (p.finalIndex < 0) {
        p.finalIndex += 8
      }
    }
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
          ctx.fillText(`${p.angleStraight}°`, 90, -1)
        } else {
        ctx.fillText(`${p.angleStraight}°`, 10, -5)
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

  if ( level == 4.20 ){
    ctx.save()
      ctx.font = "1em serif"
      ctx.fillText("What is the perimeter of the figure?", 20, 20)
      ctx.translate(30, 240)

      if (p.rollType == 1){
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -p.topOne)
        ctx.lineTo(p.topOne, -p.topOne)
        ctx.lineTo(p.topOne, -p.sideOne)
        ctx.lineTo(p.topOne+p.sideOne, -p.sideOne)
        ctx.lineTo(p.topOne+p.sideOne, 0)
        ctx.closePath()
        ctx.stroke()

        ctx.save()
          ctx.beginPath()
          ctx.setLineDash([3, 3])
          ctx.lineTo(p.topOne, -p.sideOne)
          ctx.lineTo(p.topOne, 0)
          ctx.stroke()
        ctx.restore()

        ctx.beginPath()
        ctx.moveTo(-5, 0)
        ctx.lineTo(-5, -p.topOne)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-10, -10)
        ctx.lineTo(-5, 0)
        ctx.lineTo(0, -10)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-10, -p.topOne+10)
        ctx.lineTo(-5, -p.topOne)
        ctx.lineTo(0, -p.topOne+10)
        ctx.stroke()

        ctx.fillText(`${p.topOne} cm`, 5, -p.topOne/2)

        ctx.beginPath()
        ctx.moveTo(0, 5)
        ctx.lineTo(p.topOne+p.sideOne, 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(10, 0)
        ctx.lineTo(0, 5)
        ctx.lineTo(10, 10)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.topOne+p.sideOne-10, 0)
        ctx.lineTo(p.topOne+p.sideOne, 5)
        ctx.lineTo(p.topOne+p.sideOne-10, 10)
        ctx.stroke()

        p.lengthTotal = p.topOne+p.sideOne      
        ctx.fillText(`${p.lengthTotal} cm`, p.lengthTotal/2-10, -3)
      }

      if (p.rollType == 2 ){
        ctx.translate(100, -50)
        ctx.beginPath()
        // 1
        ctx.moveTo(p.smallSquare, 0)
        // 2
        ctx.lineTo(p.smallSquare, -p.smallSquare)
        // 3
        ctx.lineTo(0, -p.smallSquare)
        // 4
        ctx.lineTo(0, -p.bigSquare+p.smallSquare)
        // 5
        ctx.lineTo(p.smallSquare,  -p.bigSquare+p.smallSquare)
        // 6
        ctx.lineTo(p.smallSquare , -p.bigSquare)
        // 7
        ctx.lineTo(p.bigSquare-p.smallSquare, -p.bigSquare)
        // 8
        ctx.lineTo(p.bigSquare-p.smallSquare, -p.bigSquare+p.smallSquare)
        // 9
        ctx.lineTo(p.bigSquare, -p.bigSquare+p.smallSquare)
        // 10
        ctx.lineTo(p.bigSquare, -p.smallSquare)
        // 11
        ctx.lineTo(p.bigSquare-p.smallSquare, -p.smallSquare)
        // 12
        ctx.lineTo(p.bigSquare-p.smallSquare, 0)
        ctx.closePath()
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-5, 0)
        ctx.lineTo(-5, -p.bigSquare)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-10, -10)
        ctx.lineTo(-5, 0)
        ctx.lineTo(0, -10)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-10, -p.bigSquare+10)
        ctx.lineTo(-5, -p.bigSquare)
        ctx.lineTo(0, -p.bigSquare+10)
        ctx.stroke()

        ctx.fillText(`${p.bigSquare} cm`, -55, -p.bigSquare/2)

        ctx.beginPath()
        ctx.moveTo(0, 5)
        ctx.lineTo(p.bigSquare, 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(10, 0)
        ctx.lineTo(0, 5)
        ctx.lineTo(10, 10)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.bigSquare-10, 0)
        ctx.lineTo(p.bigSquare, 5)
        ctx.lineTo(p.bigSquare-10, 10)
        ctx.stroke()
        ctx.fillText(`${p.bigSquare} cm`, p.bigSquare/2-20, +22)
      }

      if (p.rollType == 3 ){
        ctx.translate(30, -50)
        ctx.beginPath()
        // 1
        ctx.moveTo(p.smallSquare, 0)
        // 2
        ctx.lineTo(p.smallSquare, -p.smallSquare)
        // 3
        ctx.lineTo(0, -p.smallSquare)
        // 4
        ctx.lineTo(0, -p.bigSquare+p.smallSquare)
        // 5
        ctx.lineTo(p.smallSquare,  -p.bigSquare+p.smallSquare)
        // 6
        ctx.lineTo(p.smallSquare , -p.bigSquare)
        // 7
        ctx.lineTo(p.rectangle-p.smallSquare, -p.bigSquare)
        // 8
        ctx.lineTo(p.rectangle-p.smallSquare, -p.bigSquare+p.smallSquare)
        // 9
        ctx.lineTo(p.rectangle, -p.bigSquare+p.smallSquare)
        // 10
        ctx.lineTo(p.rectangle, -p.smallSquare)
        // 11
        ctx.lineTo(p.rectangle-p.smallSquare, -p.smallSquare)
        // 12
        ctx.lineTo(p.rectangle-p.smallSquare, 0)
        ctx.closePath()
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-5, 0)
        ctx.lineTo(-5, -p.bigSquare)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-10, -10)
        ctx.lineTo(-5, 0)
        ctx.lineTo(0, -10)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-10, -p.bigSquare+10)
        ctx.lineTo(-5, -p.bigSquare)
        ctx.lineTo(0, -p.bigSquare+10)
        ctx.stroke()

        ctx.fillText(`${p.bigSquare} cm`, -55, -p.bigSquare/2)

        ctx.beginPath()
        ctx.moveTo(0, 5)
        ctx.lineTo(p.rectangle, 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(10, 0)
        ctx.lineTo(0, 5)
        ctx.lineTo(10, 10)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.rectangle-10, 0)
        ctx.lineTo(p.rectangle, 5)
        ctx.lineTo(p.rectangle-10, 10)
        ctx.stroke()
        ctx.fillText(`${p.rectangle} cm`, p.rectangle/2-20, +22)
      }
    ctx.restore()
  }

  if ( level == 4.21 ){
    if (difficulty > 4) {
      difficulty = 4
    }
    if (difficulty == 4){
      p.rollType = genNumbers(4)
    }
    p.length = ((genNumbers(10)+1)*p.dimension)+((genNumbers(p.dimension)+1))
    p.breadth = ((genNumbers(10)+1)*p.dimension)+(genNumbers(p.dimension))
    p.height = ((genNumbers(10)+1)*p.dimension)+(genNumbers(p.dimension))
    console.log(p.dimension, p.length, p.breadth, p.height)

    if (difficulty == 0 || difficulty == 1 || p.rollType == 0 || p.rollType == 1){
      p.length = ((genNumbers(10)+1)*p.dimension)+((genNumbers(p.dimension)+1)*difficulty)
      p.breadth = ((genNumbers(10)+1)*p.dimension)+((genNumbers(p.dimension)*difficulty))
      displayProblem.innerHTML = `
      How many ${p.dimension} cm <u>squares</u> can be cut out from a rectangle with a dimension of </br>
      ${p.length} cm by ${p.breadth} cm?
      `
    }
    if (difficulty == 2 || p.rollType == 2){
      displayProblem.innerHTML = `
      How many ${p.dimension} cm <u>cubes</u> can be cut out from a cuboid with a dimension of </br>
      ${p.length} cm by ${p.breadth} cm by ${p.height}cm?
      `
    }
    if (difficulty == 3 || p.rollType == 3){
      p.dimension = genNumbers(5)+1
      p.length = (((genNumbers(10)+1)*p.dimension)+((genNumbers(p.dimension)+1)))*2
      p.breadth = (((genNumbers(10)+1)*p.dimension)+(genNumbers(p.dimension)))*2
      displayProblem.innerHTML = `
      How many <u>circles</u> with a radius of ${p.dimension} cm can be cut out from a rectangle with a dimension of </br>
      ${p.length} cm by ${p.breadth} cm?
      `
    }
  }

  if ( level == 4.22) {
    for (let i = p.numThree; i > 1; i--){
      if (p.numTwo % i == 0 && p.numThree % i == 0 ){
        p.numTwo /= i
        p.numThree /= i
      }
    }
    console.log(p.options)
    if (p.options == 1){
      twoNumerator.classList.add("line")
      twoWholeNumber.textContent = p.numOne
      twoNumerator.textContent = p.numTwo
      twoDenominator.textContent = p.numThree
      equalSymbol.textContent = "x"
      threeWholeNumber.textContent = p.numFour
      threeNumerator.textContent = ""
      threeDenominator.textContent = ""
      threeNumerator.classList.remove("line")
    }
    if (p.options == 2){
      threeNumerator.classList.add("line")
      threeWholeNumber.textContent = p.numOne
      threeNumerator.textContent = p.numTwo
      threeDenominator.textContent = p.numThree
      equalSymbol.textContent = "x"
      twoWholeNumber.textContent = p.numFour
      twoNumerator.textContent = ""
      twoDenominator.textContent = ""
      twoNumerator.classList.remove("line")
    }
  }

  if ( level == 4.23 ){
  
    if (p.option == "no"){
      while (arrayConvenient.includes(p.numTwo) == true) {
        p.numTwo = genNumbers(20)+3
      }
      p.numOne = p.numTwo
    }
    p.divisor = 2;
    let a = 0;
    displayProblem.textContent = p.numOne
    
    if( 10%p.numOne == 0){
      p.convenient = 10
    } else if ( 100%p.numOne == 0){
      p.convenient = 100
    } else {
      p.convenient = 1000
    }

    p.divisor = p.convenient/p.numOne
    console.log(p.numOne, p.divisor)
  }

  if ( level == 4.24){
    if (p.oneValue == p.twoValue){
      p.twoValue += 1
    }
    if (p.rollTypeClue == "11"){
      if (p.rollTypeQnSyn == "isof"){
      displayProblem.innerHTML = 
      `
      ${p.objectOne} is ${p.oneValue}/${p.twoValue} of ${p.objectTwo}.</br>
      What fraction is ${p.rollTypeQn11 == "1T" ? `${p.objectOne} of ${p.objectOne} and ${p.objectTwo}.` : `${p.objectOne} and ${p.objectTwo} of ${p.objectOne}.`}
      `
      }
      if (p.rollTypeQnSyn == "ofis"){
        displayProblem.innerHTML = 
        `
        ${p.objectOne} is ${p.oneValue}/${p.twoValue} of ${p.objectTwo}.</br>
        What fraction of ${p.rollTypeQn11 == "1T" ? `${p.objectOne} is ${p.objectOne} and ${p.objectTwo}.` : `${p.objectOne} and ${p.objectTwo} is ${p.objectOne}.`}
        `
        }
    }
    if (p.rollTypeClue == "1T"){
      if (p.rollTypeQnSyn == "isof"){
        displayProblem.innerHTML = 
        `
        ${p.objectOne} is ${p.oneValue}/${p.twoValue+p.oneValue} of ${p.objectOne} and ${p.objectTwo}.</br>
        What fraction is ${p.rollTypeQn1T == "AB" ? `${p.objectOne} of ${p.objectTwo}.` : `${p.objectTwo} of ${p.objectOne}.`}
        `
      }
      if (p.rollTypeQnSyn == "ofis"){
        displayProblem.innerHTML = 
        `
        ${p.objectOne} is ${p.oneValue}/${p.twoValue+p.oneValue} of ${p.objectOne} and ${p.objectTwo}.</br>
        What fraction of ${p.rollTypeQn1T == "AB" ? `${p.objectOne} is ${p.objectTwo}.` : `${p.objectTwo} is ${p.objectOne}.`}
        `
      }
    }
  }

  if ( level == 4.25){
    let a = [-1, 1][genNumbers(2)]
    ctx.save()
      if (p.roll == 2){
        p.length = p.squareOne + p.squareTwo
      }
      if (p.roll == 3){
        p.length = p.squareOne + p.squareTwo + p.squareThree
      }
      if (p.roll == 4){
        p.length = p.squareOne + p.squareTwo + p.squareThree + p.squareFour
      }
      ctx.font = '1em serif'

      if (p.question == "perimeter"){
        ctx.fillText(`The length of AB is ${p.length} cm.`,15 ,15)
        ctx.fillText(`What is the perimeter of the figure?`,15 ,35)  
      }
      if (p.question == "AB"){
        ctx.fillText(`The perimeter of the figure is ${p.length*p.roll} cm.`,15 ,15)
        ctx.fillText(`What is the length of AB?`,15 ,35)  
      }
      ctx.fillText(`The figure is made up of ${p.roll} squares.`, 15, 55)

      if (p.roll == 2){
        ctx.translate((400-p.squareOne-p.squareTwo)/2, 120)
      }
      if (p.roll == 3){
        ctx.translate((400-p.squareOne-p.squareTwo-p.squareThree)/2, 120)
      }
      if (p.roll == 4){
        ctx.translate((400-p.squareOne-p.squareTwo-p.squareThree-p.squareFour)/2, 120)
      }
  
      ctx.beginPath()
      ctx.arc(0, 0, 2, 0, 2*Math.PI)
      ctx.stroke()

        ctx.beginPath()
        ctx.rect(0, 0, p.squareOne, a*p.squareOne)
        ctx.stroke()
        ctx.fillText("A", -15, 3)

      if (p.roll > 1 ){
        ctx.beginPath()
        ctx.rect(p.squareOne, 0, p.squareTwo, a*-1*p.squareTwo)
        ctx.stroke()
        if (p.roll == 2 ){
          ctx.fillText("B", p.squareOne+p.squareTwo+3, 3)
        }
      }

      if (p.roll > 2){
        ctx.beginPath()
        ctx.rect(p.squareOne+p.squareTwo, 0, p.squareThree, a*p.squareThree)
        ctx.stroke()
        if (p.roll == 3 ){
          ctx.fillText("B", p.squareOne+p.squareTwo+p.squareThree+3, 3)
        }
      }

      if (p.roll > 3){
        ctx.beginPath()
        ctx.rect(p.squareOne+p.squareTwo+p.squareThree, 0, p.squareFour, a*-1*p.squareFour)
        ctx.stroke()
        if (p.roll == 4 ){
          ctx.fillText("B", p.squareOne+p.squareTwo+p.squareThree+p.squareFour+3, 3)
        }
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
    if (p.numerator == p.denominator){
      p.numerator -= 1
    }
    console.log(p.numerator, p.denominator, p.numerator/p.denominator)
     p.percentageDisplay = p.numerator/(p.denominator/100)
     
     if (p.percentageDisplay%1 != 0){
       console.log(p.percentageDisplay)
     }
    
    if (p.rollA == "fraction"){
      displayProblem.innerHTML = `${p.numerator}/${p.denominator} = ___ %`
    }
    if (p.rollA == "decimal"){
      displayProblem.innerHTML = `${p.numerator/p.denominator} = ___ %`
    }
  
    if (p.rollA == "percentage"){
        displayProblem.innerHTML = `
        Convert to ${p.rollB}</br>
        ${p.percentageDisplay}% = ____`
    }
  }

  if ( level == 5.04){
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
  if ( level == 5.05){
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
  if ( level == 5.06 ){

    ctx.save()
    ctx.font = "1em serif"

    if (p.question == "base"){
      ctx.fillText(`The ${p.question} of the triangle is ${p.labelABC}${p.labelJKL}. What is its height?`, 20, 20)
    } else if (p.question == "height") {
      ctx.fillText(`The ${p.question} of the triangle is ${p.labelDEF}${p.labelGHI}. What is its base?`, 20, 20)
    } else if ( p.question == "base2") {
      ctx.fillText(`The base of the triangle is ${p.labelDEF}${p.labelGHI}. What is its height?`, 20, 20)
    } else if ( p.question == "height2") {
      ctx.fillText(`The height of the triangle is ${p.labelABC}${p.labelJKL}. What is its base?`, 20, 20)
    } else if ( p.question == "base3"){
      ctx.fillText(`The base of the triangle is ${p.labelGHI}${p.labelJKL}. What is its height?`, 20, 20)
    } else {
      ctx.fillText(`The height of the triangle is ${p.labelABC}${p.labelMNO}. What is its base?`, 20, 20)
    }

    ctx.fillText(`${p.labelABC}${p.labelDEF}, ${p.labelGHI}${p.labelJKL}, ${p.labelABC}${p.labelJKL}, ${p.labelDEF}${p.labelGHI}, ${p.labelABC}${p.labelGHI}, ${p.labelABC}${p.labelMNO}, ${p.labelGHI}${p.labelJKL}`, 20, 40)
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

  if ( level == 5.07){
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
  
  if ( level == 5.08 ){
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
        // ctx.rotate(p.finalRotation*Math.PI/180)
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

          // first arc
          let corrAngle = angles(linePointX+adjustX, 0, linePointX-adjustX, -60)
          console.log(corrAngle)
          p.corrAngleDisplay = Math.abs(Math.floor(corrAngle))
          if (p.corrRoll != 4){
            ctx.beginPath()
            ctx.arc(linePointX+adjustX, 0, 15, 2*Math.PI+corrAngle*Math.PI/180, 2*Math.PI)
            ctx.stroke()

            ctx.fillText(`${p.corrAngleDisplay}°`, linePointX+adjustX+20, -1)  
          }

          // longer intersect
          ctx.save()
            ctx.translate(linePointX+adjustX, 0)
            ctx.rotate(corrAngle*Math.PI/180)
            ctx.beginPath()
            ctx.moveTo(-60, 0)
            ctx.lineTo(120, 0)
            ctx.stroke()
          ctx.restore()

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
          if (p.corrRoll == 3 || p.corrRoll == 4){
            // ctx.translate(0, -60)
            ctx.beginPath()
            ctx.arc(linePointX-adjustX, -60, 15, 2*Math.PI+corrAngle*Math.PI/180, 2*Math.PI)
            ctx.stroke()
            if (p.corrRoll == 3){
              ctx.fillText(`c`, linePointX-adjustX+21, -60-1)
            }
            if (p.corrRoll == 4){
              ctx.fillText(`${p.corrAngleDisplay}°`, linePointX-adjustX+21, -60-1)

              ctx.beginPath()
              ctx.arc(linePointX-adjustX, -60, 15, 1*Math.PI+corrAngle*Math.PI/180, 1*Math.PI)
              ctx.stroke()

              ctx.fillText(`c`,linePointX-adjustX-25, -50)
            }
          } 
        ctx.restore()
      }
    ctx.restore()
  }

  if ( level == 5.09 ){
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

  if ( level == 5.10){
    ctx.save()
    ctx.font = "1em serif"
    if (p.rollShape == "parallelogram"){
      ctx.fillText(`What is ∠p?`, 20, 20)
    }
    if (p.rollShape == "rhombus"){
      ctx.fillText(`What is ∠r?`, 20, 20)
    }
    if (p.rollShape == "trapezium"){
      ctx.fillText(`What is ∠t?`, 20, 20)
    }
     
      ctx.translate(200, 137.5)
  
      if (p.rollShape == "parallelogram"){
        let adjustX = genNumbers(40)-20
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(-p.paraLength, 0)
        ctx.lineTo(-p.paraLength+adjustX, -p.paraBreadth)
        ctx.lineTo(p.paraLength+adjustX, -p.paraBreadth)
        ctx.lineTo(p.paraLength, 0)
        ctx.closePath()
        ctx.stroke()

        let paraAngle = angles(-p.paraLength, 0, -p.paraLength+adjustX, -p.paraBreadth);
        paraAngleR = paraAngle*Math.PI/180
        p.paraAngleD = Math.abs(Math.floor(paraAngle))
        console.log(paraAngle, p.paraAngleD)

        ctx.beginPath()
        ctx.arc(-p.paraLength, 0, 15, 2*Math.PI+paraAngleR, 2*Math.PI)
        ctx.stroke()
        ctx.fillText(`${p.paraAngleD}°`,-p.paraLength+20, 0-3)

        if (p.paraRoll == 1){
          ctx.beginPath()
          ctx.arc(-p.paraLength+adjustX, -p.paraBreadth, 15, 0, 1*Math.PI+paraAngleR)
          ctx.stroke()
          ctx.fillText(`p`,-p.paraLength+adjustX+20, -p.paraBreadth+10)
        }

        if (p.paraRoll == 2){
          ctx.beginPath()
          ctx.arc(p.paraLength+adjustX, -p.paraBreadth, 15, 1*Math.PI+paraAngleR, 1*Math.PI)
          ctx.stroke()  
          ctx.fillText(`p`,p.paraLength+adjustX-25, -p.paraBreadth+10)
        }
      }
      if (p.rollShape == "rhombus"){
        let adjustX = (genNumbers(10)-5)*9
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(-p.rhombusSide/2, 0)
        ctx.lineTo(-p.rhombusSide/2+adjustX, -p.rhombusSide)
        ctx.lineTo(p.rhombusSide/2+adjustX, -p.rhombusSide)
        ctx.lineTo(p.rhombusSide/2, 0)
        ctx.closePath()
        ctx.stroke()

        let rhombusAngle = angles(-p.rhombusSide/2, 0, -p.rhombusSide/2+adjustX, -p.rhombusSide)
        let rhombusAngleR = rhombusAngle*Math.PI/180
        p.rhombusAngleD = Math.abs(Math.floor(rhombusAngle))
        console.log(rhombusAngle, rhombusAngleR, p.rhombusAngleD)

        ctx.save()
          ctx.translate((-p.rhombusSide/2+(-p.rhombusSide/2+adjustX))/2, (0-p.rhombusSide)/2)
          ctx.rotate(rhombusAngleR-0.5*Math.PI)
          ctx.beginPath()
          ctx.moveTo(-5, 0)
          ctx.lineTo(5, 0)
          ctx.stroke()
        ctx.restore()

        ctx.save()
          ctx.translate((-p.rhombusSide/2+adjustX+p.rhombusSide/2+adjustX)/2, -p.rhombusSide)
          ctx.rotate(rhombusAngleR)
          ctx.beginPath()
          ctx.moveTo(-5, 0)
          ctx.lineTo(5, 0)
          ctx.stroke()
        ctx.restore()

        ctx.save()
          ctx.translate((p.rhombusSide/2+adjustX+p.rhombusSide/2)/2, -p.rhombusSide/2)
          ctx.rotate(rhombusAngleR-0.5*Math.PI)
          ctx.beginPath()
          ctx.moveTo(-5, 0)
          ctx.lineTo(5, 0)
          ctx.stroke()
        ctx.restore()

        ctx.save()
          ctx.translate(0, 0)
          ctx.rotate(rhombusAngleR)
          ctx.beginPath()
          ctx.moveTo(-5, 0)
          ctx.lineTo(5, 0)
          ctx.stroke()
        ctx.restore()

        if (p.rhombusRoll != 5){
          ctx.beginPath()
          ctx.arc(-p.rhombusSide/2, 0, 15, 2*Math.PI+rhombusAngleR, 2*Math.PI)
          ctx.stroke()
          ctx.fillText(`${p.rhombusAngleD}°`,-p.rhombusSide/2+20, -2)
        }

        if (p.rhombusRoll == 1){
          ctx.beginPath()
          ctx.arc(-p.rhombusSide/2+adjustX, -p.rhombusSide, 15, 0, 1*Math.PI+rhombusAngleR)
          ctx.stroke()
          ctx.fillText(`r`,-p.rhombusSide/2+adjustX+20, -p.rhombusSide+10)
        }

        if (p.rhombusRoll == 2){
          ctx.beginPath()
          ctx.arc(p.rhombusSide/2+adjustX, -p.rhombusSide, 15, 1*Math.PI+rhombusAngleR, 1*Math.PI)
          ctx.stroke()
          ctx.fillText(`r`,p.rhombusSide/2+adjustX-30, -p.rhombusSide+10)
        }

        if (p.rhombusRoll == 3){
          ctx.beginPath()
          ctx.moveTo(-p.rhombusSide/2+adjustX, -p.rhombusSide)
          ctx.lineTo(p.rhombusSide/2, 0)
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(-p.rhombusSide/2+adjustX, -p.rhombusSide, 15, (1*Math.PI+rhombusAngleR)/2, 1*Math.PI+rhombusAngleR)
          ctx.stroke()
          ctx.fillText(`r`,-p.rhombusSide/2+adjustX+5, -p.rhombusSide+23)
        }

        if (p.rhombusRoll == 4){
          ctx.beginPath()
          ctx.moveTo(-p.rhombusSide/2, 0)
          ctx.lineTo(p.rhombusSide/2+adjustX, -p.rhombusSide)
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(-p.rhombusSide/2, 0, 20, 2*Math.PI+rhombusAngleR, 2*Math.PI+rhombusAngleR/2)
          ctx.stroke()
          ctx.fillText(`r`,-p.rhombusSide/2+6, -22)
        }
        if (p.rhombusRoll == 5){
          ctx.beginPath()
          ctx.moveTo(-p.rhombusSide/2, 0)
          ctx.lineTo(p.rhombusSide/2+adjustX, -p.rhombusSide)
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(-p.rhombusSide/2, 0, 20, 2*Math.PI+rhombusAngleR, 2*Math.PI+rhombusAngleR/2)
          ctx.stroke()
          ctx.fillText(`${p.rhombusAngleD/2}°`,-p.rhombusSide/2+6, -22)

          ctx.beginPath()
          ctx.arc(-p.rhombusSide/2+adjustX, -p.rhombusSide, 15, 0, 1*Math.PI+rhombusAngleR)
          ctx.stroke()
          ctx.fillText(`r`, -p.rhombusSide/2+adjustX+17, -p.rhombusSide+20)
        }
      }
      if (p.rollShape == "trapezium"){
        let adjustX = (genNumbers(10)-5)*9
        let adjustX2 = (genNumbers(10)-5)*9
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(-p.trapLengthL, 0)
        ctx.lineTo(-p.trapLengthL+adjustX, -p.trapTop)
        ctx.lineTo(p.trapLengthB+adjustX2, -p.trapTop)
        // ctx.lineTo(p.trapLengthB, 0)
        ctx.closePath()
        ctx.stroke()

        ctx.save()
          ctx.translate((-p.trapLengthL+adjustX+p.trapLengthB+adjustX2)/2, -p.trapTop)
          ctx.beginPath()
          ctx.moveTo(-5, -5)
          ctx.lineTo(0, 0)
          ctx.lineTo(-5, 5)
          ctx.stroke()
        ctx.restore()

        ctx.save()
          ctx.translate(-p.trapLengthL/2, 0)
          ctx.beginPath()
          ctx.moveTo(-5, -5)
          ctx.lineTo(0, 0)
          ctx.lineTo(-5, 5)
          ctx.stroke()
        ctx.restore()

        let trapAngle = angles(-p.trapLengthL, 0, -p.trapLengthL+adjustX, -p.trapTop)
        let trapAngleR = trapAngle*Math.PI/180
        p.trapAngleD = Math.abs(Math.floor(trapAngle))
        console.log(trapAngle, trapAngleR, p.trapAngleD)

        if (p.trapRoll == 1){
          ctx.beginPath()
          ctx.arc(-p.trapLengthL, 0, 15, 2*Math.PI+trapAngleR, 2*Math.PI)
          ctx.stroke()
          ctx.fillText(`${p.trapAngleD}°`, -p.trapLengthL+20, -1)

          ctx.beginPath()
          ctx.arc(-p.trapLengthL+adjustX, -p.trapTop, 15, 0, 1*Math.PI+trapAngleR)
          ctx.stroke()
          ctx.fillText(`t`, -p.trapLengthL+adjustX+20, -p.trapTop+11)
        }

        let trapAngle2 = angles(0, 0, p.trapLengthB+adjustX2, -p.trapTop)+180
        let trapAngleR2 = trapAngle2*Math.PI/180
        p.trapAngleD2 = Math.abs(Math.floor(trapAngle2))
        console.log(trapAngle2, trapAngleR2, p.trapAngleD2)

        if (p.trapRoll == 2){
          ctx.beginPath()
          ctx.arc(0, 0, 15, 1*Math.PI, 1*Math.PI+trapAngleR2)
          ctx.stroke()
          ctx.fillText(`${p.trapAngleD2}°`, 0-45, -2)

          ctx.beginPath()
          ctx.arc(p.trapLengthB+adjustX2, -p.trapTop, 15, trapAngleR2, 1*Math.PI)
          ctx.stroke()
          ctx.fillText(`t`, p.trapLengthB+adjustX2-30, -p.trapTop+11)
        }
      }
    ctx.restore()
  }


  if ( level == 5.11){
    if (p.rollType == "discount"){
      if (p.rollType2 == "before"){
        displayProblem.innerHTML = 
        `
        A discount of ${p.percentageOne}% is given to an item that cost $${p.valueOne}.
        What is the price of the item after discount?
        `
      }
      if (p.rollType2 == "after"){
        displayProblem.innerHTML = 
        `
        A discount of ${p.percentageOne}% is given to an item.</br> 
        After discount, the item now cost $${p.valueOne}.</br> 
        What is the price of the item before discount?
        `
      }
      if (p.rollType2 == "change"){
        displayProblem.innerHTML = 
        `
        A discount of ${p.percentageOne}% is given to an item.</br> 
        After discount, the item now cost $${p.valueOne}.</br> 
        What is the amount of discount given?
        `
      }
    }
    if (p.rollType == "GST"){
      if (p.rollType2 == "before"){
        displayProblem.innerHTML = 
        `
        A ${p.percentageTwo}% GST is charged to an item that cost $${p.valueOne}.
        What is the final amount for the item?
        `
      }
      if (p.rollType2 == "after"){
        displayProblem.innerHTML = 
        `
        A ${p.percentageTwo}% GST is charged to an item.</br>
        The final cost of the item is $${p.valueOne}.</br> 
        What is the price of the item before GST?
        `
      }
      if (p.rollType2 == "change"){
        displayProblem.innerHTML = 
        `
        A ${p.percentageTwo}% GST is charged to an item.</br> 
        The final cost of the item is $${p.valueOne}.</br> 
        What is the amount for the GST?
        `
      }
    }
    if (p.rollType == "increase"){
      if (p.rollType2 == "before"){
        displayProblem.innerHTML = 
        `
        An item cost $${p.valueOne} at first.<br>
        Its value has now increased by ${p.percentageOne}%.<br>
        What is the value of the item now?
        `
      }
      if (p.rollType2 == "after"){
        displayProblem.innerHTML = 
        `
       The value of an item increased by ${p.percentageOne}%.</br>
       It now cost $${p.valueOne}.</br>
       What is the value of the item at first?
        `
      }
      if (p.rollType2 == "change"){
        displayProblem.innerHTML = 
        `
       The value of an item increased by ${p.percentageOne}%.</br>
       It now cost $${p.valueOne}.</br>
       What is the value of the increase?
        `
      }
    }
    if (p.rollType == "decrease"){
      if (p.rollType2 == "before"){
        displayProblem.innerHTML = 
        `
        An item cost $${p.valueOne} at first.</br>
        Its value has now decreased by ${p.percentageOne}%.</br>
        What is the value of the item now?
        `
      }
      if (p.rollType2 == "after"){
        displayProblem.innerHTML = 
        `
       The value of an item decreased by ${p.percentageOne}%.</br>
       It now cost $${p.valueOne}.</br>
       What is the value of the item at first?
        `
      }
      if (p.rollType2 == "change"){
        displayProblem.innerHTML = 
        `
       The value of an item decreased by ${p.percentageOne}%.</br>
       It now cost $${p.valueOne}.</br>
       What is the value of the decrease?
        `
      }
    }
  }

  if ( level == 5.12){
    ctx.save()
    let finalDifficulty = difficulty
    if (difficulty >= 2){
      finalDifficulty = 3
    } 
    if (difficulty >= 3){
      finalDifficulty = 4
    } 
    difficulty = Number(difficulty)
    p.roll = ["v","h","l","b","ba"][genNumbers(finalDifficulty+1)]
    console.log(p.roll)
    ctx.font = "1em serif"
      p.volume = (p.pointA*(p.pointA+p.pointC)*p.pointB)
      p.volumeDisplay = (p.pointA*(p.pointA+p.pointC)*p.pointB).toLocaleString('en-US')
      if (p.roll == "v") {
        ctx.fillText(`Find the volume of the Cuboid`, 20, 20)
      }
      if (p.roll == "h") {
        ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Height`, 20, 20)
      }
      if (p.roll == "b") {
        ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Breadth`, 20, 20)
      }
      if (p.roll == "l") {
        ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Length`, 20, 20)
      }
      if (p.roll == "ba") {
        ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find the Base Area`, 20, 20)
      }

      ctx.translate(125, 230)
      let a = p.pointA
      let b = -p.pointB
      let c = p.pointC
      let d = -p.pointD
      
      drawCuboid(a, b, c, d)

      if (p.roll == "v"){
        ctx.fillText(a, (a)/2-10, +15)
        ctx.fillText(a+c, a+c/2+10, 0+d/2)
        ctx.fillText(-b, a+c+5, b+d-b/2+5)
      }
      if (p.roll == "h"){
        ctx.fillText(a, (a)/2-10, +15)
        ctx.fillText(a+c, a+c/2+10, 0+d/2)
        ctx.fillText("?", a+c+5, b+d-b/2+5)
      }
      if (p.roll == "b"){
        ctx.fillText(a, (a)/2-10, +15)
        ctx.fillText("?", a+c/2+10, 0+d/2)
        ctx.fillText(-b, a+c+5, b+d-b/2+5)
      }
      if (p.roll == "l"){
        ctx.fillText("?", (a)/2-10, +15)
        ctx.fillText(a+c, a+c/2+10, 0+d/2)
        ctx.fillText(-b, a+c+5, b+d-b/2+5)
      }
      if (p.roll == "ba"){
        ctx.fillText(-b, a+c+5, b+d-b/2+5)
      }

    ctx.restore()
  }

  if ( level == 5.13 ){
    ctx.save()
      ctx.font = "1em serif"
      if (p.rollAnswer == "A"){
        ctx.fillText(`These are identical ${p.rollShape}s.`, 20, 20)
        ctx.fillText(` What is the area of the figure?`, 20, 40)
      }
      if (p.rollAnswer == "B"){
        ctx.fillText(`These are identical ${p.rollShape}.`, 20, 20)
        ctx.fillText(`What is the area of the unshaded parts?`, 20, 40)
      }

      let x = 100
      let y = 50
      let x2 = genNumbers(10)+20
      let y2 = genNumbers(10)+20
  
      if (p.rollShape == "square"){
        ctx.translate(x, y)
        ctx.beginPath()
        ctx.rect(0, 0, p.squareSide, p.squareSide);
        ctx.stroke()

         // text
         p.shadedArea = (p.squareSide-x2)*(p.squareSide-y2)
         p.shadedArea = Math.floor(p.shadedArea/100)
         p.unshadedArea = p.squareSide*p.squareSide-p.shadedArea
         p.unshadedArea = Math.floor(p.unshadedArea/100)
         ctx.fillText(p.unshadedArea, 0+5, 0+20)

        ctx.translate(x2, y2)
        ctx.beginPath()
        ctx.rect(0, 0, p.squareSide, p.squareSide);
        ctx.stroke()

        ctx.beginPath()
        ctx.rect(0, 0, p.squareSide-x2, p.squareSide-y2)
        ctx.fill()

        // text
        ctx.save()
          ctx.fillStyle = "white"
          ctx.fillText(p.shadedArea, 0+5, 0+20)
        ctx.restore()
      }

      if (p.rollShape == "rectangle"){
        ctx.translate(x, y)
        ctx.beginPath()
        ctx.rect(0, 0, p.rectLength, p.rectBreadth);
        ctx.stroke()

         // text
         p.shadedArea = (p.rectLength-x2)*(p.rectBreadth-y2)
         p.shadedArea = Math.floor(p.shadedArea/100)
         p.unshadedArea = p.rectLength*p.rectBreadth-p.shadedArea
         p.unshadedArea = Math.floor(p.unshadedArea/100)
         ctx.fillText(p.unshadedArea, 0+5, 0+20)

        ctx.translate(x2, y2)
        ctx.beginPath()
        ctx.rect(0, 0, p.rectLength, p.rectBreadth);
        ctx.stroke()

        ctx.beginPath()
        ctx.rect(0, 0, p.rectLength-x2, p.rectBreadth-y2)
        ctx.fill()

        // text
        ctx.save()
          ctx.fillStyle = "white"
          ctx.fillText(p.shadedArea, 0+5, 0+20)
        ctx.restore()
      }

      if (p.rollShape == "triangle"){
        ctx.translate(x-30, y)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(p.triBase, 0)
        ctx.lineTo(p.triBase, p.triHeight)
        ctx.closePath()
        ctx.stroke()


        let m = p.triHeight/p.triBase
        let c = y2/m
        ctx.beginPath()
        ctx.moveTo(p.triBase, y2)
        ctx.lineTo(p.triBase, p.triHeight)
        ctx.lineTo(c, y2)
        ctx.fill()

        //  text
         p.shadedArea = 1/2*(p.triBase-c)*(p.triHeight-y2)
         p.shadedArea = Math.floor(p.shadedArea/100)
         p.unshadedArea = 1/2*p.triBase*p.triHeight
         p.unshadedArea = Math.floor(p.unshadedArea/100)
         ctx.fillText(p.unshadedArea, p.triBase-30, 0+20)

          // text
        ctx.save()
          ctx.fillStyle = "white"
          ctx.fillText(p.shadedArea, p.triBase-20, y2+16)
        ctx.restore()

        ctx.translate(x2, y2)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(p.triBase, 0)
        ctx.lineTo(p.triBase, p.triHeight)
        ctx.closePath()
        ctx.stroke()
    }
    ctx.restore()
  }

  if ( level == 5.14){
    ctx.save()
    ctx.font = "1em serif"
    ctx.fillText(`Find the area of the figure.`, 20, 20)

      if (p.roll == "up" || p.roll == "down" ){
        if (p.roll == "up"){
          ctx.translate(50, 200)
          drawHorizontalLine(0, 0, p.triX1+p.triX2, 5)
          ctx.fillText(`${p.triX1+p.triX2}`, (p.triX1+p.triX2)/2-15, 20)

          drawVerticalLine(p.triX1+p.triX2, -p.triY2, p.triY2, 5)
          ctx.fillText(`${p.triY2}`, (p.triX1+p.triX2+5)+3,-p.triY2/2)
        }
        if (p.roll == "down" ){
          ctx.translate(50, 50)
          p.triY2 = p.triY2*-1
          drawHorizontalLine(0, 0, p.triX1+p.triX2, -5)
          ctx.fillText(`${p.triX1+p.triX2}`, (p.triX1+p.triX2)/2-15, -10)
  
          drawVerticalLine(p.triX1+p.triX2, 0, -p.triY2, 5)
          ctx.fillText(`${-p.triY2}`, (p.triX1+p.triX2+5)+3, -p.triY2/2)
        }
        // draw triangle
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(p.triX1, 0)
        ctx.lineTo(p.triX2, -p.triY2)
        ctx.closePath()
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.triX1, 0)
        ctx.lineTo(p.triX1+p.triX2, 0)
        ctx.lineTo(p.triX2+genNumbers(150)+5, -p.triY2)
        ctx.closePath()
        ctx.stroke()

// horizontal line
        // ctx.beginPath()
        // ctx.moveTo(0, 5)
        // ctx.lineTo(p.triX1+p.triX2, 5)
        // ctx.stroke()

        // ctx.fillText(`${p.triX1+p.triX2}`, (p.triX1+p.triX2)/2-15, 20)
        
        // ctx.beginPath()
        // ctx.moveTo(5, 0)
        // ctx.lineTo(0, 5)
        // ctx.lineTo(5, 10)
        // ctx.stroke()

        // ctx.beginPath()
        // ctx.moveTo(p.triX1+p.triX2-5, 0)
        // ctx.lineTo(p.triX1+p.triX2, 5)
        // ctx.lineTo(p.triX1+p.triX2-5, 10)
        // ctx.stroke()


// vertical line

        // ctx.beginPath()
        // ctx.moveTo(p.triX1+p.triX2+5, 0)
        // ctx.lineTo(p.triX1+p.triX2+5, -p.triY2)
        // ctx.stroke()

        // ctx.fillText(`${p.triY2}`, (p.triX1+p.triX2+5)+3,-p.triY2/2)

        // ctx.beginPath()
        // ctx.moveTo(p.triX1+p.triX2, -5)
        // ctx.lineTo(p.triX1+p.triX2+5, 0)
        // ctx.lineTo(p.triX1+p.triX2+10, -5)
        // ctx.stroke()

        // ctx.beginPath()
        // ctx.moveTo(p.triX1+p.triX2, -p.triY2+5)
        // ctx.lineTo(p.triX1+p.triX2+5, -p.triY2)
        // ctx.lineTo(p.triX1+p.triX2+10, -p.triY2+5)
        // ctx.stroke()
      }
      if (p.roll == "updown"){
          ctx.translate(50, 175)
          drawHorizontalLine(0, 0, p.triX1+p.triX2, 5)
          ctx.fillText(`${p.triX1+p.triX2}`, (p.triX1+p.triX2)/2-15, 20)

          drawVerticalLine(p.triX1+p.triX2, -p.triY2, p.triY2+p.triY3, 10)
          ctx.fillText(`${p.triY2+p.triY3}`, (p.triX1+p.triX2+5)+5,-p.triY2/2)
  
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(p.triX1, 0)
        ctx.lineTo(p.triX2, -p.triY2)
        ctx.closePath()
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.triX1, 0)
        ctx.lineTo(p.triX1+p.triX2, 0)
        ctx.lineTo(p.triX2+genNumbers(150)+5, p.triY3)
        ctx.closePath()
        ctx.stroke()
      }

      if (p.roll == "rectangle"){
        let centralize = (400-p.rectL)/2
        ctx.translate(centralize, 100)
        ctx.beginPath()
        ctx.rect(0, 0, p.rectL, p.rectB)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(p.rectO, p.rectB)
        ctx.lineTo(p.rectL, 0)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()

        ctx.save()
          ctx.fillStyle = "white"
          p.triA = 1/2*p.rectL*p.rectB
          ctx.fillText(`${p.triA}cm2`, p.rectL/2-30, 20)
        ctx.restore()
      }

    ctx.restore()
  }

  if ( level == 5.15 ){
    let syntext = genNumbers(2)
    let largestValue = 0
    while (p.objectOneV == p.objectTwoV){
      p.objectOneV = (genNumbers(10)+1)*10
    }
    if (p.objectOneV > p.objectTwoV){
      largestValue = p.objectOneV
    } else {
      largestValue = p.objectTwoV
    }
    p.objectOneSF = p.objectOneV
    p.objectTwoSF = p.objectTwoV
    for (let i = 2; i <= largestValue; i++ ){
      while (p.objectOneSF % i == 0 && p.objectTwoSF % i == 0){
        p.objectOneSF /= i
        p.objectTwoSF /= i
        console.log(i)
      }
    }

    displayProblem.innerHTML = 
    `
    ${p.objectOneV}% of ${p.objectOne} ${syntext == 0 ? "=" : "is equal to"} ${p.objectTwoV}% of ${p.objectTwo}
    `
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
  if ( level == 6.01){
    if (difficulty <= 0){
      difficulty = 0;
    } else {
      difficulty = 1;
    }
    ctx.save()
    ctx.font = "1em serif"
    if (difficulty == 0){
      if (p.rollType == "area"){
        ctx.fillText(`Find the ${p.rollType} of the Circle`, 20, 20)
      }
      if (p.rollType == "circumference"){
        ctx.fillText(`Find the ${p.rollType} of the Circle`, 20, 20)
      }
      if (p.rollPi != "π"){
        ctx.fillText(`π = ${p.rollPi}`, 20, 40)
      }
      ctx.translate(200, 137.5)

      ctx.fillStyle = "orange"
      ctx.beginPath()
      ctx.arc(0, 0, p.radius, 0, 2*Math.PI)
      ctx.stroke()
      ctx.fill()

      // center
      ctx.fillStyle = "black"
      ctx.beginPath()
      ctx.arc(0, 0, 1, 0, 2*Math.PI)
      ctx.stroke()
      ctx.fill()

      if (p.rollRD == "r"){
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(p.radius, 0)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(5, -5)
        ctx.lineTo(0, 0)
        ctx.lineTo(5, 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.radius-5, -5)
        ctx.lineTo(p.radius, 0)
        ctx.lineTo(p.radius-5, 5)
        ctx.stroke()

        ctx.fillText(`${p.radius}cm`, 0+10,-3)
      }

      if (p.rollRD == "d"){
        ctx.beginPath()
        ctx.moveTo(-p.radius, 0)
        ctx.lineTo(p.radius, 0)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-p.radius+5, -5)
        ctx.lineTo(-p.radius, 0)
        ctx.lineTo(-p.radius+5, 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.radius-5, -5)
        ctx.lineTo(p.radius, 0)
        ctx.lineTo(p.radius-5, 5)
        ctx.stroke()

        ctx.fillText(`${p.radius*2}cm`, 0-10,-3)
      }
    }
    if (difficulty == 1){
      if (p.rollType == "area"){
        ctx.fillText(`Find the ${p.rollType} of the figure`, 20, 20)
      }
      if (p.rollType == "circumference"){
        ctx.fillText(`Find the ${p.rollType} of the figure`, 20, 20)
      }
      if (p.rollPi != "π"){
        ctx.fillText(`π = ${p.rollPi}`, 20, 40)
      }
      ctx.translate(200, 137.5)
      if (p.rollType2 == "semicircle"){
        p.arcAngle = 180*Math.PI/180
      }
      if (p.rollType2 == "quadrant"){
        p.arcAngle = 90*Math.PI/180
      }
      if (p.rollType2 == "others"){
        p.arcAngle = p.rollOthers*Math.PI/180
      }

      if (p.rollType2 == "others" || p.rollType2 == "quadrant"){
        p.rollRD = "r"
      }
      ctx.save()
        ctx.fillStyle = "orange"
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.arc(0, 0, p.radius, 2*Math.PI-p.arcAngle, 2*Math.PI)
        ctx.lineTo(0, 0)
        ctx.stroke()
        ctx.fill()
      ctx.restore()

      if (p.rollType2 == "others"){
        ctx.beginPath()
        ctx.arc(0, 0, 10, 2*Math.PI-p.arcAngle, 2*Math.PI)
        ctx.stroke()
        if (p.rollType2 == "quadrant" || (p.rollType2 == "others" && p.rollOthers <= 90 )){
          ctx.fillText(`${p.rollOthers}°`, +5, -10)
        } else if (p.rollType2 == "semicircle" || (p.rollType2 == "others" && p.rollOthers > 90 && p.rollOthers <= 180)){
          ctx.fillText(`${p.rollOthers}°`, -10, -10)
        } else {
          ctx.fillText(`${p.rollOthers}°`, -50, +2)
        }
      }

      // center
      ctx.fillStyle = "black"
      ctx.beginPath()
      ctx.arc(0, 0, 1, 0, 2*Math.PI)
      ctx.stroke()
      ctx.fill()

      if (p.rollRD == "r"){
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(p.radius, 0)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(5, -5)
        ctx.lineTo(0, 0)
        ctx.lineTo(5, 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.radius-5, -5)
        ctx.lineTo(p.radius, 0)
        ctx.lineTo(p.radius-5, 5)
        ctx.stroke()

        ctx.fillText(`${p.radius}cm`, 0+10,-3)
      }

      if (p.rollRD == "d"){
        ctx.beginPath()
        ctx.moveTo(-p.radius, 0)
        ctx.lineTo(p.radius, 0)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-p.radius+5, -5)
        ctx.lineTo(-p.radius, 0)
        ctx.lineTo(-p.radius+5, 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(p.radius-5, -5)
        ctx.lineTo(p.radius, 0)
        ctx.lineTo(p.radius-5, 5)
        ctx.stroke()

        ctx.fillText(`${p.radius*2}cm`, 0-10,-3)
      }
    }
    ctx.restore()
  }

  if ( level == 6.02){
    ctx.save()
    let x = 200
    let y = 137.5
    ctx.font = "1em serif"
    if (p.rollType == "triangle"){
      ctx.fillText(`What is the area of the isosceles Triangle?`, 20, 20)
    }
    if (p.rollType == "radius"){
      ctx.fillText(`What is the area of the Circle?`, 20, 20)
    }
    if (p.rollType == "angle"){
      ctx.fillText(`Find ∠${p.rollAngle}.`, 20, 20)
    }
    if (p.rollType == "square"){
      ctx.fillText(`Find the radius of the circle.`, 20, 20)
    }
    if (p.rollType == "square2"){
      ctx.fillText(`Find the area of the square.`, 20, 20)
    }

      if (p.rollType == "triangle"){
        ctx.translate(200, 137.5)
        ctx.rotate(p.rotation*Math.PI/180)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, p.triangleSide)
        ctx.lineTo(p.triangleSide, 0)
        ctx.closePath()
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, p.triangleSide+5)
        ctx.lineTo(p.triangleSide+5, 0)
        ctx.stroke()

        ctx.fillText(`${p.triangleSide}`, (p.triangleSide+5)/2+10,(p.triangleSide+5)/2+10)
        ctx.beginPath()
        ctx.moveTo(p.triangleSide, 0)
        ctx.lineTo(p.triangleSide+5, 0)
        ctx.lineTo(p.triangleSide+5, 5)
        ctx.stroke()
        
        ctx.save()
          ctx.translate(0, p.triangleSide/2)
          ctx.beginPath()
          ctx.moveTo(-5, 0)
          ctx.lineTo(5, 0)
          ctx.stroke()
        ctx.restore()

        ctx.save()
          ctx.translate(p.triangleSide/2, 0)
          ctx.beginPath()
          ctx.moveTo(0, -5)
          ctx.lineTo(0, 5)
          ctx.stroke()
        ctx.restore()

        ctx.beginPath()
        ctx.moveTo(0, p.triangleSide)
        ctx.lineTo(0, p.triangleSide+5)
        ctx.lineTo(0+5, p.triangleSide+5)
        ctx.stroke()
      }

      if ( p.rollType == "radius"){
        ctx.translate(x, y)

        let squareSide = Math.sqrt(1/2*p.radius*p.radius)
        p.squareSideD = Math.floor(squareSide)
        ctx.beginPath()
        ctx.arc(0, 0, 2, 0, 2*Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(0, 0, p.radius, 0, 2*Math.PI)
        ctx.stroke()

        ctx.beginPath()
        ctx.rect(0, 0, squareSide, -squareSide)
        ctx.stroke()

        // diagonal line
        ctx.save()
          ctx.strokeStyle = "red"
          ctx.fillStyle = "red"
          ctx.beginPath()
          ctx.moveTo(0, -squareSide)
          ctx.lineTo(squareSide, 0)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(3, -squareSide+6)
          ctx.lineTo(0, -squareSide)
          ctx.lineTo(6, -squareSide+3)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(squareSide-3, -6)
          ctx.lineTo(squareSide, 0)
          ctx.lineTo(squareSide-6, -3)
          ctx.stroke()

          ctx.fillText(`${p.squareSideD}`, squareSide/2-20, -squareSide/2+10)
        ctx.restore()
      }
      
      if (p.rollType == "angle"){
        // if (p.rotation == p.rotation2){
        //   p.rotation -= 30
        // }
        // if (p.rotation > p.rotation2){
        //   [p.rotation, p.rotation2] = [p.rotation2, p.rotation]
        // }
        // p.netRotation = p.rotation2-p.rotation
       
        console.log(p.rotation2)
        p.angleOther = (180-p.rotation2)/2
        ctx.translate(x, y)
        ctx.beginPath()
        ctx.arc(0, 0, p.radius, 0, 2*Math.PI)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(0, 0, 2, 0, 2*Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(p.radius, 0)
        ctx.stroke()

        ctx.save()
          ctx.rotate(p.rotation2*Math.PI/180)
          ctx.lineTo(p.radius, 0)
        ctx.restore()
        ctx.closePath()
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(0, 0, 10, 0, p.rotation2*Math.PI/180)
        ctx.stroke()
        if (p.rollAngle == "a"){
          ctx.fillText(`${p.rotation2}°`, 10, 12)
        }
        if (p.rollAngle == "b"){
          ctx.fillText(`b`, 10, 12)
        }

        ctx.save()
          ctx.translate(p.radius, 0)
          ctx.beginPath()
          ctx.arc(0, 0, 10, (180-p.angleOther)*Math.PI/180, 1*Math.PI)
          ctx.stroke()
          if (p.rollAngle == "a"){
            ctx.fillText(`a`, -20, 10)
          }
          if (p.rollAngle == "b"){
            if (p.angleOther%1 != 0){
              ctx.fillText(`${p.angleOther}°`, 1, 3)
            } else {
              ctx.fillText(`${p.angleOther}°`, -35, 11)
            }
          }
        ctx.restore()
      }
      if (p.rollType == "square"){
        let squareSide = Math.sqrt(1/2*p.radius*p.radius)
        ctx.fillText(`Area of the square is ${p.radius/10*p.radius/10*2}cm2.`, 20, 40)
        ctx.translate(x, y)
        ctx.beginPath()
        ctx.arc(0, 0, p.radius, 0, 2*Math.PI)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(0, 0, 2, 0, 2*Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.rect(-squareSide,squareSide,squareSide*2, -squareSide*2)
        ctx.stroke()

        ctx.save()
        ctx.rotate(((genNumbers(6)-2)*45)*Math.PI/180)
          drawHorizontalLine(0, 0, p.radius, 0)
          ctx.fillText(`?`, p.radius/2, 5)
        ctx.restore()
      }
      if (p.rollType == "square2"){
        ctx.save()
         ctx.translate(x, y)
         ctx.rotate(p.rotation * Math.PI / 180)
         ctx.beginPath()
         ctx.arc(0, 0, 1, 0, 2*Math.PI)
         ctx.stroke()

          ctx.beginPath()
          ctx.rect(-p.radius2, -p.radius2, p.radius2*2, p.radius2*2)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(p.radius2, p.radius2)
          ctx.stroke()

          // arrow head
          ctx.beginPath()
          ctx.moveTo(10, 3)
          ctx.lineTo(0, 0)
          ctx.lineTo(3, 10)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(p.radius2-11, p.radius2-6)
          ctx.lineTo(p.radius2, p.radius2)
          ctx.lineTo(p.radius2-6, p.radius2-11)
          ctx.stroke()

          ctx.fillText(`${p.radius2/20} cm`, p.radius2/2, p.radius2/2)

        ctx.restore()
      }

    ctx.restore()
  }

  if ( level == 6.03){
    console.log(p.rollOne, p.rollTwo, p.rollThree)
    if (p.rollOne == "AN"){
      displayProblem.textContent = `${p.rollTwo}${p.rollAlp} ${p.rollSym} ${p.rollThree}`
      if (p.rollTwo == 1){
        displayProblem.textContent = `${p.rollAlp} ${p.rollSym} ${p.rollThree}`
      }
    }
    if (p.rollOne == "AA"){
      const displayFirst = `${p.rollTwo}${p.rollAlp}`
      const displaySecond = `${p.rollSymTwo} ${p.rollThree}${p.rollAlp}`
      displayProblem.textContent = `${displayFirst} ${p.rollSymTwo} ${displaySecond}`
    }
    if (p.rollOne == "NA"){
      displayProblem.textContent = `${p.rollTwo} ${p.rollSym} ${p.rollThree}${p.rollAlp}`
      if (p.rollThree == 1){
        displayProblem.textContent = `${p.rollTwo} ${p.rollSym } ${p.rollAlp}`
      }
    }
    if (p.rollOne == "AA"){
      displayProblem.textContent = `${p.rollTwo}${p.rollAlp} ${p.rollSymTwo} ${p.rollThree}${p.rollAlp}`
      if (p.rollTwo == 1){
        displayProblem.textContent = `${p.rollAlp} ${p.rollSymTwo} ${p.rollThree}${p.rollAlp}`
      }
      if (p.rollThree == 1){
        displayProblem.textContent = `${p.rollTwo}${p.rollAlp} ${p.rollSymTwo} ${p.rollAlp}`
      }
      if (p.rollTwo == 1 && p.rollThree == 1){
        displayProblem.textContent = `${p.rollAlp} ${p.rollSymTwo} ${p.rollAlp}`
      }
    }
  }

  if ( level == 6.05 ){
    if (p.rollOne == "d"){
      console.log(p.roll2)
      let time = p.roll2 == 2? p.rollUnits[p.roll][2]:p.rollUnits[p.roll][1]
      displayProblem.innerHTML = 
      `
      Someone travels from point A to B, </br>
      at ${p.rollS} ${p.rollUnits[p.roll][0]}/${p.rollUnits[p.roll][1]} for ${p.rollT} ${time}</br>
      What is the distance between A and B? 
      `
    }
    if (p.rollOne == "s"){
      p.distance = p.rollS*p.rollT
      displayProblem.innerHTML = 
      `
      Someone travels from point A to B,</br>
      which is ${p.distance} ${p.rollUnits[p.roll][0]} apart, in ${p.rollT} ${p.rollUnits[p.roll][1]}.</br>
      How fast did ${p.identity} travel?
      `
    }
    if (p.rollOne == "t"){
      p.distance = p.rollS*p.rollT
      displayProblem.innerHTML = 
      `
      Someone travels from point A to B which is ${p.distance} ${p.rollUnits[p.roll][0]} apart, </br>
      at ${p.rollS} ${p.rollUnits[p.roll][0]}/${p.rollUnits[p.roll][1]}  .</br>
      How long did ${p.identity} take?
      `
    }
  }

  if ( level == 6.06 ){
    if (p.roll == "A"){
      displayProblem.innerHTML = 
      `
      Someone moved from</br>
      A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB}${p.timeUnits},</br>
      then </br>
      B to C at ${p.speedC} units/${p.timeUnits} for ${p.timeC}${p.timeUnits}.</br>
      Whats the average speed of the whole journey?

      `
    }
    if (p.roll == "B"){
      p.speedA = Math.ceil((p.speedB*p.timeB+p.speedC*p.timeC)/(p.timeB+p.timeC))
      displayProblem.innerHTML = 
      `
      Someone moved from</br>
      A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB} ${p.timeUnits},</br>
      then from B to C in ${p.timeC} ${p.timeUnits}.</br>
      ${p.gender} travelled at ${p.speedA} units/${p.timeUnits} for the whole journey.</br>
      At what speed did ${p.gender} travel between B to C?

      `
    }
    if (p.roll == "C"){
      p.speedA = Math.ceil((p.speedB*p.timeB+p.speedC*p.timeC)/(p.timeB+p.timeC))
      p.timeA = p.timeB+p.timeC
      displayProblem.innerHTML = 
      `
      Someone moved from</br>
      A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB} ${p.timeUnits},</br>
      then from B to C in ${p.speedC} units/${p.timeUnits}.</br>
      ${p.gender} travelled at ${p.speedA} units/${p.timeUnits} for ${p.timeA} ${p.timeUnits} the whole journey.</br>
      At what long did ${p.gender} take to travel between B to C?

      `
    }
  }

  if ( level == 6.07){
    p.distance = p.speedA*p.timeA+p.speedB*p.timeB
    // normal
    if (p.roll == "A"){
      displayProblem.innerHTML = 
      `
      The distance between A and B is ${p.distance} units. </br>
      A moves at ${p.speedA} units/sec. </br>
      B moves at ${p.speedB} units/sec.  </br>
      How long did it take both to meet?

      `
    }
    if (p.roll == "B"){
      // Natural
      displayProblem.innerHTML = 
      `
      The distance between A and B is ${p.distance} units. </br>
      A travels ${p.speedA*p.timeA} units at ${p.speedA} units/sec. </br>
      B then sets off at ${p.speedB} units/sec.  </br>
      How long did it take both to meet?

      `
    }
    if (p.roll == "C"){
      // Head Start
      displayProblem.innerHTML = 
      `
      The distance between A and B is ${p.distance} units. </br>
      A sets off first at ${p.speedA} units/sec for ${p.timeA}secs. </br>
      B then sets off at ${p.speedB} units/sec.  </br>
      How long did it take both to meet?

      `
    }
    if (p.roll == "D"){
      // Finding Distance
      displayProblem.innerHTML = 
      `
       A and B are moving towards each other at the same time. </br>
       A moves at ${p.speedA} units/sec. </br>
       B moves at ${p.speedB} units/sec.  </br>
      It took ${p.timeA+p.timeB} secs to meet up.</br>
      How far apart are they?

      `
    }
  }

  if (level == 7){
    displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`
  }

  // Heuristics display

  if (level == "heuOne"){
    while (p.numOne == p.numTwo){
      p.numOne = genNumbers(9)+1
    }
    if (p.rollAB == "A"){
      console.log("heuOne " + "Type " + p.rollAB + " Var " + p.rollVar)
     
      if (p.numOne < p.numTwo){
        [p.numOne, p.numTwo] = [p.numTwo, p.numOne]
      }

      displayProblem.innerHTML = 
      `
      ${p.rollAB} is ${p.numOne} ${p.roll[p.rollPosition][2]}.</br>
      A is ${p.numTwo} ${p.roll[p.rollPosition][2]} ${p.roll[p.rollPosition][p.rollVar]} than B.</br>
      What is B?
      `
    }
    if (p.rollAB == "B"){
      console.log("heuOne " + "Type " + p.rollAB + " Var " + p.rollVar)
     
      if (p.numOne < p.numTwo){
        [p.numOne, p.numTwo] = [p.numTwo, p.numOne]
      }

      displayProblem.innerHTML = 
      `
      ${p.rollAB} is ${p.numOne} ${p.roll[p.rollPosition][2]}.</br>
      A is ${p.numTwo} ${p.roll[p.rollPosition][2]} ${p.roll[p.rollPosition][p.rollVar]} than B.</br>
      What is A?
      `
    }
  }

  if ( level == "heuTwo"){
    if (setting == 1 || setting == 9 && p.roll == 1 ){
      
      p.positionTwo = p.rollPositionTwoArr[genNumbers(3)]
      p.positionOne = p.rollPositionOneArr[genNumbers(3)]
      p.positionThree = p.rollPositionOneArr[genNumbers(3)]
      p.positionFour = p.rollPositionTwoArr[genNumbers(3)]

    while (p.positionThree == p.positionOne && p.positionFour == p.positionTwo){
      p.positionThree = p.rollPositionOneArr[genNumbers(3)]
    }

      p.indexOne = p.rollPositionOneArr.indexOf(p.positionOne)
      p.indexTwo = p.rollPositionTwoArr.indexOf(p.positionTwo)+3
      p.indexThree = p.rollPositionOneArr.indexOf(p.positionThree)
      p.indexFour = p.rollPositionTwoArr.indexOf(p.positionFour)+3

      while (p.indexTwo - p.indexOne == p.indexFour - p.indexThree || p.indexTwo -p.indexOne == 1 || p.indexFour - p.indexThree == 1){
        p.positionTwo = p.rollPositionTwoArr[genNumbers(3)]
        p.positionOne = p.rollPositionOneArr[genNumbers(3)]
        p.positionThree = p.rollPositionOneArr[genNumbers(3)]
        p.positionFour = p.rollPositionTwoArr[genNumbers(3)]
        p.indexOne = p.rollPositionOneArr.indexOf(p.positionOne)
        p.indexTwo = p.rollPositionTwoArr.indexOf(p.positionTwo)+3
        p.indexThree = p.rollPositionOneArr.indexOf(p.positionThree)
        p.indexFour = p.rollPositionTwoArr.indexOf(p.positionFour)+3
      }

      p.intervals = p.indexTwo - p.indexOne
      p.distance = p.intervals*p.rollDistance
      displayProblem.innerHTML = 
      `
      The distance between the ${p.positionOne} ${p.rollObject} and the ${p.positionTwo} ${p.rollObject} is ${p.distance} m. </br>
      What is the distance between the ${p.positionThree} and ${p.positionFour} ${p.rollObject}?
      `
    }
    if (setting == 2 || setting == 9 && p.roll == 2 ){
      p.numOne = p.numTwo + (genNumbers(3)+2)*2
    
      displayProblem.innerHTML =
      `
      ${p.objectOne} has ${p.numOne} sweets.</br>
      ${p.objectTwo} has ${p.numTwo} sweets.</br>
      How many sweets must ${p.objectOne} transfer to ${p.objectTwo} for them to be the same?
      `
    }

    if (setting == 3 || setting == 9 && p.roll == 3){
      displayProblem.innerHTML = 
      `
      ${p.objectOne} must give ${p.difference} to ${p.objectTwo} to be the same.</br>
      What is their difference at first?
      `
    }
  }

  if (level == "heuTwob"){
    while (p.numOne == p.numTwo){
      p.numOne = genNumbers(9)+1
    }
    if (p.rollAB == "A"){
      console.log("heuTwob " + "Type " + p.rollAB + " Var " + p.rollVar)
     
      if (p.numOne < p.numTwo){
        [p.numOne, p.numTwo] = [p.numTwo, p.numOne]
      }

      displayProblem.innerHTML = 
      `
      ${p.rollAB} is ${p.numOne} ${p.roll[p.rollPosition][2]}.</br>
      A is ${p.numTwo} ${p.roll[p.rollPosition][2]} ${p.roll[p.rollPosition][p.rollVar]} than B.</br>
      What is B?
      `
    }
    if (p.rollAB == "B"){
      console.log("heuTwob " + "Type " + p.rollAB + " Var " + p.rollVar)
     
      if (p.numOne < p.numTwo){
        [p.numOne, p.numTwo] = [p.numTwo, p.numOne]
      }

      displayProblem.innerHTML = 
      `
      ${p.rollAB} is ${p.numOne} ${p.roll[p.rollPosition][2]}.</br>
      A is ${p.numTwo} ${p.roll[p.rollPosition][2]} ${p.roll[p.rollPosition][p.rollVar]} than B.</br>
      What is A?
      `
    }
  }

  if ( level == "heuThree"){

    console.log(setting)
  
    if ( setting == 1 || (setting == 9 && p.roll == 1) ){
      while (p.numOne == p.numTwo) {
        p.numOne = (genNumbers(5)+1)*2
        p.numTwo = (genNumbers(5)+1)*2
      }
      displayProblem.innerHTML = 
      `
      ${p.objectOne} and ${p.objectTwo} has ${p.numOne+p.numTwo} sweets.</br>
      ${p.objectOne} has ${Math.abs(p.numOne-p.numTwo)} ${p.numOne > p.numTwo ? "more" : "less"} sweets than ${p.objectTwo}.</br>
      How many sweets does ${p.rollAnswer == 0 ? `${p.objectOne}` : `${p.objectTwo}` } have?
      `
    }
    if ( setting == 2 || (setting == 9 && p.roll == 2)){
      p.legOne = parseInt(p.objects[p.rollObj][2])
      p.legTwo = parseInt(p.objects[p.rollObj][3])
      p.objectOne = p.objects[p.rollObj][0]
      p.objectTwo = p.objects[p.rollObj][1]
      p.total = p.numOne*p.legOne+p.numTwo*p.legTwo
      console.log(p.legOne, p.legTwo)
      displayProblem.innerHTML = 
      `
      There is a total of ${p.numOne+p.numTwo} ${p.objectOne} and ${p.objectTwo}.</br>
      There are ${p.total} ${p.rollObj < 3 ? "legs" : "wheels"}.</br>
      How many ${p.rollQn == "A" ? p.objectOne : p.objectTwo} are there?
      `
    }
    if ( setting == 3 || setting == 9 && p.roll == 3){

      p.totalValue = (p.objectOneX*p.unitSentence+p.objectTwoX)*p.multipler
        displayProblem.innerHTML = 
        `
          ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</br>
          If ${p.objectOneX} ${p.objectOne} and ${p.objectTwoX} ${p.objectTwo} is ${p.totalValue}.</br>
          What is ${p.rollQn == "A" ? p.objectOne : p.objectTwo }?

        `
    }

    if ( setting == 4 || setting == 9 && p.roll == 4 ){
      while (p.objectOneV == p.objectTwoV){
        p.objectTwoV = genNumbers(5)+1
      }
      console.log(p.objectOneV, p.objectTwoV, p.objectOneQ, p.objectTwoQ)
      p.totalValue = (p.objectOneQ*p.objectOneV)+(p.objectTwoQ*p.objectTwoV)
      p.difference = Math.abs(p.objectOneV-p.objectTwoV)
      displayProblem.innerHTML = 
      `
      ${p.objectOne} is ${p.difference} ${p.objectOneV > p.objectTwoV ? "more" : "less"} than ${p.objectTwo}.</br>
      If ${p.objectOneQ} ${p.objectOne} and ${p.objectTwoQ} ${p.objectTwo} is ${p.totalValue}.</br>
      What is ${p.rollQn == "A" ? p.objectOne : p.objectTwo}?
      `
    }

    if ( setting == 5 || setting == 9 && p.roll == 5){
      while (p.objectOneV == p.objectTwoV){
        p.objectOneV = genNumbers(3)+2
      }
      p.total = (genNumbers(8)+2)*(p.objectOneV+p.objectTwoV)
      if (p.rollQn2 != "total"){
        displayProblem.innerHTML = 
        `
        Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
        The total for both is ${p.total} ${p.unitMeasurement}.</br>
        ${ p.rollQn2 == "many" ? `How many ${p.rollQn == "A" ? p.objectOne : p.objectTwo}s are there?` : `What is the total for ${ p.rollQn == "A" ? p.objectOne : p.objectTwo}? `}
        `
      } else {
        displayProblem.innerHTML = 
        `
        Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
        The total for both is ${p.total} ${p.unitMeasurement}.</br>
        How many ${p.objectOne}s and ${p.objectTwo}s are there in total?
        `
      }
    }

    if ( setting == 6 || setting == 9 && p.roll == 6){
      let firstSentence = undefined

      while (p.total % p.objectV == 0){
        p.total = genNumbers(30)+20
      }
      
      if (p.rollObject == 0){
        p.objectV = 4
        while (p.total % 4 == 0 ){
          p.total = genNumbers(30)+20
        }
        firstSentence = `A ${p.objects[0][0]} can fetch ${p.objectV} people.`
      }
      if (p.rollObject == 1){
        p.objectV = genNumbers(4)+6
        while (p.total % p.objectV == 0 ){
          p.total = genNumbers(30)+20
        }
        firstSentence = `A ${p.objects[1][0]} can fetch ${p.objectV} people.`
      }
      if (p.rollObject == 2){
        p.objectV = (genNumbers(3)+1)*100
        firstSentence = `A ${p.objects[2][0]} is ${p.objectV}ml.`
      }
      if (p.rollObject == 3){
        p.objectV = (genNumbers(9)+2)
        while (p.total % p.objectV == 0 ){
          p.total = genNumbers(30)+20
        }
        if (p.rollQn == "A"){
          firstSentence = `X wants to give each person ${p.objectV} sweets.`
        }
        if (p.rollQn == "B"){
          firstSentence = `There are ${p.objectV} sweets in each packet.`
        }
      }

      let secondSentence = undefined
      if (p.rollObject == 0 || p.rollObject == 1){
        secondSentence = `There are ${p.total} people in total.`
      }
      if (p.rollObject == 2){
        p.total = p.objectV*(genNumbers(5)+2)+(genNumbers(10)+1)*10
        secondSentence = `A tank contains ${p.total}ml of water.`
      }
      if (p.rollObject == 3)
        { secondSentence = `He has a total of ${p.total} sweets.`
      }

      let thirdSentence = undefined
      // rounddown
      if (p.rollQn == "A"){
        if (p.rollObject == 0 || p.rollObject == 1 || p.rollObject == 2){
          thirdSentence = `What is the maximum number of ${p.objects[p.rollObject][1]} are completedly filled?`
        }
        if (p.rollObject == 3){
          thirdSentence = `What is the maximum number of people he can give?`
        }
      }
      if (p.rollQn == "B"){
        if (p.rollObject == 0 || p.rollObject == 1 || p.rollObject == 2){
          thirdSentence = `What is the minimum number of ${p.objects[p.rollObject][1]} needed?`
        }
        if (p.rollObject == 3){
          thirdSentence = `What is the minimum number of packets he must buy?`
        }
      }
    
      displayProblem.innerHTML = 
      `
        ${firstSentence}</br>
        ${secondSentence}</br>
        ${thirdSentence}</br>
      `
    }

    if ( setting == 7 || setting == 9 && p.roll == 7){
      console.log(p.difference, p.transfer)
      while (p.difference == 0 || Math.abs(p.difference) == 2){
        p.difference = (genNumbers(20)-10)*2
        console.log(p.difference, p.transfer)
      }

      if (p.transfer == "A" && p.difference > 0){
        p.transferV = genNumbers(p.difference/2)
        while (p.transferV == 0){
          p.transferV = genNumbers(p.difference/2)
        }
      }

      if (p.transfer == "B" && p.difference < 0){
        p.transferV = genNumbers(-p.difference/2)
        while (p.transferV == 0){
          p.transferV = genNumbers(-p.difference/2)
        }
      }

      if (p.transfer == "A"){
        displayProblem.innerHTML = 
        `
        ${p.objectOne} is ${Math.abs(p.difference)} ${p.difference < 0 ? "less" : "more"} than ${p.objectTwo}.</br>
        ${p.objectOne} gave ${p.transferV} to ${p.objectTwo}.</br>
        Whats the difference between ${p.objectOne} and ${p.objectTwo} in the end?
        `
      }

      if (p.transfer == "B"){
        displayProblem.innerHTML = 
        `
        ${p.objectOne} is ${Math.abs(p.difference)} ${p.difference < 0 ? "less" : "more"} than ${p.objectTwo}.</br>
        ${p.objectTwo} gave ${p.transferV} to ${p.objectOne}.</br>
        Whats the difference between ${p.objectOne} and ${p.objectTwo} in the end?
        `
      }
    }
  }

  if ( level == "heuThreeb"){
    if (setting == 1 || setting == 9 && p.roll == 1){
      let choice = genNumbers(3)
      let swope = 0
    
    // Ensuring that they are not the same or 0.
     while (p.situationOne == 0 || p.situationTwo == 0 || p.situationOne == p.situationTwo){
      p.situationOne = genNumbers(100)-50
      p.situationTwo = genNumbers(100)-50
     }
    // swap positions
     if (p.situationOne > 0 && p.situationTwo > 0){
      if (p.situationTwo > p.situationOne){
        [p.situationTwo, p.situationOne] = [p.situationOne, p.situationTwo]
      }
    }
    if (p.situationOne < 0 && p.situationTwo < 0){
      if (-p.situationTwo < -p.situationOne){
        [p.situationTwo, p.situationOne] = [p.situationOne, p.situationTwo]
      }
    }

    let valueOfOneUnit = undefined

     if (p.situationOne > 0 && p.situationTwo > 0){
       valueOfOneUnit = (p.situationOne-p.situationTwo)/(p.unitSentence-1)
        while ((p.situationOne-p.situationTwo)%(p.unitSentence-1) != 0 || valueOfOneUnit <= p.situationTwo){
          p.situationOne = genNumbers(100)+1
          p.situationTwo = genNumbers(100)+1
          unitSentence = genNumbers(4)+2,
          valueOfOneUnit = (p.situationOne-p.situationTwo)/(p.unitSentence-1)
          console.log(valueOfOneUnit, p.situationOne, p.situationTwo)
        }
     }
     if (p.situationOne < 0 && p.situationTwo < 0){
      valueOfOneUnit = (p.situationTwo+p.situationOne)/(p.unitSentence-1)
      while ((p.situationTwo-p.situationOne)%(p.unitSentence-1) != 0){ 
        p.situationOne = genNumbers(100)-200
        p.situationTwo = genNumbers(100)-200
        unitSentence = genNumbers(4)+2,
        valueOfOneUnit = (p.situationOne-p.situationTwo)/(p.unitSentence-1)
        console.log(valueOfOneUnit, p.situationOne, p.situationTwo)
      }
     }
     

      if (p.situationOne < 0 && p.situationTwo > 0 || p.situationOne > 0 && p.situationTwo < 0){
        if (p.situationOne > 0){
          while ((p.situationOne-p.situationTwo)%(p.unitSentence-1) != 0) {
            p.situationOne = genNumbers(50)+1
          }
        }
        if (p.situationOne < 0){
        swope = 1
        while ((p.situationTwo-p.situationOne)%(p.unitSentence-1) != 0) {
          p.situationOne = genNumbers(50)-50
        }
        }
      }

      displayProblem.innerHTML = 
      `
      ${genNumbers == 0 ? `${p.objectOne} and ${p.objectTwo} has an equal number at first.`: `${p.objectOne} and ${p.objectTwo} has the same amount at first.`}</br>
      ${p.objectOne} ${p.situationOne > 0 ? ["increased by","bought","received"][choice] : ["decreased by","sold","gave away"][choice]} ${Math.abs(p.situationOne)}.</br>
      ${p.objectTwo} ${p.situationTwo > 0 ? ["increased by","bought","received"][choice] : ["decreased by","sold","gave away"][choice]} ${Math.abs(p.situationTwo)}.</br>
      ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo} in the end.</br>
      What is ${p.oneOrTwo == "One" ? p.objectOne : p.objectTwo} ${p.firstOrEnd}?
      `
      if (swope == 1){
        console.log("display 2")
        displayProblem.innerHTML = 
        `
        ${genNumbers == 0 ? `${p.objectOne} and ${p.objectTwo} has an equal number at first.`: `${p.objectOne} and ${p.objectTwo} has the same amount at first.`}</br>
        ${p.objectOne} ${p.situationOne > 0 ? ["increased by","bought","received"][choice] : ["decreased by","sold","gave away"][choice]} ${Math.abs(p.situationOne)}.</br>
        ${p.objectTwo} ${p.situationTwo > 0 ? ["increased by","bought","received"][choice] : ["decreased by","sold","gave away"][choice]} ${Math.abs(p.situationTwo)}.</br>
        ${p.objectTwo} is ${p.unitSentence} times of ${p.objectOne} in the end.</br>
        What is ${p.oneOrTwo == "One" ? p.objectOne : p.objectTwo} ${p.firstOrEnd}?
        `
      }
    }

    if ( setting == 2 || setting == 9 && p.roll == 2 ){
      let choice = genNumbers(3)

      while (p.situationOne == p.situationTwo){
        p.situationOne = genNumbers(100)+1
        p.situationTwo = genNumbers(100)+1
      }
// positive
      if (p.situationOne > 0 && p.situationTwo > 0){

        while (p.situationTwo - p.situationOne % (p.unitSentence-1) != 0 || p.situationOne == p.situationTwo) {
          p.situationOne = genNumbers(100)+1
          p.situationTwo = genNumbers(100)+1
          p.unitSentence = genNumbers(4)+2
        }

        if (p.situationOne > p.situationTwo){
          [p.situationOne, p.situationTwo] = [p.situationTwo, p.situationOne]
        }

      }
// negative
      else if (p.situationOne < 0 && p.situationTwo < 0) {

        while ((Math.abs(p.situationOne) - Math.abs(p.situationTwo)) % (p.unitSentence-1) != 0 || p.situationOne == p.situationTwo){
          p.situationOne = genNumbers(100)-100
          p.situationTwo = genNumbers(100)-100
          p.unitSentence = genNumbers(4)+2
        }
        if (p.situationOne > p.situationTwo){
          [p.situationOne, p.situationTwo] = [p.situationTwo, p.situationOne]
        }
      }

      else {
        while((p.situationOne - p.situationTwo) % (p.unitSentence - 1) != 0 || Math.abs(p.situationOne) == Math.abs(p.situationTwo)){
          p.situationOne = genNumbers(100)+1
          p.situationtwo = genNumbers(100)-100
          p.unitSentence = genNumbers(4)+2
        }
      }

  // Both

      displayProblem.innerHTML = 
      `
      ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</br>
      ${p.objectOne} ${p.situationOne > 0 ? ["increased by","bought","received"][choice] : ["decreased by","sold","gave away"][choice]} ${Math.abs(p.situationOne)}.</br>
      ${p.objectTwo} ${p.situationTwo > 0 ? ["increased by","bought","received"][choice] : ["decreased by","sold","gave away"][choice]} ${Math.abs(p.situationTwo)}.</br>
      ${genNumbers == 0 ? `${p.objectOne} and ${p.objectTwo} has an equal number in the end.`: `${p.objectOne} and ${p.objectTwo} has the same amount in the end.`}</br>
      What is ${p.oneOrTwo == "One" ? p.objectOne : p.objectTwo} ${p.firstOrEnd}?
      `
    }
  }

  if ( level == "heuFour"){
    if ( setting == 1 || (setting == 9 && p.roll == 1)){
      
      while (p.objectOneQ == p.objectTwoQ || p.objectOneQ > p.objectTwoQ){
        p.objectTwoQ = genNumbers(4)+2
        p.objectOneQ = genNumbers(4)+2
      }
  
      p.objectOneS = p.totalValue-(p.objectOneQ*p.price)
      p.objectTwoS = p.totalValue-(p.objectTwoQ*p.price)
    
     if (p.rollType == "A"){ 
        displayProblem.innerHTML = 
        `
        If person ${p.objectOne} bought ${p.objectOneQ} ${p.objects}.</br>
        ${p.label} would ${p.objectOneS >= 0 ? "have an excess" : "be short" } of $${Math.abs(p.objectOneS)}.</br>
        If ${p.label} bought ${p.objectTwoQ} ${p.objects} instead.</br>
        ${p.label} would ${p.objectTwoS >= 0 ? "have an excess" : "be short" } of $${Math.abs(p.objectTwoS)}.</br>
        ${p.rollQn == "price" ?`How much does each item cost?` : `How much did person ${p.objectOne} have?`}
        `
      }
      if (p.rollType == "B"){ 
        displayProblem.innerHTML = 
        `
        Both person ${p.objectOne} and ${p.objectTwo} has the same amount.</br>
        If person ${p.objectOne} bought ${p.objectOneQ} ${p.objects}.</br>
        ${p.label} would ${p.objectOneS >= 0 ? "have an excess" : "be short" } of $${Math.abs(p.objectOneS)}.</br>
        If person ${p.objectTwo} bought ${p.objectTwoQ} ${p.objects}.</br>
        ${p.label} would ${p.objectTwoS >= 0 ? "have an excess" : "be short" } of $${Math.abs(p.objectTwoS)}.</br>
        ${p.rollQn == "price" ?`How much does each item cost?` : `How much did person ${p.objectOne} have?`}
        `
      }
    }

    if ( setting == 2 || (setting == 9 && p.roll == 2)){
      p.sceneTwo = p.sceneOne + genNumbers(5)+1
      p.situationOne = p.numberOfStuff-(p.sceneOne*p.numberOfStudents)
      p.situationTwo = p.numberOfStuff-(p.sceneTwo*p.numberOfStudents)
      console.log(p.situationOne, p.situationTwo)
      displayProblem.innerHTML =
      `
        If ${p.sceneOne} sweets were given to each pupils, there would be ${p.situationOne > 0 ? "an " : ""}<u>${p.situationOne > 0 ? `excess` : "short" }</u> of ${Math.abs(p.situationOne)} sweets.</br>
        If ${p.sceneTwo} sweets were given to each pupils, there would be ${p.situationTwo > 0 ? "an " : ""}<u>${p.situationTwo > 0 ? `excess` : "short" }</u> of ${Math.abs(p.situationTwo)} sweets.</br>
        ${p.rollAnswer == 1 ? "How many pupils are there?" : "How many sweets are there?"}
      `
    }

    if ( setting == 3 || (setting == 9 && p.roll == 3)){
      p.absentPeople = genNumbers(p.peopleAtFirst-2)+1
      p.giveUp = (genNumbers(4)+1)*p.absentPeople
      p.remainingPeople = p.peopleAtFirst-p.absentPeople
      displayProblem.innerHTML = 
      `
      There were ${p.peopleAtFirst} workers at first.</br>
      ${p.absentPeople} did not turn up for work. </br>
      Each of the remaining workers have to do additional ${p.giveUp} work.</br>
      ${p.rollQn == "A"? "How many did each worker originally needed to do?" : "What was the total amount of work needed to be done?"}
      `
    }

    if (setting == 4 || (setting == 9 && p.roll == 4)){
      let index = ["X","Y","Z"].indexOf(p.objectTwo)
      console.log(index)
      let newArray = ["X","Y","Z"]
      newArray.splice(index, 1)
      p.objectThree = newArray[genNumbers(2)]
      console.log(newArray, p.objectThree)
      
    p.groupTwo = p.groupOne+(p.unitSentence-1)*(genNumbers(5)+1)
      displayProblem.innerHTML = 
      `
      ${p.objectOne} and ${p.objectTwo} is ${p.groupOne}.</br>
      ${p.objectOne} and ${p.objectThree} is ${p.groupTwo}.</br>
      ${p.objectThree} is ${p.unitSentence} times of ${p.objectTwo}.</br>
      What is the value of ${p.objectOne}?
      `
    }

    if ( setting == 5 || (setting == 9 && p.roll == 5)){
      while (p.objectOneV == p.objectTwoV){
        p.objectOneV = genNumbers(3)+2
      }
      while (p.objectOneUnit == p.objectTwoUnit || p.objectOneUnit%2 == 0 && p.objectTwoUnit%2 == 0){
        p.objectOneUnit = genNumbers(3)+2
      }
      p.total = (genNumbers(3)+2)*(p.objectOneV*p.objectOneUnit+p.objectTwoV*p.objectTwoUnit)
      if (p.rollQn2 != "total"){
        displayProblem.innerHTML = 
        `
        Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        The number of ${p.objectOne} is ${p.objectOneUnit}/${p.objectTwoUnit} the number of ${p.objectTwo}.</br>
        The total for both is ${p.total} ${p.unitMeasurement}.</br>
        ${ p.rollQn2 == "many" ? `How many ${p.rollQn == "A" ? p.objectOne : p.objectTwo}s are there?` : `What is the total for ${ p.rollQn == "A" ? p.objectOne : p.objectTwo}? `}
        `
      } else {
        displayProblem.innerHTML = 
        `
        Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        The number of ${p.objectOne} is ${p.objectOneUnit}/${p.objectTwoUnit} the number of ${p.objectTwo}.</br>
        The total for both is ${p.total} ${p.unitMeasurement}.</br>
        How many ${p.objectOne}s and ${p.objectTwo}s are there in total?
        `
      }
    }

    if ( setting == 6 || (setting == 9 && p.roll == 6) ){

      displayProblem.innerHTML = 
      `
        There is at least ${p.objectTwoQ} ${p.objectTwo}s between any ${p.objectOne}.</br>
        There is a total of ${p.total} ${p.objectTwo}s and ${p.objectOne}s.</br>
        How many ${p.rollQn == "A" ? p.objectOne : p.objectTwo}s are there?
      `
    }
  }

  if ( level == "heuFive"){
    if (setting == 1 || setting == 9 && p.roll == 1 ){
      while (p.quantityOne == p.quantityTwo){
        p.quantityOne = genNumbers(10)+1
      }
      while (p.difference == 0){
        p.difference = genNumbers(10)-5
      }

      if (p.difference > 0){
        p.adjustment = p.difference*p.quantityOne
      } else {
        p.adjustment = -p.difference*p.quantityTwo
      }
      p.adjustedTotal = p.total - p.adjustment
      p.groupTotal = p.quantityOne + p.quantityTwo
      p.group = p.adjustedTotal/p.groupTotal

      if (p.group % 1 != 0) {
        updateProblems()
        return console.log("Question changed!")
      }

      displayProblem.innerHTML = 
      `
      Each girl receive ${p.quantityOne} sweets.</br>
      Each boy receive ${p.quantityTwo} sweets.</br>
      There are ${Math.abs(p.difference)} ${p.difference > 0 ? "more" : "less"} girls than boys.</br>
      A total of ${p.total} sweets were given out.
      How many ${p.choice} are there?
      `
    }

    if (setting == 2 || setting == 9 && p.roll == 2){

      p.rightQ = genNumbers(p.questions)+1
      p.total = p.marks*p.rightQ-p.deduct*(p.questions-p.rightQ)
      p.allRight = p.questions*p.marks
      p.bDifference = p.allRight - p.total
      if (p.bDifference <= 0 || p.total <= 0 ){
        updateProblems()
        return console.log("Question changed!")
      }
      p.sDifference = p.marks+p.deduct
      p.wrong = p.bDifference/p.sDifference
      p.correct = p.questions-p.wrong
      // if (p.wrong % 1 != 0 || p.wrong < 0){
      //   updateProblems()
      //   return console.log("Question changed!")
      // }

      displayProblem.innerHTML = 
      `
      There are ${p.questions} questions.<br>
      ${p.marks} marks is award if correct.</br>
      ${p.deduct} marks is deducted if wrong.</br>
      Someone scored ${p.total} marks.<br>
      How many questions did ${genNumbers(2) == 0 ? "he" : "she"} get ${p.choice}?
      `
    }

    if (setting == 3 || setting == 9 && p.roll == 3){
      chosenRoll = genNumbers(p.objects.length)
      p.chosenOne = p.objects[chosenRoll][0]
      p.chosenTwo = p.objects[chosenRoll][1]
      p.variableName = p.objects[chosenRoll][4]
      p.chosenOneQ = Math.abs(p.objects[chosenRoll][2])
      p.chosenTwoQ = Math.abs(p.objects[chosenRoll][3])
      p.total = p.chosenOneN+p.chosenTwoN
      p.totalOne = p.chosenOneQ*p.chosenOneN
      p.totalTwo = p.chosenTwoQ*p.chosenTwoN
      p.difference = p.totalOne-p.totalTwo
      if (p.difference == 0){
        updateProblems()
        return console.log("Question change")
      }

      displayProblem.innerHTML = 
      `
      There are ${p.total} ${p.chosenOne} and ${p.chosenTwo}.<br>
      Total number of ${p.variableName} for ${p.chosenOne} is ${Math.abs(p.difference)} ${p.difference > 0 ? "more" : "less"} than the total number of ${p.variableName} for ${p.chosenTwo}.</br>
      How many ${p.choice == 0 ? p.chosenOne : p.chosenTwo } are there?
      `
    }

    if ( setting == 4 || setting == 9 && p.roll == 4 ){

      while (p.objectOneV == p.objectTwoV){
        objectOneV = genNumbers(10)+2
      }
      if (p.objectOneV > p.objectTwoV){
        p.sDifference = p.objectOneV - p.objectTwoV
      } else {
        p.sDifference = -(p.objectOneV - p.objectTwoV)
      }

      p.bDifference = p.sDifference*(genNumbers(9)+2)

      let lastSentence = undefined
      if (p.choice == 0) {
        lastSentence = `How many ${p.objectOne}s are there?`
      }
      if (p.choice == 1) {
        lastSentence = `How many ${p.objectTwo}s are there?`
      }
      if (p.choice == 2) {
        lastSentence = `How many ${p.objectOne}s and ${p.objectTwo}s are there?`
      }
      if (p.choice == 3) {
        lastSentence = `What is the total value of ${p.objectOne}s?`
      }
      if (p.choice == 4) {
        lastSentence = `What is the total value of ${p.objectTwo}s?`
      }
      if (p.choice == 5){
        lastSentence = `What is the total value of ${p.objectOne}s and ${p.objectTwo}s.`
      }

      displayProblem.innerHTML = 
      `
      There is equal number of ${p.objectOne} and ${p.objectTwo}.</br>
      Each ${p.objectOne} is ${p.objectOneV}.</br>
      Each ${p.objectTwo} is ${p.objectTwoV}.</br>
      The difference between them is ${p.bDifference}.</br>
      ${lastSentence}
      `
    }
  }

  // MULTIPLES
  if (mulLevel == "multiples"){
    displayProblem.innerHTML = `${p.numFive} ${p.operator} ${multiplesArr.length-1}`
  }

  userInput.value = ""
  userInput2.value = ""

  if (document.querySelector(".input-box").classList.contains('hidden')){
    userInput2.focus()
  } else {
    userInput.focus()
  }
}







// updateProblems()



ourForm.addEventListener('submit', handleSubmit)
ourForm2.addEventListener('submit', handleSubmit)

function handleSubmit(e){
  e.preventDefault()

  if ( player == 1 ){
    // if (userInput.value == "") alert("Please input a value")
    let correctAnswer
    console.log(userInput2.value)
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

      if ( level == 2.04 ){
        correctAnswer = p.numOne
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
      
      if ( level == 2.06 ){
        correctAnswer = p.numTwo
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
          } else if (p.numOne == p.numThree && p.numOne == 0){
            correctAnswer =`${p.numTwo+p.numFour}${p.minSeconds}`
          } else {
            correctAnswer = `${p.numOne+p.numThree}${p.minHours}${p.numTwo+p.numFour}${p.minSeconds}`
          }
          // if (p.numOne == p.numThree && p.numOne == 0){
          //   correctAnswer =`${p.numTwo+p.numFour}${p.minSeconds}`
          // } 
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
            if (finalMinutes < 60){
              hours = 12;
            }
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

            if (hours == 0){
              correctAnswer = `12.${finalMinutes%60}${amOrPm2}`
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
        let remainder = (p.position%arr.length)-1
        if (remainder < 0){
          remainder = arr.length-1
        }
        console.log(remainder)
        correctAnswer = arr[remainder]
      }

      if ( level == 3.16){
        if (p.optionFinal == 5){
          correctAnswer = `${p.numOne+1}x${p.numOne}/2`
        }
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
        // level 3.15
        if (p.optionFinal == 4){
        let remainder = (p.position%arr.length)-1
        if (remainder < 0){
          remainder = arr.length-1
        }
        console.log(remainder)
        correctAnswer = arr[remainder]
       }
      }

      if ( level == 3.17 ) {
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

      if ( level == 3.18 ){
        if (p.parallelOrPerpendicular == "parallel"){
          correctAnswer = p.labelGHI + p.labelJKL
        } else {
          correctAnswer = p.labelMNO + p.labelPQR
        }
      }

      if ( level == 3.19){
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
        console.log(p.numThree, arr[0])
        p.numFour = p.numOne*p.numThree+p.numTwo
        if (p.numThree != arr[0]){
          correctAnswer = `${p.numOne} ${p.numTwo}/${p.numThree}=${p.numFour}/${p.numThree}`
        } else if (p.numTwo == 1){
          p.numFour = p.numOne*p.numThree+p.numTwo
          correctAnswer = p.numFour + "/" + p.numThree
        } else {
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
        if (p.numThree != arr[1]){
          correctAnswer = `${p.numOne} ${arr[0]}/${arr[1]}=${p.numOne} ${p.numTwo%p.numThree}/${p.numThree}`
        } else {
        correctAnswer = p.numOne + " " + p.numTwo%p.numThree + "/" + p.numThree
       }
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
          console.log(p.numThree, arr[0])
          p.numFour = p.numOne*p.numThree+p.numTwo
          if (p.numThree != arr[0]){
            correctAnswer = `${p.numOne} ${p.numTwo}/${p.numThree}=${p.numFour}/${p.numThree}`
          } else if (p.numTwo == 1){
            p.numFour = p.numOne*p.numThree+p.numTwo
            correctAnswer = p.numFour + "/" + p.numThree
          } else {
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
          if (p.numThree != arr[1]){
            correctAnswer = `${p.numOne} ${arr[0]}/${arr[1]}=${p.numOne} ${p.numTwo%p.numThree}/${p.numThree}`
          } else {
          correctAnswer = p.numOne + " " + p.numTwo%p.numThree + "/" + p.numThree
         }
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
        correctAnswer = arr2[p.finalIndex];
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

      if ( level == 4.20){
        if (p.rollType == 1){
          correctAnswer = `(${p.lengthTotal}+${p.topOne})x2`
        }
        if (p.rollType == 2){
          correctAnswer = `${p.bigSquare}x4`
        }
        if (p.rollType == 3){
          correctAnswer = `(${p.rectangle}+${p.bigSquare})x2`
        }
      }

      if ( level == 4.21){
        numSquareLength = Math.floor(p.length/p.dimension)
        numSquareBreadth = Math.floor(p.breadth/p.dimension)
        numSquareHeight = Math.floor(p.height/p.dimension)
        totalSquare = numSquareLength*numSquareBreadth
        totalCube = numSquareLength*numSquareBreadth*numSquareHeight
        if (difficulty == 0 || difficulty == 1 || p.rollType == 0 || p.rollType == 1){
          correctAnswer = `${numSquareLength}x${numSquareBreadth}=${totalSquare}`
        }
        if (difficulty == 2 || p.rollType == 2){
          correctAnswer = `${numSquareLength}x${numSquareBreadth}x${numSquareHeight}=${totalCube}`
        }
        if (difficulty == 3 || p.rollType == 3){
          correctAnswer = `${Math.floor(p.length/(p.dimension*2))}x${Math.floor(p.breadth/(p.dimension*2))}=${Math.floor(p.length/(p.dimension*2))*Math.floor(p.breadth/(p.dimension*2))}`
        } 
      }

      if ( level == 4.22) {
        correctAnswer = `${p.numFour}x${p.numOne}+${p.numFour}x${p.numTwo}/${p.numThree}`
      }

      if ( level == 4.23 ){
        if (p.option == "no"){
          correctAnswer = "x"
        }
        if (p.option == "yes"){
          correctAnswer = `${p.numOne}x${p.divisor}=${p.convenient}`
        }
      }

      if ( level == 4.24){
        if (p.rollTypeClue == "11"){
          if (p.rollTypeQnSyn == "isof"){
            if (p.rollTypeQn11 == "1T"){
              correctAnswer = `${p.oneValue}/${p.oneValue+p.twoValue}`
            } else {
              correctAnswer = `${p.oneValue+p.twoValue}/${p.oneValue}`
            }
          }
          if (p.rollTypeQnSyn == "ofis"){
            if (p.rollTypeQn11 != "1T"){
              correctAnswer = `${p.oneValue}/${p.oneValue+p.twoValue}`
            } else {
              correctAnswer = `${p.oneValue+p.twoValue}/${p.oneValue}`
            }
          }
        }
        if (p.rollTypeClue == "1T"){
          if (p.rollTypeQnSyn == "isof"){
            if (p.rollTypeQn1T == "AB"){
              correctAnswer = `${p.oneValue}/${p.twoValue}`
            } else {
              correctAnswer = `${p.twoValue}/${p.oneValue}`
            }
          }
          if (p.rollTypeQnSyn == "ofis"){
            if (p.rollTypeQn1T == "AB"){
              correctAnswer = `${p.twoValue}/${p.oneValue}`
            } else {
              correctAnswer = `${p.oneValue}/${p.twoValue}`
            }
          }
        }
      }

      if ( level == 4.25 ){
        if (p.question == "perimeter"){
         correctAnswer = `${p.length}x4`
        }
        if (p.question == "AB"){
          correctAnswer = `${p.length*p.roll}/4`
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

      if ( level == 5.03){
        if (p.rollA == "decimal"){
          correctAnswer = p.numerator/(p.denominator/100)
        }
        if (p.rollA == "fraction"){
          correctAnswer = `${p.numerator}/${p.denominator}x100`
        }
        if (p.rollA == "percentage"){
          if (p.rollB == "fraction"){
            correctAnswer = `${p.percentageDisplay}/100`
          }
          if (p.rollB == "decimal"){
            correctAnswer = `${p.percentageDisplay/100}`
          }
          if (p.rollB == "ratio"){
            correctAnswer = `${p.percentageDisplay}:100`
          }
        }
      }

      if ( level == 5.04 ){
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
      if ( level == 5.05 ){
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

      if ( level == 5.06 ){
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

      if ( level == 5.07){
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

      if ( level == 5.08 ){
        if (p.roll == "opposite"){
          correctAnswer = p.oppositeRotation
        }
        if (p.roll == "corresponding"){
          if (p.corrRoll == "1" || p.corrRoll == "3" || p.corrRoll == "4"){
            correctAnswer = p.corrAngleDisplay
          }
          if (p.corrRoll == "2"){
            correctAnswer = `180-${p.corrAngleDisplay}`
          }
        }
      }

      if ( level == 5.09 ){
          correctAnswer = `${p.change}/${p.totalAmount}x100`
      }

      if ( level == 5.10){
        if (p.rollShape == "parallelogram"){
          if (p.paraRoll == 1 ){
            correctAnswer = `180-${p.paraAngleD}`
          }
          if (p.paraRoll == 2){
            correctAnswer = p.paraAngleD
          }
        }
        if (p.rollShape == "rhombus"){
          if (p.rhombusRoll == 1){
            correctAnswer = `180-${p.rhombusAngleD}`
          }
          if (p.rhombusRoll == 2){
            correctAnswer = p.rhombusAngleD
          }
          if (p.rhombusRoll == 3){
            correctAnswer = `(180-${p.rhombusAngleD})/2`
          }
          if (p.rhombusRoll == 4){
            correctAnswer = `${p.rhombusAngleD}/2`
          }
          if (p.rhombusRoll == 5){
            correctAnswer = `180-${p.rhombusAngleD/2}x2`
          }
        }
        if (p.rollShape == "trapezium"){
          if (p.trapRoll == 1){
            correctAnswer = `180-${p.trapAngleD}`
          }
          if (p.trapRoll == 2){
            correctAnswer = `180-${p.trapAngleD2}`
          }
        }
      }

      if ( level == 5.11 ){
        if (p.rollType == "discount" || p.rollType == "decrease"){
          if (p.rollType2 == "before"){
            correctAnswer = `${p.valueOne}/100x${100-p.percentageOne}`
          }
          if (p.rollType2 == "after"){
            correctAnswer = `${p.valueOne}/${100-p.percentageOne}x100`
          }
          if (p.rollType2 == "change"){
            correctAnswer = `${p.valueOne}/${100-p.percentageOne}x${p.percentageOne}`
          }
        }
        if (p.rollType == "GST"){
          if (p.rollType2 == "before"){
            correctAnswer = `${p.valueOne}/100x${100+p.percentageTwo}`
          }
          if (p.rollType2 == "after"){
            correctAnswer = `${p.valueOne}/${100+p.percentageTwo}x100`
          }
          if (p.rollType2 == "change"){
            correctAnswer = `${p.valueOne}/${100+p.percentageTwo}x${p.percentageTwo}`
          }
        }
        if (p.rollType == "increase"){
          if (p.rollType2 == "before"){
            correctAnswer = `${p.valueOne}/100x${100+p.percentageOne}`
          }
          if (p.rollType2 == "after"){
            correctAnswer = `${p.valueOne}/${100+p.percentageOne}x100`
          }
          if (p.rollType2 == "change"){
            correctAnswer = `${p.valueOne}/${100+p.percentageTwo}x${p.percentageOne}`
          }
        }
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

      if ( level == 5.12 ){
        if (p.roll == "v"){
          correctAnswer = `${p.pointA}x${p.pointA+p.pointC}x${p.pointB}`
        }
        if (p.roll == "h"){
          correctAnswer = `${p.volume}/(${p.pointA}x${p.pointA+p.pointC})`
        }
        if (p.roll == "b"){
          correctAnswer = `${p.volume}/(${p.pointA}x${p.pointB})`
        }
        if (p.roll == "l"){
          correctAnswer = `${p.volume}/(${p.pointA+p.pointC}x${p.pointB})`
        }
        if (p.roll == "ba"){
          correctAnswer = `${p.volume}/${p.pointB}`
        }
      }

      if ( level == 5.13 ){
        if (p.rollAnswer == "A"){
          correctAnswer = `${p.shadedArea}+${p.unshadedArea}x2`
        }
        if (p.rollAnswer == "B"){
          correctAnswer = `${p.unshadedArea}x2`
        }
      }

      if (level == 5.14){
        if (p.roll == "up"){
          let totalBase = p.triX1+p.triX2
          let totalHeight = p.triY2
          correctAnswer = `1/2x${totalBase}x${totalHeight}`
        }
        if (p.roll == "down"){
          let totalBase = p.triX1+p.triX2
          let totalHeight = p.triY2
          correctAnswer = `1/2x${totalBase}x${-totalHeight}`
        }
        if (p.roll == "updown"){
          let totalBase = p.triX1+p.triX2
          let totalHeight = p.triY2+p.triY3
          correctAnswer = `1/2x${totalBase}x${totalHeight}`
        }
        if (p.roll == "rectangle"){
          correctAnswer = `${p.triA}x2`
        }
      }

      if ( level == 5.15 ){
        if (p.objectOneSF == p.objectOneV ){
          correctAnswer = `${p.objectOne}:${p.objectTwo}=${p.objectTwoV}:${p.objectOneV}`
        } else {
          correctAnswer = `${p.objectOne}:${p.objectTwo}=${p.objectTwoV}:${p.objectOneV}=${p.objectTwoSF}:${p.objectOneSF}`
        }
      }

      if ( level == 6.01){
        if (difficulty == 0){
          if (p.rollType == "area"){
            if (p.rollPi != "π"){
              correctAnswer = `${p.rollPi}x${p.radius}x${p.radius}`
            } else {
              correctAnswer = `pix${p.radius}x${p.radius}`
            }
          }
          if (p.rollType == "circumference"){
            if (p.rollPi != "π"){
              correctAnswer = `2x${p.rollPi}x${p.radius}`
            } else {
              correctAnswer = `2xpix${p.radius}`
            }
          }
        }
        if (difficulty == 1){
          if (p.rollType == "area"){
            if (p.rollPi != "π"){
              if (p.rollType2 == "semicircle") {
                correctAnswer = `${p.rollPi}x${p.radius}x${p.radius}x1/2`
              }
              if (p.rollType2 == "quadrant"){
                correctAnswer = `${p.rollPi}x${p.radius}x${p.radius}x1/4`
              }
              if (p.rollType2 == "others"){
                correctAnswer = `${p.rollPi}x${p.radius}x${p.radius}x${p.rollOthers}/360`
              }
            }  else {
              if (p.rollType2 == "semicircle") {
                correctAnswer = `pix${p.radius}x${p.radius}x1/2`
              }
              if (p.rollType2 == "quadrant"){
                correctAnswer = `pix${p.radius}x${p.radius}x1/4`
              }
              if (p.rollType2 == "others"){
                correctAnswer = `pix${p.radius}x${p.radius}x${p.rollOthers}/360`
              }
            }
          }
          if (p.rollType == "circumference"){
            if (p.rollPi != "π"){
              if (p.rollType2 == "semicircle") {
                correctAnswer = `2x${p.rollPi}x${p.radius}x1/2+2x${p.radius}`
              }
              if (p.rollType2 == "quadrant"){
                correctAnswer = `2x${p.rollPi}x${p.radius}x1/4+2x${p.radius}`
              }
              if (p.rollType2 == "others"){
                correctAnswer = `2x${p.rollPi}x${p.radius}x${p.rollOthers}/360+2x${p.radius}`
              }
            }  else {
              if (p.rollType2 == "semicircle") {
                correctAnswer = `2xpix${p.radius}x1/2+2x${p.radius}`
              }
              if (p.rollType2 == "quadrant"){
                correctAnswer = `2xpix${p.radius}x1/4+2x${p.radius}`
              }
              if (p.rollType2 == "others"){
                correctAnswer = `2xpix${p.radius}x${p.rollOthers}/360+2x${p.radius}`
              }
            }
          }
        }
        
      }

      if ( level == 6.02 ){
        if (p.rollType == "triangle"){
          correctAnswer = `1/2x${p.triangleSide}x${p.triangleSide/2}`
        }
        if (p.rollType == "radius"){
          correctAnswer = `pix${p.squareSideD}x${p.squareSideD}`
        }
        if (p.rollType == "angle" && p.rollAngle == "a"){
          correctAnswer = `(180-${p.rotation2})/2`
        }
        if (p.rollType == "angle" && p.rollAngle == "b"){
          correctAnswer = `180-${p.angleOther}x2`
        }
        if (p.rollType == "square"){
          correctAnswer = p.radius/10
        }
        if (p.rollType == "square2"){
          correctAnswer = 2*(p.radius2/20)*(p.radius2/20)
        }
      }

      if ( level == 6.03 ){
        if ((p.rollOne == "NA" || p.rollOne == "AN") && (p.rollSym == "+" || p.rollSym == "-")){
          if (p.rollOne == "NA" && p.rollThree == 1){
            correctAnswer = `${p.rollTwo}${p.rollSym}${p.rollAlp}`
          } else if (p.rollOne == "AN" && p.rollTwo == 1) {
            correctAnswer = `${p.rollAlp}${p.rollSym}${p.rollThree}`
          } else if (p.rollOne == "NA" && p.rollThree != 1) {
            correctAnswer = `${p.rollTwo}${p.rollSym}${p.rollThree}${p.rollAlp}`
          } else if (p.rollOne == "AN" && p.rollTwo != 1) {
            correctAnswer = `${p.rollTwo}${p.rollAlp}${p.rollSym}${p.rollThree}`
          } 
        }

        if ( p.rollOne == "AN" && p.rollSym == "÷"){
          if (p.rollTwo % p.rollThree == 0 ){
            if (p.rollTwo == 1 && p.rollThree == 1){
              correctAnswer `${p.rollAlp}`
            } else if (p.rollThree == 1 ){
              correctAnswer = `${p.rollTwo}${p.rollAlp}`
            } else if (p.rollTwo == p.rollThree) {
              correctAnswer = `${p.rollAlp}`
            } else {
              correctAnswer = `${p.rollTwo/p.rollThree}${p.rollAlp}`
            }
          } else if (p.rollTwo == 1 ){
            correctAnswer = `${p.rollAlp}/${p.rollThree}`
          } else {
            correctAnswer = `${p.rollTwo}${p.rollAlp}/${p.rollThree}`
          }
        }
        if (p.rollOne == "NA" && p.rollSym == "÷"){
          if (p.rollTwo == p.rollThree ){
            correctAnswer = `1/${p.rollAlp}`
          } else if (p.rollTwo == 1 && p.rollThree > 1){
            correctAnswer = `1/${p.rollThree}${p.rollAlp}`
          } else if  (p.rollTwo == 1 ){
            correctAnswer = `${1}/${p.rollAlp}`
          } else if (p.rollTwo % p.rollThree == 0){
            correctAnswer = `${p.rollTwo/p.rollThree}/${p.rollAlp}`
          } else {
            correctAnswer = `${p.rollTwo}/${p.rollThree}${p.rollAlp}`
          }
        }

        if ((p.rollOne == "NA" || p.rollOne == "AN") && (p.rollSym == "x")){
          if (p.rollTwo == 1 && p.rollThree == 1){
            correctAnswer = `${p.rollAlp}`
          } else {
            correctAnswer = `${p.rollTwo*p.rollThree}${p.rollAlp}`
          }
        }

        if (p.rollOne == "AA"){
          if (p.rollSymTwo == "+"){
            correctAnswer = `${p.rollTwo+p.rollThree}${p.rollAlp}`
          }
          if (p.rollSymTwo == "-"){
            correctAnswer = `${p.rollTwo-p.rollThree}${p.rollAlp}`
            if (p.rollTwo-p.rollThree == 0){
              correctAnswer = 0
            }
            if (p.rollTwo-p.rollThree == -1){
              correctAnswer = `-${p.rollAlp}`
            }
            if (p.rollTwo-p.rollThree == 1){
              correctAnswer = `${p.rollAlp}`
            }
          }
        }
      }

      if (level == 6.05){
        if (p.rollOne == "d"){
          correctAnswer = `${p.rollS}x${p.rollT}`
          if (p.roll2 == "2" && p.rollUnits[p.roll][1] == "h"){
            correctAnswer = `${p.rollS}x${p.rollT}/60`
          }
          if (p.roll2 == "2" && p.rollUnits[p.roll][1] == "s"){
            correctAnswer = `${p.rollS}x${p.rollT}x60`
          }
        }
        if (p.rollOne == "s"){
          correctAnswer = `${p.distance}/${p.rollT}`
        }
        if (p.rollOne == "t"){
          correctAnswer = `${p.distance}/${p.rollS}`
        }
      }

      if ( level == 6.06){
        // average speed whole journey
        if (p.roll == "A"){
          correctAnswer = `(${p.speedB*p.timeB}+${p.speedC*p.timeC})/${p.timeB+p.timeC}`
        }
        // time between B to C
        if (p.roll == "B"){
          correctAnswer = `(${p.speedA*(p.timeB+p.timeC)}-${p.speedB*p.timeB})/${p.timeC}`
        }
        // speed between B to C
        if (p.roll == "C"){
          correctAnswer = `(${p.speedA*p.timeA}-${p.speedB*p.timeB})/${p.speedC}`
        }
      }

      if (level == 6.07){
        // normal
        if (p.roll == "A") {
          correctAnswer = `${p.distance}/(${p.speedA}+${p.speedB})`
        }
        // natural
        if (p.roll == "B") {
          correctAnswer = `(${p.distance}-${p.speedA*p.timeA})/(${p.speedA}+${p.speedB})`
        }
        // headstart
        if (p.roll == "C") {
          correctAnswer = `(${p.distance}-${p.speedA*p.timeA})/(${p.speedA}+${p.speedB})`
        }
        // distance
        if (p.roll == "D") {
          correctAnswer = `(${p.speedA}+${p.speedB})x${p.timeA+p.timeB}`
        }
      }

      if (level == 7){
        if (p.operator == "+") correctAnswer = p.numOne + p.numTwo
        if (p.operator == "-") correctAnswer = p.numOne - p.numTwo
      }


      // heuristics Answer
      if (level == "heuOne"){
        if (p.rollAB == "A" && p.rollVar == 0){
          correctAnswer = `${p.numOne}-${p.numTwo}=${p.numOne-p.numTwo}`
        }
        if (p.rollAB == "A" && p.rollVar == 1){
          correctAnswer = `${p.numOne}+${p.numTwo}=${p.numOne+p.numTwo}`
        }
        if (p.rollAB == "B" && p.rollVar == 0){
          correctAnswer = `${p.numOne}+${p.numTwo}=${p.numOne+p.numTwo}`
        }
        if (p.rollAB == "B" && p.rollVar == 1){
          correctAnswer = `${p.numOne}-${p.numTwo}=${p.numOne-p.numTwo}`
        }
      } 

      if ( level == "heuTwo"){
        if (setting == 1 || setting == 9 && p.roll == 1 ){
          let interval = p.distance/(p.indexTwo-p.indexOne)
          correctAnswer = `${p.indexTwo+1}-${p.indexOne+1}=${p.indexTwo-p.indexOne}\n${p.distance}/${p.indexTwo-p.indexOne}=${interval}\n${p.indexFour+1}-${p.indexThree+1}=${p.indexFour-p.indexThree}\n${interval}x${p.indexFour-p.indexThree}=${p.rollDistance*(p.indexFour-p.indexThree)}`
        }
        if (setting == 2 || setting == 9 && p.roll == 2 ){
          correctAnswer = 
          `${p.numOne}-${p.numTwo}=${p.numOne-p.numTwo}\n${p.numOne-p.numTwo}/2=${(p.numOne-p.numTwo)/2}`
        }
        if (setting == 3 || setting == 9 && p.roll == 3){
          correctAnswer = `${p.difference}x2=${p.difference*2}`
        }
      }

      if (level == "heuTwob"){
        if (p.rollAB == "A" && p.rollVar == 0){
          correctAnswer = p.numOne-p.numTwo
        }
        if (p.rollAB == "A" && p.rollVar == 1){
          correctAnswer = p.numOne+p.numTwo
        }
        if (p.rollAB == "B" && p.rollVar == 0){
          correctAnswer = p.numOne+p.numTwo
        }
        if (p.rollAB == "B" && p.rollVar == 1){
          correctAnswer = p.numOne-p.numTwo
        }
      } 


      if ( level == "heuThree"){

        if (setting == 1 || (setting == 9 && p.roll == 1)){  
          let difference = Math.abs(p.numOne-p.numTwo)
          let adjustment = undefined
          if (p.rollAnswer == 0){
            if (p.numOne > p.numTwo){
              adjustment = p.numOne+p.numTwo+difference
            } else {
              adjustment = p.numOne+p.numTwo-difference
            }  
          }
          if (p.rollAnswer == 1){
            if (p.numOne > p.numTwo){
              adjustment = p.numOne+p.numTwo-difference
            } else {
              adjustment = p.numOne+p.numTwo+difference
            }
          }
          if (p.rollAnswer == 0){
            correctAnswer = `${p.numOne+p.numTwo}${(p.numOne>p.numTwo)?"+":"-"}${Math.abs(p.numOne-p.numTwo)}=${adjustment}\n${adjustment}/2=${p.numOne}`
          }
          if (p.rollAnswer == 1){
            correctAnswer = `${p.numOne+p.numTwo}${(p.numOne<p.numTwo)?"+":"-"}${Math.abs(p.numOne-p.numTwo)}=${adjustment}\n${adjustment}/2=${p.numTwo}`
          }
        }
        if (setting == 2 || setting == 9 && p.roll == 2){
          let smallDifference = p.legTwo-p.legOne
          let totalAnimal = p.numOne+p.numTwo
          if (p.rollQn == "A"){
            let bigDifference = p.legTwo*(totalAnimal)-p.total
            correctAnswer = `${totalAnimal}x${p.legTwo}=${totalAnimal*p.legTwo}\n${p.legTwo*totalAnimal}-${p.total}=${bigDifference}\n${p.legTwo}-${p.legOne}=${smallDifference}\n${bigDifference}/${smallDifference}=${p.numOne}`
          }
          if (p.rollQn == "B"){
            let bigDifference = p.total-totalAnimal*p.legOne
            correctAnswer = `${totalAnimal}x${p.legOne}=${totalAnimal*p.legOne}\n${p.total}-${totalAnimal*p.legOne}=${bigDifference}\n${p.legTwo}-${p.legOne}=${smallDifference}\n${bigDifference}/${smallDifference}=${p.numTwo}`
          }
        }
        
        if ( setting == 3 || setting == 9 && p.roll == 3){
          let unitOne = p.unitSentence*p.objectOneX
          let unitTwo = p.objectTwoX
          let totalUnit = unitOne+unitTwo
          let oneUnit = p.totalValue/totalUnit
          if (p.rollQn == "B"){
              correctAnswer = 
              `${p.objectOneX}x${p.unitSentence}=${unitOne}\n${p.objectTwoX}x1=${unitTwo}\n${unitOne}+${unitTwo}=${totalUnit}\n${p.totalValue}/${totalUnit}=${oneUnit}`
          } else {
            correctAnswer = 
            `${p.objectOneX}x${p.unitSentence}=${unitOne}\n${p.objectTwoX}x1=${unitTwo}\n${unitOne}+${unitTwo}=${totalUnit}\n${p.totalValue}/${totalUnit}=${oneUnit}\n${oneUnit}x${p.unitSentence}=${oneUnit*p.unitSentence}`
          }
      }

      if ( setting == 4 || setting == 9 && p.roll == 4){
        let adjustment = undefined
        let newTotal = undefined

        let firstLine = undefined
        if (p.rollQn == "A"){
          adjustment = p.objectTwoQ*p.difference
          firstLine = `${p.objectTwoQ}x${p.difference}=${adjustment}`
        }
        if (p.rollQn == "B"){
          adjustment = p.objectOneQ*p.difference
          firstLine = `${p.objectOneQ}x${p.difference}=${adjustment}`
        }

        let secondLine = undefined
        if (p.rollQn == "A" && p.objectOneV > p.objectTwoV){
          newTotal = p.totalValue+adjustment
          secondLine = `${p.totalValue}+${adjustment}=${newTotal}`
        }
        if (p.rollQn == "A" && p.objectOneV < p.objectTwoV){
          newTotal = p.totalValue-adjustment
          secondLine = `${p.totalValue}-${adjustment}=${newTotal}`
        }
        if (p.rollQn == "B" && p.objectOneV < p.objectTwoV){
          newTotal = p.totalValue+adjustment
          secondLine = `${p.totalValue}+${adjustment}=${newTotal}`
        }
        if (p.rollQn == "B" && p.objectOneV > p.objectTwoV){
          newTotal = p.totalValue-adjustment
          secondLine = `${p.totalValue}-${adjustment}=${newTotal}`
        }

        let totalUnit = p.objectOneQ+p.objectTwoQ
        let thirdLine = `${p.objectOneQ}+${p.objectTwoQ}=${totalUnit}`
        let oneUnit = newTotal/totalUnit
        let fourthLine = `${newTotal}/${totalUnit}=${oneUnit}`

        correctAnswer = `${firstLine}\n${secondLine}\n${thirdLine}\n${fourthLine}`
      }

      if (setting == 5 || setting == 9 && p.roll == 5){
        let oneSet = p.objectOneV+p.objectTwoV
        let totalSets = p.total/oneSet
        let totalValueOne = totalSets*p.objectOneV
        let totalValueTwo = totalSets*p.objectTwoV

        if (p.rollQn2 == "many"){
          correctAnswer = 
          `${p.objectOneV}+${p.objectTwoV}=${oneSet}\n${p.total}/${oneSet}=${totalSets}`
        }

        if (p.rollQn2 == "what"){
         if (p.rollQn == "A"){
          correctAnswer = 
          `${p.objectOneV}+${p.objectTwoV}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectOneV}=${totalValueOne}`
         } 
         if (p.rollQn == "B"){
          correctAnswer = 
          `${p.objectOneV}+${p.objectTwoV}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectTwoV}=${totalValueTwo}`
         }
        }

         if (p.rollQn2 == "total"){
          correctAnswer = 
          `${p.objectOneV}+${p.objectTwoV}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x2=${totalSets*2}`
         } 
      }

      if ( setting == 6 || setting == 9 && p.roll == 6 ){
        if (p.rollQn == "A"){
          correctAnswer = `${p.total}/${p.objectV}=${Math.floor(p.total/p.objectV)}r${p.total%p.objectV}\n${Math.floor(p.total/p.objectV)}`
        }
        if (p.rollQn == "B"){
          correctAnswer = `${p.total}/${p.objectV}=${Math.floor(p.total/p.objectV)}r${p.total%p.objectV}\n${Math.floor(p.total/p.objectV)+1}`
        }
      }

      if ( setting == 7 || setting == 9 && p.roll == 7 ){
        let newDifference = undefined
        if (p.transfer == "A" && p.difference < 0 ){
          newDifference = Math.abs(p.difference)+p.transferV*2
          correctAnswer = `${Math.abs(p.difference)}+${p.transferV}+${p.transferV}=${newDifference}`
        }
        if (p.transfer == "A" && p.difference > 0 ){
          newDifference = Math.abs(p.difference)-p.transferV*2
          correctAnswer = `${Math.abs(p.difference)}-${p.transferV}-${p.transferV}=${newDifference}`
        }
        if (p.transfer == "B" && p.difference < 0 ){
          newDifference = Math.abs(p.difference)-p.transferV*2
          correctAnswer = `${Math.abs(p.difference)}-${p.transferV}-${p.transferV}=${newDifference}`
        }
        if (p.transfer == "B" && p.difference > 0 ){
          newDifference = Math.abs(p.difference)+p.transferV*2
          correctAnswer = `${Math.abs(p.difference)}+${p.transferV}+${p.transferV}=${newDifference}`
        }
      }
    }
      if ( level == "heuThreeb"){
        if ( setting == 1 || setting == 9 && p.roll == 1){
          let difference = undefined

          if (p.situationOne > 0 && p.situationTwo > 0){
            difference=p.situationOne-p.situationTwo
          }
          if (p.situationOne < 0 && p.situationTwo < 0){
            difference=Math.abs(p.situationTwo-p.situationOne)
          }
          if (p.situationOne < 0 && p.situationTwo < 0 || p.situationOne > 0 && p.situationTwo > 0){
            if (p.oneOrTwo == "One" && p.firstOrEnd == "in the end"){
              correctAnswer = (difference/(p.unitSentence-1))*p.unitSentence
            } else if (p.oneOrTwo == "Two" && p.firstOrEnd == "in the end"){
              correctAnswer = (difference/(p.unitSentence-1))
            } else {
              correctAnswer = (difference/(p.unitSentence-1))+p.situationTwo*-1
            }
          } else {
            if (p.situationOne > 0){
              if (p.firstOrEnd == "in the end"){
                if (p.oneOrTwo == "One"){
                  correctAnswer = ((p.situationOne-p.situationTwo)/(p.unitSentence-1))*p.unitSentence
                }
                if (p.oneOrTwo == "Two"){
                  correctAnswer = (p.situationOne-p.situationTwo)/(p.unitSentence-1)
                }
              } else {
                correctAnswer = (p.situationOne-p.situationTwo)/(p.unitSentence-1)-p.situationTwo
              }
            }
            if (p.situationOne < 0){
              if (p.firstOrEnd == "in the end"){
                if (p.oneOrTwo == "One"){
                  correctAnswer = ((-p.situationOne+p.situationTwo)/(p.unitSentence-1))
                }
                if (p.oneOrTwo == "Two"){
                  correctAnswer = (-p.situationOne+p.situationTwo)/(p.unitSentence-1)*p.unitSentence
                }
              } else {
                correctAnswer = (-p.situationOne+p.situationTwo)/(p.unitSentence-1)-p.situationOne
              }
            }
          }
        }

        if (setting == 2 || setting == 9 && p.roll == 2 ){
          let difference = undefined
          let oneUnit = undefined
          if (p.situationOne > 0 && p.situationTwo > 0){
            difference = p.situationTwo - p.situationOne
            oneUnit = difference/(p.unitSentence-1)
            if (p.firstOrEnd == "in the end"){
              correctAnswer = oneUnit+p.situationTwo
            }
            if (p.firstOrEnd == "at first"){
              if (p.oneOrTwo == "One"){
                correctAnswer = oneUnit+p.situationTwo-p.situationOne
              }
              if (p.oneOrTwo == "Two"){
                correctAnswer = oneUnit+p.situationTwo-p.situationTwo
              }
            }
          }

          else if (p.situationOne < 0 && p.situationTwo < 0) {
            difference = -1*p.situationOne - p.situationTwo*-1
            oneUnit = difference/(p.unitSentence-1)
            if (p.firstOrEnd == "in the end"){
              correctAnswer = oneUnit*p.unitSentence+(p.situationTwo*-1)
            }
            if (p.firstOrEnd == "at first"){
              if (p.oneOrTwo == "One"){
                correctAnswer = oneUnit*p.unitSentence
              }
              if (p.oneOrTwo == "Two"){
                correctAnswer = oneUnit
              }
            }
          } else {
            difference = Math.abs(p.situationOne)+Math.abs(p.situationTwo)
            oneUnit = difference/(p.unitSentence-1)
            if (p.firstOrEnd == "at first"){
              if (p.oneOrTwo == "One"){
                correctAnswer = oneUnit*p.unitSentence
              }
              if (p.oneOrTwo == "Two"){
                correctAnswer = oneUnit
              }
            }
            if (p.firstOrEnd == "in the end"){
              correctAnswer = oneUnit+p.situationTwo
            }
          }
          while (correctAnswer <= 0){
            updateProblems()
            return console.log("negative answer detected")
          }
        }
      }

      if ( level == "heuFour"){
        if ( setting == 1 || (setting == 9 && p.roll == 1)){
          let firstLine = undefined
          let bigDiff = undefined
          let newObjectOneS = Math.abs(p.objectOneS)
          let newObjectTwoS = Math.abs(p.objectTwoS)
            if (p.objectOneS <= 0 && p.objectTwoS <= 0){
              bigDiff = newObjectTwoS-newObjectOneS
              firstLine = `${newObjectTwoS}-${newObjectOneS}=${bigDiff}`
            } else if (p.objectOneS >= 0 && p.objectTwoS >= 0){
              bigDiff = p.objectOneS-p.objectTwoS
              firstLine = `${p.objectOneS}-${p.objectTwoS}=${bigDiff}`
            } else {
              bigDiff = newObjectOneS+newObjectTwoS
              firstLine = `${newObjectOneS}+${newObjectTwoS}=${bigDiff}`
            }
            
            let smallDiff = p.objectTwoQ-p.objectOneQ

            if (p.rollQn == "price"){  
              correctAnswer = `${firstLine}\n${p.objectTwoQ}-${p.objectOneQ}=${smallDiff}\n${bigDiff}/${smallDiff}=${p.price}`
            }
            if (p.rollQn == "total"){  
              correctAnswer = `${firstLine}\n${p.objectTwoQ}-${p.objectOneQ}=${smallDiff}\n${bigDiff}/${smallDiff}=${p.price}\n${p.price}x${p.objectOneQ}${p.totalValue-(p.objectOneQ*p.price) < 0 ? "-" : "+"}${newObjectOneS}=${p.totalValue}`
            }
          
        }

        if ( setting == 2 || (setting == 9 && p.roll == 2)){
          console.log(p.rollAnswer)
          let symbol = p.situationOne > 0 ? "+" : "-"
          let bigDifference = undefined
          let smallDifference = p.sceneTwo-p.sceneOne
          let firstLine = `${p.situationOne}+${Math.abs(p.situationTwo)}=${p.situationOne+Math.abs(p.situationTwo)}`
        
          if (p.situationOne > 0 && p.situationTwo > 0 || p.situationOne < 0 && p.situationTwo < 0){
            p.situationOne = Math.abs(p.situationOne)
            p.situationTwo = Math.abs(p.situationTwo)
            if (p.situationTwo > p.situationOne){
              firstLine = `${Math.abs(p.situationTwo)}-${Math.abs(p.situationOne)}=${Math.abs(p.situationTwo)-p.situationOne}`
              bigDifference = p.situationTwo-p.situationOne
            } else {
              firstLine = `${Math.abs(p.situationOne)}-${Math.abs(p.situationTwo)}=${p.situationOne-p.situationTwo}`
              bigDifference = Math.abs(p.situationOne) - Math.abs(p.situationTwo)
            }
          } else {
            if (p.situationOne == 0){
              symbol = "-"
              bigDifference = Math.abs(p.situationOne) + Math.abs(p.situationTwo)
            } else {
              symbol = "+"
              bigDifference = Math.abs(p.situationOne) + Math.abs(p.situationTwo)
            }
          }
          
          if (p.rollAnswer == 1){
            correctAnswer = 
            `${firstLine}\n${p.sceneTwo}-${p.sceneOne}=${smallDifference}\n${bigDifference}/${smallDifference}=${p.numberOfStudents}`
          }
          if (p.rollAnswer == 2){
            correctAnswer = 
            `${firstLine}\n${p.sceneTwo}-${p.sceneOne}=${smallDifference}\n${bigDifference}/${smallDifference}=${p.numberOfStudents}\n${p.numberOfStudents}x${p.sceneOne}${symbol}${Math.abs(p.situationOne)}=${p.numberOfStuff}`
          }
        }

        if ( setting == 3 || (setting == 9 && p.roll == 3)){
          let extraWork = p.remainingPeople*p.giveUp
          let eachPerson = extraWork/p.absentPeople
          let totalWork = eachPerson*p.peopleAtFirst
          if (p.rollQn == "A"){
            correctAnswer = `${p.peopleAtFirst}-${p.absentPeople}=${p.remainingPeople}\n${p.remainingPeople}x${p.giveUp}=${extraWork}\n${extraWork}/${p.absentPeople}=${eachPerson}`
          }
          if (p.rollQn == "B"){
            correctAnswer = `${p.peopleAtFirst}-${p.absentPeople}=${p.remainingPeople}\n${p.remainingPeople}x${p.giveUp}=${extraWork}\n${extraWork}/${p.absentPeople}=${eachPerson}\n${eachPerson}x${p.peopleAtFirst}=${totalWork}`
          }
        }

        if (setting == 4 || (setting == 9 && p.roll == 4)){
          let difference = p.groupTwo-p.groupOne
          let eachUnit = difference/(p.unitSentence-1)
          let objectOne = p.groupOne-eachUnit
          let unitDifference = p.unitSentence-1
          correctAnswer = `${p.groupTwo}-${p.groupOne}=${difference}\n${p.unitSentence}-1=${unitDifference}\n${difference}/${p.unitSentence-1}=${eachUnit}\n${p.groupOne}-${eachUnit}=${objectOne}`
        }

        if (setting == 5 || (setting == 9 && p.roll == 5)){
          let setOne = p.objectOneV*p.objectOneUnit
          let setTwo = p.objectTwoV*p.objectTwoUnit
          let oneSet = p.objectOneV*p.objectOneUnit+p.objectTwoV*p.objectTwoUnit
          let totalSets = p.total/oneSet
          let oneQuantity = totalSets*p.objectOneUnit
          let twoQuantity = totalSets*p.objectTwoUnit
          let totalValueOne = oneQuantity*p.objectOneV
          let totalValueTwo = twoQuantity*p.objectTwoV
          let groupQuantity = p.objectOneUnit+p.objectTwoUnit
  
          if (p.rollQn2 == "many"){
            if (p.rollQn == "A"){
              correctAnswer = 
              `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectOneUnit}=${oneQuantity}`
            }
            if (p.rollQn == "B"){
              correctAnswer = 
              `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectTwoUnit}=${twoQuantity}`
            }
          }
  
          if (p.rollQn2 == "what"){
           if (p.rollQn == "A"){
            correctAnswer = 
            `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectOneUnit}=${oneQuantity}\n${oneQuantity}x${p.objectOneV}=${totalValueOne}`
           } 
           if (p.rollQn == "B"){
            correctAnswer = 
            `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectTwoUnit}=${twoQuantity}\n${twoQuantity}x${p.objectTwoV}=${totalValueTwo}`
           }
          }
  
           if (p.rollQn2 == "total"){
            correctAnswer = 
            `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${p.objectOneUnit}+${p.objectTwoUnit}=${groupQuantity}\n${totalSets}x${groupQuantity}=${totalSets*groupQuantity}`
           } 
        }

        if (setting == 6 || (setting == 9 && p.roll == 6)){
          let sets = Math.floor(p.total/(p.objectTwoQ+1))
          let remainder = p.total%(p.objectTwoQ+1)
          if (remainder == 0){
            if (p.rollQn == "A"){
              correctAnswer = `${p.total}/${p.objectTwoQ+1}=${sets}`
            }
            if (p.rollQn == "B"){
              correctAnswer = `${p.total}/${p.objectTwoQ+1}=${sets}\n${sets}x${p.objectTwoQ}=${sets*p.objectTwoQ}`
            }
         } else {
          if (p.rollQn == "A"){
            correctAnswer = `${p.total}/${p.objectTwoQ+1}=${sets}r${remainder}\n${sets}+1=${sets+1}`
          }
          if (p.rollQn == "B"){
            correctAnswer = `${p.total}/${p.objectTwoQ+1}=${sets}r${remainder}\n${sets}x${p.objectTwoQ}+${remainder-1}=${sets*p.objectTwoQ+remainder-1}`
          }
         }
        }
      }
      
      if ( level == "heuFive"){
        if (setting == 1 || setting == 9 && p.roll == 1){

          let firstSentence = undefined
          if (p.difference > 0) {
            firstSentence = `${p.difference}x${p.quantityOne}=${p.adjustment}`
          }
          if (p.difference < 0) {
            firstSentence = `${-p.difference}x${p.quantityTwo}=${p.adjustment}`
          }

          let secondSentence = undefined          
          secondSentence = `${p.total}-${p.adjustment}=${p.adjustedTotal}`

          let thirdSentence = `${p.quantityOne}+${p.quantityTwo}=${p.groupTotal}`
          
          let fourthSentence = `${p.adjustedTotal}/${p.groupTotal}=${p.group}`
          
          if (p.choice == "girls"){
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`
          }
          if (p.choice == "boys"){
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${p.group}+${-p.difference}=${p.group-p.difference}`
          }
        }

        if (setting == 2 || setting == 9 && p.roll == 2){
          let firstSentence = `${p.questions}x${p.marks}=${p.allRight}`
          let secondSentence = `${p.allRight}-${p.total}=${p.bDifference}`
          let thirdSentence = `${p.marks}+${p.deduct}=${p.sDifference}`
          let fourthSentence = `${p.bDifference}/${p.sDifference}=${p.wrong}`
          let fifthSentence = `${p.questions}-${p.wrong}=${p.correct}`
          if (p.choice == "wrong"){
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`
          } else {
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${fifthSentence}`
          }
        }

        if ( setting == 3 || setting == 9 && p.roll == 3 ){
          let firstSentence = undefined
          let allTotal = undefined
          if (p.totalOne > p.totalTwo){
            allTotal = p.total*p.chosenOneQ
            firstSentence = `${p.total}x${p.chosenOneQ}=${allTotal}`
          }
          if (p.totalTwo > p.totalOne){
            allTotal = p.total*p.chosenTwoQ
            firstSentence = `${p.total}x${p.chosenTwoQ}=${allTotal}`
          }
          let bDifference = allTotal - Math.abs(p.difference)
          let secondSentence = `${allTotal}-${Math.abs(p.difference)}=${bDifference}`

          let sDifference = p.chosenOneQ+p.chosenTwoQ
          let thirdSentence = `${p.chosenOneQ}+${p.chosenTwoQ}=${sDifference}`

          let fourthSentence = `${bDifference}/${sDifference}=${p.chosenOneN}`

          let fifthSentence = `${p.total}-${p.chosenOneQ}=${p.chosenTwoN}`

          if (p.choice == 0){
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`
          }
          if (p.choice == 1){
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${fifthSentence}`
          }
        }

        if (setting == 4 || setting == 9 && p.roll == 4 ){
          let firstSentence = undefined
          if (p.objectOneV > p.objectTwoV){
            firstSentence = `${p.objectOneV}-${p.objectTwoV}=${p.sDifference}`
          } else {
            firstSentence = `${p.objectTwoV}-${p.objectOneV}=${p.sDifference}`
          }
          let groups = p.bDifference/p.sDifference
          let secondSentence = `${p.bDifference}/${p.sDifference}=${groups}`

          if (p.choice == 0 || p.choice == 1 ){
            correctAnswer = `${firstSentence}\n${secondSentence}`
          }

          let thirdSentence = undefined
          if (p.choice == 2 ){
            let quantityT = groups*2
            thirdSentence = `${groups}x2=${quantityT}`
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}`
          }
          if (p.choice == 3 ){
            let objectOneT = groups*p.objectOneV
            thirdSentence = `${groups}x${p.objectOneV}=${objectOneT}`
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}`
          }
          if (p.choice == 4 ){
            let objectTwoT = groups*p.objectTwoV
            thirdSentence = `${groups}x${p.objectTwoV}=${objectTwoT}`
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}`
          }
          if (p.choice == 5 ){
            let objectOneT = groups*p.objectOneV
            thirdSentence = `${groups}x${p.objectOneV}=${objectOneT}`
            let objectTwoT = groups*p.objectTwoV
            let fourthSentence = `${groups}x${p.objectTwoV}=${objectTwoT}`
            let fifthSentence = `${objectOneT}+${objectTwoT}=${objectOneT+objectTwoT}`
            
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${fifthSentence}`
          }
          
        }
      }

      if (mulLevel == "multiples"){
        correctAnswer = p.numFive*(multiplesArr.length-1)
      }

    console.log(correctAnswer, userInput.value)

      // adjust to uppercase
      levelToCaps = [3.18, 4.17, 4.18, 5, 5.02, 5.06]
      if (levelToCaps.includes(level) || (level == 3.16 && p.optionFinal == 4)){
        userInput.value = userInput.value.toUpperCase()
      }
      //  adjust to lowercase
      levelToLower = [1.04, 1.05]
      if (levelToLower.includes(level)){
        userInput.value = userInput.value.toLowerCase()
      }

      if (userInput.value.trim() == correctAnswer || userInput2.value.trim() == correctAnswer){
        console.log("correct")
        state.score++
        if (mulLevel == "multiples"){
          multiplesArr.push(userInput.value)
          state.score = multiplesArr.length-1
          helpMe.textContent = multiplesArr.slice(1)
        }
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
        if (level == 2.06){
          arr.length = 0
          arr2.length = 0
        }
        if (level == 3.15 || level == 3.16){
          arr2.length = 0;
        }
        if ( level == 4.17) {
          arr = ["A","B","C","D","E","F","G","H","I"]
          arr2.length = 0;
          arr3.length = 0;
        }
        if ( level == 4.18){
          arr = ["A","B","C","D","O","F","G","H","I"]
        }
        
        // remove help me text
        if ( level == 3.04 || level == 3.05 || level == 3.06 || level == 4.06 || level == 4.07 || level == 4.08 || level == 6.05 ){
          helpMe.textContent = ""
        }

        console.log("new questions generated")
        reviewAnswer.classList.add("hidden")
        updateProblems()
        
      } else {
        console.log("incorrect")
  
          state.mistake++

          reviewCount = 1
          reviewAnswer.classList.remove("hidden")
          state.correctAnswer = correctAnswer

          if ( hardcore == 1){
            state.score = 0;
          } else if ( easy == 1 || mulLevel == "multiples") {
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
        levelDoNotClear = ["heuOne", "heuTwo", "heuThree", "heuFour" , "heuFive", "heuSix"]
        levelDoNotClearNum = [2.05, 2.09, 2.08, 2.09, 3.12, 3.13, 3.14, 3.16, 4.0, 6.01 ]
         if ( !levelDoNotClearNum.includes(level) && !levelDoNotClear.includes(level) ){
          console.log("DO NOT CLEAR")
          userInput.value = ""
          userInput2.value = ""
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
        if ( level == 3.04 || level == 3.05 || level == 3.06 || level == 4.06 || level == 4.07 || level == 4.08 ){
          if (p.unitMeasurement == "$"){
            helpMe.textContent = `$1 = 100¢`
          }
          if (p.unitMeasurement == "m"){
            helpMe.textContent = `1 m  = 100 cm`
          }
          if (p.unitMeasurement == "min"){
            helpMe.textContent = `1 min  = 60 s`
          }
          if (p.unitMeasurement == "km"){
            helpMe.textContent = `1 km  = 1000 m`
          }
          if (p.unitMeasurement == "kg"){
            helpMe.textContent = `1 kg  = 1000 g`
          }
          if (p.unitMeasurement == "ℓ"){
            helpMe.textContent = `1 ℓ  = 1000 mℓ`
          }
        }
        if ( level == 6.05){
          helpMe.textContent = `Distance = Speed x Time`
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

  if ( level == 2.04 ){
    return {
      figure: ["🏀",'⚽️','🏈','🎾','🍎','🍏','🌭'][genNumbers(7)],
      repeat: [2, 3][genNumbers(2)],
      operator: ["x","+"][genNumbers(2)],
      numOne: genNumbers(4)+2
    }
  }

  if ( level == 2.05){
    if (digit == ""){
      digit = 5
    }
    return {
      choice: ["smallest","greatest"][genNumbers(2)],
      landingNumber: undefined,
      finalNumber: undefined,
      evenOrOdd: ["even", "odd"][genNumbers(2)]
    }
  }

  if ( level == 2.06 ){
    return {
      figure: ["🏀",'⚽️','🏈','🎾','🍎','🍏','🌭'][genNumbers(7)],
      figureTwo: ["🏀",'⚽️','🏈','🎾','🍎','🍏','🌭'][genNumbers(7)],
      operator: "+",
      numOne: (genNumbers(9)+2),
      numTwo: (genNumbers(5)+1)
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
      changeMinutes: genNumbers(55)+5,
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
      unitMeasurement: ["kg","km","ℓ","$","m","min"][genNumbers(6)],
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
      rollType: ["A", "B"][genNumbers(2)],
      rollA: undefined,
      rollB: undefined,
      rollTimes: genNumbers(3)+3,
      position: genNumbers(30)+20
    }
  }

  if ( level == 3.16){
    return {
      numOne: genNumbers(94)+5,

      numTwo: genNumbers(10)+1,
      numThree: genNumbers(5)+2,

      numFour: genNumbers(5)+5,
      numFive: genNumbers(8)+5,
      numSix: [-1,1,2][genNumbers(3)],

      optionFinal: [1,2,3,4,5][genNumbers(5)],

      // 3.15
      rollType: ["A", "B"][genNumbers(2)],
      rollA: undefined,
      rollB: undefined,
      rollTimes: genNumbers(3)+3,
      position: genNumbers(30)+20
    }
  }

  if ( level == 3.17 ){
    return {
      arcAngle: genNumbers(140)+20,
      acuteOrObtuse: ["acute","obtuse"][genNumbers(2)],
      roll: [1,2][genNumbers(2)]
    }
  
  }

  if ( level == 3.18 ){
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

  if ( level == 3.19 ){
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
      numOne: genNumbers(58)+3
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
    placeValue: ["ones", "tens","hundreds","thousands","tenths","hundredths","thousandths"][genNumbers(7)]
    }
  }

  if ( level == 4.03){
    return {
      numOne: genNumbers(9999)+1,
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
      numOne: genNumbers(99998)+1,
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
      direction: ["clockwise","anti-clockwise"][genNumbers(2)],
      finalIndex: undefined
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

      angleCircle: genNumbers(340)+10,
      circleRoll: [2, 1][genNumbers(2)],

      shapeRoll: ["circle","straight","Rectangle","Square"][genNumbers(4)]
    
    }
  }

  if ( level == 4.20){
    return {
      rollType: [3, 2, 1][genNumbers(3)],

      lengthTotal: undefined,
      topOne: (genNumbers(4)+7)*20,
      topTwo: undefined,
      sideOne: (genNumbers(5)+2)*20,
      sideTwo: undefined,

      smallSquare: genNumbers(4)+2*10,
      bigSquare: (genNumbers(5)+12)*10,

      rectangle: (genNumbers(5)+12)*20
    }
  }

  if ( level == 4.21){
    return {
      rollType: undefined,
      dimension: genNumbers(3)+2,
      length: undefined,
      breadth: undefined,
      height: undefined
    }
  }

  if ( level == 4.22){
    return {
      options: [1, 2][genNumbers(2)],
      numOne: genNumbers(10)+1,
      numTwo:genNumbers(5)+1,
      numThree: genNumbers(5)+6,
      numFour:genNumbers(20)+1
    }
  }

  if ( level == 4.23 ){
    return {
      option: ["yes","no"][genNumbers(2)],
      numOne: arrayConvenient[genNumbers(9)],
      numTwo: genNumbers(20)+3,
      divisor: undefined,
      convenient: undefined
    }
  }

  if ( level == 4.24 ){
    return {
      objectOne: ["A","B","C"][genNumbers(3)],
      objectTwo: ["X","Y","Z"][genNumbers(3)],
      oneValue: genNumbers(5)+1,
      twoValue: genNumbers(5)+1,
      rollTypeClue: ["11","1T"][genNumbers(2)],
      rollTypeQnSyn: ["isof","ofis"][genNumbers(2)],
      rollTypeQn1T: ["AB","BA"][genNumbers(2)],
      rollTypeQn11 : ["1T", "T1"][genNumbers(2)]
    }
  }

  if ( level == 4.25 ){
    return {
      squareOne: (genNumbers(10)+1)*10,
      squareTwo: (genNumbers(10)+1)*10,
      squareThree: (genNumbers(10)+1)*10,
      squareFour: (genNumbers(10)+1)*10,
      roll: [2,3,4][genNumbers(3)],
      length: undefined,
      question: ["perimeter","AB"][genNumbers(2)]
      
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

  if ( level == 5.03){
    return {
      numerator: genNumbers(10)+1,
      denominator:  [10, 100, 1000][genNumbers(3)],
      rollA: ["fraction", "decimal", "percentage"][genNumbers(3)],
      rollB: ["fraction","decimal","ratio"][genNumbers(3)],
      percentageDisplay: undefined
    }
  }

  if (level == 5.04){
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

  if (level == 5.05){
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

  if ( level == 5.06 ){
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

  if ( level == 5.07){
    return {
    roll: [3, 2, 1][genNumbers(3)],

    rightAngleTriX1 : -(genNumbers(4)+3)*15,
    rightAngleTriX2 : (genNumbers(4)+3)*20,
    rightAngleTriY : -(genNumbers(5)+2)*20,
    rightAngleRoll : [1, 2][genNumbers(2)],
    angleLabel: undefined,

    equiAngleTriX: (genNumbers(4)+3)*15,

    isosTriX: (genNumbers(4)+4)*12,
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

  if ( level == 5.08) {
    return {
      roll: ["corresponding","opposite"][genNumbers(2)],
      oppositeRotation: [genNumbers(120)+30],
      finalRotation: [genNumbers(180)-90],

      corrRoll: [4, 3, 2, 1][genNumbers(4)],
      correspondingTranslateY: (genNumbers(12)+8)*5,
      corrAngleDisplay: undefined
    }
  }

  if ( level == 5.09 ){
    return {
      roll: ["discount","increase","decrease"][genNumbers(3)],
      rollChange: [1, 2][genNumbers(2)],
      change: (genNumbers(10)+1),
      totalAmount: genNumbers(10)+10
    }
  }

  if ( level == 5.10 ){
    return {
      rollShape: ["trapezium", "rhombus","parallelogram"][genNumbers(3)],
      paraLength: (genNumbers(4)+8)*10,
      paraBreadth: (genNumbers(5)+5)*9,
      paraAngleD: undefined,
      paraRoll: [2, 1][genNumbers(2)],

      rhombusSide: (genNumbers(5)+5)*15,
      rhombusAngleD: undefined,
      rhombusRoll: [5, 4, 3, 2, 1][genNumbers(5)],

      trapLengthL: (genNumbers(4)+8)*10,
      trapLengthB: (genNumbers(4)+8)*10,
      trapTop: (genNumbers(4)+8)*10,
      trapAngleD: undefined,
      trapAngleD2: undefined,
      trapRoll: [2, 1][genNumbers(2)]

    }
  }

  if ( level == 5.11 ){
    return{
      rollType: ["decrease", "increase", "GST", "discount"][genNumbers(1)],
      rollType2: ["before", "after", "change"][genNumbers(3)],
      percentageOne: (genNumbers(9)+1)*10,
      valueOne: (genNumbers(900)+100),
      percentageTwo: genNumbers(2)+7
    }
  }

  if ( level == 5.12){
    return {
      roll: undefined,
      volume: undefined,
      pointA: (genNumbers(5)+1)*20,
      pointB: (genNumbers(5)+1)*20,
      pointC: (genNumbers(6)+5)*10,
      pointD: (genNumbers(6)+5)*10,
    }
  }

  if ( level == 5.13){
    return {
      rollAnswer: ["A","B"][genNumbers(2)],
      shadedArea: undefined,
      unshadedArea: undefined,
      rollShape: ["triangle", "rectangle","square"][genNumbers(3)],
      squareSide: (genNumbers(10)+5)*10,

      rectLength: (genNumbers(20)+10)*10,
      rectBreadth: (genNumbers(5)+5)*10,

      triBase: (genNumbers(20)+10)*10,
      triHeight: (genNumbers(5)+5)*10,
    }
  }

  if ( level == 5.14 ){
    return{
      roll: ["rectangle","updown","down","up"][genNumbers(4)],
      triX1: (genNumbers(5)+5)*20,

      triX2: (genNumbers(5)+5)*10,
      triY2: (genNumbers(5)+5)*15,

      triX2: (genNumbers(5)+5)*10,
      triY3: (genNumbers(5)+5)*5,

      rectL: (genNumbers(5)+5)*20,
      rectB: (genNumbers(5)+5)*15,
      rectO: (genNumbers(4)+1)*20,
      triA: undefined
    }
  }

  if ( level == 5.15 ){
    return {
     objectOne: ["A","B","C"][genNumbers(3)],
     objectTwo: ["X","Y","Z"][genNumbers(3)],
     objectOneV: (genNumbers(50)+1),
     objectTwoV: (genNumbers(50)+1),
     objectOneSF: undefined,
     objectTwoSF: undefined,
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
  if (level == 6.01){
    return{
      rollType: ["area", "circumference"][genNumbers(2)],
      rollRD: ["r","d"][genNumbers(2)],
      rollPi: ["3.14","22/7","π"][genNumbers(3)],
      radius: (genNumbers(5)+6)*9,

      rollType2: ["others", "quadrant", "semicircle"][genNumbers(1)],
      rollOthers: genNumbers(270)+45,
      arcAngle: undefined
    }
  }

  if ( level == 6.02 ){
    return {
      rotation: (genNumbers(7)*45),
      rollType: ["square2", "square","angle","radius","triangle"][genNumbers(5)],
      triangleSide: ((genNumbers(6)+5)*10),

      radius: ((genNumbers(4)+6)*10),
      squareSideD: undefined,
      radius2: (genNumbers(4)+2)*20,

      rollAngle: ["a","b"][genNumbers(2)],
      rotation2: genNumbers(90)+44,
      angleOther: undefined

    }
  }

  if (level == 6.03){
    return {
     rollOne: ["AN","NA","AA"][genNumbers(3)],
     rollTwo: genNumbers(9)+1,
     rollThree: genNumbers(5)+1,
     rollAlp: ["a","b","c","y","z","i"][genNumbers(6)],
     rollSym: ["x","÷","+","-",][genNumbers(4)],
     rollSymTwo: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 6.05){
    return {
      rollOne: ["t","s","d"][genNumbers(3)],
      roll: genNumbers(2),
      roll2: genNumbers(2)+1,
      rollUnits: [
        ["km", "h", "min"],
        ["m", "s", "min"]
      ],
      rollT: genNumbers(10)+5,
      rollS: genNumbers(10)+5,
      distance: undefined,
      identity: ["he","she"][genNumbers(2)]
    }
  }

  if (level == 6.06){
    return {
      roll: ["A","B","C"][genNumbers(3)],
      speedA: genNumbers(5)+2,
      timeA: genNumbers(5)+2,
      distanceA: genNumbers(5)+2,
      speedB: genNumbers(5)+2,
      timeB: genNumbers(5)+2,
      distanceB: genNumbers(5)+2,
      speedC: genNumbers(5)+2,
      timeC: genNumbers(5)+2,
      distanceC: genNumbers(5)+2,
      timeUnits: ["s","min","h"][genNumbers(3)],
      gender: ["he","she"][genNumbers(2)]
    }
  }

  if ( level == 6.07 ){
    return {
      roll: ["D","A","B","C"][genNumbers(4)],
      distance: undefined,
      speedA: genNumbers(5)+5,
      timeA: genNumbers(8)+2,
      speedB: genNumbers(5)+5,
      timeB: genNumbers(8)+2
    }
  }

  if (level == 7){
    return {
      numOne: genNumbers(10)-4,
      numTwo: genNumbers(11),
      operator: ["+","-"][genNumbers(2)]
    }  
  }


  // heuristics value
  if (level == "heuOne"){
    return{
      roll: 
      [
      ["more", "less", "ml"],
      ["greater","smaller", ""],
      ["taller", "shorter", "cm"],
      ["longer","shorter", "m"],
      ["heavier", "lighter", "kg"]
      ],
      rollPosition: genNumbers(5),
      rollAB: ["A","B"][genNumbers(2)],
      rollVar: [0, 1][genNumbers(2)],
      numOne: genNumbers(9)+1,
      numTwo: genNumbers(9)+1
    }
  }

  if (level == "heuTwo"){
    roll = genNumbers(3)+1
    if (isNaN(setting)){
      setting = 9
    }
    if (setting == 1 || setting == 9 && roll == 1 ){
      return{
        rollObject: ["tree", "lamppost", "fire hydrant"][genNumbers(3)],
        rollPositionTwoArr: ["4th", "5th","6th"],
        rollPositionOneArr: ["1st", "2nd","3rd"],
        positionOne: undefined,
        positionTwo: undefined,
        positionThree: undefined,
        positionFour: undefined,
        rollDistance: genNumbers(4)+2,
        indexOne: undefined,
        indexTwo: undefined,
        indexThree: undefined,
        indexFour: undefined,
        intervals: undefined,
        distance: undefined,
        roll: 1
      }
    }
    if (setting == 2 || setting == 9 && roll == 2 ){
      return {
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        numTwo: genNumbers(5)+5,
        numOne: undefined,
        roll: 2
      }
    }

    if (setting == 3 || setting == 9 && roll == 3 ){
      return {
        objectOne: ["B","C","D"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        difference: genNumbers(5)+5,
        roll: 3
      }
    }
  }

  if (level == "heuTwob"){
    return{
      roll: 
      [
      ["more", "less", "ml"],
      ["greater","smaller", ""],
      ["taller", "shorter", "cm"],
      ["longer","shorter", "m"],
      ["heavier", "lighter", "kg"]
      ],
      rollPosition: genNumbers(5),
      rollAB: ["A","B"][genNumbers(2)],
      rollVar: [0, 1][genNumbers(2)],
      numOne: genNumbers(9)+1,
      numTwo: genNumbers(9)+1
    }
  }

  if ( level == "heuThree"){
    let roll = genNumbers(7)+1
    if (isNaN(setting)){
      setting = 9
    }
    if (setting == 1 || (setting == 9 && roll == 1)){
        return {
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        numOne: (genNumbers(5)+1)*2,
        numTwo: (genNumbers(5)+1)*2,
        rollAnswer: genNumbers(2),
        roll: 1
      }
    }
    if (setting == 2 || (setting == 9 && roll == 2)){
      return {
        objects: [
          ["chickens", "dogs", "2", "4"],
          ["ducks", "spiders", "2", "8"],
          ["sheeps", "spiders", "4", "8" ],
          ["motorcycles", "tricycle", "2", "3"],
          ["bicycle", "cars", "2", "4"]  
        ],
        rollObj: genNumbers(4),
        numOne: (genNumbers(5)+1),
        numTwo: (genNumbers(5)+1),
        rollAnswer: genNumbers(2),
        difference: undefined,
        objectOne: undefined,
        objectTwo: undefined,
        legOne: undefined,
        legTwo: undefined,
        roll: 2,
        total: undefined,
        rollQn: ["A","B"][genNumbers(2)]
      }
    }
    if ( setting == 3 || (setting == 9 && roll == 3)){
      return{
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        multipler: genNumbers(3)+2,
        unitSentence: genNumbers(3)+2,
        objectOneX: genNumbers(4)+2,
        objectTwoX: genNumbers(4)+2,
        totalValue: undefined,
        rollQn: ["A","B"][genNumbers(2)],
        roll: 3
      }
    }
      if ( setting == 4 || (setting == 9 && roll == 4)){
        return{
          objectOne: ["A","B","C"][genNumbers(3)],
          objectTwo: ["X","Y","Z"][genNumbers(3)],
          objectOneQ: genNumbers(4)+2,
          objectTwoQ: genNumbers(4)+2,
          objectOneV: genNumbers(4)+2,
          objectTwoV: genNumbers(4)+2,
          totalValue: undefined,
          rollQn: ["A","B"][genNumbers(2)],
          roll: 4,
          difference: undefined
        }
      }

      if ( setting == 5 || setting == 9 && roll == 5){
        return {
          unitMeasurement: [ "kg", "g", "ml", "ℓ"][genNumbers(4)],
          objectOne: ["A","B","C"][genNumbers(3)],
          objectTwo: ["X","Y","Z"][genNumbers(3)],
          objectOneV: genNumbers(3)+2,
          objectTwoV: genNumbers(3)+2,
          total: undefined,
          rollQn: ["A","B"][genNumbers(2)],
          rollQn2: ["many","what","total"][genNumbers(3)],
          roll: 5
      
        }
      }

      if ( setting == 6 || setting == 9 && roll == 6){
        return{
          roll: 6,
          rollObject: genNumbers(4),
          objects:[
            ["car", "cars"],
            ["bus", "buses"],
            ["bottle", "bottles of water"],
            ["packet","packets"]
          ],
          objectV: undefined,
          total: genNumbers(30)+20,
          each: genNumbers(5)+5,
          rollQn: ["A","B"][genNumbers(2)]
        }
      }

      if ( setting == 7 || setting == 9 && roll == 7){
        return {
          roll: 7,
          objectOne: ["A","B","C"][genNumbers(3)],
          objectTwo: ["X","Y","Z"][genNumbers(3)],
          difference: (genNumbers(20)-10)*2,
          transfer: ["A","B"][genNumbers(2)],
          transferV: genNumbers(10)+1

        }
      }

  }

  if ( level == "heuThreeb"){
    let roll = genNumbers(1)+1
    if (isNaN(setting)){
      setting = 9
    }

    if (setting == 1 || setting == 9 && roll == 1){
      return {
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        unitSentence: genNumbers(4)+2,
        situationOne: genNumbers(100)-50,
        situationTwo: genNumbers(100)-50,
        // situationOne: genNumbers(50)-100,
        // situationTwo: genNumbers(50)-100,
        oneOrTwo: ["One","Two"][genNumbers(2)],
        firstOrEnd: ["at first","in the end"][genNumbers(2)]
      }
    }

    if ( setting == 2 || setting == 9 && roll == 2){
      return {
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        unitSentence: genNumbers(4)+2,
        situationOne: genNumbers(200)-100,
        situationTwo: genNumbers(200)-100,
        oneOrTwo: ["One","Two"][genNumbers(2)],
        firstOrEnd: ["at first", "at first","in the end"][genNumbers(1)]
      }
    }
  }

  if ( level == "heuFour"){
    let roll = genNumbers(6)+1

    if (isNaN(setting)){
      setting = 9
    }

    console.log("Setting is " + setting + " roll is " + roll)

    if (setting == 1 || (setting == 9 && roll == 1) ){
      return {
        roll: 1,
        objects: ["stationeries","cards","toys","games"][genNumbers(4)],
        label: ["he","she"][genNumbers(2)],
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        objectOneQ: genNumbers(4)+2,
        objectTwoQ: genNumbers(8)+2,
        price: genNumbers(5)+5,
        totalValue: (genNumbers(9)+1)*10,
        rollAnswer: genNumbers(2)+1,
        objectOneS: undefined,
        objectTwoS: undefined,
        rollType: ["A","B"][genNumbers(2)],
        rollQn: ["total","price"][genNumbers(2)]
      }
    }

    if (setting == 2 || (setting == 9 && roll == 2)){
      return {
        numberOfStudents: genNumbers(8)+2,
        numberOfStuff: genNumbers(20)+10,
        sceneOne: genNumbers(4)+1,
        sceneTwo: undefined,
        situationOne: undefined,
        situationTwo: undefined,
        rollAnswer: genNumbers(2)+1,
        roll: 2
      }
    }

      if (setting == 3 || (setting == 9 && roll == 3)){
        return {
          peopleAtFirst: genNumbers(8)+3,
          absentPeople: undefined,
          remainingPeople: undefined,
          giveUp: undefined,
          rollQn: ["A","B"][genNumbers(2)],
          roll: 3
        }
      }

      if (setting == 4 || (setting == 9 && roll == 4)){
        return{
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        objectThree: undefined,
        groupOne: genNumbers(20)+5,
        groupTwo: undefined,
        unitSentence: genNumbers(4)+2,
        roll: 4
        }
      }

      if ( setting == 5 || (setting == 9 && roll == 5)){
        return {
          unitMeasurement: [ "kg", "g", "ml", "ℓ"][genNumbers(4)],
          objectOne: ["A","B","C"][genNumbers(3)],
          objectTwo: ["X","Y","Z"][genNumbers(3)],
          objectOneV: genNumbers(3)+2,
          objectTwoV: genNumbers(3)+2,
          objectOneUnit: genNumbers(3)+1,
          objectTwoUnit: genNumbers(3)+1,
          total: undefined,
          rollQn: ["A","B"][genNumbers(2)],
          rollQn2: ["many","what","total"][genNumbers(3)],
          roll: 5
        }
      }

      if ( setting == 6 || (setting == 9 && roll == 6)){
        return {
          roll: 6,
          objectOne: ["A","B","C"][genNumbers(3)],
          objectTwo: ["X","Y","Z"][genNumbers(3)],
          objectTwoQ: genNumbers(3)+2,
          total: genNumbers(45)+5,
          rollQn: ["A","B"][genNumbers(2)]
        }
      }
  }

  if ( level == "heuFive"){
    let roll = genNumbers(4)+1
    if (isNaN(setting)){
      setting = 9
    }

    if (setting == 1 || setting == 9 && roll == 1){
      return {
        roll: 1,
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        quantityOne: genNumbers(10)+1,
        quantityTwo: genNumbers(10)+1,
        difference: genNumbers(10)-5,
        total: genNumbers(100)+50,
        choice: ["girls", "boys"][genNumbers(2)],
        adjustment: undefined,
        groupTotal: undefined,
        group: undefined
      }
    }

    if (setting == 2 || setting == 9 && roll == 2){
      return{
        roll: 2,
        marks: genNumbers(5)+2,
        deduct: genNumbers(5)+1,
        questions: (genNumbers(5)+1)*10,
        rightQ: undefined,
        total: undefined,
        choice: ["correct","wrong"][genNumbers(2)],
        allRight: undefined,
        bDifference: undefined,
        sDifference: undefined,
        wrong: undefined,
        correct: undefined
      }
    }

    if (setting == 3 || setting == 9 && roll == 3){
      return {
        roll: 3,
        objects: 
        [
          ["ducks","dogs","2","4","legs"],
          ["dogs","spiders","4","8", "legs"],
          ["3-legged stools", "4-legged chairs","3", "4", "legs"],
          ["motorcycles", "cars", "2", "4", "wheels"],
          ["birds","dragonflies","2","4","wings"]
        ],
        chosenOne: undefined,
        chosenOneQ: undefined,
        chosenOneN: genNumbers(9)+2,
        totalOne: undefined,
        chosenTwo: undefined,
        chosenTwoQ: undefined,
        chosenTwoN: genNumbers(9)+2,
        totalTwo: undefined,
        total: undefined,
        variableName: undefined,
        choice: genNumbers(2),
        difference: undefined
      }
    }

    if (setting == 4 || setting == 9 && roll == 4){
      return {
        roll: 4,
        objectOne: ["A","B","C"][genNumbers(3)],
        objectTwo: ["X","Y","Z"][genNumbers(3)],
        objectOneV: genNumbers(10)+2,
        objectTwoV: genNumbers(10)+2,
        sDifference: undefined,
        bDifference: undefined,
        choice: genNumbers(6)
      }
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

  for (let i = 0; i < heuristics.length; i++){
    heuristics[i].addEventListener("dblclick", function(){
      buttonLevel = this.innerHTML
      mulLevel = "nil"
  
      buttonLevelSetting();
      levelBox();
      document.querySelector(".input-box").classList.add('hidden');
      ourForm2.classList.remove('hidden');
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
        helpMe.style.fontSize = "1.5em"
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
        silver = highScore1DotZero4.time+((cutoff-highScore1DotZero.time4)/3)
        bronze = highScore1DotZero4.time+((cutoff-highScore1DotZero.time4)/3)*2
        highScoreName.innerHTML = highScore1DotZero4.name
        highScoreTime.innerHTML = highScore1DotZero4.time
        highScoreMistakes.innerHTML = highScore1DotZero4.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.innerHTML = `
        1 + 2 = 3 or 3 = 2 + 1</br>
        c ± d = r or r = c ± d</br>
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
        gold = highScore1DotZero6.time
        silver = highScore1DotZero6.time+((cutoff-highScore1DotZero6.time)/3)
        bronze = highScore1DotZero6.time+((cutoff-highScore1DotZero6.time)/3)*2
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
        gold = highScore2DotZero1.time
        silver = highScore2DotZero1.time+((cutoff-highScore2DotZero1.time)/3)
        bronze = highScore2DotZero1.time+((cutoff-highScore2DotZero1.time)/3)*2
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
        digit = prompt("How many digits?\n3. Primary 2\n4. Primary3\n5. Primary 4\n6. Primary 5\n7. Primary 6")
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

      case "Level 2.04":
        level = 2.04;
        scoreNeeded = 30;
        gold = highScore2DotZero4.time;
        silver = highScore2DotZero4.time+((cutoff-highScore2DotZero4.time)/3)
        bronze = highScore2DotZero4.time+((cutoff-highScore2DotZero4.time)/3)*2
        highScoreName.innerHTML = highScore2DotZero4.name
        highScoreTime.innerHTML = highScore2DotZero4.time
        highScoreMistakes.innerHTML = highScore2DotZero4.mistake
      break;
  
      case "Level 2.05":
        level = 2.05;
        scoreNeeded = 20;
        gold = highScore2DotZero5.time
        silver = highScore2DotZero5.time+((cutoff-highScore2DotZero5.time)/3)
        bronze = highScore2DotZero5.time+((cutoff-highScore2DotZero5.time)/3)*2
        digit = prompt("How many digits?\n3. Primary 2\n4. Primary 3\n5. Primary 4\n6. Primary 5\n7. Primary 6")
        arr = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9]
        highScoreName.innerHTML = highScore2DotZero5.name
        highScoreTime.innerHTML = highScore2DotZero5.time
        highScoreMistakes.innerHTML = highScore2DotZero5.mistake
        instructions.textContent = "Form the Number"
        displayProblem.style.fontSize = "25px";
        document.querySelector("#user-input").setAttribute("type","text");
      break;

      case "Level 2.06":
        level = 2.06;
        scoreNeeded = 20;
        gold = highScore2DotZero6.time
        silver = highScore2DotZero6.time+((cutoff-highScore2DotZero6.time)/3)
        bronze = highScore2DotZero6.time+((cutoff-highScore2DotZero6.time)/3)*2
        highScoreName.innerHTML = highScore2DotZero6.name
        highScoreTime.innerHTML = highScore2DotZero6.time
        highScoreMistakes.innerHTML = highScore2DotZero6.mistake
        displayProblem.style.fontSize = "25px";
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
        scoreNeeded = 10;
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
        scoreNeeded = 10;
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
        instructions.innerHTML = 
        `Lowest Common Multiple</br>
        5, 3, 2 => 15</br>
        5, 3, 5 => 5,15</br>
        `
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
          gold = highScore3DotZero10.time
          silver = highScore3DotZero10.time+((cutoff-highScore3DotZero10.time)/3)
          bronze = highScore3DotZero10.time+((cutoff-highScore3DotZero10.time)/3)*2
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
        instructions.textContent = "Take note of the repeated pattern and use it to find the position of the other pattern"
      break;

      case "Level 3.16":
        level = 3.16;
        scoreNeeded = 20;
        gold = highScore3DotZero16.time;
        silver = highScore3DotZero16.time+((cutoff-highScore3DotZero16.time)/3)
        bronze = highScore3DotZero16.time+((cutoff-highScore3DotZero16.time)/3)*2
        highScoreName.innerHTML = highScore3DotZero16.name
        highScoreTime.innerHTML = highScore3DotZero16.time
        highScoreMistakes.innerHTML = highScore3DotZero16.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        displayProblem.style.marginTop = "0";
        instructions.textContent = "Form an Equation using 'n' from the pattern and provide an answer"
      break;
  
      case "Level 3.17":
        level = 3.17;
        scoreNeeded = 20;
        gold = highScore3DotZero17.time;
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
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;
  
      case "Level 3.19":
        level = 3.19;
        scoreNeeded = 20;
        gold = highScore3DotZero19.time
        silver = highScore3DotZero19.time+((cutoff-highScore3DotZero19.time)/3)
        bronze = highScore3DotZero19.time+((cutoff-highScore3DotZero19.time)/3)*2
        highScoreName.innerHTML = highScore3DotZero19.name
        highScoreTime.innerHTML = highScore3DotZero19.time
        highScoreMistakes.innerHTML = highScore3DotZero19.mistake
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
        gold = highScore4DotZero6.time
        silver = highScore4DotZero6.time+((cutoff-highScore4DotZero6.time)/3)
        bronze = highScore4DotZero6.time+((cutoff-highScore4DotZero6.time)/3)*2
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
        scoreNeeded = 20;
        gold = highScore4DotZero11.time
        silver = highScore4DotZero11.time+((cutoff-highScore4DotZero11.time)/3)
        bronze = highScore4DotZero11.time+((cutoff-highScore4DotZero11.time)/3)*2
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
          scoreNeeded = 20;
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

      case "Level 4.20":
        level = 4.20;
        scoreNeeded = 10;
        gold = highScore4Dot2Zero.time;
        silver = highScore4Dot2Zero.time+((cutoff-highScore4Dot2Zero.time)/3)
        bronze = highScore4DotZero.time+((cutoff-highScore4Dot2Zero.time)/3)*2
        highScoreName.innerHTML = highScore4Dot2Zero.name
        highScoreTime.innerHTML = highScore4Dot2Zero.time
        highScoreMistakes.innerHTML = highScore4Dot2Zero.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;

      case "Level 4.21":
        difficulty = prompt("Enter 0, 1, 2, 3 or 4")
        level = 4.21;
        scoreNeeded = 10;
        gold = highScore4Dot21.time;
        silver = highScore4Dot21.time+((cutoff-highScore4Dot21.time)/3)
        bronze = highScore4Dot21.time+((cutoff-highScore4Dot21.time)/3)*2
        highScoreName.innerHTML = highScore4Dot21.name
        highScoreTime.innerHTML = highScore4Dot21.time
        highScoreMistakes.innerHTML = highScore4Dot21.mistake
        displayProblem.style.fontSize = "20px"
        document.querySelector("#user-input").setAttribute("type","text");
      break;
      
      case "Level 4.22":
        level = 4.22;
        scoreNeeded = 10;
        gold = highScore4DotZero22.time
        silver = highScore4DotZero22.time+((cutoff-highScore4DotZero22.time)/3)
        bronze = highScore4DotZero22.time+((cutoff-highScore4DotZero22.time)/3)*2
        highScoreName.innerHTML = highScore4DotZero22.name
        highScoreTime.innerHTML = highScore4DotZero22.time
        highScoreMistakes.innerHTML = highScore4DotZero22.mistake
        wholeNumberContainer.classList.add('hidden');
        fractionsContainerTwo.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.textContent = ""
      break;

      case "Level 4.23":
        level = 4.23;
        scoreNeeded = 20;
        arrayConvenient = [2,4,5,8,10,20,25,50,125];
        gold = highScore4DotZero23.time
        silver = highScore4DotZero23.time+((cutoff-highScore4DotZero23.time)/3)
        bronze = highScore4DotZero23.time+((cutoff-highScore4DotZero23.time)/3)*2
        highScoreName.innerHTML = highScore4DotZero23.name
        highScoreTime.innerHTML = highScore4DotZero23.time
        highScoreMistakes.innerHTML = highScore4DotZero23.mistake
        document.querySelector("#user-input").setAttribute("type","text");
      break;

      case "Level 4.24":
        level = 4.24;
        scoreNeeded = 20;
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        instructions.innerHTML =
        `
        Do not need to simplify.
        `
      break;

      case "Level 4.25":
        level = 4.25;
        scoreNeeded = 10;
        displayProblem.style.fontSize = "20px"
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;

      case "Level 5.0":
        level = 5.0;
        scoreNeeded = 20;
        gold = highScore5DotZero.time;
        silver = highScore5DotZero.time+((cutoff-highScore5DotZero.time)/3)
        bronze = highScore5DotZero.time+((cutoff-highScore5DotZero.time)/3)*2
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
        scoreNeeded = 20;
        gold = highScore5DotZero3.time;
        highScoreName.innerHTML = highScore5DotZero3.name
        highScoreTime.innerHTML = highScore5DotZero3.time
        highScoreMistakes.innerHTML = highScore5DotZero3.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        instructions.innerHTML = 
        `
        Calculate the results for decimals and leave the rest in equation form.
        `
      break;
      
      case "Level 5.04":
        level = 5.04;
        scoreNeeded = 10;
        gold = highScore5DotZero4.time;
        silver = highScore5DotZero4.time+((cutoff-highScore5DotZero4.time)/3)
        bronze = highScore5DotZero4.time+((cutoff-highScore5DotZero4.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero4.name
        highScoreTime.innerHTML = highScore5DotZero4.time
        highScoreMistakes.innerHTML = highScore5DotZero4.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
        instructions.innerHTML = "Form an equation using</br> multiplication of percentage </br> from/100 x end"
        userInput.style.width = "200px";
        break;    
      
      case "Level 5.05":
        level = 5.05;
        scoreNeeded = 10;
        gold = 79;
        highScoreName.innerHTML = highScore5DotZero5.name
        highScoreTime.innerHTML = highScore5DotZero5.time
        highScoreMistakes.innerHTML = highScore5DotZero5.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
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
        gold = highScore5DotZero8.time;
        silver = highScore5DotZero8.time+((cutoff-highScore5DotZero8.time)/3)
        bronze = highScore5DotZero8.time+((cutoff-highScore5DotZero8.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero8.name
        highScoreTime.innerHTML = highScore5DotZero8.time
        highScoreMistakes.innerHTML = highScore5DotZero8.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;
  
      case "Level 5.09":
        level = 5.09;
        scoreNeeded = 10;
        gold = highScore5DotZero9.time
        silver = highScore5DotZero9.time+((cutoff-highScore5DotZero9.time)/3)
        bronze = highScore5DotZero9.time+((cutoff-highScore5DotZero9.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero9.name
        highScoreTime.innerHTML = highScore5DotZero9.time
        highScoreMistakes.innerHTML = highScore5DotZero9.mistake
        instructions.innerHTML = 
        `
        discount/original x 100
        increase/original x 100
        decrease/original x 100
        `
        displayProblem.style.fontSize = "25px";
        document.querySelector("#user-input").setAttribute("type","text");
      break;

      case "Level 5.10":
        level = 5.10;
        scoreNeeded = 20;
        gold = highScore5DotZero10.time;
        silver = highScore5DotZero10.time+((cutoff-highScore5DotZero10.time)/3)
        bronze = highScore5DotZero10.time+((cutoff-highScore5DotZero10.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero10.name
        highScoreTime.innerHTML = highScore5DotZero10.time
        highScoreMistakes.innerHTML = highScore5DotZero10.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;

      case "Level 5.11":
        level = 5.11;
        scoreNeeded = 10;
        gold = highScore5DotZero11.time
        silver = highScore5DotZero11.time+((cutoff-highScore5DotZero11.time)/3)
        bronze = highScore5DotZero11.time+((cutoff-highScore5DotZero11.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero11.name
        highScoreTime.innerHTML = highScore5DotZero11.time
        highScoreMistakes.innerHTML = highScore5DotZero11.mistake
        instructions.innerHTML = 
        `
        Calculate the value via percentage
        `
        displayProblem.style.fontSize = "25px";
        document.querySelector("#user-input").setAttribute("type","text");
      break;

      case "Level 5.12":
        difficulty = prompt("Difficulty: Enter 0, 1, 2 or 3")
        console.log(difficulty);
        level = 5.12;
        scoreNeeded = 10;
        gold = highScore5DotZero12.time;
        silver = highScore5DotZero12.time+((cutoff-highScore5DotZero12.time)/3)
        bronze = highScore5DotZero12.time+((cutoff-highScore5DotZero12.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero12.name
        highScoreTime.innerHTML = highScore5DotZero12.time
        highScoreMistakes.innerHTML = highScore5DotZero12.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
        instructions.innerHTML = 
        `
        Length x Breadth x Height = Volume
        L x B x H = V
        `
      break;

      case "Level 5.13":
        level = 5.13;
        scoreNeeded = 10;
        gold = highScore5DotZero13.time;
        silver = highScore5DotZero13.time+((cutoff-highScore5DotZero13.time)/3)
        bronze = highScore5DotZero13.time+((cutoff-highScore5DotZero13.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero13.name
        highScoreTime.innerHTML = highScore5DotZero13.time
        highScoreMistakes.innerHTML = highScore5DotZero13.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;

      case "Level 5.14":
        level = 5.14;
        scoreNeeded = 10;
        gold = highScore5DotZero14.time;
        silver = highScore5DotZero14.time+((cutoff-highScore5DotZero14.time)/3)
        bronze = highScore5DotZero14.time+((cutoff-highScore5DotZero14.time)/3)*2
        highScoreName.innerHTML = highScore5DotZero14.name
        highScoreTime.innerHTML = highScore5DotZero14.time
        highScoreMistakes.innerHTML = highScore5DotZero14.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
      break;

      case "Level 5.15":
        level = 5.15;
        scoreNeeded = 10;
        // gold = highScore5DotZero14.time;
        // silver = highScore5DotZero14.time+((cutoff-highScore5DotZero14.time)/3)
        // bronze = highScore5DotZero14.time+((cutoff-highScore5DotZero14.time)/3)*2
        // highScoreName.innerHTML = highScore5DotZero14.name
        // highScoreTime.innerHTML = highScore5DotZero14.time
        // highScoreMistakes.innerHTML = highScore5DotZero14.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        document.querySelector("#user-input").style.width = "300px"
      break;

      case "Level 6.0":
        level = 6.0;
        scoreNeeded = 10;
        gold = highScore6DotZero.time;
        silver = highScore6DotZero.time+((cutoff-highScore6DotZero.time)/3)
        bronze = highScore6DotZero.time+((cutoff-highScore6DotZero.time)/3)*2
        highScoreName.innerHTML = highScore6DotZero.name
        highScoreTime.innerHTML = highScore6DotZero.time
        highScoreMistakes.innerHTML = highScore6DotZero.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
      break;
  
      case "Level 6.01":
        difficulty = prompt("Enter 0 or 1")
        console.log(difficulty);
        level = 6.01;
        if (difficulty == 1){
          scoreNeeded = 10
        } else {
          scoreNeeded = 20;
        }
        gold = highScore6DotZero1.time;
        silver = highScore6DotZero1.time+((cutoff-highScore6DotZero1.time)/3)
        bronze = highScore6DotZero1.time+((cutoff-highScore6DotZero1.time)/3)*2
        highScoreName.innerHTML = highScore6DotZero1.name
        highScoreTime.innerHTML = highScore6DotZero1.time
        highScoreMistakes.innerHTML = highScore6DotZero1.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
        instructions.innerHTML = 
        `
        Area of Circle<br>
        π x r x r</br>
        Circumference of Circle</br>
        2 x π x r OR π x d
        `
      break;

      case "Level 6.02":
        // difficulty = prompt("Enter 0 or 1")
        // console.log(difficulty);
        level = 6.02;
        scoreNeeded = 20;
        gold = highScore6DotZero2.time;
        silver = highScore6DotZero2.time+((cutoff-highScore6DotZero2.time)/3)
        bronze = highScore6DotZero2.time+((cutoff-highScore6DotZero2.time)/3)*2
        highScoreName.innerHTML = highScore6DotZero2.name
        highScoreTime.innerHTML = highScore6DotZero2.time
        highScoreMistakes.innerHTML = highScore6DotZero2.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        wholeNumberContainer.classList.add('hidden');
        firstCanvas.classList.remove('hidden');
        // instructions.innerHTML = 
        // `
        // Area of Circle<br>
        // π x r x r</br>
        // Circumference of Circle</br>
        // 2 x π x r OR π x d
        // `
      break;

      case "Level 6.03":
        level = 6.03;
        scoreNeeded = 20;
        gold = highScore6DotZero3.time;
        silver = highScore6DotZero3.time+((cutoff-highScore6DotZero3.time)/3)
        bronze = highScore6DotZero3.time+((cutoff-highScore6DotZero3.time)/3)*2
        highScoreName.innerHTML = highScore6DotZero3.name
        highScoreTime.innerHTML = highScore6DotZero3.time
        highScoreMistakes.innerHTML = highScore6DotZero3.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "25px";
      break;

      case "Level 6.05":
        level = 6.05;
        scoreNeeded = 20;
        gold = highScore6DotZero5.time;
        silver = highScore6DotZero5.time+((cutoff-highScore6DotZero5.time)/3)
        bronze = highScore6DotZero5.time+((cutoff-highScore6DotZero5.time)/3)*2
        highScoreName.innerHTML = highScore6DotZero5.name
        highScoreTime.innerHTML = highScore6DotZero5.time
        highScoreMistakes.innerHTML = highScore6DotZero5.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "20px";
        instructions.innerHTML = 
        `
        Distance = Speed x Time
        `
      break;
      
      case "Level 6.06":
        level = 6.06;
        scoreNeeded = 10;
        gold = highScore6DotZero6.time;
        silver = highScore6DotZero6.time+((cutoff-highScore6DotZero6.time)/3)
        bronze = highScore6DotZero6.time+((cutoff-highScore6DotZero6.time)/3)*2
        highScoreName.innerHTML = highScore6DotZero6.name
        highScoreTime.innerHTML = highScore6DotZero6.time
        highScoreMistakes.innerHTML = highScore6DotZero6.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "18px";
        instructions.innerHTML = 
        `
        Average Speed of Whole Journey = Total Distance/Total Time
        `
      break;

      case "Level 6.07":
        level = 6.07;
        scoreNeeded = 10;
        gold = highScore6DotZero7.time;
        silver = highScore6DotZero7.time+((cutoff-highScore6DotZero7.time)/3)
        bronze = highScore6DotZero7.time+((cutoff-highScore6DotZero7.time)/3)*2
        highScoreName.innerHTML = highScore6DotZero7.name
        highScoreTime.innerHTML = highScore6DotZero7.time
        highScoreMistakes.innerHTML = highScore6DotZero7.mistake
        document.querySelector("#user-input").setAttribute("type","text");
        displayProblem.style.fontSize = "18px";
        instructions.innerHTML = 
        `
        Meet Up =</br> (Distance / Total Speed)</br> or</br> (Left over Distance / Total Speed)
        `
      break;

      case "Level 7":
        level = 7;
        scoreNeeded = 30;
        break;
  
        // heuristics settings

      case "Heu.1":
        level = "heuOne"
        setting = prompt("What level?\n1.More than / less than")
        scoreNeeded = 10;
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        gold = heuOne.time;
        silver = heuOne.time+((cutoff-heuOne.time)/3)
        bronze = heuOne.time+((cutoff-heuOne.time)/3)*2
        highScoreName.innerHTML = heuOne.name
        highScoreTime.innerHTML = heuOne.time
      break

      case "Heu.2":
        setting =  parseInt(prompt("What level?\n1. Parts and Interval\n2. Internal Transfer (Same)\n3. Internal Transfer ( Same reverse )\n\n9.All"))
        level = "heuTwo"
        scoreNeeded = 10;
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        document.querySelector("#user-input").setAttribute("type","text");
        document.querySelector("#user-input").style.width = "300px"
      break

      case "Heu.2b":
        setting =  parseInt(prompt("What level?\n1. Comparison Model\n\n9.All"))
        level = "heuTwob"
        scoreNeeded = 2;
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        document.querySelector("#user-input").setAttribute("type","text");
        document.querySelector("#user-input").style.width = "300px"
      break

      case "Heu.3":
        setting = parseInt(prompt("What level?\n1. Sum and Difference\n2. Supposition\n3. Under the same unit ( Unit )\n4. Under the same unit ( Difference )\n5. Equal Grouping\n6. Round up/down\n7. Double Effect\n\n9. All"))
        level = "heuThree"
        scoreNeeded = 10;
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        document.querySelector("#user-input").setAttribute("type","text");
        document.querySelector("#user-input").style.width = "300px"
      break

      case "Heu.3b":
        setting = parseInt(prompt("What level?\n1. Equal Beginning\n2. Equal End\n\n9. All"))
        level = "heuThreeb"
        scoreNeeded = 2;
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        document.querySelector("#user-input").setAttribute("type","text");
        document.querySelector("#user-input").style.width = "300px"
      break

      case "Heu.4":
        level = "heuFour"
        setting = parseInt(prompt("What level?\n1. Excess and Shortage ( Type 1 )\n2. Excess and Shortage ( Type 2 )\n3. Origin\n4.Repeated Identity ( Type 2 )\n5. Uneven Grouping\n6. Grouping Rows\n\n9. All"))
        scoreNeeded = 10;
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        document.querySelector("#user-input").setAttribute("type","text");
      break

      case "Heu.5":
        level = "heuFive"
        setting = parseInt(prompt("What level?\n1. Grouping with Difference\n2. Supposition (Negative)\n3. Supposition negative ( Difference)\n4.Identical Quantity with Difference\n\n9. All"))
        scoreNeeded = 10;
        displayProblem.style.fontSize = "18px";
        displayProblem.style.textAlign = "left";
        document.querySelector("#user-input").setAttribute("type","text");
      break

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

  reviewAnswer.addEventListener('click', function(){
    if (confirm("Are you sure? Your score will drop to 0.")){
      if (document.querySelector(".input-box").classList.contains('hidden')){
        userInput2.focus()
        userInput2.value = state.correctAnswer
      } else {
        userInput.focus()
        userInput.value = state.correctAnswer
      }
      state.score = 0
      currentScore.textContent = state.score
      reviewAnswer.classList.add("hidden")
      reviewCount = 0;
    }
  })