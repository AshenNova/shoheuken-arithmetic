let currentScore = 0;
let n1 = Math.floor(Math.random()*10+1)
let n2 = Math.floor(Math.random()*10+1)

document.getElementById("box1text"). value = n1;
document.getElementById("box2text"). value = n2;

let answer = n1 + n2;

function Game(){
  const user = document.getElementById("anstext").value

  if (user == answer){
    currentScore += 1
    document.getElementById("current-score").innerHTML = currentScore
  } else {
    document.getElementById("current-score").innerHTML = "Incorrect ):"
  }
document.getElementById("anstext").value = ""

n1 = Math.floor(Math.random()*10+1)
n2 = Math.floor(Math.random()*10+1)

document.getElementById("box1text"). value = n1;
document.getElementById("box2text"). value = n2;

answer = n1 + n2;
}
