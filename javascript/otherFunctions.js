import { updateProblems, genNumbers } from "./script.js";

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
  for (let i = 2; i < max; i++) {
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
  skipGlobalUpdateProblem = 1; // Skip global
  console.log("UPDATING!");
  updateProblems();
};

export {
  swap,
  decimalCheck,
  accDecimal,
  simplify,
  commonDeno,
  commonFactors,
  genUniqNum,
  updateCalc,
  reverseCalculation,
  simplifyThree,
};
