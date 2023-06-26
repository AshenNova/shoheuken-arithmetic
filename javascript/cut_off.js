export function cutOffCheck(level, setting, time) {
  console.log("Cut off timing activated!");
  console.log(time);
  if (level == "calFour") {
    if (time > 120) {
      console.log("Do better");
      return setting;
    }
  }
}
