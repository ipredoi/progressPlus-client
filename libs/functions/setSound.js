function setSound(obj) {
  let myScore = (obj.passedtests / obj.totaltests) * 100;
  let mySound = '';
  if (myScore >= 70) {
    mySound = '../sound04_sweet.mp3';
  } else if (myScore < 70 && myScore > 40) {
    mySound = '../sound03_nice.mp3';
  } else if (myScore <= 40) {
    mySound = '../sound01_makesense.mp3';
  }
  return mySound;
}

export { setSound };
