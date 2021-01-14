function setBarBgColorArr(array) {
  let barBgColorArr = [];
  array.map((e, i) => {
    if (e >= 90) {
      barBgColorArr[i] = 'rgba(0, 109, 50, 0.8)';
    } else if (e < 10) {
      barBgColorArr[i] = 'rgba(110, 20, 35,0.8)';
    } else if (e >= 10 && e < 20) {
      barBgColorArr[i] = 'rgba(161, 29, 51,0.8)';
    } else if (e >= 20 && e < 30) {
      barBgColorArr[i] = 'rgba(218, 30, 55,0.8)';
    } else if (e >= 30 && e < 40) {
      barBgColorArr[i] = 'rgba(224, 63, 55,0.8)';
    } else if (e >= 40 && e < 50) {
      barBgColorArr[i] = 'rgba(191, 210, 0,0.8)';
    } else if (e >= 50 && e < 60) {
      barBgColorArr[i] = 'rgba(170, 204, 0,0.8)';
    } else if (e >= 60 && e < 70) {
      barBgColorArr[i] = 'rgba(128, 185, 24,0.8)';
    } else if (e >= 70 && e < 80) {
      barBgColorArr[i] = 'rgba(85, 166, 48,0.8)';
    } else {
      barBgColorArr[i] = 'rgba(11, 138, 72,0.8)';
    }
  });
  return barBgColorArr;
}

function setBarBorColorArr(array) {
  let barBorColorArr = [];
  array.map((e, i) => {
    if (e >= 90) {
      barBorColorArr[i] = 'rgba(0, 109, 50, 1)';
    } else if (e < 10) {
      barBorColorArr[i] = 'rgba(110, 20, 35,1)';
    } else if (e >= 10 && e < 20) {
      barBorColorArr[i] = 'rgba(161, 29, 51,1)';
    } else if (e >= 20 && e < 30) {
      barBorColorArr[i] = 'rgba(218, 30, 55,1)';
    } else if (e >= 30 && e < 40) {
      barBorColorArr[i] = 'rgba(224, 63, 55,1)';
    } else if (e >= 40 && e < 50) {
      barBorColorArr[i] = 'rgba(191, 210, 0,1)';
    } else if (e >= 50 && e < 60) {
      barBorColorArr[i] = 'rgba(170, 204, 0,1)';
    } else if (e >= 60 && e < 70) {
      barBorColorArr[i] = 'rgba(128, 185, 24,1)';
    } else if (e >= 70 && e < 80) {
      barBorColorArr[i] = 'rgba(85, 166, 48,1)';
    } else {
      barBorColorArr[i] = 'rgba(11, 138, 72,1)';
    }
  });
  return barBorColorArr;
}

// set icons array for mastery task graph
function setIconArr(array) {
  let iconArr = [];
  array.map((elem, i) => {
    if (elem !== null && isNaN(elem) === true) {
      iconArr[i] = {
        src: `/icons/${elem}.png`,
        width: 25,
        height: 25,
      };
    } else {
      iconArr[i] = null;
    }
  });
  return iconArr;
}

export { setBarBgColorArr, setBarBorColorArr, setIconArr };
