const instructions = document.querySelector(".instructions")
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

const imageG = document.createElement('img');
const imageS = document.createElement('img');
const imageB = document.createElement('img');
const imageNMP = document.createElement('img');
imageG.src = 'images/endgame/gold.jpeg'
imageS.src = 'images/endgame/silver.jpeg'
imageB.src = 'images/endgame/bronze.jpeg'
imageNMP.src = 'images/endgame/needmorepractice.jpeg'

const levelSetting = document.querySelector('.level-setting');
const levelLabel = document.querySelector('.level-label');

const level1 = document.querySelector('.level1');
const level1dot1 = document.querySelector('.level1Dot1');
const level1dot2 = document.querySelector('.level1Dot2'); 
const level1dot3 = document.querySelector('.level1Dot3');
const level1dot4 = document.querySelector('.level1Dot4');
const level1dot5 = document.querySelector('.level1Dot5');
const level1dot6 = document.querySelector('.level1Dot6');

const level2 = document.querySelector('.level2');
const level2dot1 = document.querySelector('.level2Dot1');
const level2dot3 = document.querySelector('.level2Dot3');

const level3 = document.querySelector('.level3');
const level3dot1 = document.querySelector('.level3Dot1');
const level3dot2 = document.querySelector('.level3Dot2');
const level3dot3 = document.querySelector('.level3Dot3');
const level3dot4 = document.querySelector('.level3Dot4');
const level3dot5 = document.querySelector('.level3Dot5');
const level3dot6 = document.querySelector('.level3Dot6');
const level3dot7 = document.querySelector('.level3Dot7');
const level3dot9 = document.querySelector('.level3dot9');
const level3dot10 = document.querySelector('.level3dot10');
const level3dot11 = document.querySelector('.level3dot11');

const level4 = document.querySelector('.level4');
const level4dot1 = document.querySelector('.level4Dot1');
const level4dot3 = document.querySelector('.level4Dot3');
const level4dot4 = document.querySelector('.level4Dot4');
const level4dot5 = document.querySelector('.level4Dot5');
const level4dot6 = document.querySelector('.level4Dot6');
const level4dot7 = document.querySelector('.level4Dot7');
const level4dot8 = document.querySelector('.level4Dot8');
const level4dot9 = document.querySelector('.level4Dot9');
const level4dot10 = document.querySelector('.level4Dot10');
const level4dot11 = document.querySelector('.level4Dot11');

const level5dot1 = document.querySelector('.level5Dot1');
const level5dot2 = document.querySelector('.level5Dot2');
const level5dot3 = document.querySelector('.level5Dot3');
const level6dot3 = document.querySelector('.level6Dot3');
const level7 = document.querySelector('.level7');

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

let level = 0;
let player = 1;
let arr = [];
let gold = 0;
let silver = 0
let bronze = 0
const commonMultipleArr = [];
const commonMultipleArrTwo = [];


function HighScore(name, date, time, mistake) {
  this.name = name
  this.date = date
  this.time = time
  this.mistake = mistake
}

const highScore1 = new HighScore("Jayden Cheong", "16 October 2021", 140, 1)
const highScore1dot1 = new HighScore("Jayden Cheong", "16 October 2021", 823, 12)
const highScore1dot2 = new HighScore("Nil", "16 October 2021", 0, 0)
const highScore1dot3 = new HighScore("Nil", "16 October 2021", 0, 0)
const highScore1dot4 = new HighScore("Nil", "Nil", 0, 0)
const highScore1dot5 = new HighScore("Nil", "Nil", 0, 0)
const highScore1dot6 = new HighScore("Nil", "Nil", 0, 0)
const highScore2 = new HighScore("Nil", "16 October 2021", 0, 0)
const highScore2dot1 = new HighScore("JingKai Ng", "16 October 2021", 823, 24)
const highScore2dot3 = new HighScore("Jingkai Ng", "30 October 2021", 853, 23)
const highScore2dot4 = new HighScore("Nil", "Nil", 0, 0)
const highScore3 = new HighScore("Shanice Lee", "30 October 2021", 614, 7)
const highScore3dot1 = new HighScore("Shanice Lee", "30 October 2021", 162, 5)
const highScore3dot2 = new HighScore("Nil", "Nil", 0, 0)
const highScore3dot3 = new HighScore("Shanice Lee", "6 November 2021", 662, 4)
const highScore3dot4 = new HighScore("Nil", "Nil", 0, 0)
const highScore3dot5 = new HighScore("Nil", "Nil", 0, 0)
const highScore3dot6 = new HighScore("Nil", "Nil", 0, 0)
const highScore3dot7 = new HighScore("Nil", "Nil", 0, 0)
const highScore3dot9 = new HighScore("Nil", "Nil", 0, 0)
const highScore3dot10 = new HighScore("Nil", "Nil", 0, 0)
const highScore3dot11 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot1 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot3 = new HighScore("Jadee Wong", "10 December 2021", 460, 2)
const highScore4dot4 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot5 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot6 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot7 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot8 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot9 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot10 = new HighScore("Nil", "Nil", 0, 0)
const highScore4dot11 = new HighScore("Nil", "Nil", 0, 0)
const highScore5dot1 = new HighScore("Nil", "Nil", 0, 0)
const highScore5dot2 = new HighScore("Nil", "Nil", 0, 0)
const highScore5dot3 = new HighScore("Nil", "Nil", 0, 0)
const highScore6dot3 = new HighScore("Yixin", "29 September 2021", 366, 8)


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

if (state.score >= scoreNeeded){
  clearInterval(countDownTwo);
  document.getElementById('timer').innerHTML = time;
  starto.classList.remove('hidden');
  finalText.innerHTML = time;
  finalBox.classList.remove('hidden');
  if (time < gold){
    document.querySelector('.trophy').appendChild(imageG)
  }
  else if (time < silver){
    document.querySelector('.trophy').appendChild(imageS)
  }
  else if (time < bronze){
    document.querySelector('.trophy').appendChild(imageB)
  } else {
    document.querySelector('.trophy').appendChild(imageNMP)
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
  secondUnitMeasurement.textContent = ""
  instructions.textContent = ""
  document.querySelector("#user-input").setAttribute("type","number");
  document.querySelector("#user-input").setAttribute("step","1");
  multiplesSettingCl.classList.add('hidden');
  displayProblem.style.fontSize = "50px";
  userInput.style.width = "175px";
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

// Step 3: Updating, storing and then displaying the problem
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
  if (level == 1.2){
    if (p.numOne <= 9) p.operator = "+"
    if (p.numOne > 9) p.operator = "-"
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}` 
  }

  if (level == 1.3){
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

  if (level == 1.4 ){
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

  if (level == 1.5 ){
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

  if ( level == 1.6) {
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

  if (level == 2.4){
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

  if (level == 2.3 || level == 3.3 || level == 4.3 || level == 6.3){
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
  if ( level == 3.2 ){
    if (p.option == "1"){
      displayProblem.textContent = `${p.numOne} x ${p.numMulti} = `
    }
    if (p.option == "2"){
      displayProblem.textContent = `${p.numOne} ${p.numPlace} = `
    }
    if (p.option == "3"){
      displayProblem.textContent = `${p.numOne*p.numMulti} ÷ ${p.numMulti} = `
    }
    if (p.option == "4"){
      if (p.numPlace == "tens"){
      displayProblem.textContent = `${p.numOne*10} = _____ ${p.numPlace}`
      }
      if (p.numPlace == "hundreds"){
        displayProblem.textContent = `${p.numOne*100} = _____ ${p.numPlace}`
      }
      if (p.numPlace == "thousands"){
        displayProblem.textContent = `${p.numOne*1000} = _____ ${p.numPlace}`
      }
    }
  }

  if (level == 3.4){
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

  if (level == 3.5){
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

  if (level == 3.6){
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

  if (level == 3.7){
    if (p.numOne == p.numTwo && p.numTwo == p.numThree) {
      p.numOne = p.numOne+1;
    }
    arr.push(p.numOne, p.numTwo, p.numThree);
    displayProblem.innerHTML = `${p.numOne} , ${p.numTwo} , ${p.numThree}`
  }

  if ( level == 3.9 ){
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

  if ( level == 3.101){
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
  if ( level == "4.1" ){
    if (p.value == "thousands" && p.numOne > 1000){
      p.numOne = p.numOne + 1000;
    }
    if (p.value == "ten thousands" && p.numOne > 10000){
      p.numOne = p.numOne + 10000;
    }
    displayProblem.innerHTML = `${p.numOne} ≈ `
    helpMe.textContent = `${p.placeValue}`
  }

  if (level == 4.4){
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

  if ( level == 4.5){
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

  if ( level == 4.6){
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

  if ( level == 4.7){
    // level 4.5
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
    // level 4.6
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


  if (level == 4.8) {
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

  if ( level == 4.9){
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

  if ( level == "4.10" ){
    // level 4.8
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
    // level 4.10
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

  if ( level == 4.11){
    // fake - fake
    if (p.numOne == p.numTwo){
      p.numTwo += 1
    }
    if (p.numOne > p.numTwo ){
      [p.numOne, p.numTwo] = [p.numTwo, p.numOne]
    }
    if (p.numThree == p.numFour){
      p.numTwo += 1
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

  if ( level == 5.1){
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

  if ( level == 5.2){
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
  if ( level == 5.3){
    for (let i = p.numTwo; i > 1; i--){
      if(p.numOne%i == 0 && p.numTwo%i == 0){
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    if (p.letterChange == "of" && p.letterChangeTwo == "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}/${p.numTwo} of ${p.letterBTotal}.</br>
      ${p.numThree}% ${p.letterChange} A was removed.</br>
      ${p.numFour}% ${p.letterChangeTwo} B was removed.</br>
      What is ${p.letterAB} in the end?`
    }
    if (p.letterChange == "of" && p.letterChangeTwo != "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}/${p.numTwo} of ${p.letterBTotal}.</br>
      ${p.numThree}% ${p.letterChange} A was removed.</br>
      B ${p.letterChangeTwo} by ${p.numFour}%.</br>
      What is ${p.letterAB} in the end?`
    }
    if (p.letterChange != "of" && p.letterChangeTwo == "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}/${p.numTwo} of ${p.letterBTotal}.</br>
      A ${p.letterChange} by ${p.numThree}%.</br>
      ${p.numFour}% ${p.letterChangeTwo} B was removed.</br>
      What is ${p.letterAB} in the end?`
    }
    if (p.letterChange != "of" && p.letterChangeTwo != "of"){
      displayProblem.innerHTML = 
      `A is ${p.numOne}/${p.numTwo} of ${p.letterBTotal}.</br>
      A ${p.letterChange} by ${p.numThree}%.</br>
      B ${p.letterChangeTwo} by ${p.numFour}%.</br>
      What is ${p.letterAB} in the end?`
    }
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

      if (level == 1.2){
        if (p.operator == "+") {
          correctAnswer = p.numOne + p.numTwo
        };
        if (p.operator == "-") {
          correctAnswer = p.numOne - p.numTwo
        };
      }

      if (level == 1.1 || level == 2.1 || level == 3.1){
        if (p.operator == "x") correctAnswer = p.numThree * p.numFour
        if (p.operator == "÷") correctAnswer = (p.numThree*p.numFour)/p.numThree
      }

      if (level == 1.3){
        if (p.operator == "+") {
          correctAnswer = p.numOne + p.numTwo
        };
        if (p.operator == "-") {
          correctAnswer = p.numOne - p.numTwo
        };
        if (p.operator == "x") correctAnswer = p.numThree * p.numFour
        if (p.operator == "÷") correctAnswer = (p.numThree*p.numFour)/p.numThree
      }


      if ( level == 1.4){
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

      if ( level == 1.5){
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

      if (level == 1.6){
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

      if (level == 2.4){
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
      if ( level == 3.2 ){
        if (p.option == "1"){
         correctAnswer = p.numOne*p.numMulti
        }
        if (p.option == "2"){
          if (p.numPlace == "tens"){
            correctAnswer = p.numOne*10
          }
          if (p.numPlace == "hundreds"){
            correctAnswer = p.numOne*100
          }
          if (p.numPlace == "thousands"){
            correctAnswer = p.numOne*1000
          }
        }
        if (p.option == "3" || p.option == "4"){
          correctAnswer = p.numOne
        }
      }

      if (level == 3.3 || level == 2.3 || level == 4.3 || level == 6.3){
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

      if ( level == 3.4){
        correctAnswer = p.numOne * p.numTwo
      }

      if ( level == 3.5){
        if ( p.unitMeasurement == "kg" || p.unitMeasurement == "ℓ" || p.unitMeasurement == "km"){
          correctAnswer = (p.numOne*p.numTwo)+p.numFour
        } else {
          correctAnswer = (p.numOne*p.numTwo)+p.numThree
        }
      }

      if (level == 3.6){
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

      if ( level == 3.7){
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
        correctAnswer = commonMultipleArrTwo[commonMultipleArrTwo.length-1];
      }

      if ( level == 3.9){
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

      if ( level == 3.101){
        if (p.option == "1"){
          correctAnswer = p.numTwo*p.numMulti
        } else {
          correctAnswer = p.numOne*p.numMulti
        }
      }

      if ( level == 3.11){
        // level 3.9
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
      if ( level == "4.1"){
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

      if ( level == 4.4 ){
        if (p.operator == "x"){
          correctAnswer = Math.round(p.numOne/p.numTwo*p.numThree*10000)/10000
        } else {
          correctAnswer = Math.round(p.numOne/p.numTwo/p.numThree*10000)/10000
        }
      }

      if ( level == 4.5 ){
        if (p.unitMeasurement == "m" || p.unitMeasurement == "$"){
          correctAnswer = Math.round(p.numOne*100+p.numThree)
        }
        if (p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" ||  p.unitMeasurement == "km" ){
          correctAnswer = Math.round(p.numOne*1000+p.numTwo)
        }
      }

      if ( level == 4.6 ){
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
      if ( level == 4.7){
        // level 4.5
        if (p.optionFinal == "1"){
          if (p.unitMeasurement == "m" || p.unitMeasurement == "$"){
            correctAnswer = Math.round(p.numOne*100+p.numThree)
          }
          if (p.unitMeasurement == "ℓ" || p.unitMeasurement == "kg" ||  p.unitMeasurement == "km" ){
            correctAnswer = Math.round(p.numOne*1000+p.numTwo)
          }
        }
        // level 4.6
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
      if (level == 4.8){
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

      if ( level == 4.9 ){
        for (let i = p.numTwo; i > 1; i--){
          if ((p.numTwo % i == 0 ) && (p.numThree % i == 0)){
            p.numTwo /= i;
            p.numThree /= i;
          }
        }
        correctAnswer = p.numOne + " " + p.numTwo%p.numThree + "/" + p.numThree
      }

      if ( level == "4.10" ){
        // level 4.8
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
          // level 4.9
          for (let i = p.numTwo; i > 1; i--){
            if ((p.numTwo % i == 0 ) && (p.numThree % i == 0)){
              p.numTwo /= i;
              p.numThree /= i;
            }
          }
          correctAnswer = p.numOne + " " + p.numTwo%p.numThree + "/" + p.numThree
        }
      }

      if ( level == 4.11 ){
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

      if ( level == 5.1 ){
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

      if ( level == 5.2 ){
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
      if ( level == 5.3 ){
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
        updateProblems()
        console.log("new questions generated")
      
      } else {
        console.log("incorrect")
        state.mistake++
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
        currentScore.textContent = state.score
        currentMistake.textContent = state.mistake
        currentMistake.classList.add("animate-wrong")
        setTimeout(() => currentMistake.classList.remove("animate-wrong"), 331)
        mainContainer.classList.add("animate-wrong-container")
        setTimeout(() => mainContainer.classList.remove("animate-wrong-container"), 331)
        userInput.value = ""
      }
    
  }
}

// Step 1: generate number
function genNumbers(max){
  return Math.floor(Math.random()*max)
}

// Step 2: Generate Problem
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
      numOne: genNumbers(10)+5,
      numTwo: genNumbers(4)+5,
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 1.3){
    return {
      numOne: genNumbers(10)+5,
      numTwo: genNumbers(4)+5,
      numThree: genNumbers(5)+1,
      numFour: genNumbers(4)+1,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 1.4){
    return {
      numOne: genNumbers(99)+1,
      numTwo: genNumbers(99)+1,
      numThree: genNumbers(99)+1,
      option: ["c","d","r"][genNumbers(3)],
      optionTwo: ["1","2"][genNumbers(2)],
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 1.5){
    return {
      numOne: genNumbers(99)+1,
      numTwo: genNumbers(99)+1,
      numThree: genNumbers(99)+1,
      option: ["c","d","r"][genNumbers(3)],
      optionTwo: ["1","2"][genNumbers(2)],
      optionThree: ["more","less"][genNumbers(2)]
    }
  }

  if (level == 1.6){
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

  if (level == 2){
    return {
      numOne: genNumbers(40)+10,
      numTwo: genNumbers(40)+10,
      operator: ["+","-"][genNumbers(2)]
    }
  }

  if (level == 2.1){
    return {
      numThree: genNumbers(5)+1,
      numFour: genNumbers(5)+5,
      operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 2.3){
    return {
      numOne: genNumbers(40)+10,
      numTwo: genNumbers(40)+10,
      numThree: genNumbers(5)+1,
      numFour: genNumbers(5)+5,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 2.4){
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
      numOne: genNumbers(97)+2,
      numMulti: [10, 100, 100][genNumbers(3)],
      numPlace: ["tens","hundreds","thousands"][genNumbers(3)],
      operator: ["x","÷"][genNumbers(2)],
      option: ["1","2","3","4"][genNumbers(4)]
    }
  }

  if (level == 3.3){
    return {
      numOne: genNumbers(150)+100,
      numTwo: genNumbers(150)+100,
      numThree: genNumbers(6)+5,
      numFour: genNumbers(6)+5,
      operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 3.4){
    return {
      numOne: genNumbers(10)+1,
      numTwo: 1000,
      unitMeasurement: ["min","$","m","kg","km","ℓ"][genNumbers(6)],
      secondUnitMeasurement: 0
    }
  }

  if (level == 3.5){
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

  if (level == 3.6){
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

  if (level == 3.7){
    return {
      numOne: genNumbers(5)+1,
      numTwo: genNumbers(4)+2,
      numThree: genNumbers(5)+1,
    }
  }

  if (level == 3.9){
    return {
      numOne: genNumbers(9)+1,
      numTwo: genNumbers(9)+2,
      numMulti: genNumbers(6)+2,
      numLargest: 0
    }
  }

  if (level == 3.101 ){
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

  if (level == "4.1"){
    return {
    numOne: genNumbers(99998)+100,
    placeValue: ["tens","hundreds","thousands","ten thousands"][genNumbers(4)]
    }
  }

  if (level == 4.3){
    return {
    numOne: genNumbers(150)+100,
    numTwo: genNumbers(150)+100,
    numThree: genNumbers(6)+5,
    numFour: genNumbers(6)+5,
    operator: ["+","-","x","÷"][genNumbers(4)]
    }
  }

  if (level == 4.4){
    return {
    numOne: genNumbers(999)+1,
    numTwo: [1,10,100][genNumbers(3)],
    numThree: [10,100,1000][genNumbers(3)],
    operator: ["x","÷"][genNumbers(2)]
    }
  }

  if (level == 4.5){
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

  if (level == 4.6){
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

  if (level == 4.7){
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

  if (level == 4.8){
    return {
    numOne: genNumbers(9)+1,
    numTwo: genNumbers(9)+2,
    numThree: genNumbers(10)+2,
    numFour: 0
    }
  }

  if (level == 4.9){
    return {
    numOne: genNumbers(9)+1,
    numTwo: genNumbers(9)+2,
    numThree: genNumbers(10)+2,
    numFour: 0
    }
  }

  if (level == "4.10"){
    return {
    numOne: genNumbers(9)+1,
    numTwo: genNumbers(9)+2,
    numThree: genNumbers(10)+2,
    numFour: 0,
    option: ["1","2"][genNumbers(2)]
    }
  }

  if (level == 4.11){
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

  if (level == 5.1){
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

  if (level == 5.2){
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

  if (level == 5.3){
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
      letterAB: ["A","B"][genNumbers(2)]
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

for (let i = 0; i <  settingButton.length; i++){

  settingButton[i].addEventListener("click", function(){
    buttonLevel = this.innerHTML
    mulLevel = "nil"

  switch (buttonLevel) {
    case "Level 1":
      level = 1;
      scoreNeeded = 50;
      gold = 100;
      silver = 120;
      bronze = 140;
      highScoreName.innerHTML = highScore1.name
      highScoreTime.innerHTML = highScore1.time
      highScoreMistakes.innerHTML = highScore1.mistake
      break;

    case "Level 1.1":
      level = 1.1;
      scoreNeeded = 50;
      gold = 100;
      silver = 110;
      bronze = 120;
      highScoreName.innerHTML = highScore1dot1.name
      highScoreTime.innerHTML = highScore1dot1.time
      highScoreMistakes.innerHTML = highScore1dot1.mistake
      break;

    case "Level 1.2":
      level = 1.2;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore1dot2.name
      highScoreTime.innerHTML = highScore1dot2.time
      highScoreMistakes.innerHTML = highScore1dot2.mistake
      break;

    case "Level 1.3":
      level = 1.3;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore1dot3.name
      highScoreTime.innerHTML = highScore1dot3.time
      highScoreMistakes.innerHTML = highScore1dot3.mistake
      break;
    
    case "Level 1.4":
      level = 1.4;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore1dot4.name
      highScoreTime.innerHTML = highScore1dot4.time
      highScoreMistakes.innerHTML = highScore1dot5.mistake
      document.querySelector("#user-input").setAttribute("type","text");
      instructions.innerHTML = `
      1 + 2 = 3</br>
      c ± d = r </br>
      Use: 'c+', 'c-', 'd-', 'r+' or 'r-' `
      break;

    case "Level 1.5":
      level = 1.5;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore1dot5.name
      highScoreTime.innerHTML = highScore1dot5.time
      highScoreMistakes.innerHTML = highScore1dot5.mistake
      document.querySelector("#user-input").setAttribute("type","text");
      instructions.innerHTML = "Answer using</br> 'c+', 'c-', 'd-', 'r+' or 'r-' "
      break;

    case "Level 1.6":
      level = 1.6;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore1dot6.name
      highScoreTime.innerHTML = highScore1dot6.time
      highScoreMistakes.innerHTML = highScore1dot5.mistake
      instructions.textContent = ""
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
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore2dot1.name
      highScoreTime.innerHTML = highScore2dot1.time
      highScoreMistakes.innerHTML = highScore2dot1.mistake
      break;

    case "Level 2.3":
      level = 2.3;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore2dot3.name
      highScoreTime.innerHTML = highScore2dot3.time
      highScoreMistakes.innerHTML = highScore2dot3.mistake
      break;

    case "Level 2.4":
      level = 2.4;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore2dot4.name
      highScoreTime.innerHTML = highScore2dot4.time
      highScoreMistakes.innerHTML = highScore2dot4.mistake
      wholeNumberContainer.classList.add('hidden');
      fractionsContainer.classList.remove('hidden');
      instructions.textContent = "Answer using '1' or '2' only"
      break;

    case "Level 3":
      level = 3;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3.name
      highScoreTime.innerHTML = highScore3.time
      highScoreMistakes.innerHTML = highScore3.mistake
      break;

    case "Level 3.1":
      level = 3.1;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot1.name
      highScoreTime.innerHTML = highScore3dot1.time
      highScoreMistakes.innerHTML = highScore3dot1.mistake
      break;
    
    case "Level 3.2":
      level = 3.2;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot2.name
      highScoreTime.innerHTML = highScore3dot2.time
      highScoreMistakes.innerHTML = highScore3dot2.mistake
      break;
        
    case "Level 3.3":
      level = 3.3;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot3.name
      highScoreTime.innerHTML = highScore3dot3.time
      highScoreMistakes.innerHTML = highScore3dot3.mistake
      break;

    case "Level 3.4":
      level = 3.4;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot4.name
      highScoreTime.innerHTML = highScore3dot4.time
      highScoreMistakes.innerHTML = highScore3dot4.mistake
      break;

    case "Level 3.5":
      level = 3.5;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot5.name
      highScoreTime.innerHTML = highScore3dot5.time
      highScoreMistakes.innerHTML = highScore3dot5.mistake
      break;

    case "Level 3.6":
      level = 3.6;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot6.name
      highScoreTime.innerHTML = highScore3dot6.time
      highScoreMistakes.innerHTML = highScore3dot6.mistake
      document.querySelector("#user-input").setAttribute("type","text");
      instructions.innerHTML = 
      `Do not leave any spaces.</br>
      Answer using capital 'L' and 'ml' for volume`
      break;

    case "Level 3.7":
      level = 3.7;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot7.name
      highScoreTime.innerHTML = highScore3dot7.time
      highScoreMistakes.innerHTML = highScore3dot7.mistake
      instructions.textContent = "Find the Lowest Common Multiple of the 3 numbers"
      break;

    case "Level 3.9":
      level = 3.9;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot9.name
      highScoreTime.innerHTML = highScore3dot9.time
      highScoreMistakes.innerHTML = highScore3dot9.mistake
      wholeNumberContainer.classList.add('hidden');
      fractionsContainerTwo.classList.remove('hidden');
      document.querySelector("#user-input").setAttribute("type","text");
      instructions.textContent = "Formate: 2/3"
      break;

    case "Level 3.10":
        level = 3.101;
        scoreNeeded = 30;
        highScoreName.innerHTML = highScore3dot10.name
        highScoreTime.innerHTML = highScore3dot10.time
        highScoreMistakes.innerHTML = highScore3dot10.mistake
        wholeNumberContainer.classList.add('hidden');
        fractionsContainerTwo.classList.remove('hidden');
        document.querySelector("#user-input").setAttribute("type","text");
        instructions.textContent = ""
        break;
    
    case "Level 3.11":
      level = 3.11;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3dot11.name
      highScoreTime.innerHTML = highScore3dot11.time
      highScoreMistakes.innerHTML = highScore3dot11.mistake
      wholeNumberContainer.classList.add('hidden');
      fractionsContainerTwo.classList.remove('hidden');
      document.querySelector("#user-input").setAttribute("type","text");
      instructions.textContent = ""
      break;      
    
    case "Level 4.1":
      level = "4.1";
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot1.name
      highScoreTime.innerHTML = highScore4dot1.time
      highScoreMistakes.innerHTML = highScore4dot1.mistake
      break;  

    case "Level 4.3":
      level = 4.3;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot3.name
      highScoreTime.innerHTML = highScore4dot3.time
      highScoreMistakes.innerHTML = highScore4dot3.mistake
      break;

    case "Level 4.4":
      level = 4.4;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot4.name
      highScoreTime.innerHTML = highScore4dot4.time
      highScoreMistakes.innerHTML = highScore4dot4.mistake
      document.querySelector("#user-input").setAttribute("step","0.000001")
      break;  

    case "Level 4.5":
      level = 4.5;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot5.name
      highScoreTime.innerHTML = highScore4dot5.time
      highScoreMistakes.innerHTML = highScore4dot5.mistake
      document.querySelector("#user-input").setAttribute("step","0.000001")
      break;
     
    case "Level 4.6":
      level = 4.6;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot6.name
      highScoreTime.innerHTML = highScore4dot6.time
      highScoreMistakes.innerHTML = highScore4dot6.mistake
      document.querySelector("#user-input").setAttribute("step","0.000001")
      break;

    case "Level 4.7":
      level = 4.7;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot7.name
      highScoreTime.innerHTML = highScore4dot7.time
      highScoreMistakes.innerHTML = highScore4dot7.mistake
      document.querySelector("#user-input").setAttribute("step","0.000001")
      break;  

    case "Level 4.8":
      level = 4.8;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot8.name
      highScoreTime.innerHTML = highScore4dot8.time
      highScoreMistakes.innerHTML = highScore4dot8.mistake
      wholeNumberContainer.classList.add('hidden');
      fractionsContainerTwo.classList.remove('hidden');
      document.querySelector("#user-input").setAttribute("type","text");
      instructions.textContent = "Format: 9/2"
      break;

    case "Level 4.9":
      level = 4.9;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot9.name
      highScoreTime.innerHTML = highScore4dot9.time
      highScoreMistakes.innerHTML = highScore4dot9.mistake
      wholeNumberContainer.classList.add('hidden');
      fractionsContainerTwo.classList.remove('hidden');
      document.querySelector("#user-input").setAttribute("type","text");
      instructions.textContent = "Format: 2 4/5"
      break;

    case "Level 4.10":
      level = "4.10";
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore4dot10.name
      highScoreTime.innerHTML = highScore4dot10.time
      highScoreMistakes.innerHTML = highScore4dot10.mistake
      wholeNumberContainer.classList.add('hidden');
      fractionsContainerTwo.classList.remove('hidden');
      document.querySelector("#user-input").setAttribute("type","text");
      instructions.textContent = ""
      break;

    case "Level 4.11":
      level = 4.11;
      scoreNeeded = 20;
      highScoreName.innerHTML = highScore4dot11.name
      highScoreTime.innerHTML = highScore4dot11.time
      highScoreMistakes.innerHTML = highScore4dot11.mistake
      document.querySelector("#user-input").setAttribute("type","text");
      document.querySelector("#user-input").style.width = "250px"
      displayProblem.style.fontSize = "25px";
      instructions.innerHTML = 
      `Form a multiplication equation using Fractions</br>
      f-f , r+r , vxr</br>
      fxr , fxv</br>
      `

      break;
    
    case "Level 5.1":
      level = 5.1;
      scoreNeeded = 10;
      highScoreName.innerHTML = highScore5dot1.name
      highScoreTime.innerHTML = highScore5dot1.time
      highScoreMistakes.innerHTML = highScore5dot1.mistake
      document.querySelector("#user-input").setAttribute("type","text");
      displayProblem.style.fontSize = "25px";
      instructions.innerHTML = "Form an equation using</br> multiplication of fraction </br> RC = from x want"
      break;    
    
    case "Level 5.2":
      level = 5.2;
      scoreNeeded = 10;
      highScoreName.innerHTML = highScore5dot2.name
      highScoreTime.innerHTML = highScore5dot2.time
      highScoreMistakes.innerHTML = highScore5dot2.mistake
      document.querySelector("#user-input").setAttribute("type","text");
      displayProblem.style.fontSize = "25px";
      instructions.innerHTML = "Form an equation using</br> multiplication of percentage </br> from/100 x end"
      userInput.style.width = "200px";
      break;    
    
    case "Level 5.3":
      level = 5.3;
      scoreNeeded = 10;
      highScoreName.innerHTML = highScore5dot3.name
      highScoreTime.innerHTML = highScore5dot3.time
      highScoreMistakes.innerHTML = highScore5dot3.mistake
      document.querySelector("#user-input").setAttribute("type","text");
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 6.3":
      level = 6.3;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore6dot3.name
      highScoreTime.innerHTML = highScore6dot3.time
      highScoreMistakes.innerHTML = highScore6dot3.mistake
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

    levelBox();
    });
  }