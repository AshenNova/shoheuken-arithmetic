import { updateProblems, genNumbers } from "./script.js";

const resultSide = (plusLimit, multiMini, multiMax) => {
  const symbol = ["+", "-", "*", "/"][genNumbers(4)];
  let numOne;
  let numTwo;
  let statementArr = [];
  if (symbol == "+") {
    plusLimit /= 2;
    numOne = genNumbers(plusLimit) + plusLimit / 5;
    numTwo = genNumbers(plusLimit) + plusLimit / 5;
  }
  if (symbol == "-") {
    // plusLimit /= 2;
    numOne = genNumbers(plusLimit * 0.8) + plusLimit / 5;
    numTwo = genNumbers(numOne);
    console.log(numOne, numTwo);
  }
  if (symbol == "*") {
    // plusLimit /= 2;
    numOne = genNumbers(plusLimit / multiMax);
    numTwo = genNumbers(multiMax - multiMini) + multiMini;
    console.log(numOne, numTwo);
    if (numOne == 0) {
      return "Error";
    }
  }
  if (symbol == "/") {
    // plusLimit /= 2;
    numOne = genNumbers(plusLimit);
    numTwo = genNumbers(multiMax - multiMini) + multiMini;
    while (numOne % numTwo != 0) {
      numTwo -= 1;
      if (numTwo < multiMini) {
        console.log("Divisor is too small");
        return "Error";
      }
    }
  }
  statementArr.push(numOne, symbol, numTwo);
  const result = eval(statementArr.join(""));
  if (result > plusLimit) {
    console.log("Exceeded limit");
    return "Error";
  }
  if (statementArr.includes("*")) {
    const index = statementArr.indexOf("*");
    statementArr.splice(index, 1, "x");
  }
  if (statementArr.includes("/")) {
    const index = statementArr.indexOf("/");
    statementArr.splice(index, 1, "÷");
  }
  return {
    statementArr: statementArr.join(" "),
    result,
  };
};

const blankSide = (results, plusLimit, multiMini, multiMax) => {
  let symbol = ["+", "-", "x", "/"][genNumbers(4)];
  const blank = ["A", "B"][genNumbers(1)];
  let statementArr = [];
  let num;
  let answer;

  if (blank == "A") {
    // ____ +-x/ "Number"
    statementArr.push("___");
    if (symbol == "+") {
      num = genNumbers(results - 1) + 1;
      statementArr.push("+");
      answer = results - num;
    }
    if (symbol == "-") {
      num = genNumbers(results - 1) + 1;
      statementArr.push("-");
      answer = results + num;
      if (answer < 0) return "Error";
    }

    if (symbol == "x") {
      num = genNumbers(multiMax - multiMini) + multiMini;
      statementArr.push("x");
      answer = results / num;
      console.log(num);
      while (results % num != 0) {
        // console.log("Down the rabbit hole");
        num -= 1;
        // console.log(`Changing divisor: ${num}`);
        answer = results / num;
        if (num < multiMini) {
          console.log("Updating");
          return "Error";
        }
      }
    }
    if (symbol == "/") {
      symbol = "÷";
      num = genNumbers(multiMax - multiMini) + multiMini;
      statementArr.push("÷");
      answer = results * num;
    }
    statementArr.push(num);
  }
  if (blank == "B") {
    //"Number" +-x/ _____
    if (symbol == "+") {
      num = genNumbers(results);
      // statementArr.push("+");
      answer = results - num;
    }
    if (symbol == "-") {
      num = genNumbers(plusLimit - results) + results;
      // statementArr.push("-");
      answer = num - results;
      if (answer < 0) return "Error";
    }

    if (symbol == "x") {
      num = genNumbers(multiMax - multiMini) + multiMini;
      // statementArr.push("x");
      answer = results / num;
      console.log(num);
      while (results % num != 0) {
        // console.log("Down the rabbit hole");
        num -= 1;
        // console.log(`Changing divisor: ${num}`);
        answer = results / num;
        if (num < multiMini) {
          console.log("Updating");
          return "Error";
        }
      }
    }
    if (symbol == "/") {
      // console.log("No division");
      // return "Error";
      num = genNumbers(multiMax - multiMini) + multiMini;
      statementArr.push("÷");
      answer = results * num;
    }
    statementArr.push(num, symbol, "_____");
  }
  if (answer > plusLimit) {
    console.log("Exceeded limit");
    return "Error";
  }
  return {
    statementArr: statementArr.join(" "),
    answer,
  };
};

const permutationAnswer = (inputAnswer, actualAnswer) => {
  console.log(typeof inputAnswer, typeof actualAnswer);
  let input = inputAnswer.toString().trim().split("");
  let answer = actualAnswer.toString().trim().split("");
  while (input.includes(" ")) {
    let index = input.indexOf(" ");
    input.splice(index, 1);
  }
  // while (answer.includes("\n")) {
  //   let index = answer.indexOf("\n");
  //   answer.splice(index, 1);
  // }
  console.log(input);
  console.log(answer);
  for (let i = 0; i < input.length; i++) {
    if (answer.includes(input[i])) {
      const index = answer.indexOf(input[i]);
      answer.splice(index, 1);
      console.log(answer);
    } else {
      return "From permutation: Incorrect";
    }
  }
  if (answer.length == 0) {
    return "From permutation: Correct";
  }
};

const simplestForm = (array) => {
  // let newArray = array;
  let sorting = [...array];
  sorting.sort(function (a, b) {
    return b - a;
  });
  for (let i = 2; i <= sorting[0]; i++) {
    const check = (item) => item % i == 0;
    let divisible = sorting.every(check);
    console.log(divisible);
    while (divisible) {
      // console.log(`Is the entire array divisble?: ${divisible}`);
      console.log("SIMPLIFIED!");
      sorting = sorting.map((x) => x / i);
      array = array.map((x) => x / i);
      // array.forEach((x) => {
      //   x /= i;
      // });
      console.log(sorting, array);
      divisible = sorting.every(check);
    }
  }
  return array;
};
const day12Hours = (hours) => {
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 0 && hours < 12) {
    console.log("Nothing happens");
  }
  if (hours > 12 && hours < 24) {
    hours -= 12;
  }
  if (hours == 24) {
    hours -= 12;
  }
  if (hours > 24) {
    hours -= 24;
  }
  return hours;
};

const zoneOfDay = (minutes) => {
  let zone = "am";
  // am is 0 < 720
  // pm is 720 to < 1440
  if (minutes < 720) {
    zone = "am";
  }
  if (minutes >= 720 && minutes < 1440) {
    zone = "pm";
  }
  if (minutes > 1440 && minutes < 2160) {
    zone = "am";
  }
  console.log(`12 hour format: ${zone}`);
  return zone;
};

const reverseCalculation = (method, numerator, denominator, value) => {
  // Using the opposite numerator
  if (method == 0) {
    const newValue = (value / (denominator - numerator)) * denominator;
    return newValue;
  }
  // Using the current numerator
  if (method == 1) {
    const newValue = (value / numerator) * denominator;
    return newValue;
  }
};

const simplifyThree = (first, second, third) => {
  let sortArr = [first, second, third];
  sortArr.sort(function (a, b) {
    return b - a;
  });
  const max = sortArr[0];
  const min = sortArr[sortArr.length - 1];
  for (let i = min; i <= max; i++) {
    if (i == 1) i += 1;
    while (first % i == 0 && second % i == 0 && third % i == 0) {
      console.log(min, max);
      first /= i;
      second /= i;
      third /= i;
    }
  }
  return [first, second, third];
};

function swap(first, second) {
  return ([first, second] = [second, first]);
}

function decimalCheck(decimal) {
  let str = decimal.toString();
  console.log(str.length);
  if (decimal.length > 10) {
    console.log("Recurring decimal detected: " + str);
    return updateCalc();
  }
}

function accDecimal(decimal) {
  return Math.round(decimal * 10000) / 10000;
}

function simplify(first, second) {
  console.log("Simplifying fractions");
  let max = first;
  if (first < second) max = second;
  for (let i = 2; i <= max; i++) {
    while (first % i == 0 && second % i == 0) {
      first /= i;
      second /= i;
    }
  }
  return [first, second];
}

function commonDeno(first, second) {
  console.log("Finding common denominator");
  let max = first;
  let min = second;
  if (second > first) [max, min] = [second, first];
  let count = 1;
  let common = [min, max];
  let temp = max;
  while (temp % min != 0) {
    temp += max;
    count += 1;
    common.push(temp);
    console.log(common);
  }
  return common[common.length - 1];
}

function commonFactors(first, second) {
  let max = first;
  let min = second;
  let arr = [];
  if (second > first) [max, min] = [second, first];
  for (let i = 1; i <= min; i++) {
    if (min % i == 0 && max % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

function genUniqNum(max) {
  let valueArr = [];
  const unique = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < max; i++) {
    let position = genNumbers(unique.length);
    if (valueArr.length == 0 && position == 0) {
      position += 1;
    }
    valueArr.push(unique[position]);
    unique.splice(position, 1);
    console.log(unique);
  }
  const value = valueArr.join("");
  return value;
}

// End of updateProblems()
const updateCalc = function (skipGlobalUpdateProblem) {
  // skipGlobalUpdateProblem = 1; // Skip global
  console.log(
    `Updating! skipGlobalUpdateProblem set to ${skipGlobalUpdateProblem}`
  );
  updateProblems();
  // return skipGlobalUpdateProblem;
};

export {
  swap,
  decimalCheck,
  accDecimal,
  simplify,
  commonDeno,
  commonFactors,
  genUniqNum,
  // updateCalc,
  reverseCalculation,
  simplifyThree,
  zoneOfDay,
  day12Hours,
  permutationAnswer,
  resultSide,
  blankSide,
  simplestForm,
};
