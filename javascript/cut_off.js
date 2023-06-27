export function cutOffCheck(level, setting, time) {
  console.log("Cut off timing activated!");
  console.log(time);
  let push = "No";

  // CALCULATIONS
  if (level == "calFour") {
    if (setting == 1 || setting == 2 || setting == 3) {
      if (time > 60) {
        push = "Yes";
      }
    } else {
      if (time > 120) {
        push = "Yes";
      }
    }
  }

  // HEURISTICS
  if (level == "heuThree") {
    if (time > 180) {
      push = "Yes";
    }
  }
  if (level == "heuFour") {
    if (time > 180) {
      push = "Yes";
    }
  }

  //CONCLUSION
  if (push == "Yes") {
    console.log("Do better");
    return setting;
  }
}
