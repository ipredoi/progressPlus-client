function setSound(obj) {
  let myScore = (obj.passedtests / obj.totaltests) * 100;
  let mySound = "";
  if (myScore === 100) {
    mySound = "../sound05_perfect.mp3";
  } else if (myScore < 100 && myScore >= 70) {
    mySound = "../sound04_sweet.mp3";
  } else if (myScore < 70 && myScore >= 50) {
    mySound = "../sound03_nice.mp3";
  } else if (myScore < 50 && myScore >= 20) {
    mySound = "../sound02_cool.mp3";
  } else {
    mySound = "../sound01_makesense.mp3";
  }
  return mySound;
}

export { setSound };
